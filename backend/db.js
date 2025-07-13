import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',         // default user
    host: 'localhost',
    database: 'Zealthy',      // your DB name (match casing!)
    password: '1234',         // ✅ your password
    port: 5432
});

export default pool;
