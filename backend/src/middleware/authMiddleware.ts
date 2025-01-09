import { Request, Response, NextFunction } from 'express';
import { JwtUserDto } from '../entities/types/user.dto';

// --------------------------------------------------------------

const jwt = require('jsonwebtoken');

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader)
        return res.sendStatus(401);

    const token = authHeader?.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err: Error, decoded: JwtUserDto) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = decoded;
            next();
        },
    );
}

module.exports = authMiddleware;
