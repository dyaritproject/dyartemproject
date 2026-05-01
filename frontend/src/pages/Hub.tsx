import { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import { BookOpen, Calendar, ChevronRight } from 'lucide-react';

const Hub = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
      setLoading(false);
    };
    loadArticles();
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen pb-20">
      <section className="relative bg-gradient-to-b from-indigo-50 to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Information Hub & Blog</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">Latest updates, resources, and educational materials regarding the NDIS, Support Coordination, and Positive Behaviour Support.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : articles.length === 0 ? (
          <div className="bg-slate-50 rounded-3xl p-12 text-center border border-gray-100 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
            <p className="text-gray-600 text-lg">Check back later for new resources, or ensure your Django backend is running!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article: any) => (
              <div key={article.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col h-full">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                  <BookOpen size={64} className="text-white/30 transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 rounded-full uppercase tracking-wider">{article.category}</span>
                    <span className="flex items-center text-gray-400 text-xs font-medium">
                      <Calendar size={12} className="mr-1" />
                      {new Date(article.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                    {article.content}
                  </p>
                  <button className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors mt-auto">
                    Read article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hub;
