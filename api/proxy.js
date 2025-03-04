import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Backend API URLs stored in environment variables
const GOOGLE_SHEET_URL = process.env.VITE_GOOGLE_SHEET;
const GOOGLE_SCRIPT_URL = process.env.VITE_GOOGLE_SHEET_SCRIPT;

app.use(cors());
app.use(express.json());

// The proxy endpoint
app.post('/api/proxy', async (req, res) => {
    const { endpoint, username, email, password } = req.body;

    try {
        let result;
        if (endpoint === "script") {
            result = await axios.post(GOOGLE_SCRIPT_URL, { username, email, password });
        } else if (endpoint === "sheet") {
            result = await axios.get(GOOGLE_SHEET_URL);
        }

        res.json(result.data);
    } catch (error) {
        console.error('Error in proxy:', error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

// Exporting handler for Vercel
export default app;
