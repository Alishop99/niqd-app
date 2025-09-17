import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProphetStory.css';

function ProphetStory() {
  const [prophets, setProphets] = useState([]);
  const [selectedProphet, setSelectedProphet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProphets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/prophets');
        setProphets(response.data);
        setSelectedProphet(response.data[0]); // Pilih nabi pertama sebagai default
        setError(null);
      } catch (err) {
        setError('Gagal memuat kisah nabi. Periksa koneksi.');
      }
    };
    fetchProphets();
  }, []);

  const handleProphetChange = (e) => {
    const prophet = prophets.find(p => p.id === parseInt(e.target.value));
    setSelectedProphet(prophet);
  };

  return (
    <div className="prophet-story">
      <h2>Kisah 25 Nabi</h2>
      <div className="prophet-selector">
        <select onChange={handleProphetChange} value={selectedProphet?.id || ''}>
          <option value="">Pilih Nabi</option>
          {prophets.map((prophet) => (
            <option key={prophet.id} value={prophet.id}>
              {prophet.prophet_name}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="error">{error}</p>}
      {selectedProphet && (
        <div className="story-content">
          <h3>{selectedProphet.prophet_name}</h3>
          <p className="story-text">{selectedProphet.story_text}</p>
          <p><strong>Ayat Terkait:</strong> {selectedProphet.related_verses.join(', ')}</p>
          <p><strong>Nilai Moral:</strong> {selectedProphet.moral_values}</p>
          <button className="favorite-button">Tambah ke Favorit</button>
        </div>
      )}
    </div>
  );
}

export default ProphetStory;
