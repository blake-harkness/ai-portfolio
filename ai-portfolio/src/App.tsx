import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import HowICanHelpPage from './pages/HowICanHelpPage';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <div className="app">
        <Analytics />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/how-i-can-help" element={<HowICanHelpPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
