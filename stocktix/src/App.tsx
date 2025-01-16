import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route
                path="/"
                element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
              />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
            <Route 
              path="/signup" 
              element={<SignUp setLoggedIn={setLoggedIn} />} 
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;