import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { MainRouter } from './routes/MainRouter';

// --------------------------------------------------------------

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const cors = require('cors');

const PORT = process.env.API_PORT || 3000;
const app: Express = express();
const router = new MainRouter();

app.use(express.json());
app.use(cors());
app.use(router.routes);


app.listen(PORT, () => {
    console.log(`The server is listening on port:${PORT}`);
});
