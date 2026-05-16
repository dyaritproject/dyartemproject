import { Link } from 'react-router-dom';
import { MessageSquare, ShieldCheck, AlertTriangle, Phone, Mail, FileText } from 'lucide-react';

const Support = () => {
  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen pb-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-slate-50 pt-24 pb-16 border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6A0DAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Support &amp; <span className="text-[#6A0DAD]">Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Your feedback matters. As a registered NDIS provider, Dyar Pty Ltd is committed to transparency, safety, and continuous improvement.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Feedback & Complaints */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-purple-200 transition-all">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare className="text-[#6A0DAD]" size={28} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Feedback &amp; Complaints</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We welcome all feedback. If you are unsatisfied with any aspect of our service, please let us know and we will work to resolve it promptly and respectfully.
            </p>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              <li className="flex items-center gap-2"><Phone size={14} className="text-[#6A0DAD] shrink-0" /> <span>Call us: <strong>1300 XXX XXX</strong></span></li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-[#6A0DAD] shrink-0" /> <span>Email: <strong>complaints@dyar.com.au</strong></span></li>
            </ul>
            <p className="text-xs text-gray-400 leading-relaxed">
              You may also contact the <a href="https://www.ndiscommission.gov.au/participants/complaints" target="_blank" rel="noreferrer" className="text-[#6A0DAD] underline font-medium">NDIS Quality and Safeguards Commission</a> directly.
            </p>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-purple-200 transition-all">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-[#6A0DAD]" size={28} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Privacy Policy</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Dyar Pty Ltd is committed to protecting your personal information in accordance with the Australian Privacy Act 1988 and the NDIS Act 2013.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#6A0DAD] font-bold mt-0.5">→</span> We collect only information necessary to deliver your supports.</li>
              <li className="flex items-start gap-2"><span className="text-[#6A0DAD] font-bold mt-0.5">→</span> Your data is stored securely and never sold to third parties.</li>
              <li className="flex items-start gap-2"><span className="text-[#6A0DAD] font-bold mt-0.5">→</span> You have the right to access, correct, or delete your information at any time.</li>
              <li className="flex items-start gap-2"><span className="text-[#6A0DAD] font-bold mt-0.5">→</span> We use your information only for the provision of NDIS services.</li>
            </ul>
          </div>

          {/* Incident Reporting */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:border-purple-200 transition-all">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <AlertTriangle className="text-red-500" size={28} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Incident Reporting</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              As a registered NDIS provider, Dyar Pty Ltd is legally required to report certain incidents to the NDIS Commission within specific timeframes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">→</span> Reportable incidents are managed in accordance with NDIS Practice Standards.</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">→</span> Participants and families will be notified of any relevant incidents.</li>
              <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">→</span> Our incident register is reviewed regularly by management.</li>
            </ul>
            <a
              href="/sample-form.pdf"
              download="Incident_Report_Template.pdf"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#6A0DAD] hover:text-purple-800 transition-colors"
            >
              <FileText size={16} /> Download Incident Report Form
            </a>
          </div>
        </div>

        {/* NDIS Commission Banner */}
        <div className="bg-gradient-to-r from-[#6A0DAD] to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">NDIS Quality &amp; Safeguards Commission</h2>
          <p className="text-purple-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            If you are not satisfied with how Dyar Pty Ltd has handled your feedback or complaint, you have the right to contact the NDIS Commission directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ndiscommission.gov.au/participants/complaints"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#6A0DAD] font-bold rounded-xl hover:bg-purple-50 transition-colors"
            >
              Visit NDIS Commission
            </a>
            <Link
              to="/referral"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Make a Referral
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
