import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginBottom: '1.5rem' }}>Empowering Your NDIS Journey</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
            Dyar Pty Ltd specializes in comprehensive Support Coordination and Positive Behaviour Support (PBS) to help you achieve your goals and live a fulfilling life.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/referral" className="btn btn-accent" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Make a Referral <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
            <Link to="/services" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid var(--white)', color: 'var(--white)' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-center text-4xl mb-8">Our Core Expertise</h2>
          <div className="flex gap-8 justify-center" style={{ flexWrap: 'wrap' }}>
            
            <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', flex: '1 1 300px', maxWidth: '400px' }}>
              <Users size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Support Coordination</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>We help you understand and implement your NDIS plan, connecting you with the right providers to bring your goals to life.</p>
              <Link to="/services" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>Learn more <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} /></Link>
            </div>

            <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', flex: '1 1 300px', maxWidth: '400px' }}>
              <Activity size={48} color="var(--secondary)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Positive Behaviour Support</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Evidence-based strategies to improve quality of life and decrease behaviors of concern, tailored entirely to the individual.</p>
              <Link to="/services" style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>Learn more <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} /></Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
