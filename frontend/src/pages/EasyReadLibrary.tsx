import { useState } from 'react';
import { BookOpen, Shield, PhoneCall, AlertCircle, Users, Activity, FileText, X, Image as ImageIcon, ChevronRight } from 'lucide-react';
import easyReadData from '../data/easyReadData.json';

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
  const [selectedDoc, setSelectedDoc] = useState<any>(null);

  const openDoc = (docMeta: any) => {
    // Find the corresponding JSON data
    const parsedData = easyReadData.find(d => docMeta.file.includes(d.title));
    if (parsedData) {
      setSelectedDoc({ ...parsedData, meta: docMeta });
    }
  };

  const renderContent = (lines: string[]) => {
    return lines.map((rawLine, idx) => {
      // Clean up the 'd' prefix from RTF parsing artifact
      let line = rawLine;
      if (line.startsWith('d') || line.startsWith('b')) {
        line = line.substring(1).trim();
      }
      
      if (!line) return null;
      if (line.includes('____________________')) return <hr key={idx} className="my-10 border-gray-200" />;

      // Handle Image tags
      if (line.includes('[IMAGE:') || line.includes('[ICON:') || line.includes('[HEADER-IMAGE:')) {
        const altText = line.replace(/\[.*?:\s*/, '').replace(']', '');
        return (
          <div key={idx} className="my-8 bg-purple-50 rounded-2xl p-8 flex flex-col items-center justify-center border-2 border-purple-100 text-purple-400">
            <ImageIcon size={48} className="mb-4 opacity-50" />
            <p className="text-sm font-bold text-center text-purple-600/70 uppercase tracking-widest">{altText}</p>
          </div>
        );
      }

      // Handle Bullet points
      if (line.startsWith('- ')) {
        return (
          <div key={idx} className="flex items-start gap-4 my-4">
            <div className="w-3 h-3 rounded-full bg-[#6A0DAD] mt-2.5 shrink-0" />
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">{line.substring(2)}</p>
          </div>
        );
      }

      // Handle Headings (lines that are short and don't end in punctuation are usually headings in Easy Read)
      if (line.length > 0 && line.length < 50 && !line.endsWith('.') && !line.endsWith('?') && !line.includes(':')) {
        return <h3 key={idx} className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-12 mb-6 tracking-tight">{line}</h3>;
      }

      // Regular paragraph
      return <p key={idx} className="text-xl md:text-2xl text-gray-700 leading-relaxed my-6 font-medium">{line}</p>;
    });
  };

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
                onClick={() => openDoc(doc)}
                className="w-full py-4 bg-purple-50 hover:bg-[#6A0DAD] text-[#6A0DAD] hover:text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group border border-purple-100"
              >
                Read Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /> 
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Document Viewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-gray-50 animate-in fade-in duration-300">
          
          {/* Top Navigation Bar */}
          <div className="h-20 bg-white border-b border-gray-200 px-6 sm:px-8 flex items-center justify-between shadow-sm shrink-0">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedDoc.meta.color.split(' ')[0]}`}>
                {selectedDoc.meta.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">{selectedDoc.meta.title}</h2>
                <p className="text-sm font-medium text-gray-500">Easy Read Version</p>
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedDoc(null)}
              className="w-12 h-12 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Document Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 md:py-20">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-16">
                {renderContent(selectedDoc.content)}
              </div>
            </div>
          </div>

        </div>
      )}
      
    </div>
  );
};

export default EasyReadLibrary;
