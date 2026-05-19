import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Hub from './pages/Hub';
import Referral from './pages/Referral';
import Support from './pages/Support';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import WorkWithUs from './pages/WorkWithUs';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth pages — no navbar/footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected dashboard — no public navbar/footer */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />

          {/* Public pages — with navbar and footer */}
          <Route path="/*" element={
            <div className="app-container">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/hub" element={<Hub />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/referral" element={<Referral />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/work-with-us" element={<WorkWithUs />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
