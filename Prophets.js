import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Prophets() {
  const [prophets, setProphets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/prophets')
      .then(response => setProphets(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Kisah 25 Nabi</h2>
      {prophets.map(prophet => (
        <div key={prophet.id}>
          <h3>{prophet.prophet_name}</h3>
          <p>{prophet.story_text}</p>
          <p><strong>Ayat Terkait:</strong> {prophet.related_verses}</p>
          <p><strong>Nilai Moral:</strong> {prophet.moral_values}</p>
        </div>
      ))}
    </div>
  );
}

export default Prophets;
