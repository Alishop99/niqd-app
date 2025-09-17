import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Prophets.css';

function Prophets() {
  const [prophets, setProphets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/prophets')
      .then(response => setProphets(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="prophets-container">
      <h2>Kisah 25 Nabi</h2>
      <div className="prophet-list">
        {prophets.map(prophet => (
          <div key={prophet.id} className="prophet-card">
            <h3>{prophet.prophet_name}</h3>
            <p>{prophet.story_text.substring(0, 200)}...</p>
            <p><strong>Ayat Terkait:</strong> {prophet.related_verses}</p>
            <p><strong>Nilai Moral:</strong> {prophet.moral_values}</p>
            <button className="favorite-button">Tambah ke Favorit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prophets;
