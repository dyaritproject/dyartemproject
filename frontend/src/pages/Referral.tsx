import React, { useState } from 'react';
import { submitReferral } from '../api';
import { ShieldCheck } from 'lucide-react';

const Referral = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    ndis_number: '',
    service_requested: 'Core Civic & Social Participation',
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
      setFormData({ first_name: '', last_name: '', email: '', phone: '', ndis_number: '', service_requested: 'Core Civic & Social Participation', message: '' });
    } catch (error) {
      setStatus('Error submitting referral. Please ensure the backend database is running.');
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-800 to-blue-600 px-8 py-10 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <ShieldCheck size={120} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 relative z-10">Make a Secure Referral</h2>
            <p className="text-purple-100 text-lg relative z-10">Please fill out the form below. Your data is encrypted and securely stored.</p>
          </div>
          
          <div className="p-8 md:p-12">
            {status && (
              <div className={`p-4 mb-8 rounded-xl flex items-center font-medium ${status.includes('Success') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : status.includes('Submitting') ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                  <input type="text" name="first_name" required value={formData.first_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                  <input type="text" name="last_name" required value={formData.last_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                  <input type="text" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">NDIS Number</label>
                <input type="text" name="ndis_number" value={formData.ndis_number} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Requested *</label>
                <select name="service_requested" value={formData.service_requested} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer">
                  <option value="Core Civic & Social Participation">Core Civic & Social Participation (Community Access)</option>
                  <option value="PBS">Positive Behaviour Support (PBS)</option>
                  <option value="Other">Other / Unsure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Additional Information</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-y"></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 shadow-md transition-all active:scale-[0.98]">
                Submit Secure Referral
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
