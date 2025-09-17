import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TafsirViewer.css';

function TafsirViewer() {
  const [surah, setSurah] = useState(1);
  const [ayah, setAyah] = useState(1);
  const [tafsir, setTafsir] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTafsir = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/tafsir/${surah}/${ayah}`);
        setTafsir(response.data[0] || null);
        setError(null);
      } catch (err) {
        setError('Gagal memuat tafsir. Periksa nomor surah dan ayah.');
      }
    };
    fetchTafsir();
  }, [surah, ayah]);

  return (
    <div className="tafsir-viewer">
      <h2>Tafsir Tematik</h2>
      <div className="tafsir-selector">
        <input
          type="number"
          value={surah}
          onChange={(e) => setSurah(e.target.value)}
          min="1"
          max="114"
          placeholder="Nomor Surah"
        />
        <input
          type="number"
          value={ayah}
          onChange={(e) => setAyah(e.target.value)}
          min="1"
          placeholder="Nomor Ayat"
        />
        <button onClick={() => {}}>Cari Tafsir</button>
      </div>
      {error && <p className="error">{error}</p>}
      {tafsir && (
        <div className="tafsir-content">
          <h3>Tafsir Surah {surah}: {ayah}</h3>
          <p><strong>Tema:</strong> {tafsir.theme}</p>
          <p><strong>Teks Tafsir:</strong> {tafsir.tafsir_text}</p>
          <p><strong>Sumber:</strong> {tafsir.source}</p>
        </div>
      )}
    </div>
  );
}

export default TafsirViewer;
