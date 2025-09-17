import React, { useState, useEffect } from 'react';
import './QuranViewer.css';

function QuranViewer() {
  const [surah, setSurah] = useState(1);
  const [edition, setEdition] = useState('en.asad'); // Edisi default dengan terjemahan
  const [surahs, setSurahs] = useState([]);
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);

  // Fetch daftar surah
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch('https://api.alquran.cloud/v1/surah');
        if (!response.ok) throw new Error('Failed to fetch Surah data');
        const data = await response.json();
        setSurahs(data.data);
      } catch (error) {
        console.error(error);
        setError('Error loading Surah list');
      }
    };
    fetchSurahs();
  }, []);

  // Fetch konten surah dengan edisi tertentu
  useEffect(() => {
    const fetchSurahContent = async () => {
      try {
        if (surah) {
          const response = await fetch(`https://api.alquran.cloud/v1/surah/${surah}/${edition}`);
          if (!response.ok) throw new Error('Failed to fetch Surah content');
          const data = await response.json();
          console.log('Full Response:', data); // Debug lengkap
          console.log('Ayahs:', data.data.ayahs); // Debug ayahs
          setContent(data.data.ayahs);
          setError(null);
        }
      } catch (error) {
        console.error('Fetch Error:', error);
        setError('Error loading Surah content. Pastikan edisi valid atau cek koneksi.');
      }
    };
    fetchSurahContent();
  }, [surah, edition]);

  return (
    <div className="quran-viewer">
      <h2>Baca Al-Qur’an</h2>
      <div className="surah-selector">
        <select value={surah} onChange={(e) => setSurah(e.target.value)}>
          <option value="">Pilih Surah</option>
          {surahs.map((s) => (
            <option key={s.number} value={s.number}>
              {`${s.number}. ${s.englishName}`}
            </option>
          ))}
        </select>
        <select value={edition} onChange={(e) => setEdition(e.target.value)}>
          <option value="en.asad">Muhammad Asad (English)</option>
          <option value="en.pickthall">Marmaduke Pickthall (English)</option>
          <option value="quran-uthmani">Teks Arab (Uthmani)</option>
        </select>
        {error && <p className="error">{error}</p>}
      </div>
      <div className="quran-content">
        {content.length > 0 ? (
          content.map((ayah) => (
            <div key={ayah.numberInSurah} className="ayah-container">
              <p className="ayah-arabic"><strong>{ayah.numberInSurah}.</strong> {ayah.text || 'Teks tidak tersedia'}</p>
              <p className="ayah-translation">
                Translation: {ayah.translation?.en || (edition === 'quran-uthmani' ? 'Terjemahan tidak tersedia' : 'Terjemahan tidak ditemukan di edisi ini')}
              </p>
            </div>
          ))
        ) : error ? null : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default QuranViewer;
