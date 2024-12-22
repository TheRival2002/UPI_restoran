import { Request, Response, Router } from 'express';
import { AuthService } from '../services/AuthService';

// --------------------------------------------------------------

export class AuthController {
    private readonly authService;
    public readonly authRouter;

    constructor() {
        this.authRouter = Router();
        this.authService = new AuthService();

        this.authRouter.post('/register', this.register.bind(this));
        this.authRouter.post('/login', this.login.bind(this));
    }

    private async register(req: Request, res: Response) {
        try {
            const { name, surname, username, email, password, role_id } = req.body; // TODO validacija podataka
            const user = await this.authService.register(name, surname, username, email, password, role_id);

            res.status(201).json({ message: 'User created', user });
        } catch (error) {
            res.status(500).json({error: (error as Error).message});
        }
    }

    private async login(req: Request, res: Response) {
        try {
            const { password, username, email } = req.body; // TODO validacija podataka
            const { accessToken, refreshToken } = await this.authService.login(password, username, email);

            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // maxAge is in milliseconds, so it is 1 day
            res.status(200).json({ accessToken });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}