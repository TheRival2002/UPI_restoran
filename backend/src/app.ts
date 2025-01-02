import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import corsOptions from './corsOptions';
import { errorHandler } from './middleware/errorHandler';
import { MainRouter } from './routes/MainRouter';
import cookieParser from 'cookie-parser';

// --------------------------------------------------------------

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const cors = require('cors');

const PORT = process.env.API_PORT || 3000;
const app: Express = express();
const router = new MainRouter();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api', router.routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`The server is listening on port:${PORT}`);
});
