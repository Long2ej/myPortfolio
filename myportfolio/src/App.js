import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function RedirectToHome() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<RedirectToHome />} />
      </Routes>
    </>
  );
}

export default App;
