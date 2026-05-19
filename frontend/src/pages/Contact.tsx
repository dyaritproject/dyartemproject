import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-white pt-20 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-6">
            <MessageSquare size={15} />
            <span>We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Contact <span className="text-[#6A0DAD]">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Whether you're a participant, family member, plan manager, or referring professional, we'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-500 mb-2">Speak directly with our friendly team.</p>
                  <a href="tel:0470540306" className="text-purple-600 hover:text-purple-800 transition-colors text-lg font-bold">0470 540 306</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-500 mb-2">For general enquiries and software waitlist.</p>
                  <a href="mailto:hello@dyar.com.au" className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-bold">hello@dyar.com.au</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-500 mb-2">Western Australia</p>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 inline-block">
                    <p className="text-gray-800 font-medium mb-1"><span className="text-gray-500 text-sm mr-2">Registered Office:</span></p>
                    <p className="text-gray-700">Unit 1, 136 Main Street<br/>Osborne Park WA 6017</p>
                    <div className="w-full h-px bg-gray-200 my-3"></div>
                    <p className="text-gray-800 font-medium mb-1"><span className="text-gray-500 text-sm mr-2">Postal Address:</span></p>
                    <p className="text-gray-700">PO Box 8052<br/>East Subiaco WA 6008</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-700 font-medium">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-500 text-sm">Closed on WA Public Holidays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {/* NDIS Referral Card */}
            <div className="bg-gradient-to-br from-[#1e1b4b] to-purple-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-xl h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <MessageSquare size={120} />
              </div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">Make an NDIS Referral</h3>
              <p className="text-purple-200 mb-8 relative z-10 text-lg leading-relaxed">
                Ready to engage our services? Our secure referral form is the fastest way to get started. It's fully encrypted to protect participant privacy.
              </p>
              <div className="mt-auto">
                <a href="/referral" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-purple-900 bg-white hover:bg-gray-100 transition-all shadow-md active:scale-95 relative z-10 w-full sm:w-auto">
                  Open Secure Referral Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Feedback & Reporting Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Dedicated Feedback &amp; Reporting</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We want to make sure you get the right help without feeling overwhelmed. Please select the option that best describes why you are contacting us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Report Abuse */}
          <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100 hover:shadow-lg transition-all flex flex-col">
            <h3 className="text-xl font-bold text-rose-900 mb-3">Report Abuse or Neglect</h3>
            <p className="text-rose-700 mb-6 text-sm flex-1 leading-relaxed">
              If you or someone else is experiencing abuse, neglect, or exploitation, please report it immediately. Your safety is our absolute priority.
            </p>
            <a href="mailto:safeguarding@dyar.com.au?subject=URGENT:%20Report%20Abuse" className="inline-flex items-center justify-center px-4 py-3 font-bold rounded-xl text-white bg-rose-600 hover:bg-rose-700 transition-colors w-full">
              Report Abuse
            </a>
          </div>

          {/* Report Misconduct */}
          <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 hover:shadow-lg transition-all flex flex-col">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Report Misconduct</h3>
            <p className="text-amber-800 mb-6 text-sm flex-1 leading-relaxed">
              Report unethical behaviour, breaches of privacy, or unprofessional conduct by any of our staff members safely and confidentially.
            </p>
            <a href="mailto:hello@dyar.com.au?subject=CONFIDENTIAL:%20Report%20Misconduct" className="inline-flex items-center justify-center px-4 py-3 font-bold rounded-xl text-white bg-amber-600 hover:bg-amber-700 transition-colors w-full">
              Report Misconduct
            </a>
          </div>

          {/* Make a Complaint */}
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-all flex flex-col">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Make a Complaint</h3>
            <p className="text-blue-800 mb-6 text-sm flex-1 leading-relaxed">
              If you are unhappy with our service delivery or a specific process, let us know so we can investigate and fix it promptly.
            </p>
            <a href="mailto:hello@dyar.com.au?subject=Complaint" className="inline-flex items-center justify-center px-4 py-3 font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors w-full">
              Lodge Complaint
            </a>
          </div>

          {/* Provide Feedback */}
          <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-all flex flex-col">
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Share Feedback</h3>
            <p className="text-emerald-800 mb-6 text-sm flex-1 leading-relaxed">
              Tell us what we are doing well, or suggest ways we can improve our services. We view all feedback as a gift.
            </p>
            <a href="mailto:hello@dyar.com.au?subject=General%20Feedback" className="inline-flex items-center justify-center px-4 py-3 font-bold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-colors w-full">
              Provide Feedback
            </a>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
