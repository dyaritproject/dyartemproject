import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--white)', padding: '3rem 0' }}>
      <div className="container flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Dyar Pty Ltd</h3>
          <p style={{ color: 'var(--text-muted)' }}>Empowering your NDIS journey with Support Coordination & PBS.</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div className="flex flex-col gap-4">
            <h4 style={{ color: 'var(--white)' }}>Quick Links</h4>
            <Link to="/services" style={{ color: 'var(--text-muted)' }}>Services</Link>
            <Link to="/hub" style={{ color: 'var(--text-muted)' }}>Information Hub</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 style={{ color: 'var(--white)' }}>Compliance</h4>
            <Link to="/support" style={{ color: 'var(--text-muted)' }}>Feedback & Complaints</Link>
            <Link to="/support" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: 'var(--text-muted)' }}>
        &copy; {new Date().getFullYear()} Dyar Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
