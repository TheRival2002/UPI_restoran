import { Express, Request, Response } from 'express';
import dotenv from "dotenv";

// --------------------------------------------------------------

dotenv.config();

const express = require('express');
const app: Express = express();

const PORT = process.env.API_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server radi!');
});

app.listen(PORT, () => {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
});
