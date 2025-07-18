import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
    // eslint-disable-next-line no-undef
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

export default pool;
