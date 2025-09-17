# Nurul Iman Qur'an Digital (NIQD)
Nurul Iman Qur’an Digital (NIQD) adalah aplikasi web yang dikembangkan untuk memfasilitasi pembelajaran Al-Qur’an dan kajian Islam, khususnya untuk mahasiswa STAI Nurul Iman.   Kontribusi dipersilakan! Silakan baca CONTRIBUTING.md untuk panduan kontribusi.

**Repository**: `niqd-app`

Aplikasi pendidikan Al-Qur'an yang berisi teks Al-Qur'an, tafsir tematik, dan cerita 25 nabi — dirancang untuk kebutuhan pengajaran.

---

## 🛠️ Tech Stack
- **Frontend**: React.js (HTML, CSS, JavaScript)
- **Backend**: Node.js (Express)
- **Database**: MySQL

---

## 📂 Struktur proyek

niqd-app/
├── client/ # Frontend (React.js)
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ ├── index.js
│ └── package.json
├── server/ # Backend (Node.js)
│ ├── routes/
│ ├── models/
│ ├── config/
│ ├── server.js
│ └── package.json
├── database/ # Skema SQL
│ └── schema.sql
└── README.md


---

## ✨ Fitur Utama
- Menampilkan teks Al-Qur'an per ayat dan per surah
- Pencarian ayat berdasarkan teks atau nomor
- Tafsir tematik (kategori/topik)
- Daftar dan cerita 25 nabi (ringkasan dan teks)
- Autentikasi dasar untuk pengajar (opsional)
- API RESTful untuk frontend
- Endpoint untuk impor data (bulk insert Al-Qur'an, tafsir, cerita)

---

## 🚀 Persiapan lingkungan (lokal)

1. Clone repo
```bash
git clone https://github.com/Alishop99/niqd-app.git
cd niqd-app

Setup database MySQL

Buat database: niqd_db

Jalankan skema SQL di database/schema.sql

Server (backend)

cd server
cp .env.example .env   # isi dengan credential MySQL dan PORT
npm install
npm run dev   # atau `node server.js`


Client (frontend)

cd client
npm install
npm start


Aplikasi frontend default akan request ke http://localhost:5000.

⚙️ Contoh Environment Variables (server/.env)
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=niqd_db
JWT_SECRET=ubah_ke_rahasia

🗄️ Skema Database

Tersedia di database/schema.sql

📡 Desain API (usulan)

Autentikasi

POST /api/auth/login → login, kembalikan JWT

POST /api/auth/register → register (opsional)

Surah & Ayat

GET /api/surah → daftar surah

GET /api/surah/:id → detail surah

GET /api/ayat/:surahId/:ayatNumber → ambil 1 ayat

GET /api/ayat/search?q=... → pencarian teks

Tafsir

GET /api/tafsir → daftar tafsir tematik

GET /api/tafsir/:id → detail tafsir

Cerita Nabi

GET /api/nabi → daftar cerita nabi

GET /api/nabi/:id → detail cerita

Admin / Import

POST /api/import/quran → bulk insert Al-Qur'an (admin)

🛤️ Roadmap

Import data teks Al-Qur'an resmi

Tambahkan audio tilawah

Sistem annotasi / catatan pengajar

Multi-language UI

PWA untuk akses offline

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Patent Notice
Certain features may be covered by one or more patents. See [PATENTS](./PATENTS) for more information.

