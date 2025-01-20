import { NextFunction, Request, Response, Router } from 'express';
import { JwtUserDto } from '../entities/types/user.dto';
import { User } from '../entities/User';
import { AuthService } from '../services/AuthService';
import { LoginCredentialsDto } from '../entities/types/auth.dto';

// --------------------------------------------------------------

export class AuthController {
    private readonly authService;
    public readonly authRouter;
    private readonly jwt = require('jsonwebtoken');
    private readonly authMiddleware = require('../middleware/authMiddleware');

    constructor() {
        this.authRouter = Router();
        this.authService = new AuthService();

        this.authRouter.post('/register', this.register.bind(this));
        this.authRouter.post('/login', this.login.bind(this));
        this.authRouter.get('/logout', this.authMiddleware, this.logout.bind(this));
        this.authRouter.get('/refresh-token', this.refreshToken.bind(this));
        this.authRouter.get('/check', this.checkIsAuthenticated.bind(this));
    }

    private async register(req: Request, res: Response, next: NextFunction) {
        try {
            const userData: User = req.body;
            const user = await this.authService.register(userData);

            // after creating user from registration process, log him in
            const authData = { email: userData.email, password: userData.password };
            const { accessToken, refreshToken } = await this.authService.login(authData);

            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // maxAge is in milliseconds, so it is 1 day
            res.status(201).json({ message: 'User created', accessToken, user });
        } catch (error) {
            next(error);
        }
    }

    private async login(req: Request, res: Response, next: NextFunction) {
        try {
            const userAuthData: LoginCredentialsDto = req.body;
            const { user, accessToken, refreshToken } = await this.authService.login(userAuthData);

            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // maxAge is in milliseconds, so it is 1 day
            res.status(200).json({ user, accessToken });
        } catch (error) {
            next(error);
        }
    }

    private logout(req: Request, res: Response, next: NextFunction) {
        try {
            // TODO na frontu izbrisat accessToken
            const cookies = req.cookies;
            if (!cookies?.jwt) {
                res.sendStatus(204);
                return;
            }

            res.clearCookie('jwt', { httpOnly: true });
            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }

    private refreshToken(req: Request, res: Response, next: NextFunction) {
        try {
            const cookies = req.cookies;
            if (!cookies?.jwt) {
                res.sendStatus(401);
                return;
            }

            const refreshToken = cookies.jwt;

            // TODO na frontu spremit accessToken
            this.jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET,
                (err: Error, decoded: JwtUserDto) => {
                    if (err) {
                        return res.sendStatus(403);
                    }
                    const accessToken = this.jwt.sign({
                        id: decoded.id,
                        role_id: decoded.role_id,
                    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
                    res.json({ accessToken });
                }
            );
        } catch (error) {
            next(error);
        }
    }

    private checkIsAuthenticated(req: Request, res: Response, next: NextFunction) {
        try {
            const authHeader = req.headers['authorization'];

            if (!authHeader) {
                res.sendStatus(401);

                return;
            }

            const token = authHeader?.split(' ')[1];

            this.jwt.verify(
                token,
                process.env.ACCESS_TOKEN_SECRET,
                async (err: Error, decoded: JwtUserDto) => {
                    if (err) {
                        return res.sendStatus(401);
                    }

                    req.user = decoded;

                    const userId = decoded.id;
                    const user = await this.authService.checkIsAuthenticated(userId);

                    res.json({ user });
                },
            );
        } catch (error) {
            next(error);
        }
    }
}
