import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const tabsData = [
  {
    id: 'emp',
    title: 'Emergency Management Plan (EMP)',
    accordions: [
      { title: 'Emergency Management Plan (EMP)', content: '<p class="text-gray-600">Details about the Emergency Management Plan will be displayed here.</p>' },
      { title: 'Templates', content: '<p class="text-gray-600">Downloadable templates will be available here.</p>' },
      { title: 'FAQ', content: '<p class="text-gray-600">Frequently asked questions will go here.</p>' },
      { title: 'Form to be completed', content: '<p class="text-gray-600">Required forms will be listed here.</p>' },
    ]
  },
  { id: 'contact', title: 'Emergency Contact Details', accordions: [] },
  { id: 'person', title: 'Person-Centred Resources', accordions: [] },
  { id: 'checklist', title: 'Check List', accordions: [] },
  { id: 'training', title: 'Training Materials', accordions: [] },
  { id: 'announcements', title: 'Announcements', accordions: [] },
  { id: 'advocacy', title: 'Statement on Advocacy Services', accordions: [] },
  { id: 'conflict', title: 'Conflict of Interest Statement & Service Delivery', accordions: [] },
  { id: 'feedback', title: 'EMP Feedback Form', accordions: [] },
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState('emp');
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

  const activeTabData = tabsData.find(t => t.id === activeTab);

  const toggleAccordion = (index: number) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <div className="font-sans bg-[#F8F9FA] min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-extrabold text-black mb-8 tracking-tight">
          Resources Hub
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabsData.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedAccordion(null);
              }}
              className={`px-5 py-3 text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#6BCB77] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="bg-transparent">
          {activeTabData?.accordions && activeTabData.accordions.length > 0 ? (
            <div className="space-y-0">
              {activeTabData.accordions.map((item, index) => {
                const isExpanded = expandedAccordion === index;
                return (
                  <div 
                    key={index} 
                    className="border border-gray-200 bg-[#F8F9FA] overflow-hidden -mt-px first:mt-0"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-start p-4 text-left transition-colors hover:bg-gray-50"
                    >
                      <div className="mr-3 text-black font-bold">
                        {isExpanded ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                      </div>
                      <span className="font-medium text-[15px] text-gray-900">{item.title}</span>
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100 border-t border-gray-200' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 bg-white">
                        <div 
                          className="text-gray-700 leading-relaxed text-sm"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center bg-white border border-gray-200 text-gray-500 text-sm italic">
              Content for {activeTabData?.title} is coming soon.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Resources;
