import express from 'express';
import { errorHandler } from '../middleware/errorHandler';
import { MainRouter } from '../routes/MainRouter';
import cookieParser from 'cookie-parser';

// --------------------------------------------------------------

export function createTestApp() {
    const app = express();
    const router = new MainRouter();

    app.use(express.json());
    app.use(cookieParser());
    app.use(router.routes);
    app.use(errorHandler);

    return app;
}