import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PaintTool from './pages/PaintTool';
import Themes from './pages/Themes';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';
import './index.css';
import Upload from './pages/Upload';
function App() {
  return (
    <Router>
      <header className="header">
        <h1>🏠 HomeStyler Pro</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/paint">Paint Tool</Link>
          <Link to="/themes">Themes</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/upload">Upload Room</Link>

        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paint" element={<PaintTool />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<Upload />} /> 
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App;
