-- Membuat database niqd_db
CREATE DATABASE IF NOT EXISTS niqd_db;
USE niqd_db;

-- Tabel untuk tafsir tematik
CREATE TABLE tafsir (
    id INT AUTO_INCREMENT PRIMARY KEY,
    surah_number INT NOT NULL,
    ayah_number INT NOT NULL,
    theme VARCHAR(100) NOT NULL,
    tafsir_text TEXT NOT NULL,
    source VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk kisah nabi
CREATE TABLE prophets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prophet_name VARCHAR(100) NOT NULL,
    story_text TEXT NOT NULL,
    related_verses JSON, -- Menyimpan daftar ayat terkait dalam format JSON
    moral_values TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk forum diskusi
CREATE TABLE discussions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, -- Referensi ke tabel users (jika ada autentikasi)
    topic VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Opsional, jika tabel users ada
);

-- Tabel untuk users (opsional, jika ada sistem autentikasi)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, -- Simpan hash password
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- jika User di bagi berdasarkan role nya

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  role ENUM('teacher','admin','student') DEFAULT 'teacher',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk kuis interaktif (opsional, jika fitur ini dikembangkan)
CREATE TABLE quizzes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_text TEXT NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    options JSON, -- Menyimpan opsi jawaban dalam format JSON
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indeks untuk performa (opsional)
CREATE INDEX idx_tafsir_surah_ayah ON tafsir(surah_number, ayah_number);
CREATE INDEX idx_prophets_name ON prophets(prophet_name);
CREATE INDEX idx_discussions_user_id ON discussions(user_id);
