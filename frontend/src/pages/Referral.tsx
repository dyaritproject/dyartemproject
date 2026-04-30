import React, { useState } from 'react';
import { submitReferral } from '../api';

const Referral = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    ndis_number: '',
    service_requested: 'Support Coordination',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting securely to AWS Database...');
    try {
      await submitReferral(formData);
      setStatus('Success! Your referral has been securely submitted. We will be in touch shortly.');
      setFormData({ first_name: '', last_name: '', email: '', phone: '', ndis_number: '', service_requested: 'Support Coordination', message: '' });
    } catch (error) {
      setStatus('Error submitting referral. Please ensure the backend database is running.');
    }
  };

  return (
    <div className="container py-16 fade-in">
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
        <h2 className="text-4xl mb-2 text-center">Make a Secure Referral</h2>
        <p className="text-muted text-center mb-8">Please fill out the form below. Your data is encrypted and securely stored.</p>

        {status && (
          <div style={{ padding: '1rem', marginBottom: '2rem', borderRadius: 'var(--radius-md)', backgroundColor: status.includes('Success') ? '#D1FAE5' : '#FEE2E2', color: status.includes('Success') ? '#065F46' : '#991B1B' }}>
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="flex gap-4">
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>First Name *</label>
              <input type="text" name="first_name" required value={formData.first_name} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E5E7EB' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Last Name *</label>
              <input type="text" name="last_name" required value={formData.last_name} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E5E7EB' }} />
            </div>
          </div>

          <div className="flex gap-4">
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E5E7EB' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Phone *</label>
              <input type="text" name="phone" required value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E5E7EB' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>NDIS Number</label>
            <input type="text" name="ndis_number" value={formData.ndis_number} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E5E7EB' }} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Service Requested *</label>
            <select name="service_requested" value={formData.service_requested} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E5E7EB', backgroundColor: 'var(--white)' }}>
              <option value="Support Coordination">Support Coordination</option>
              <option value="PBS">Positive Behaviour Support (PBS)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Additional Information</label>
            <textarea name="message" rows={4} value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E5E7EB', resize: 'vertical' }}></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>Submit Secure Referral</button>
        </form>
      </div>
    </div>
  );
};

export default Referral;
