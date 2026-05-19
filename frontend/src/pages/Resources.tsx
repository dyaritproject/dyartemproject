import { useState } from 'react';
import { Plus, Minus, Globe, AlertTriangle, Bell, Info, Download } from 'lucide-react';
import { languages, resourceTranslations } from '../data/resourcesData';

const newResourcesTabs = [
  {
    id: 'emp',
    title: 'Emergency Management Plan (EMP)',
    accordions: [
      { id: 'emp-1', title: 'Emergency Management Plan (EMP)', content: '<p>Download the Emergency Management Plan documents below.</p>', pdf: '/documents/resources/06 — Emergency Management Plan (EMP).pdf', docx: '/documents/resources/06 — Emergency Management Plan (EMP).docx' },
      { id: 'emp-2', title: 'Templates', content: '<p>Download the EMP templates below.</p>', pdf: '/documents/resources/07 — EMP Templates.pdf', docx: '/documents/resources/07 — EMP Templates.docx' },
      { id: 'emp-3', title: 'FAQ', content: '<p>Download the EMP FAQ below.</p>', pdf: '/documents/resources/08 — EMP FAQ.pdf', docx: '/documents/resources/08 — EMP FAQ.docx' },
      { id: 'emp-4', title: 'PEEP Form to be completed', content: '<p>Download the Personal Emergency Evacuation Plan (PEEP) Form below.</p>', pdf: '/documents/resources/09 — Personal Emergency Evacuation Plan (PEEP) Form.pdf', docx: '/documents/resources/09 — Personal Emergency Evacuation Plan (PEEP) Form.docx' },
    ]
  },
  { 
    id: 'contact', title: 'Emergency Contact Details', 
    accordions: [{ id: 'contact-1', title: 'Emergency Contact Details', content: '<p>Download the Emergency Contact Details form below.</p>', pdf: '/documents/resources/10 — Emergency Contact Details.pdf', docx: '/documents/resources/10 — Emergency Contact Details.docx' }]
  },
  { 
    id: 'checklist', title: 'Check List', 
    accordions: [{ id: 'check-1', title: 'Emergency Preparedness Checklist', content: '<p>Download the Emergency Preparedness Checklist below.</p>', pdf: '/documents/resources/11 — Emergency Preparedness Checklist.pdf', docx: '/documents/resources/11 — Emergency Preparedness Checklist.docx' }]
  },
  { 
    id: 'training', title: 'Training Materials', 
    accordions: [{ id: 'train-1', title: 'Training Materials', content: '<p>Download the Training Materials below.</p>', pdf: '/documents/resources/12 — Training Materials.pdf', docx: '/documents/resources/12 — Training Materials.docx' }]
  },
  { 
    id: 'advocacy', title: 'Statement on Advocacy Services', 
    accordions: [{ id: 'adv-1', title: 'Statement on Advocacy Services', content: '<p>Download the Statement on Advocacy Services below.</p>', pdf: '/documents/resources/14 — Statement on Advocacy Services.pdf', docx: '/documents/resources/14 — Statement on Advocacy Services.docx' }]
  },
  { 
    id: 'conflict', title: 'Conflict of Interest Statement & Service Delivery', 
    accordions: [{ id: 'coi-1', title: 'Conflict of Interest Statement', content: '<p>Download the Conflict of Interest Statement below.</p>', pdf: '/documents/resources/15 — Conflict of Interest Statement & Service Delivery.pdf', docx: '/documents/resources/15 — Conflict of Interest Statement & Service Delivery.docx' }]
  },
  { 
    id: 'feedback', title: 'EMP Feedback Form', 
    accordions: [{ id: 'feed-1', title: 'EMP Feedback Form', content: '<p>Download the EMP Feedback Form below.</p>', pdf: '/documents/resources/16 — EMP Feedback Form.pdf', docx: '/documents/resources/16 — EMP Feedback Form.docx' }]
  }
];

const Resources = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [activeTabId, setActiveTabId] = useState('rights');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  const t = resourceTranslations[selectedLang as keyof typeof resourceTranslations] || resourceTranslations.en;
  const currentDir = ['ar', 'fa'].includes(selectedLang) ? 'rtl' : 'ltr';

  // Construct the Top Tabs array
  const topTabs = [
    { id: 'rights', title: `${t.pageTitle} ${t.pageTitleHL}` },
    ...newResourcesTabs.map(item => ({
      id: item.id,
      title: item.title
    }))
  ];

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const activeNewTab = newResourcesTabs.find(tab => tab.id === activeTabId);

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
                    <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
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

        {/* Render Announcements Custom View */}
        {activeTabId === 'announcements' && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                <Bell size={24} strokeWidth={2} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Updates &amp; Emergency Announcements
              </h2>
            </div>
            
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-8 flex flex-col md:flex-row gap-5 items-start">
              <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm">
                <AlertTriangle size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Emergency Communication Protocol</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  In the event of an emergency or natural disaster, this page will be immediately updated with critical information. You will also receive an urgent <strong>SMS text message</strong> and <strong>email notification</strong> outlining the situation and any necessary steps to stay safe.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info size={18} className="text-[#6A0DAD]" /> Recent Announcements
              </h3>
              
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">Welcome to the New Resources Hub</h4>
                  <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded-md">General</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We have updated our Resources hub to make it easier for you to find important forms and emergency plans. Check back here for future news and updates from DYAR!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Render New Resource Tabs */}
        {activeTabId !== 'rights' && activeTabId !== 'announcements' && activeNewTab && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6">
              {activeNewTab.title}
            </h2>
            {activeNewTab.accordions.length > 0 ? (
              <div className="space-y-4">
                {activeNewTab.accordions.map((item) => {
                  const isExpanded = expandedItem === item.id;
                  
                  return (
                    <div key={item.id} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-sm' : 'border-gray-200 hover:border-purple-200'}`}>
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isExpanded ? 'bg-purple-50 text-purple-900' : 'bg-white text-gray-800'}`}
                      >
                        <span className="font-bold text-base pr-4">{item.title}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-500'}`}>
                          {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>
                      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 pt-0 bg-purple-50 border-t border-purple-100">
                          <div className="mt-4 text-gray-700 leading-relaxed text-base">
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                            
                            {(item.pdf || item.docx) && (
                              <div className="flex flex-wrap gap-4 mt-6">
                                {item.pdf && (
                                  <a href={item.pdf} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-50 text-rose-700 rounded-xl font-bold hover:bg-rose-100 transition-colors shadow-sm border border-rose-100">
                                    <Download size={18} /> Download PDF
                                  </a>
                                )}
                                {item.docx && (
                                  <a href={item.docx} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-xl font-bold hover:bg-blue-100 transition-colors shadow-sm border border-blue-100">
                                    <Download size={18} /> Download Word (DOCX)
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center bg-purple-50 rounded-2xl border border-purple-100 text-purple-800 text-sm font-medium">
                Content for {activeNewTab.title} is coming soon.
              </div>
            )}
          </div>
        )}

        </div>
      </div>
    </div>
  );
};

export default Resources;
