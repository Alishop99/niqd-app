import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quran() {
  const [surah, setSurah] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quran/${surah}`)
      .then(response => setData(response.data.data))
      .catch(error => console.error(error));
  }, [surah]);

  return (
    <div>
      <h2>Al-Qur'an</h2>
      <input
        type="number"
        value={surah}
        onChange={e => setSurah(e.target.value)}
        min="1"
        max="114"
      />
      {data && (
        <div>
          <h3>{data.name.transliteration.en} ({data.number})</h3>
          {data.ayahs.map(ayah => (
            <div key={ayah.number}>
              <p>{ayah.text} ({ayah.numberInSurah})</p>
              <p>{ayah.translation?.en || 'Translation not available'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quran;
