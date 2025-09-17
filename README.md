from pathlib import Path

# Isi README.md
readme_content = """# 🌙 Nurul Iman Qur'an Digital (NIQD)

**Nurul Iman Qur’an Digital (NIQD)** adalah aplikasi web untuk memfasilitasi pembelajaran Al-Qur’an dan kajian Islam, khususnya bagi mahasiswa.  

Kontribusi dipersilakan! Silakan baca **CONTRIBUTING.md** untuk panduan kontribusi.  

**Repository**: `niqd-app`  
**Deskripsi**: Aplikasi pendidikan Al-Qur'an berisi teks Al-Qur'an, tafsir tematik, dan cerita 25 nabi — dirancang untuk kebutuhan pengajaran.  

---

## 🛠️ Tech Stack
- **Frontend**: React.js (HTML, CSS, JavaScript)
- **Backend**: Node.js (Express)
- **Database**: MySQL

---

## 📂 Struktur Proyek

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
- 📖 Menampilkan teks Al-Qur'an per ayat & per surah  
- 🔍 Pencarian ayat berdasarkan teks atau nomor  
- 📚 Tafsir tematik (kategori/topik)  
- 👳‍♂️ Cerita 25 nabi (ringkasan dan teks)  
- 🔑 Autentikasi dasar untuk pengajar (opsional)  
- 🌐 API RESTful untuk frontend  
- 📥 Endpoint untuk impor data (bulk insert Al-Qur'an, tafsir, cerita)  

---

## 🚀 Persiapan Lingkungan (Lokal)

### 1. Clone Repository
```bash
git clone https://github.com/Alishop99/niqd-app.git
cd niqd-app

cd server
cp .env.example .env   # isi dengan credential MySQL dan PORT
npm install
npm run dev   # atau node server.js

cd client
npm install
npm start

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=niqd_db
JWT_SECRET=ubah_ke_rahasia

database/schema.sql

📜 License

This project is licensed under the MIT License — lihat LICENSE
 untuk detail.

📑 Patent Notice

Beberapa fitur mungkin dilindungi oleh satu atau lebih paten. Lihat PATENTS
 untuk informasi lebih lanjut.
