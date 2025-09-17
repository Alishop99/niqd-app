import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quran.css';

function Quran() {
  const [surah, setSurah] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quran/${surah}`)
      .then(response => setData(response.data.data))
      .catch(error => console.error(error));
  }, [surah]);

  return (
    <div className="quran-container">
      <h2>Baca Al-Qur'an</h2>
      <div className="surah-selector">
        <input
          type="number"
          value={surah}
          onChange={e => setSurah(e.target.value)}
          min="1"
          max="114"
          placeholder="Nomor Surah"
        />
        <button>Cari</button>
      </div>
      {data && (
        <div className="surah-content">
          <h3>{data.name.transliteration.en} ({data.number})</h3>
          {data.ayahs.map(ayah => (
            <div key={ayah.number} className="ayah-card">
              <p className="ayah-text">{ayah.text}</p>
              <p className="ayah-transliteration">{ayah.transliteration?.en}</p>
              <p className="ayah-translation">{ayah.translation?.en || 'Terjemahan tidak tersedia'}</p>
              <button className="tafsir-button">Lihat Tafsir</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quran;
