import React, { useState } from 'react';
import { submitReferral } from '../api';
import { ShieldCheck, UserCircle, Activity, ClipboardList, AlertTriangle, MessageSquare, CheckCircle, Lock } from 'lucide-react';

const Referral = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Comprehensive Form State
  const [formData, setFormData] = useState({
    // Core Backend Fields
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    ndis_number: '',
    service_requested: 'Community Access',
    
    // Section 1 - Referrer
    referrer_name: '',
    referrer_org: '',
    relationship: 'Support Coordinator',
    urgency: 'Standard',
    
    // Section 2 - Participant 
    dob: '',
    address: '',
    primary_disability: '',
    plan_management: 'NDIA-managed',
    
    // Section 3 & 4 - Reason & Funding
    primary_reason: '',
    funding_category: 'Core',
    
    // Section 5 & 6 - Context & Team
    clinical_context: '',
    treating_team: '',
    
    // Section 7 - Risk
    risk_suicide: false,
    risk_harm: false,
    risk_behaviours: false,
    risk_substance: false,
    risk_notes: '',
    
    // Section 8 - Comm & Culture
    pref_language: 'English',
    interpreter: 'No',
    atsi: 'No',
    
    // Section 9 - Consent
    consent_aware: false,
    consent_share: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const generateMessagePayload = () => {
    return `
### NDIS Comprehensive Intake Form
**Service Requested:** ${formData.service_requested}
**Urgency:** ${formData.urgency}

---
#### Section 1: Referrer Details
- Referrer: ${formData.referrer_name} (${formData.referrer_org})
- Relationship: ${formData.relationship}

#### Section 2: Participant Details
- DOB: ${formData.dob}
- Address: ${formData.address}
- Primary Disability: ${formData.primary_disability}
- Plan Management: ${formData.plan_management}

#### Section 3 & 4: Reason & Funding
- Funding Category: ${formData.funding_category}
- Primary Reason for Referral: ${formData.primary_reason}

#### Section 5 & 6: Clinical Context & Team
- Clinical Context: ${formData.clinical_context}
- Treating Team: ${formData.treating_team}

#### Section 7: Risk Information
- Suicide/Self-harm History: ${formData.risk_suicide ? 'YES' : 'No'}
- Risk of Harm to Others: ${formData.risk_harm ? 'YES' : 'No'}
- Behaviours of Concern: ${formData.risk_behaviours ? 'YES' : 'No'}
- Substance Use: ${formData.risk_substance ? 'YES' : 'No'}
- Risk Notes: ${formData.risk_notes}

#### Section 8: Communication & Culture
- Language: ${formData.pref_language} (Interpreter: ${formData.interpreter})
- Aboriginal / Torres Strait Islander: ${formData.atsi}

#### Section 9: Consent
- Participant Aware: ${formData.consent_aware ? 'YES' : 'NO'}
- Consent to Share Info: ${formData.consent_share ? 'YES' : 'NO'}
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent_aware) {
      setStatus('Error: DYAR cannot proceed without the participant being aware of the referral.');
      return;
    }

    setIsSubmitting(true);
    setStatus('Encrypting and submitting securely to DYAR...');
    
    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      ndis_number: formData.ndis_number,
      service_requested: formData.service_requested,
      message: generateMessagePayload()
    };

    try {
      await submitReferral(payload);
      setStatus('Success! Your referral has been securely submitted. Acknowledgment will be sent within 2 business days.');
      // Keep form data on success or redirect, for now just show success message
    } catch (error) {
      setStatus('Error submitting referral. Please ensure all required fields are filled.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6">
            <Lock size={40} />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Make a Secure Referral</h1>
          <p className="text-lg text-gray-600">Please fill out the form below. Your data is encrypted and securely stored in compliance with the Privacy Act 1988 (Cth).</p>
        </div>

        {status && (
          <div className={`p-6 mb-8 rounded-2xl flex items-center font-bold shadow-sm ${status.includes('Success') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : status.includes('Encrypting') ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Referrer Details */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <UserCircle className="text-purple-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Section 1 — Referrer Details</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Referrer's Name</label>
                <input type="text" name="referrer_name" value={formData.referrer_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Organisation</label>
                <input type="text" name="referrer_org" value={formData.referrer_org} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Relationship to Participant</label>
                <select name="relationship" value={formData.relationship} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 outline-none">
                  <option>Self</option>
                  <option>Family / Nominee</option>
                  <option>Support Coordinator</option>
                  <option>GP / Specialist</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Urgency</label>
                <select name="urgency" value={formData.urgency} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 outline-none">
                  <option>Standard (within 14 days)</option>
                  <option>Priority (within 7 days)</option>
                  <option>Crisis (within 48 hrs)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Participant Details */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <ClipboardList className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Section 2 — Participant Details</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Participant First Name *</label>
                <input type="text" name="first_name" required value={formData.first_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Participant Last Name *</label>
                <input type="text" name="last_name" required value={formData.last_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Participant Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Participant Phone *</label>
                <input type="text" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">NDIS Number</label>
                <input type="text" name="ndis_number" value={formData.ndis_number} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Residential Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Primary Disability</label>
                <input type="text" name="primary_disability" value={formData.primary_disability} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Plan Management</label>
                <select name="plan_management" value={formData.plan_management} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>NDIA-managed</option>
                  <option>Plan-managed</option>
                  <option>Self-managed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3 & 4: Service & Reason */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <Activity className="text-emerald-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Section 3 & 4 — Service Requested</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Requested *</label>
                <select name="service_requested" value={formData.service_requested} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none">
                  <option value="Community Access">Community Access</option>
                  <option value="Core Support">Core Support (Daily Living)</option>
                  <option value="Consumables">Consumables</option>
                  <option value="Specialist Behaviour Support">Specialist Behaviour Support (PBS)</option>
                  <option value="Psychosocial Recovery Coach">Psychosocial Recovery Coach</option>
                  <option value="Specialist Disability Accommodation">Specialist Disability Accommodation (SDA)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Funding Category</label>
                <select name="funding_category" value={formData.funding_category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none">
                  <option>Core</option>
                  <option>Capacity Building</option>
                  <option>Capital</option>
                  <option>SDA</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Primary Reason for Referral (in your own words)</label>
              <textarea name="primary_reason" rows={3} value={formData.primary_reason} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none"></textarea>
            </div>
          </div>

          {/* Section 5 & 6: Context */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <MessageSquare className="text-indigo-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Section 5 & 6 — Clinical Context</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Clinical / Support Context</label>
                <p className="text-xs text-gray-500 mb-2">Please include relevant details such as sensory needs, hobbies, mobility profile, product sizes (if consumables), or existing BSP details.</p>
                <textarea name="clinical_context" rows={4} value={formData.clinical_context} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Existing Services & Treating Team</label>
                <p className="text-xs text-gray-500 mb-2">List GP, Specialists, Support Coordinators, and Allied Health contacts.</p>
                <textarea name="treating_team" rows={3} value={formData.treating_team} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none"></textarea>
              </div>
            </div>
          </div>

          {/* Section 7: Risk */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <AlertTriangle className="text-rose-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Section 7 — Risk Information</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">Knowing about risk factors early helps DYAR allocate the right practitioner and plan the safest engagement. Please tick if present.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" name="risk_suicide" checked={formData.risk_suicide} onChange={handleChange} className="w-5 h-5 rounded text-rose-600 focus:ring-rose-500" />
                <span className="font-medium text-gray-700">Suicide / self-harm history</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" name="risk_harm" checked={formData.risk_harm} onChange={handleChange} className="w-5 h-5 rounded text-rose-600 focus:ring-rose-500" />
                <span className="font-medium text-gray-700">Risk of harm to others</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" name="risk_behaviours" checked={formData.risk_behaviours} onChange={handleChange} className="w-5 h-5 rounded text-rose-600 focus:ring-rose-500" />
                <span className="font-medium text-gray-700">Behaviours of concern</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" name="risk_substance" checked={formData.risk_substance} onChange={handleChange} className="w-5 h-5 rounded text-rose-600 focus:ring-rose-500" />
                <span className="font-medium text-gray-700">Substance use</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Risk Notes</label>
              <textarea name="risk_notes" rows={2} value={formData.risk_notes} onChange={handleChange} placeholder="If any boxes are ticked, please provide brief details here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-600 outline-none"></textarea>
            </div>
          </div>

          {/* Section 8 & 9: Consent */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <ShieldCheck className="text-purple-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Section 8 & 9 — Consent & Finalisation</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Language</label>
                <input type="text" name="pref_language" value={formData.pref_language} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Interpreter Required?</label>
                <select name="interpreter" value={formData.interpreter} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 outline-none">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 space-y-4 mb-8">
              <h3 className="font-bold text-purple-900 mb-2">Privacy & Consent Declarations</h3>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="consent_aware" required checked={formData.consent_aware} onChange={handleChange} className="w-5 h-5 mt-0.5 rounded text-purple-600 focus:ring-purple-500" />
                <span className="text-sm font-medium text-purple-900">
                  Yes, the participant is aware of this referral. <br/>
                  <span className="text-xs text-purple-700 font-normal">(DYAR cannot proceed without informing the participant)</span>
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="consent_share" checked={formData.consent_share} onChange={handleChange} className="w-5 h-5 mt-0.5 rounded text-purple-600 focus:ring-purple-500" />
                <span className="text-sm font-medium text-purple-900">
                  Consent is granted to share clinical information with DYAR for the purpose of intake assessment.
                </span>
              </label>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center px-8 py-5 text-lg font-bold rounded-2xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-lg transition-all active:scale-[0.98] disabled:opacity-70">
              {isSubmitting ? 'Securing Data & Submitting...' : 'Submit Secure Referral'} <CheckCircle size={20} className="ml-2" />
            </button>
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-500 text-center leading-relaxed">
              <strong>Where DYAR stores referral information:</strong> Referrals received via this form are stored in DYAR's case management system, compliance system, and Microsoft 365. All systems are hosted in Australia. Access is restricted by role and protected by Multi-Factor Authentication. 
              <br/><br/>
              DYAR Pty Ltd · An NDIS Service Provider on Whadjuk Country
            </div>

          </div>

        </form>
      </div>
    </div>
  );
};

export default Referral;
