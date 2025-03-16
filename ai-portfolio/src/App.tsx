import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import HowICanHelpPage from './pages/HowICanHelpPage';
import RoadyDemoPage from './pages/RoadyDemoPage';
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
            <Route path="/roady-demo" element={<RoadyDemoPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
