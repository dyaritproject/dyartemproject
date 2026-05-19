import { useState, createElement } from 'react';
import { BookOpen, ChevronRight, FileText, Download, X, Globe, ChevronLeft, AlertTriangle, Phone, Mail, DollarSign, Calendar, MapPin, Building, Ear, HandHeart, CheckCircle, Heart, Info, ShieldCheck, Users } from 'lucide-react';
import { cm1Data, CM1Article } from '../data/cm1Data';
import cm1EasyReadData from '../data/cm1EasyReadData.json';

const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'zh', name: '中文 (Mandarin)', dir: 'ltr' },
  { code: 'ar', name: 'العربية (Arabic)', dir: 'rtl' },
  { code: 'hi', name: 'हिन्दी (Hindi)', dir: 'ltr' },
  { code: 'fa', name: 'فارسی (Persian)', dir: 'rtl' },
  { code: 'vi', name: 'Tiếng Việt (Vietnamese)', dir: 'ltr' }
];

const Hub = () => {
  const downloadableForms = [
    { name: 'Participant Intake Form 2026', size: '1.2 MB', ext: 'PDF' },
    { name: 'Incident Reporting Template', size: '450 KB', ext: 'DOCX' },
    { name: 'Service Agreement Guide', size: '2.1 MB', ext: 'PDF' },
    { name: 'Consent for Information Sharing', size: '1.8 MB', ext: 'PDF' }
  ];

  const [selectedArticle, setSelectedArticle] = useState<CM1Article | null>(null);
  const [selectedLang, setSelectedLang] = useState('en');

  const getIconForText = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('phone') || lower.includes('call')) return Phone;
    if (lower.includes('email') || lower.includes('envelope')) return Mail;
    if (lower.includes('money') || lower.includes('dollar') || lower.includes('$')) return DollarSign;
    if (lower.includes('calendar') || lower.includes('date') || lower.includes('meeting')) return Calendar;
    if (lower.includes('map') || lower.includes('location')) return MapPin;
    if (lower.includes('building') || lower.includes('office')) return Building;
    if (lower.includes('ear') || lower.includes('listen')) return Ear;
    if (lower.includes('care') || lower.includes('support') || lower.includes('help')) return HandHeart;
    if (lower.includes('safe') || lower.includes('protect')) return ShieldCheck;
    if (lower.includes('alert') || lower.includes('emergency') || lower.includes('danger')) return AlertTriangle;
    if (lower.includes('form') || lower.includes('paper') || lower.includes('write')) return FileText;
    if (lower.includes('people') || lower.includes('person') || lower.includes('group') || lower.includes('family')) return Users;
    if (lower.includes('check') || lower.includes('good') || lower.includes('yes')) return CheckCircle;
    if (lower.includes('love') || lower.includes('happy')) return Heart;
    return Info;
  };

  const renderContent = (lines: string[]) => {
    return lines.map((rawLine, idx) => {
      let line = rawLine;
      if (line.startsWith('d') || line.startsWith('b')) {
        line = line.substring(1).trim();
      }
      
      if (!line) return null;
      if (line.includes('____________________')) return <hr key={idx} className="my-10 border-gray-200" />;
      if (line.includes('DYAR Pty Ltd') || line.includes('An NDIS Service Provider')) return null;
      if (line.includes('CM1 PRINCIPLE')) return null;

      if (line.includes('[IMAGE:') || line.includes('[ICON:') || line.includes('[HEADER-IMAGE:')) {
        const altText = line.replace(/\[.*?:\s*/, '').replace(']', '');
        const IconComponent = getIconForText(altText);
        
        return (
          <div key={idx} className="my-10 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center text-[#6A0DAD] shadow-sm mb-4">
              {createElement(IconComponent, { size: 48, strokeWidth: 1.5 })}
            </div>
          </div>
        );
      }

      if (line.startsWith('- ')) {
        return (
          <div key={idx} className="flex items-start gap-4 my-4">
            <div className="w-3 h-3 rounded-full bg-[#6A0DAD] mt-2.5 shrink-0" />
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">{line.substring(2)}</p>
          </div>
        );
      }

      if (line.length > 0 && line.length < 50 && !line.endsWith('.') && !line.endsWith('?') && !line.includes(':')) {
        return <h3 key={idx} className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-12 mb-6 tracking-tight">{line}</h3>;
      }

      return <p key={idx} className="text-xl md:text-2xl text-gray-700 leading-relaxed my-6 font-medium">{line}</p>;
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(cm1Data.length / itemsPerPage);
  const currentItems = cm1Data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="font-sans text-gray-800 bg-slate-50 min-h-screen pb-20">
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-slate-50 pt-24 pb-16 border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6A0DAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Knowledge <span className="text-[#6A0DAD]">Hub</span> & Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">Latest updates, educational resources, and downloadable forms regarding the NDIS and Positive Behaviour Support.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Articles Grid / Pagination View */}
        <div className="mb-16">
          <div className="flex items-center justify-end mb-8">
            <div className="text-sm font-bold text-[#6A0DAD]">Page {currentPage} of {totalPages}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {currentItems.map((item, idx) => (
              <div 
                key={item.id} 
                onClick={() => { setSelectedArticle(item); setSelectedLang('en'); }} 
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden shrink-0`}>
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                  <BookOpen size={64} className="text-white/30 transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold text-white bg-black/20 rounded-full uppercase tracking-wider backdrop-blur-md">
                      CM1 Principle {(currentPage - 1) * 2 + idx + 1}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#6A0DAD] transition-colors">
                      {item.translations.en.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed line-clamp-3">
                      {item.translations.en.content}
                    </p>
                  </div>
                  <button className="inline-flex items-center text-[#6A0DAD] font-bold text-sm hover:text-purple-800 transition-colors mt-auto group/btn">
                    Read Easy English Version
                    <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 disabled:opacity-50 disabled:pointer-events-none transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentPage === i + 1 ? 'bg-[#6A0DAD] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 disabled:opacity-50 disabled:pointer-events-none transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Documents and Attachments Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Documents & Forms</h2>
              <p className="text-gray-600 font-medium">Download standard templates, intake forms, and service agreements.</p>
            </div>
            <button className="px-6 py-3 bg-purple-50 text-[#6A0DAD] font-bold text-sm rounded-xl hover:bg-purple-100 transition-colors">
              Request Specific Form
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {downloadableForms.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all group cursor-pointer bg-slate-50 hover:bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-red-500 shadow-sm group-hover:scale-105 transition-transform">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{doc.name}</h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{doc.ext} • {doc.size}</p>
                  </div>
                </div>
                <a 
                  href="/sample-form.pdf" 
                  download={`${doc.name}.${doc.ext.toLowerCase()}`}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#6A0DAD] hover:text-white hover:border-[#6A0DAD] transition-all shadow-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedArticle(null)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className={`h-32 sm:h-40 bg-gradient-to-br ${selectedArticle.color} relative shrink-0`}>
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-6 sm:left-8 sm:right-8">
                <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold text-white bg-white/20 backdrop-blur-md rounded-full uppercase tracking-wider border border-white/20">
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md" dir={languages.find(l => l.code === selectedLang)?.dir}>
                  {selectedArticle.translations[selectedLang as keyof typeof selectedArticle.translations].title}
                </h2>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 sm:px-8 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
              <Globe size={18} className="text-gray-400 mr-2 shrink-0" />
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

            {/* Modal Content */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white" dir={languages.find(l => l.code === selectedLang)?.dir}>
              
              {(() => {
                const richData = cm1EasyReadData.find(d => {
                  const enTitle = selectedArticle.translations.en.title;
                  // Handle partial matches for titles
                  if (enTitle.includes('Reportable Incidents') && d.title.includes('Reportable Incidents')) return true;
                  if (enTitle.includes('Code of Conduct') && d.title.includes('Code of Conduct')) return true;
                  return d.title.includes(enTitle);
                });

                if (richData && selectedLang === 'en') {
                  return (
                    <div className="bg-white rounded-3xl p-6 md:p-12 border-2 border-purple-50 shadow-sm max-w-3xl mx-auto">
                      {renderContent(richData.content)}
                    </div>
                  );
                }

                return (
                  <div className="bg-white rounded-2xl p-6 md:p-10 border-2 border-purple-50 shadow-sm max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                      <div className="w-24 h-24 shrink-0 bg-purple-50 rounded-2xl flex items-center justify-center text-[#6A0DAD] shadow-sm">
                        <FileText size={48} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Easy Read Summary</h3>
                        <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
                          {selectedArticle.translations[selectedLang as keyof typeof selectedArticle.translations].content}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pt-8 border-t border-gray-100">
                      <div className="w-24 h-24 shrink-0 flex items-center justify-center text-rose-600">
                        <AlertTriangle size={64} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Please note</h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                          This information might discuss sensitive topics. If you feel upset or uncomfortable, please let us know. We will help you understand this information in a different way or provide support.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hub;
