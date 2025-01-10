import { NextFunction, Request, Response } from 'express';
import { RoleEnum } from '../entities/enums/RolesEnum';

// --------------------------------------------------------------

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.user && req.user.role_id === RoleEnum.ADMIN) {
        next();
        return;
    }

    return res.status(403).json({ error: 'Access denied' });
}

module.exports = adminMiddleware;
