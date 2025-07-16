// server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// Create a PostgreSQL pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    /* ssl: {
        rejectUnauthorized: process.env.DB_SSL === 'true', // Set to true if your server requires SSL
    }, */
});

// Verify database connection
pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Error connecting to PostgreSQL:', err));

/**
 * Route to execute SQL queries.
 * Handles SELECT, INSERT, UPDATE, and DELETE statements.
 */
app.post('/api/query', async (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'SQL query is required.' });
    }

    try {
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: `Error executing query: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
