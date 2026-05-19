import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Globe, Plus, Minus, ArrowRight, Laptop, Server, CheckCircle, HelpCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesTranslations } from '../data/servicesData';
import { languages } from '../data/resourcesData'; // Reusing the language definitions

const Services = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  
  const location = useLocation();
  const serviceT = servicesTranslations[selectedLang as keyof typeof servicesTranslations] || servicesTranslations.en;
  const currentDir = ['ar', 'fa'].includes(selectedLang) ? 'rtl' : 'ltr';

  // Handle scrolling to specific service hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-24">
      {/* Header Area */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white pt-20 pb-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6" dir={currentDir}>
              {serviceT.sectionTitle} <span className="text-[#6A0DAD]">{serviceT.sectionTitleHL}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto" dir={currentDir}>
              {serviceT.sectionSubtitle}
            </p>

            {/* Language Selector */}
            <div className="flex justify-center overflow-x-auto no-scrollbar pb-2">
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-200">
                <Globe size={18} className="text-gray-400 mx-2 shrink-0" />
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${selectedLang === lang.code ? 'bg-[#6A0DAD] text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12" dir={currentDir}>
          
          {Object.entries(serviceT.services).map(([key, service]) => (
            <div key={key} id={key} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0">
                  <CheckCircle size={28} className="text-[#6A0DAD]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-purple-600 font-medium mt-1">{service.desc}</p>
                </div>
              </div>

              <div className="bg-purple-50/50 p-6 rounded-2xl mb-8 border border-purple-100">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">{service.explanation}</p>
                <div className="flex items-start gap-2 text-sm text-gray-600 bg-white p-4 rounded-xl border border-purple-100">
                  <ShieldCheck size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="font-medium">{service.pricing}</p>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <HelpCircle size={20} className="text-[#6A0DAD]" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, index) => {
                    const faqId = `${key}-faq-${index}`;
                    const isExpanded = expandedFaq === faqId;
                    
                    return (
                      <div key={faqId} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-sm' : 'border-gray-200 hover:border-purple-200'}`}>
                        <button
                          onClick={() => toggleFaq(faqId)}
                          className={`w-full flex items-center justify-between p-4 text-left transition-colors ${isExpanded ? 'bg-purple-50 text-purple-900' : 'bg-white text-gray-800'}`}
                        >
                          <span className="font-bold text-base pr-4">{faq.q}</span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-400'}`}>
                            {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                          </div>
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-4 pt-0 bg-purple-50 border-t border-purple-100">
                            <p className="mt-2 text-gray-700 leading-relaxed text-base">{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                <Link to="/referral" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-md transition-all active:scale-95">
                  Request Service <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}

          {/* Software Services (Coming Soon) */}
          <div className="group bg-slate-50 rounded-3xl shadow-sm border border-slate-200 transition-all duration-300 relative overflow-hidden mt-12 ltr" dir="ltr">
            {/* Header Area */}
            <div className="bg-[#1e1b4b] p-8 md:p-12 text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Server size={150} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Laptop className="text-purple-400" size={32} />
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Software Services</h2>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold border tracking-widest uppercase bg-amber-500/20 text-amber-300 border-amber-500/50 ml-2">Coming Soon</span>
                </div>
                <h3 className="text-xl text-purple-200 font-semibold mb-6">More than an NDIS provider</h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  DYAR Pty Ltd operates two distinct business lines. The first is the NDIS service delivery you can read about above. The second is a software-as-a-service business currently in development — built around a simple belief: <strong>technology should make disability supports easier to find, easier to access, and easier to navigate.</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
