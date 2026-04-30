import { useState } from 'react';

const Referral = () => {
  const [activeForm, setActiveForm] = useState<'ssc' | 'pbs' | null>(null);

  return (
    <div className="container py-16 fade-in">
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
        <h2 className="text-4xl mb-2 text-center">Make a Referral</h2>
        <p className="text-muted text-center mb-8">Please select the specific service you are referring for to load the correct secure form.</p>

        {!activeForm && (
          <div className="flex flex-col sm:flex-row justify-center gap-4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveForm('ssc')} 
              className="btn btn-primary"
              style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
            >
              Support Coordination Referral
            </button>
            <button 
              onClick={() => setActiveForm('pbs')} 
              className="btn btn-accent"
              style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
            >
              Positive Behaviour Support (PBS) Referral
            </button>
          </div>
        )}

        {activeForm === 'ssc' && (
          <div className="fade-in">
            <div className="flex justify-between items-center mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 className="text-xl" style={{ color: 'var(--primary-dark)' }}>Support Coordination Form</h3>
              <button 
                onClick={() => setActiveForm(null)} 
                className="text-muted" 
                style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
              >
                ← Back to Service Selection
              </button>
            </div>
            <iframe 
              src="https://www.cognitoforms.com/DyarPTYLTD/DYARSupportCoordinationReferralForm" 
              style={{ border: 0, width: '100%', height: '800px', borderRadius: 'var(--radius-md)' }} 
              title="Support Coordination Referral Form"
            ></iframe>
          </div>
        )}

        {activeForm === 'pbs' && (
          <div className="fade-in">
            <div className="flex justify-between items-center mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 className="text-xl" style={{ color: 'var(--primary-dark)' }}>Positive Behaviour Support Form</h3>
              <button 
                onClick={() => setActiveForm(null)} 
                className="text-muted" 
                style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
              >
                ← Back to Service Selection
              </button>
            </div>
            <iframe 
              src="https://www.cognitoforms.com/DyarPTYLTD/PBSReferralFormDYAR" 
              style={{ border: 0, width: '100%', height: '800px', borderRadius: 'var(--radius-md)' }} 
              title="PBS Referral Form"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Referral;
