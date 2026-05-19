import { useState } from 'react';
import { Plus, Minus, ChevronRight, Globe, AlertTriangle } from 'lucide-react';
import { languages, resourceTranslations } from '../data/resourcesData';

const Resources = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  
  const t = resourceTranslations[selectedLang as keyof typeof resourceTranslations];
  const currentDir = languages.find(l => l.code === selectedLang)?.dir || 'ltr';

  const [activeCategoryId, setActiveCategoryId] = useState(t.categories[0].id);
  const [expandedItem, setExpandedItem] = useState<string | null>(t.categories[0].id);

  // If language changes, ensure the active category exists in the new language array
  const activeCategory = t.categories.find(c => c.id === activeCategoryId) || t.categories[0];

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-white pt-20 pb-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-6">
              <AlertTriangle size={15} />
              <span>Participant Empowerment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6" dir={currentDir}>
              {t.pageTitle} <span className="text-[#6A0DAD]">{t.pageTitleHL}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8" dir={currentDir}>
              {t.pageSubtitle}
            </p>

            {/* Language Selector */}
            <div className="flex overflow-x-auto no-scrollbar pb-2">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12" dir={currentDir}>
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar / Category Pills */}
          <div className="lg:w-1/3">
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-2">
              {t.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    setExpandedItem(category.id);
                  }}
                  className={`text-left px-5 py-4 rounded-xl text-sm font-bold transition-all border ${
                    activeCategoryId === category.id
                      ? 'bg-[#6A0DAD] text-white border-[#6A0DAD] shadow-md shadow-purple-200'
                      : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-100'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6 flex items-center gap-3">
                <ChevronRight className="text-purple-500" />
                {activeCategory.title}
              </h2>

              <div className="space-y-4">
                {t.categories.filter(c => c.id === activeCategoryId).map((item) => {
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
                      
                      {/* Accordion Content */}
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resources;
