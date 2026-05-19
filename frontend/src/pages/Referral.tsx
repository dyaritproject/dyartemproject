import React, { useState } from 'react';
import { submitReferral } from '../api';
import { ShieldCheck, UserCircle, Activity, ClipboardList, AlertTriangle, MessageSquare, CheckCircle, Lock, Heart, Hash, UploadCloud } from 'lucide-react';

const Referral = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

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
    urgency: 'Standard (within 14 days)',
    
    // Section 2 - Participant 
    preferred_name: '',
    dob: '',
    address: '',
    primary_disability: '',
    plan_management: 'NDIA-managed',
    plan_manager_details: '',
    
    // Section 3 & 4 - Reason & Funding
    primary_reason: '',
    funding_category: 'Core',
    
    // SECTION 5A - Person-Centred Profile (V2 update)
    // Identity
    pronouns: '',
    title: '',
    atsi: 'No',
    culture_bg: '',
    languages_home: '',
    lgbtiqa: 'Prefer not to say',
    faith: '',
    faith_practices: '',
    
    // Food & Allergies
    food_pref: '',
    diet: '',
    food_allergies: '',
    epipen: 'No',
    med_allergies: '',
    env_allergies: '',
    
    // Medications
    meds_list: '',
    who_manages_meds: 'Self',
    
    // Sensory
    sensory_likes: '',
    sensory_overwhelm: '',
    sensory_tools: '',
    best_time: 'Flexible',
    
    // Interests
    hobbies: '',
    pets: '',
    goals_6mo: '',
    
    // Support Preferences
    comm_style: '',
    feel_safe: '',
    dont_work: '',
    worker_pref: '',
    important_people: '',
    not_involved: '',
    
    // Routines
    routine_wake: '',
    routine_meal: '',
    routine_care: '',
    
    // Section 5B & 6 - Context & Team
    clinical_context: '',
    treating_team: '',
    
    // Section 7 - Risk
    risk_suicide: false,
    risk_harm: false,
    risk_behaviours: false,
    risk_substance: false,
    risk_notes: '',
    
    // Section 8 & 9 - Consent
    pref_language: 'English',
    interpreter: 'No',
    consent_aware: false,
    consent_share: false,
    consent_contact: false
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
- Name: ${formData.first_name} ${formData.last_name}
- Preferred Name: ${formData.preferred_name} (Pronouns: ${formData.pronouns})
- DOB: ${formData.dob}
- Address: ${formData.address}
- Primary Disability: ${formData.primary_disability}
- Plan Management: ${formData.plan_management}
- Plan Manager Details: ${formData.plan_manager_details}

#### Section 3 & 4: Reason & Funding
- Funding Category: ${formData.funding_category}
- Primary Reason for Referral: ${formData.primary_reason}
- NDIS Plan Attached: ${attachedFile ? 'Yes (' + attachedFile.name + ')' : 'No'}

#### Section 5A: Person-Centred Profile (About Me)
**Identity & Culture:**
- ATSI: ${formData.atsi}
- Cultural Background: ${formData.culture_bg}
- Languages at home: ${formData.languages_home}
- LGBTIQA+: ${formData.lgbtiqa}
- Faith: ${formData.faith} (Practices: ${formData.faith_practices})

**Health, Food & Allergies:**
- Dietary Needs: ${formData.diet}
- Food Allergies: ${formData.food_allergies} (EpiPen: ${formData.epipen})
- Med Allergies: ${formData.med_allergies}
- Environmental Allergies: ${formData.env_allergies}
- Medications: ${formData.meds_list} (Managed by: ${formData.who_manages_meds})

**Sensory & Support Preferences:**
- Likes: ${formData.sensory_likes}
- Overwhelming things: ${formData.sensory_overwhelm}
- Helpful tools: ${formData.sensory_tools}
- Best time for support: ${formData.best_time}
- Communication Style: ${formData.comm_style}
- Things that help me feel safe: ${formData.feel_safe}
- Things that don't work: ${formData.dont_work}
- Worker preferences: ${formData.worker_pref}
- Important people: ${formData.important_people} (Do not involve: ${formData.not_involved})

**Interests & Routines:**
- Hobbies: ${formData.hobbies}
- Pets: ${formData.pets}
- Wake Routine: ${formData.routine_wake}
- Meal Routine: ${formData.routine_meal}

#### Section 5B & 6: Clinical Context & Team
- ${formData.service_requested} Specific Context: ${formData.clinical_context}
- Treating Team: ${formData.treating_team}

#### Section 7: Risk Information
- Suicide/Self-harm History: ${formData.risk_suicide ? 'YES' : 'No'}
- Risk of Harm to Others: ${formData.risk_harm ? 'YES' : 'No'}
- Behaviours of Concern: ${formData.risk_behaviours ? 'YES' : 'No'}
- Substance Use: ${formData.risk_substance ? 'YES' : 'No'}
- Risk Notes: ${formData.risk_notes}

#### Section 8 & 9: Consent
- Interpreter Required: ${formData.interpreter} (Language: ${formData.pref_language})
- Participant Aware: ${formData.consent_aware ? 'YES' : 'NO'}
- Consent to Share Info: ${formData.consent_share ? 'YES' : 'NO'}
- Consent to Contact & Send Service Agreement: ${formData.consent_contact ? 'YES' : 'NO'}
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent_aware) {
      setStatus('Error: DYAR cannot proceed without the participant being aware of the referral.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setStatus('Encrypting and submitting securely to DYAR...');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#6A0DAD] text-white shadow-lg mb-6">
            <Lock size={36} />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Make a Secure Referral</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Please fill out the form below. Your data is encrypted and securely stored in compliance with the Privacy Act 1988 (Cth).</p>
        </div>

        {status && (
          <div className={`p-6 mb-8 rounded-2xl flex items-center font-bold shadow-sm ${status.includes('Success') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : status.includes('Encrypting') ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Referrer Details */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <UserCircle className="text-[#6A0DAD]" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Section 1 — Referrer Details</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Referrer's Name</label>
                <input type="text" name="referrer_name" value={formData.referrer_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Organisation</label>
                <input type="text" name="referrer_org" value={formData.referrer_org} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Relationship to Participant</label>
                <select name="relationship" value={formData.relationship} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none">
                  <option>Self</option>
                  <option>Family / Nominee</option>
                  <option>Support Coordinator</option>
                  <option>GP / Specialist</option>
                  <option>NDIA / LAC</option>
                  <option>Hospital / discharge</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Urgency</label>
                <select name="urgency" value={formData.urgency} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none">
                  <option>Standard (within 14 days)</option>
                  <option>Priority (within 7 days)</option>
                  <option>Crisis (within 48 hrs)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Participant Details */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <ClipboardList className="text-[#6A0DAD]" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Section 2 — Participant Details</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                <input type="text" name="first_name" required value={formData.first_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                <input type="text" name="last_name" required value={formData.last_name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Participant Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Participant Phone *</label>
                <input type="text" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">NDIS Number</label>
                <input type="text" name="ndis_number" value={formData.ndis_number} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Residential Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Primary Disability / Diagnosis</label>
                <input type="text" name="primary_disability" value={formData.primary_disability} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Plan Management</label>
                <select name="plan_management" value={formData.plan_management} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none">
                  <option>NDIA-managed</option>
                  <option>Plan-managed</option>
                  <option>Self-managed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3 & 4: Service & Reason */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <Activity className="text-[#6A0DAD]" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Section 3 & 4 — Service Requested</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Requested *</label>
                <select name="service_requested" value={formData.service_requested} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none bg-purple-50">
                  <option value="Community Access">Community Access</option>
                  <option value="Consumables">Consumables</option>
                  <option value="Core Support">Core Support</option>
                  <option value="Psychosocial Recovery Coach">Psychosocial Recovery Coach</option>
                  <option value="Specialist Behaviour Support">Specialist Behaviour Support</option>
                  <option value="Specialist Disability Accommodation">Specialist Disability Accommodation (SDA)</option>
                  <option value="Specialist Support Coordination">Specialist Support Coordination</option>
                  <option value="Therapeutic Supports">Therapeutic Supports</option>
                  <option value="Transport">Transport</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Funding Category</label>
                <select name="funding_category" value={formData.funding_category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none">
                  <option>Core</option>
                  <option>Capacity Building</option>
                  <option>Capital</option>
                  <option>SDA</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Primary Reason for Referral (in your own words)</label>
              <textarea name="primary_reason" rows={3} value={formData.primary_reason} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none resize-y"></textarea>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <label className="block text-sm font-bold text-blue-900 mb-2">Attach NDIS Plan (Optional)</label>
              <p className="text-xs text-blue-700 mb-4">Please upload a copy of the participant's current NDIS plan if available. This helps us ensure adequate funding for the requested service.</p>
              <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-200 border-dashed rounded-xl cursor-pointer bg-white hover:bg-blue-50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <UploadCloud className="w-8 h-8 text-blue-500 mb-2" />
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500">PDF, DOCX, or JPG (MAX. 10MB)</p>
                      </div>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={(e) => setAttachedFile(e.target.files ? e.target.files[0] : null)} />
                  </label>
              </div>
              {attachedFile && (
                <div className="mt-4 p-3 bg-white border border-blue-200 rounded-lg flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{attachedFile.name}</span>
                  <button type="button" onClick={() => setAttachedFile(null)} className="text-red-500 hover:text-red-700 text-sm font-bold">Remove</button>
                </div>
              )}
            </div>
          </div>

          {/* Section 5A: About Me (Person-Centred Profile) */}
          <div className="bg-[#FAF5FF] rounded-3xl p-6 md:p-10 shadow-sm border border-purple-100">
            <div className="flex items-center gap-3 mb-4 border-b border-purple-200 pb-4">
              <Heart className="text-[#6A0DAD]" size={28} />
              <h2 className="text-2xl font-bold text-[#6A0DAD]">Section 5A — About Me (Person-Centred Profile)</h2>
            </div>
            <p className="text-gray-600 mb-8">DYAR designs supports around YOU. Please fill in as much as you're comfortable sharing. Anything you'd rather discuss in person, you can leave blank.</p>
            
            <div className="space-y-8">
              {/* Identity */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Hash size={18}/> Identity, Culture & Community</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Preferred Name</label><input type="text" name="preferred_name" value={formData.preferred_name} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Pronouns</label><input type="text" name="pronouns" value={formData.pronouns} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200" placeholder="e.g. she/her, they/them" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Aboriginal / Torres Strait Islander?</label>
                    <select name="atsi" value={formData.atsi} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200">
                      <option>No</option><option>Yes - Aboriginal</option><option>Yes - Torres Strait Islander</option><option>Yes - Both</option><option>Prefer not to say</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">CaLD / Cultural Background</label><input type="text" name="culture_bg" value={formData.culture_bg} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200" placeholder="e.g. Persian, Vietnamese, etc." /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">LGBTIQA+ Community?</label>
                    <select name="lgbtiqa" value={formData.lgbtiqa} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200">
                      <option>Prefer not to say</option><option>Yes</option><option>No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Food & Health */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Hash size={18}/> Food, Allergies & Medications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Dietary Requirements</label><input type="text" name="diet" value={formData.diet} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200" placeholder="e.g. Halal, Gluten-free, PEG-fed" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Food Allergies</label><input type="text" name="food_allergies" value={formData.food_allergies} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200" /></div>
                  <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">Current Medications (List all or describe)</label><textarea name="meds_list" value={formData.meds_list} onChange={handleChange} rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200"></textarea></div>
                </div>
              </div>

              {/* Sensory & Support */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Hash size={18}/> Sensory & Support Preferences</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Things I find OVERWHELMING</label><textarea name="sensory_overwhelm" value={formData.sensory_overwhelm} onChange={handleChange} rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200" placeholder="e.g. loud noises, bright lights"></textarea></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Things that help me feel SAFE</label><textarea name="feel_safe" value={formData.feel_safe} onChange={handleChange} rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200"></textarea></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Preferred Worker Gender</label>
                    <select name="worker_pref" value={formData.worker_pref} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200">
                      <option>No preference</option><option>Female</option><option>Male</option><option>Non-binary</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Preferred Day(s) of Support</label><input type="text" name="best_time" value={formData.best_time} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200" placeholder="e.g. Mondays, Weekends, Flexible" /></div>

                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Best Method of Communication</label>
                    <select name="comm_style" value={formData.comm_style} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200">
                      <option>Email</option><option>Phone Call</option><option>Text Message / SMS</option><option>Through Nominee</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Important People in my life</label><input type="text" name="important_people" value={formData.important_people} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200" placeholder="e.g. Mother, Support Coordinator" /></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5B & 6: Context */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <MessageSquare className="text-[#6A0DAD]" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Section 5B & 6 — Service Specific Context & Team</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <span className="text-[#6A0DAD]">{formData.service_requested}</span> — Clinical / Support Context
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  {formData.service_requested === 'Community Access' ? 'Please include preferred activities, transport readiness, group size tolerance, etc.' : 
                   formData.service_requested === 'Consumables' ? 'Please specify required products, sizes, quantities, and delivery instructions.' : 
                   formData.service_requested === 'Specialist Behaviour Support' ? 'Please include details on existing Behaviour Support Plans, restrictive practices, or current incidents.' : 
                   formData.service_requested === 'Specialist Disability Accommodation' ? 'Please include housing preferences, robust build requirements, and current living situation.' : 
                   'Include specifics relevant to the requested service.'}
                </p>
                <textarea name="clinical_context" rows={3} value={formData.clinical_context} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Existing Services & Treating Team</label>
                <p className="text-sm text-gray-500 mb-3">List GP, Specialists, Support Coordinators, and Allied Health contacts.</p>
                <textarea name="treating_team" rows={3} value={formData.treating_team} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#6A0DAD] outline-none"></textarea>
              </div>
            </div>
          </div>

          {/* Section 7: Risk */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <AlertTriangle className="text-rose-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Section 7 — Risk Information</h2>
            </div>
            <p className="text-base text-gray-600 mb-6">Knowing about risk factors early helps DYAR allocate the right practitioner and plan the safest engagement. Please tick if present.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" name="risk_suicide" checked={formData.risk_suicide} onChange={handleChange} className="w-6 h-6 rounded text-rose-600 focus:ring-rose-500" />
                <span className="font-medium text-gray-700">Suicide / self-harm history</span>
              </label>
              <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" name="risk_harm" checked={formData.risk_harm} onChange={handleChange} className="w-6 h-6 rounded text-rose-600 focus:ring-rose-500" />
                <span className="font-medium text-gray-700">Risk of harm to others</span>
              </label>
              <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" name="risk_behaviours" checked={formData.risk_behaviours} onChange={handleChange} className="w-6 h-6 rounded text-rose-600 focus:ring-rose-500" />
                <span className="font-medium text-gray-700">Behaviours of concern</span>
              </label>
              <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" name="risk_substance" checked={formData.risk_substance} onChange={handleChange} className="w-6 h-6 rounded text-rose-600 focus:ring-rose-500" />
                <span className="font-medium text-gray-700">Substance use history</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Risk Notes</label>
              <textarea name="risk_notes" rows={2} value={formData.risk_notes} onChange={handleChange} placeholder="If any boxes are ticked, please provide brief details here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-600 outline-none"></textarea>
            </div>
          </div>

          {/* Section 8 & 9: Consent */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <ShieldCheck className="text-emerald-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Section 8 & 9 — Consent & Finalisation</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Language</label>
                <input type="text" name="pref_language" value={formData.pref_language} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Interpreter Required?</label>
                <select name="interpreter" value={formData.interpreter} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-600 outline-none">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 md:p-8 rounded-2xl border border-emerald-100 space-y-5 mb-8">
              <h3 className="font-bold text-emerald-900 text-lg mb-2">Privacy & Consent Declarations</h3>
              
              <label className="flex items-start gap-4 cursor-pointer p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                <input type="checkbox" name="consent_aware" required checked={formData.consent_aware} onChange={handleChange} className="w-6 h-6 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500" />
                <span className="text-base font-medium text-emerald-900">
                  Yes, the participant is aware of this referral. <br/>
                  <span className="text-sm text-emerald-700 font-normal opacity-90">(DYAR cannot proceed without informing the participant)</span>
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                <input type="checkbox" name="consent_share" checked={formData.consent_share} onChange={handleChange} className="w-6 h-6 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500" />
                <span className="text-base font-medium text-emerald-900">
                  Consent is granted to share clinical information with DYAR for the purpose of intake assessment.
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer p-2 hover:bg-emerald-100/50 rounded-lg transition-colors">
                <input type="checkbox" name="consent_contact" checked={formData.consent_contact} onChange={handleChange} className="w-6 h-6 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500" />
                <span className="text-base font-medium text-emerald-900">
                  Consent is granted to contact the participant (or nominee) and send the Service Agreement and Consent forms.
                </span>
              </label>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center px-8 py-5 text-xl font-bold rounded-2xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-xl transition-all active:scale-[0.98] disabled:opacity-70">
              {isSubmitting ? 'Securing Data & Submitting...' : 'Submit Secure Referral'} <CheckCircle size={24} className="ml-3" />
            </button>
            
            <div className="mt-8 pt-8 border-t border-gray-100 text-sm text-gray-500 text-center leading-relaxed max-w-3xl mx-auto">
              <strong>Where DYAR stores referral information:</strong> Referrals received via this form are stored in DYAR's case management system (Splose), DYAR's compliance and document control system (Centro Assist), and Microsoft 365 (email + OneDrive). All systems are hosted in Australia. Access is restricted by role and protected by Multi-Factor Authentication. Full details are in DYAR's Privacy Policy.
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
