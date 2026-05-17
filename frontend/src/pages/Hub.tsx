import { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import { BookOpen, Calendar, ChevronRight, FileText, Download, PlayCircle, X } from 'lucide-react';

const Hub = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  // Fallback / Featured Articles
  const featuredArticles = [
    {
      id: 'f1',
      title: 'Understanding Positive Behaviour Support (PBS): A Guide for Families',
      category: 'Education',
      content: 'Positive Behaviour Support is an evidence-based framework designed to improve quality of life and decrease behaviours of concern. It focuses on understanding the reasons behind behaviour and teaching new skills.',
      created_at: new Date().toISOString(),
      type: 'article',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'f2',
      title: 'How to Prepare for Your Upcoming NDIS Plan Review',
      category: 'NDIS Planning',
      content: 'Plan reviews can be stressful. We break down the exact documentation you need, the questions to anticipate, and how a Support Coordinator can help you secure the funding you require.',
      created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
      type: 'article',
      color: 'from-purple-500 to-fuchsia-600'
    },
    {
      id: 'f3',
      title: 'Webinar: Reducing Restrictive Practices in the Home',
      category: 'Webinar',
      content: 'Watch our Clinical Director discuss practical, safe strategies to minimize restrictive practices while maintaining a secure and supportive home environment.',
      created_at: new Date(Date.now() - 86400000 * 12).toISOString(),
      type: 'video',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const downloadableForms = [
    { name: 'Participant Intake Form 2026', size: '1.2 MB', ext: 'PDF' },
    { name: 'Incident Reporting Template', size: '450 KB', ext: 'DOCX' },
    { name: 'Service Agreement Guide', size: '2.1 MB', ext: 'PDF' },
    { name: 'Consent for Information Sharing', size: '1.8 MB', ext: 'PDF' }
  ];

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles();
        if (data && data.length > 0) {
          setArticles(data);
        }
      } catch (error) {
        console.error("Failed to fetch articles", error);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  const displayArticles = articles.length > 0 ? articles : featuredArticles;

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
        {/* Articles Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Insights</h2>
            <div className="text-sm font-bold text-[#6A0DAD] hover:underline cursor-pointer">View All Categories</div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6A0DAD]"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayArticles.map((article: any, index: number) => (
                <div key={article.id || index} onClick={() => setSelectedArticle(article)} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1">
                  <div className={`h-48 bg-gradient-to-br ${article.color || 'from-purple-500 to-[#6A0DAD]'} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                    {article.type === 'video' ? (
                      <PlayCircle size={64} className="text-white/40 transform group-hover:scale-110 group-hover:text-white/60 transition-all duration-500" />
                    ) : (
                      <BookOpen size={64} className="text-white/30 transform group-hover:scale-110 transition-transform duration-500" />
                    )}
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="inline-flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-bold text-purple-800 bg-purple-50 border border-purple-100 rounded-full uppercase tracking-wider">{article.category || 'Article'}</span>
                      <span className="flex items-center text-gray-400 text-[11px] font-bold tracking-wide">
                        <Calendar size={12} className="mr-1.5" />
                        {new Date(article.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6A0DAD] transition-colors line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">
                      {article.content}
                    </p>
                    <button className="inline-flex items-center text-[#6A0DAD] font-bold text-sm hover:text-purple-800 transition-colors mt-auto group/btn">
                      {article.type === 'video' ? 'Watch Webinar' : 'Read Article'} 
                      <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
            <div className={`h-32 sm:h-48 bg-gradient-to-br ${selectedArticle.color || 'from-purple-500 to-[#6A0DAD]'} relative shrink-0`}>
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white bg-white/20 backdrop-blur-md rounded-full uppercase tracking-wider border border-white/20">
                  {selectedArticle.category || 'Article'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white">
              <div className="flex items-center text-gray-500 text-sm font-medium mb-8 border-b border-gray-100 pb-4">
                <Calendar size={16} className="mr-2" />
                Published on {new Date(selectedArticle.created_at).toLocaleDateString()}
              </div>
              <div className="prose prose-lg prose-purple max-w-none text-gray-700 leading-relaxed">
                {selectedArticle.type === 'video' ? (
                  <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center mb-8 border border-slate-200">
                    <PlayCircle size={64} className="text-slate-400" />
                    <p className="ml-4 text-slate-500 font-bold">Video Player Placeholder</p>
                  </div>
                ) : null}
                <p className="text-xl font-medium text-gray-900 mb-6">{selectedArticle.content}</p>
                <p>This is a detailed reading view for the selected insight. In a full production environment, this area would render rich text HTML or Markdown fetched directly from the database.</p>
                <p className="mt-4">Our Positive Behaviour Support and Support Coordination teams regularly update this knowledge hub to ensure all NDIS participants and their families have access to the most accurate, evidence-based methodologies available.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hub;
