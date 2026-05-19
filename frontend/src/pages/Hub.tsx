import { useState } from 'react';
import { BookOpen, ChevronRight, FileText, Download, X, CheckCircle, Globe, ChevronLeft } from 'lucide-react';
import { cm1Data, CM1Article } from '../data/cm1Data';

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
              
              <div className="prose prose-lg prose-purple max-w-none text-gray-700 leading-relaxed mb-10">
                <p className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                  {selectedArticle.translations[selectedLang as keyof typeof selectedArticle.translations].content}
                </p>
              </div>

              {/* Audit Compliance Box */}
              <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-100 relative overflow-hidden" dir="ltr">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <CheckCircle size={150} className="text-emerald-500" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                    <CheckCircle size={20} className="text-emerald-600" /> HDAA Audit Compliance Protocol
                  </h3>
                  <p className="text-emerald-800 leading-relaxed text-lg font-medium">
                    {selectedArticle.translations[selectedLang as keyof typeof selectedArticle.translations].auditText}
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hub;
