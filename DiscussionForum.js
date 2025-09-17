import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DiscussionForum.css';

function DiscussionForum() {
  const [discussions, setDiscussions] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [newContent, setNewContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/discussions');
        setDiscussions(response.data);
        setError(null);
      } catch (err) {
        setError('Gagal memuat diskusi. Periksa koneksi.');
      }
    };
    fetchDiscussions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/discussions', {
        user_id: 1, // Ganti dengan ID pengguna yang sesuai (misalnya, dari autentikasi)
        topic: newTopic,
        content: newContent,
      });
      setNewTopic('');
      setNewContent('');
      // Refresh daftar diskusi
      const response = await axios.get('http://localhost:5000/api/discussions');
      setDiscussions(response.data);
    } catch (err) {
      setError('Gagal menambahkan diskusi.');
    }
  };

  return (
    <div className="discussion-forum">
      <h2>Forum Diskusi</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="discussion-form">
        <input
          type="text"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          placeholder="Judul Topik"
          required
        />
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Isi Diskusi"
          required
        />
        <button type="submit">Kirim</button>
      </form>
      <div className="discussion-list">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="discussion-card">
            <h3>{discussion.topic}</h3>
            <p>{discussion.content}</p>
            <small>{new Date(discussion.created_at).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscussionForum;
