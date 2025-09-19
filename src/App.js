import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Registration from './pages/Registration';
import DigitalID from './pages/DigitalID';
import CheckIn from './pages/CheckIn';
import MobileApp from './pages/MobileApp';
import AIDetection from './pages/AIDetection';
import PoliceDashboard from './pages/PoliceDashboard';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/digital-id" element={<DigitalID />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/ai-detection" element={<AIDetection />} />
          <Route path="/police-dashboard" element={<PoliceDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
