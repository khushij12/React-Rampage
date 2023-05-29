// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function NoMatch() {
  return <h2>404</h2>;
}

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About}/>
          <Route path='*' Component={NoMatch} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

