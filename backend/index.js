import express from 'express';
import cors from 'cors';
import pool from './db.js'; // PostgreSQL connection




// Allow CORS from your frontend domain

const app = express();
const PORT = 3000;


app.use(cors({
    origin: 'https://zealthy-onboarding-jlkv.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

// POST /api/users – save user form data
app.post('/api/users', async (req, res) => {
    const {
        email, password, aboutMe, birthdate, address
    } = req.body;

    try {
        await pool.query(
            `INSERT INTO users (email, password, about_me, birthdate, street, city, state, zip)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [
                email,
                password,
                aboutMe,
                birthdate,
                address?.street,
                address?.city,
                address?.state,
                address?.zip
            ]
        );
        res.status(201).json({ message: 'User saved' });
    } catch (err) {
        console.error('❌ Error saving user:', err);
        res.status(500).json({ error: 'Failed to save user' });
    }
});

// GET /api/data – return all users
app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error('❌ Error fetching users:', err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// POST /api/config – save admin field-page config
app.post('/api/config', async (req, res) => {
    const config = req.body;
    try {
        await pool.query('DELETE FROM config'); // Clear old config
        for (const { field, page } of config) {
            await pool.query('INSERT INTO config (field, page) VALUES ($1, $2)', [field, page]);
        }
        res.status(200).json({ message: 'Config saved' });
    } catch (err) {
        console.error('❌ Error saving config:', err);
        res.status(500).json({ error: 'Failed to save config' });
    }
});

// GET /api/config – return admin field-page config
app.get('/api/config', async (req, res) => {
    try {
        const result = await pool.query('SELECT field, page FROM config');
        res.json(result.rows);
    } catch (err) {
        console.error('❌ Error loading config:', err);
        res.status(500).json({ error: 'Failed to load config' });
    }
});

// Optional: Friendly homepage
app.get('/', (req, res) => {
    res.send('👋 Backend is running. Try /api/config or /api/data');
});

app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
