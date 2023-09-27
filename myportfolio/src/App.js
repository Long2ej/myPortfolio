import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        {/* Any additional routes you want to define can go here */}
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;