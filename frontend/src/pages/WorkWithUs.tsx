import { useState } from 'react';
import { Briefcase, ChevronDown, Mail, ArrowRight, Heart, Users, Shield, Building } from 'lucide-react';

const jobCategories = [
  {
    title: 'Allied Health & Clinical',
    icon: <Heart className="text-rose-600" size={24} />,
    color: 'bg-rose-50 border-rose-100',
    jobs: [
      { title: 'Behaviour Support Practitioner', type: 'Full-time / Part-time' },
      { title: 'Occupational Therapist', type: 'Full-time / Part-time' },
      { title: 'Counsellor / Psychologist', type: 'Full-time / Part-time' },
      { title: 'Psychosocial Recovery Coach', type: 'Full-time / Part-time' },
      { title: 'Specialist Support Coordinator', type: 'Full-time' }
    ]
  },
  {
    title: 'Community & Core Support',
    icon: <Users className="text-blue-600" size={24} />,
    color: 'bg-blue-50 border-blue-100',
    jobs: [
      { title: 'Support Worker', type: 'Casual / Part-time' },
      { title: 'Team Leader — Support Workers', type: 'Full-time' }
    ]
  },
  {
    title: 'Lived Experience Advisory Group (LEAG)',
    icon: <Shield className="text-emerald-600" size={24} />,
    color: 'bg-emerald-50 border-emerald-100',
    jobs: [
      { title: 'LEAG Member (Recruiting Now)', type: 'Advisory / Part-time' },
      { title: 'LEAG Chair (Elect after Members appointed)', type: 'Advisory / Part-time' }
    ]
  },
  {
    title: 'Operations & Admin',
    icon: <Building className="text-purple-600" size={24} />,
    color: 'bg-purple-50 border-purple-100',
    jobs: [
      { title: 'Operations Manager', type: 'Full-time' },
      { title: 'Admin & Finance Coordinator', type: 'Full-time / Part-time' }
    ]
  }
];

const WorkWithUs = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (title: string) => {
    if (expandedJob === title) {
      setExpandedJob(null);
    } else {
      setExpandedJob(title);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6 shadow-sm">
            <Briefcase size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Current Openings</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join the DYAR team and help us empower participants across Whadjuk Country. We're always looking for passionate, driven professionals.
          </p>
        </div>

        {/* Job Listings by Category */}
        <div className="space-y-12 mb-20">
          {jobCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className={`px-8 py-5 flex items-center gap-4 ${category.color} border-b`}>
                <div className="bg-white p-2 rounded-xl shadow-sm">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="divide-y divide-gray-50">
                {category.jobs.map((job, jIdx) => (
                  <div key={jIdx} className="group">
                    <button 
                      onClick={() => toggleJob(job.title)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6A0DAD] transition-colors">{job.title}</h3>
                        <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-500 transition-transform duration-300 ${expandedJob === job.title ? 'rotate-180 bg-purple-100 text-purple-600' : 'group-hover:bg-purple-50 group-hover:text-purple-600'}`}>
                        <ChevronDown size={24} />
                      </div>
                    </button>
                    
                    {/* Expandable Application Instructions */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedJob === job.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-8 bg-purple-50/50 border-t border-purple-50">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <ArrowRight className="text-[#6A0DAD]" size={18} /> How to Apply
                            </h4>
                            <p className="text-gray-600">
                              To apply for the <strong>{job.title}</strong> position, please send your resume and a brief cover letter outlining your experience.
                            </p>
                          </div>
                          <a 
                            href={`mailto:hello@dyar.com.au?subject=Application for ${job.title}`}
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#6A0DAD] hover:bg-purple-800 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 shrink-0"
                          >
                            <Mail className="mr-2" size={20} />
                            Email hello@dyar.com.au
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* General Expression of Interest */}
        <div className="bg-[#1e1b4b] rounded-3xl p-10 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
            <Heart size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Don't see the right fit?</h2>
            <p className="text-purple-200 mb-8 max-w-xl mx-auto text-lg">
              We are constantly growing. Send us your CV as a general expression of interest and we'll keep you in mind for future opportunities.
            </p>
            <a href="mailto:hello@dyar.com.au?subject=General Expression of Interest" className="inline-block px-8 py-4 bg-white text-[#1e1b4b] font-bold rounded-xl shadow hover:bg-gray-50 transition-colors">
              Submit Expression of Interest
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkWithUs;
