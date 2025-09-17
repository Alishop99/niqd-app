# ðŸŒ™ Nurul Iman Qur'an Digital (NIQD)

**Nurul Iman Qurâ€™an Digital (NIQD)** adalah aplikasi web untuk memfasilitasi pembelajaran Al-Qurâ€™an dan kajian Islam, khususnya bagi mahasiswa STAI Nurul Iman.  

Kontribusi dipersilakan! Silakan baca **CONTRIBUTING.md** untuk panduan kontribusi.  

**Repository**: `niqd-app`  
**Deskripsi**: Aplikasi pendidikan Al-Qur'an berisi teks Al-Qur'an, tafsir tematik, dan cerita 25 nabi â€” dirancang untuk kebutuhan pengajaran.  

---

## ðŸ› ï¸ Tech Stack
- **Frontend**: React.js (HTML, CSS, JavaScript)
- **Backend**: Node.js (Express)
- **Database**: MySQL

---

## ðŸ“‚ Struktur Proyek

```
niqd-app/
â”œâ”€â”€ client/                  # Frontend (React.js)
â”‚   â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ App.js
â”‚   â”‚   â”œâ”€â”€ index.js
â”‚   â””â”€â”€ package.json
â”œâ”€â”€ server/                  # Backend (Node.js)
â”‚   â”œâ”€â”€ routes/
â”‚   â”œâ”€â”€ models/
â”‚   â”œâ”€â”€ config/
â”‚   â”œâ”€â”€ server.js
â”‚   â””â”€â”€ package.json
â”œâ”€â”€ database/                # Skema SQL
â”‚   â””â”€â”€ schema.sql
â””â”€â”€ README.md
```

---

## âœ¨ Fitur Utama
- ðŸ“– Menampilkan teks Al-Qur'an per ayat & per surah  
- ðŸ” Pencarian ayat berdasarkan teks atau nomor  
- ðŸ“š Tafsir tematik (kategori/topik)  
- ðŸ‘³â€â™‚ï¸ Cerita 25 nabi (ringkasan dan teks)  
- ðŸ”‘ Autentikasi dasar untuk pengajar (opsional)  
- ðŸŒ API RESTful untuk frontend  
- ðŸ“¥ Endpoint untuk impor data (bulk insert Al-Qur'an, tafsir, cerita)  

---

## ðŸš€ Persiapan Lingkungan (Lokal)

### 1. Clone Repository
```bash
git clone https://github.com/Alishop99/niqd-app.git
cd niqd-app
```

### 2. Setup Database MySQL
- Buat database: `niqd_db`  
- Import skema SQL dari `database/schema.sql`  

### 3. Setup Server (Backend)
```bash
cd server
cp .env.example .env   # isi dengan credential MySQL dan PORT
npm install
npm run dev   # atau node server.js
```

### 4. Setup Client (Frontend)
```bash
cd client
npm install
npm start
```

ðŸ‘‰ Secara default frontend akan request ke: **http://localhost:5000**  

---

## âš™ï¸ Contoh Environment Variables (`server/.env`)
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=niqd_db
JWT_SECRET=ubah_ke_rahasia
```

---

## ðŸ—„ï¸ Skema Database
Skema tersedia di:  
```
database/schema.sql
```

---

## ðŸ“¡ Desain API (Usulan)

### Autentikasi
- `POST /api/auth/login` â†’ login, kembalikan JWT  
- `POST /api/auth/register` â†’ register (opsional)  

### Surah & Ayat
- `GET /api/surah` â†’ daftar surah  
- `GET /api/surah/:id` â†’ detail surah  
- `GET /api/ayat/:surahId/:ayatNumber` â†’ ambil 1 ayat  
- `GET /api/ayat/search?q=...` â†’ pencarian teks  

### Tafsir
- `GET /api/tafsir` â†’ daftar tafsir tematik  
- `GET /api/tafsir/:id` â†’ detail tafsir  

### Cerita Nabi
- `GET /api/nabi` â†’ daftar cerita nabi  
- `GET /api/nabi/:id` â†’ detail cerita  

### Admin / Import
- `POST /api/import/quran` â†’ bulk insert Al-Qur'an (admin)  

---

## ðŸ›¤ï¸ Roadmap
- [ ] Import data teks Al-Qur'an resmi  
- [ ] Tambahkan audio tilawah  
- [ ] Sistem annotasi / catatan pengajar  
- [ ] Multi-language UI  
- [ ] PWA untuk akses offline  

---

## ðŸ“œ License
This project is licensed under the **MIT License** â€” lihat [LICENSE](./LICENSE) untuk detail.  

## ðŸ“‘ Patent Notice
Beberapa fitur mungkin dilindungi oleh satu atau lebih paten. Lihat [PATENTS](./PATENTS) untuk informasi lebih lanjut.  
