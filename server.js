const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'niqd_db'
};

// Middleware untuk mengecek koneksi database
const checkDatabaseConnection = async () => {
  let connection;
  try {
    connection = await mysql.createConnection({ ...dbConfig, multipleStatements: true });
    await connection.ping();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    throw new Error('Database unavailable');
  } finally {
    if (connection) await connection.end();
  }
};

// Cek koneksi saat server mulai
checkDatabaseConnection().catch(err => {
  console.error('Server will not start due to database issues:', err.message);
  process.exit(1);
});

// Endpoint untuk mendapatkan teks Al-Qur'an dari API
app.get('/api/quran/:surah', async (req, res) => {
  try {
    const { surah } = req.params;
    const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surah}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Quran data' });
  }
});

// Endpoint untuk mendapatkan kisah nabi
app.get('/api/prophets', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM prophets');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prophets' });
  } finally {
    if (connection) await connection.end();
  }
});

// Endpoint untuk tafsir
app.get('/api/tafsir/:surah/:ayah', async (req, res) => {
  let connection;
  try {
    const { surah, ayah } = req.params;
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      'SELECT * FROM tafsir WHERE surah_number = ? AND ayah_number = ?',
      [surah, ayah]
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tafsir' });
  } finally {
    if (connection) await connection.end();
  }
});

// Endpoint untuk mendapatkan daftar diskusi
app.get('/api/discussions', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM discussions ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch discussions' });
  } finally {
    if (connection) await connection.end();
  }
});

// Endpoint untuk membuat diskusi baru
app.post('/api/discussions', async (req, res) => {
  let connection;
  try {
    const { user_id, topic, content } = req.body;
    connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
      'INSERT INTO discussions (user_id, topic, content) VALUES (?, ?, ?)',
      [user_id, topic, content]
    );
    res.status(201).json({ id: result.insertId, message: 'Discussion created' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create discussion' });
  } finally {
    if (connection) await connection.end();
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
