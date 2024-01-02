import logo from './logo.svg';
import './App.css';
import { Routes, Route,Link } from "react-router-dom"
import Cat  from './pages/Cat';
import Dog from './pages/Dog';
function App() {
return (
    <div className="App">
      <Link to={'/cat'}>cat</Link>

      <Routes>
      <Route path="/" />

        <Route path="/cat" element={<Cat />}/>
        <Route path="/dog" element={<Dog />}/>
      </Routes>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        App2
      </p>

    </header>
    </div>
  );
}

export default App;
