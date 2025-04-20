import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import HowICanHelpPage from './pages/HowICanHelpPage';
import RoadyDemoPage from './pages/RoadyDemoPage';
import CleanerCarsDemoPage from './pages/CleanerCarsDemoPage';
import GuidePage from './pages/GuidePage';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <div className="app">
        <Analytics />
        <Routes>
          {/* Special route for the Guide page without navbar/footer */}
          <Route path="/guide" element={<GuidePage />} />
          
          {/* All other routes with standard layout */}
          <Route path="*" element={
            <>
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<Navigate to="/" replace />} />
                  <Route path="/how-i-can-help" element={<HowICanHelpPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/roady-demo" element={<RoadyDemoPage />} />
                  <Route path="/cleanercars-demo" element={<CleanerCarsDemoPage />} />
                </Routes>
              </main>
              <Footer />
              <ScrollToTop />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
