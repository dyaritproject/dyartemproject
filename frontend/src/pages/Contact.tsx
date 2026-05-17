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
            <div className="bg-gradient-to-br from-[#1e1b4b] to-purple-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <MessageSquare size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Make an NDIS Referral</h3>
              <p className="text-purple-200 mb-8 relative z-10">
                Ready to engage our services? Our secure referral form is the fastest way to get started. It's fully encrypted to protect participant privacy.
              </p>
              <a href="/referral" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-xl text-purple-900 bg-white hover:bg-gray-100 transition-all shadow-md active:scale-95 relative z-10">
                Open Secure Referral Form
              </a>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Feedback & Complaints</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                We view feedback as a gift. If you have a compliment, suggestion, or complaint, we want to hear about it. Your voice helps us improve our services and uphold our commitment to quality.
              </p>
              <a href="mailto:hello@dyar.com.au?subject=Feedback/Complaint" className="inline-flex items-center text-[#6A0DAD] font-bold hover:text-purple-800 transition-colors">
                Submit Feedback <span className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
