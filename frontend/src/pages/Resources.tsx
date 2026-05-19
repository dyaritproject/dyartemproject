import { useState } from 'react';
import { Plus, Minus, Globe, AlertTriangle, ShieldCheck, CheckCircle } from 'lucide-react';
import { languages, resourceTranslations } from '../data/resourcesData';
import { cm1Data } from '../data/cm1Data';

const Resources = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [activeTabId, setActiveTabId] = useState('rights');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  const t = resourceTranslations[selectedLang as keyof typeof resourceTranslations] || resourceTranslations.en;
  const currentDir = ['ar', 'fa'].includes(selectedLang) ? 'rtl' : 'ltr';

  // For CM1 data, fallback to English if the language is missing (e.g. 'easy' which is already simplified in 'en')
  const getCM1Trans = (item: any) => {
    const langKey = selectedLang === 'easy' ? 'en' : selectedLang;
    return item.translations[langKey] || item.translations.en;
  };

  // Construct the Top Tabs array
  const topTabs = [
    { id: 'rights', title: `${t.pageTitle} ${t.pageTitleHL}` },
    ...cm1Data.map(item => ({
      id: item.id,
      title: getCM1Trans(item).title
    }))
  ];

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-24">
      {/* Header Area */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-white pt-20 pb-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-6">
              <AlertTriangle size={15} />
              <span>Participant Empowerment Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6" dir={currentDir}>
              {t.pageTitle} <span className="text-[#6A0DAD]">{t.pageTitleHL}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto" dir={currentDir}>
              {t.pageSubtitle}
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

      {/* Main Layout Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24 flex flex-col lg:flex-row gap-8" dir={currentDir}>
        
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-1/3 shrink-0">
          <div className="sticky top-24 bg-white rounded-3xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2">
            {topTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setExpandedItem(null);
                }}
                className={`w-full text-left px-5 py-4 rounded-2xl text-sm font-bold transition-all ${
                  activeTabId === tab.id
                    ? 'bg-[#6A0DAD] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
        
        {/* Render Participant Rights & Resources */}
        {activeTabId === 'rights' && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6">
              {t.pageTitle} {t.pageTitleHL}
            </h2>
            <div className="space-y-4">
              {t.categories.map((item) => {
                const isExpanded = expandedItem === item.id;
                return (
                  <div 
                    key={item.id} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-sm' : 'border-gray-200 hover:border-purple-200'}`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isExpanded ? 'bg-purple-50 text-purple-900' : 'bg-white text-gray-800'}`}
                    >
                      <span className="font-bold text-base pr-4">{item.title}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-500'}`}>
                        {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 bg-purple-50 border-t border-purple-100">
                        <div 
                          className="mt-4 text-gray-700 leading-relaxed text-base"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Render Knowledge Hub CM1 Principles */}
        {activeTabId !== 'rights' && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
            {cm1Data.filter(item => item.id === activeTabId).map((item) => {
              const trans = getCM1Trans(item);
              const isExpanded = expandedItem === item.id;
              
              // We auto-expand it if it's the only item, or let the user click it
              // Actually, since there's only 1 item per tab, we can default it to expanded 
              // but the user asked for "under each tabs they can see the information like this page now"
              // so we keep the accordion.
              
              return (
                <div key={item.id}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6">
                    {trans.title}
                  </h2>
                  <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-sm' : 'border-gray-200 hover:border-purple-200'}`}>
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isExpanded ? 'bg-purple-50 text-purple-900' : 'bg-white text-gray-800'}`}
                    >
                      <span className="font-bold text-base pr-4">Policy & Overview</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-500'}`}>
                        {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 bg-purple-50 border-t border-purple-100">
                        <div className="mt-4 space-y-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-[#6A0DAD]">
                              <ShieldCheck size={18} />
                              <h4 className="font-bold text-sm uppercase tracking-wider">Core Principle</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-base bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                              {trans.content}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-emerald-600">
                              <CheckCircle size={18} />
                              <h4 className="font-bold text-sm uppercase tracking-wider">Compliance & Audit</h4>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-xl border border-gray-200">
                              {trans.auditText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        </div>
      </div>
    </div>
  );
};

export default Resources;
