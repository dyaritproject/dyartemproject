import { BookOpen, Shield, PhoneCall, AlertCircle, Users, Activity, FileText, Download } from 'lucide-react';

const easyReadDocs = [
  {
    title: 'Child Safe',
    desc: 'How DYAR keeps children safe and what to do if you feel unsafe.',
    icon: <Shield size={40} className="text-emerald-500" />,
    color: 'bg-emerald-50 border-emerald-100',
    file: 'DYAR Easy-Read — Child Safe.rtf'
  },
  {
    title: 'Incident Management',
    desc: 'What an incident is and how we respond to keep you safe.',
    icon: <AlertCircle size={40} className="text-rose-500" />,
    color: 'bg-rose-50 border-rose-100',
    file: 'DYAR Easy-Read — Incident Management.rtf'
  },
  {
    title: 'Speak Up (Feedback + Complaints)',
    desc: 'How to tell DYAR what you think. It is OK to speak up!',
    icon: <PhoneCall size={40} className="text-blue-500" />,
    color: 'bg-blue-50 border-blue-100',
    file: 'DYAR Easy-Read — Speak Up (Feedback + Complaints).rtf'
  },
  {
    title: 'What to do in an Emergency',
    desc: 'How to stay safe and who to call when there is an emergency.',
    icon: <AlertCircle size={40} className="text-orange-500" />,
    color: 'bg-orange-50 border-orange-100',
    file: 'DYAR Easy-Read — What to do in an Emergency.rtf'
  },
  {
    title: 'Advocacy Flyer',
    desc: 'How to get someone to help you speak up and protect your rights.',
    icon: <Users size={40} className="text-purple-500" />,
    color: 'bg-purple-50 border-purple-100',
    file: 'DYAR Easy-Read — Advocacy Flyer.rtf'
  },
  {
    title: 'Staying safe from COVID-19',
    desc: 'Simple steps to stop the spread and keep our community healthy.',
    icon: <Activity size={40} className="text-teal-500" />,
    color: 'bg-teal-50 border-teal-100',
    file: 'DYAR Easy-Read — Staying safe from COVID-19.rtf'
  },
  {
    title: 'Thriving Kids briefing for families',
    desc: 'Information for parents and carers about our supports for children.',
    icon: <BookOpen size={40} className="text-indigo-500" />,
    color: 'bg-indigo-50 border-indigo-100',
    file: 'DYAR Easy-Read — Thriving Kids briefing for families.rtf'
  },
  {
    title: 'Join the DYAR Advisory Group',
    desc: 'Information about the LEAG and how to apply for a paid role.',
    icon: <FileText size={40} className="text-amber-500" />,
    color: 'bg-amber-50 border-amber-100',
    file: 'DYAR Easy-Read — Join the DYAR Advisory Group (LIVE recruiting).rtf'
  }
];

const EasyReadLibrary = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-purple-100 to-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full text-[#6A0DAD] shadow-sm mb-6">
            <BookOpen size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Easy Read Library
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Clear, simple information about your rights, safety, and how DYAR supports you.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {easyReadDocs.map((doc, idx) => (
            <div key={idx} className={`bg-white rounded-3xl p-8 border-2 ${doc.color.replace('bg-', 'border-').replace('50', '100')} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}>
              <div className={`w-20 h-20 ${doc.color} rounded-2xl flex items-center justify-center mb-6`}>
                {doc.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{doc.title}</h2>
              <p className="text-gray-600 font-medium mb-8 flex-1 leading-relaxed">{doc.desc}</p>
              
              <button 
                onClick={() => alert(`Downloading ${doc.file} (In a real environment, this would download the RTF/PDF file)`)}
                className="w-full py-4 bg-gray-100 hover:bg-[#6A0DAD] text-gray-800 hover:text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" /> 
                Download Document
              </button>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default EasyReadLibrary;
