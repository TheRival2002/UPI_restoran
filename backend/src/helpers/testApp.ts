import express from 'express';
import { MainRouter } from '../routes/MainRouter';

// --------------------------------------------------------------

export function createTestApp() {
    const app = express();
    const router = new MainRouter();

    app.use(express.json());
    app.use(router.routes);

    return app;
}