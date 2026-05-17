import { useState } from 'react';
import { FileText, Plus, Minus, ChevronRight, FileDown } from 'lucide-react';

const categories = [
  "Emergency Management Plan (EMP)",
  "Emergency Contact Details",
  "Person-Centred Resources",
  "Check List",
  "Training Materials",
  "Announcements",
  "Statement on Advocacy Services",
  "Conflict of Interest Statement & Service Delivery",
  "EMP Feedback Form"
];

// Placeholder data for each category
const categoryData: Record<string, { title: string, items?: string[] }[]> = {
  "Emergency Management Plan (EMP)": [
    { title: "Emergency Management Plan (EMP)" },
    { title: "Templates" },
    { title: "FAQ" },
    { title: "Form to be completed" }
  ],
  "Emergency Contact Details": [
    { title: "Local Emergency Contacts" },
    { title: "After Hours Support Directory" }
  ],
  "Person-Centred Resources": [
    { title: "Goal Setting Guide" },
    { title: "Participant Welcome Pack" }
  ],
  "Check List": [
    { title: "Intake Checklist" },
    { title: "Home Safety Checklist" }
  ],
  "Training Materials": [
    { title: "Staff Induction Manual" },
    { title: "Incident Reporting Guide" }
  ],
  "Announcements": [
    { title: "Latest NDIS Pricing Arrangements" },
    { title: "Company Updates" }
  ],
  "Statement on Advocacy Services": [
    { title: "Understanding Your Right to an Advocate" },
    { title: "List of Independent Advocacy Services" }
  ],
  "Conflict of Interest Statement & Service Delivery": [
    { title: "Conflict of Interest Policy" },
    { title: "Service Delivery Framework" }
  ],
  "EMP Feedback Form": [
    { title: "Download Feedback Form" },
    { title: "Submit Feedback Online" }
  ]
};

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-white pt-20 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-6">
              <FileText size={15} />
              <span>Forms, Guides & Templates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Resources <span className="text-[#6A0DAD]">Hub</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Access important documents, forms, and guides for participants, families, and staff. Select a category below to find the specific resource you need.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar / Category Pills */}
          <div className="lg:w-1/3">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setExpandedItem(null);
                  }}
                  className={`text-left px-5 py-3 rounded-xl text-sm font-bold transition-all border ${
                    activeCategory === category
                      ? 'bg-[#6A0DAD] text-white border-[#6A0DAD] shadow-md shadow-purple-200'
                      : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-6 flex items-center gap-3">
                <ChevronRight className="text-purple-500" />
                {activeCategory}
              </h2>

              <div className="space-y-4">
                {(categoryData[activeCategory] || []).map((item, index) => {
                  const isExpanded = expandedItem === item.title;
                  
                  return (
                    <div 
                      key={index} 
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-sm' : 'border-gray-200 hover:border-purple-200'}`}
                    >
                      <button
                        onClick={() => toggleItem(item.title)}
                        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isExpanded ? 'bg-purple-50 text-purple-900' : 'bg-white text-gray-800'}`}
                      >
                        <span className="font-bold text-base pr-4">{item.title}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-500'}`}>
                          {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>
                      
                      {/* Accordion Content */}
                      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-5 pt-0 bg-purple-50 border-t border-purple-100">
                          <p className="text-gray-600 text-sm mb-4 mt-4">
                            Document currently pending upload. Check back soon for the PDF format.
                          </p>
                          <button disabled className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-400 cursor-not-allowed">
                            <FileDown size={16} />
                            Download PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {(!categoryData[activeCategory] || categoryData[activeCategory].length === 0) && (
                  <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <FileText size={32} className="mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-500 font-medium">No resources found for this category yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resources;
