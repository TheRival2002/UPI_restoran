import { Request, Response, NextFunction } from 'express';

// --------------------------------------------------------------

const jwt = require('jsonwebtoken');

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401);
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err: Error, decoded: { username: string }) => {
            if (err) {
                return res.status(403);
            }

            req.user = decoded.username;
            next();
        },
    );
}

module.exports = authMiddleware;