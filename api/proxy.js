import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Backend API URLs stored in environment variables
const GOOGLE_SHEET_URL = process.env.VITE_GOOGLE_SHEET;
const GOOGLE_SCRIPT_URL = process.env.VITE_GOOGLE_SHEET_SCRIPT;

app.use(cors({
  origin: '*', // Change to your frontend URL
}));
app.use(express.json());

// The proxy endpoint
app.post('/api/proxy', async (req, res) => {
    const { endpoint, username, email, password } = req.body;
    console.log('Received request:', req.body); // Log the request for debugging

    try {
        let result;
        if (endpoint === "script") {
            result = await axios.post(GOOGLE_SCRIPT_URL, { username, email, password });
        } else if (endpoint === "sheet") {
            result = await axios.get(GOOGLE_SHEET_URL);
        }

        if (result) {
            res.json(result.data);
        } else {
            res.status(500).json({ error: 'No data returned from API.' });
        }
    } catch (error) {
        console.error('Error in proxy:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

// Exporting handler for Vercel
export default app;
