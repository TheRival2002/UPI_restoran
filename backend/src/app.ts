import { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// --------------------------------------------------------------

const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const express = require('express');
const app: Express = express();
const cors = require('cors');
const pool = require('./db');

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Server radi!');
});

app.get('/test', async (req, res) => {
    try {
        const newTest = await pool.query('SELECT * FROM roles');
        res.json(newTest);
    } catch (error: any) {
        console.error(error.message);
    }
});

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is listening on port:${PORT}`);
});
