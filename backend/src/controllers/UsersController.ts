import { Router, Response, Request, NextFunction } from 'express';
import { UsersService } from '../services/UsersService';

// --------------------------------------------------------------------------------

export class UsersController {
    private readonly usersService;
    public readonly usersRouter;
    private readonly authMiddleware = require('../middleware/authMiddleware');

    constructor() {
        this.usersRouter = Router();
        this.usersService = new UsersService();

        this.usersRouter.put('/users/:id', this.authMiddleware, this.updateUser.bind(this));
    }

    private async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedUser = await this.usersService.updateUser(req.body);
            res.status(200).json({ user: updatedUser });
        } catch (error) {
            next(error);
        }
    }
}
