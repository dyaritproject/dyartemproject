import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle, Phone, Mail, AlertTriangle } from 'lucide-react';

const Home = () => {
  const services = [
    { name: 'Specialist Behaviour Support (PBS)', desc: 'Functional assessments and individualised PBS plans.' },
    { name: 'Specialist Disability Accommodation (SDA)', desc: 'Connecting participants to appropriate housing solutions.' },
    { name: 'Therapeutic Supports', desc: 'Allied health assessments and evidence-based interventions.' },
    { name: 'Psychosocial Recovery Coaching', desc: 'Supporting recovery and building resilience.' },
    { name: 'Early Childhood Supports', desc: 'Early intervention for children under 9 with developmental needs.' },
    { name: 'Core Civic & Social Participation', desc: 'Community Access, group activities, and social inclusion.' },
    { name: 'Core Support – Assistance with Daily Life', desc: 'Practical supports for everyday activities and independence.' },
    { name: 'Consumables & Transport', desc: 'Essential consumable supports and travel assistance.' },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5FF] via-white to-white pt-24 pb-20 border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6A0DAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-8 shadow-sm">
            <ShieldCheck size={16} />
            <span>An NDIS Service Provider</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Empowering Your Independence <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-[#6A0DAD]">Through Person-Centred Supports.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 font-medium mx-auto mb-10 leading-relaxed">
            Welcome to DYAR. We deliver professional, accessible, and high-quality services across Western Australia designed to help you exercise choice and control, build vital life skills, and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-xl shadow-purple-200 transition-all active:scale-95">
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-[#6A0DAD] bg-purple-50 hover:bg-purple-100 border border-purple-100 transition-all active:scale-95">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Public Audit Notice */}
      <section className="py-10 bg-amber-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-white rounded-2xl border border-amber-300 shadow-md p-6 md:p-8">
            <div className="flex-shrink-0 mt-1">
              <AlertTriangle size={28} className="text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                Public Notice: Upcoming NDIS Certification Audit
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                DYAR Pty Ltd is currently undergoing the formal process of registration with the NDIS Quality and Safeguards Commission. As part of this legislative licensing pathway, our comprehensive certification audit will be conducted by <strong>HDAA Australia Pty Ltd</strong> (an Approved NDIS Quality Auditor) this coming <strong>Wednesday, 20 May 2026</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to absolute transparency and welcoming community feedback. If you are a participant, family member, carer, or community stakeholder and would like to provide feedback regarding our service delivery models, or wish to participate in a confidential interview with the audit team, please contact HDAA directly:
              </p>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-4 space-y-2">
                <p className="font-bold text-gray-800">Audit Body: HDAA Australia Pty Ltd</p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone size={15} className="text-amber-600" />
                  <a href="tel:1800601696" className="hover:text-amber-700 font-semibold">1800 601 696</a>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail size={15} className="text-amber-600" />
                  <a href="mailto:info@hdaau.com.au" className="hover:text-amber-700 font-semibold">info@hdaau.com.au</a>
                </p>
              </div>
              <p className="text-sm text-gray-500 italic">
                Please note: Participation is entirely voluntary. Any feedback provided directly to HDAA remains strictly confidential and will have absolutely no impact on the continuity, funding, or quality of your supports with DYAR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our <span className="text-[#6A0DAD]">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              DYAR delivers a comprehensive suite of professional supports tailored to your unique NDIS plan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <CheckCircle size={16} className="text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-tight">{service.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-lg transition-all active:scale-95">
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Access Our Services */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">How to Access Our <span className="text-[#6A0DAD]">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We make it simple and stress-free to start your journey with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Consultation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Reach out for a free, no-obligation chat to discuss your needs and how we can support your NDIS goals.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-purple-200 -z-10"></div>
            </div>
            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intake & Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We work together to create a personalized service agreement and support plan tailored entirely to you.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-blue-200 -z-10"></div>
            </div>
            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our qualified practitioners begin delivering high-quality, compassionate, and evidence-based supports.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-emerald-200 -z-10"></div>
            </div>
            {/* Step 4 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Feedback & Review</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We regularly check in to ensure you are happy. We value your feedback as a gift to continuously improve.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
