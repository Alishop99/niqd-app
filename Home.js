import React from 'react';
import './Home.css'; // Pastikan Anda membuat file CSS ini

function Home() {
  return (
    <div className="home-container">
      {/* Banner Sambutan */}
      <div className="banner">
        <h1>Selamat Datang di Nurul Iman Qur’an Digital</h1>
        <p>Aplikasi pembelajaran Al-Qur’an dan kisah 25 nabi untuk mahasiswa IQT STAI Nurul Iman</p>
      </div>

      {/* Quick Access */}
      <div className="quick-access">
        <a href="/quran" className="quick-button">
          <i className="icon">📖</i> Baca Al-Qur’an
        </a>
        <a href="/prophets" className="quick-button">
          <i className="icon">👥</i> Kisah 25 Nabi
        </a>
        <a href="/discussions" className="quick-button">
          <i className="icon">💬</i> Forum Diskusi
        </a>
      </div>

      {/* Fitur Unggulan */}
      <div className="featured-section">
        <h2>Fitur Unggulan</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Tafsir Tematik</h3>
            <p>Analisis tafsir ringkas terkait kisah nabi dan nilai moral.</p>
          </div>
          <div className="feature-card">
            <h3>Kuis Interaktif</h3>
            <p>Tes pemahaman Anda tentang Al-Qur’an dan kisah nabi.</p>
          </div>
          <div className="feature-card">
            <h3>Pengabdian Masyarakat</h3>
            <p>Modul untuk proyek penyuluhan berbasis nilai kenabian.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 STAI Nurul Iman. Semua hak cipta dilindungi.</p>
        <p>Kontak: info@stainuruliman.ac.id | Sumber API: https://alquran.cloud</p>
      </footer>
    </div>
  );
}

export default Home;
