import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Quran from './pages/Quran';
import Prophets from './pages/Prophets';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <a href="/">Home</a> | <a href="/quran">Al-Qur'an</a> | <a href="/prophets">Kisah Nabi</a>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quran" component={Quran} />
          <Route path="/prophets" component={Prophets} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
