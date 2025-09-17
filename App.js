import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quran from './pages/Quran';
import Prophets from './pages/Prophets';
import QuranViewer from './components/QuranViewer';
import ProphetStory from './components/ProphetStory';
import TafsirViewer from './components/TafsirViewer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <a href="/">Home</a> | <a href="/quran">Al-Qur'an</a> | <a href="/prophets">Kisah Nabi</a> | <a href="/tafsir">Tafsir</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<QuranViewer />} />
          <Route path="/prophets" element={<ProphetStory />} />
          <Route path="/tafsir" element={<TafsirViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
