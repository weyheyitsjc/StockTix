import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;