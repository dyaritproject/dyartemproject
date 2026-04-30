import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Hub from './pages/Hub';
import Referral from './pages/Referral';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hub" element={<Hub />} />
            <Route path="/referral" element={<Referral />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
