import { Users, Activity, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="fade-in">
      <div className="container py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-4">Our NDIS Services</h1>
          <p className="text-muted max-w-2xl mx-auto">Providing specialized, compassionate, and evidence-based support to help you navigate your NDIS plan.</p>
        </div>

        <div className="flex flex-col gap-16">
          
          {/* Support Coordination */}
          <div className="flex flex-col gap-8 items-center">
            <div style={{ flex: 1, backgroundColor: 'var(--white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-full)', marginBottom: '1.5rem' }}>
                <Users size={40} color="var(--primary)" />
              </div>
              <h2 className="mb-4">Support Coordination</h2>
              <p className="text-muted mb-6">Navigating the NDIS can be complex. Our experienced Support Coordinators work alongside you to understand your plan, connect you with the right services, and build your capacity to direct your own life.</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                {['Understanding your NDIS plan and budget', 'Connecting with quality service providers', 'Resolving points of crisis', 'Preparing for plan reviews', 'Building capacity and independence'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <CheckCircle size={20} color="var(--secondary)" style={{ marginRight: '0.75rem', flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/referral" className="btn btn-primary">Request Support Coordination</Link>
            </div>
          </div>

          {/* Positive Behaviour Support */}
          <div className="flex flex-col gap-8 items-center">
            <div style={{ flex: 1, backgroundColor: 'var(--white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-full)', marginBottom: '1.5rem' }}>
                <Activity size={40} color="var(--accent)" />
              </div>
              <h2 className="mb-4">Positive Behaviour Support (PBS)</h2>
              <p className="text-muted mb-6">Our practitioners use evidence-based frameworks to understand why challenging behaviors occur. We focus on proactive strategies that improve quality of life and create supportive environments.</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                {['Comprehensive functional behavioural assessments', 'Development of individualised PBS plans', 'Training for families and support workers', 'Restrictive practice reduction strategies', 'Ongoing monitoring and evaluation'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <CheckCircle size={20} color="var(--secondary)" style={{ marginRight: '0.75rem', flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/referral" className="btn btn-primary">Request PBS Services</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
