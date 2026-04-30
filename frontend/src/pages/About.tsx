import { Target, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="fade-in">
      <div className="container py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-4">About Dyar Pty Ltd</h1>
          <p className="text-muted max-w-2xl mx-auto">Committed to empowering individuals through dedicated NDIS support services.</p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Mission & Vision */}
          <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <Target size={40} color="var(--primary)" className="mb-4" />
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-muted">To provide exceptional Support Coordination and Positive Behaviour Support that empowers NDIS participants to achieve their goals, overcome barriers, and live fulfilling, independent lives.</p>
            </div>
            <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <Heart size={40} color="var(--secondary)" className="mb-4" />
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-muted">An inclusive community where every individual has the resources, support, and opportunities to realize their full potential and participate meaningfully in society.</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl text-center mb-8">Why Choose Dyar?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
                <Shield size={32} color="var(--primary-dark)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 className="mb-2">NDIS Registered</h3>
                <p className="text-muted">We adhere to the highest standards of the NDIS Quality and Safeguards Commission.</p>
              </div>
              <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
                <Users size={32} color="var(--primary-dark)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 className="mb-2">Person-Centered</h3>
                <p className="text-muted">Your goals, choices, and preferences are at the heart of everything we do.</p>
              </div>
              <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
                <Activity size={32} color="var(--primary-dark)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 className="mb-2">Evidence-Based</h3>
                <p className="text-muted">Our PBS practitioners use proven frameworks to deliver effective and lasting outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Quick fix for the missing Users and Activity icons in this file
import { Users, Activity } from 'lucide-react';

export default About;
