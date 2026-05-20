import { useState, createElement } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, FileText, Globe, AlertTriangle, Phone, Mail, DollarSign, Calendar, MapPin, Building, Ear, HandHeart, CheckCircle, Heart, Info, ShieldCheck, Users, Plus, Minus } from 'lucide-react';
import { cm1Data } from '../data/cm1Data';
import cm1EasyReadData from '../data/cm1EasyReadData.json';

const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'zh', name: '中文 (Mandarin)', dir: 'ltr' },
  { code: 'ar', name: 'العربية (Arabic)', dir: 'rtl' },
  { code: 'hi', name: 'हिन्दी (Hindi)', dir: 'ltr' },
  { code: 'fa', name: 'فارسی (Persian)', dir: 'rtl' },
  { code: 'vi', name: 'Tiếng Việt (Vietnamese)', dir: 'ltr' }
];

const modalTranslations = {
  en: { summaryTitle: 'Easy Read Summary', noteTitle: 'Please note', noteText: 'This information might discuss sensitive topics. If you feel upset or uncomfortable, please let us know. We will help you understand this information in a different way or provide support.', readEasyEnglish: 'Read Easy English Version' },
  zh: { summaryTitle: '简易阅读摘要', noteTitle: '请注意', noteText: '此信息可能涉及敏感话题。如果您感到不安或不适，请告诉我们。我们将帮助您以不同方式理解此信息，或提供支持。', readEasyEnglish: '阅读简易英文版' },
  ar: { summaryTitle: 'ملخص القراءة السهلة', noteTitle: 'يرجى الملاحظة', noteText: 'قد تناقش هذه المعلومات مواضيع حساسة. إذا شعرت بالانزعاج أو عدم الارتياح، يرجى إخبارنا. سنساعدك على فهم هذه المعلومات بطريقة مختلفة أو تقديم الدعم.', readEasyEnglish: 'اقرأ نسخة الإنجليزية السهلة' },
  hi: { summaryTitle: 'आसान पठन सारांश', noteTitle: 'कृपया ध्यान दें', noteText: 'यह जानकारी संवेदनशील विषयों पर चर्चा कर सकती है। यदि आप परेशान या असहज महसूस करते हैं, तो कृपया हमें बताएं। हम इस जानकारी को अलग तरीके से समझने में आपकी मदद करेंगे या सहायता प्रदान करेंगे।', readEasyEnglish: 'आसान अंग्रेजी संस्करण पढ़ें' },
  fa: { summaryTitle: 'خلاصه خواندن آسان', noteTitle: 'لطفا توجه داشته باشید', noteText: 'این اطلاعات ممکن است در مورد موضوعات حساس بحث کند. اگر احساس ناراحتی می کنید، لطفا به ما اطلاع دهید. ما به شما کمک می کنیم این اطلاعات را به روشی متفاوت درک کنید یا پشتیبانی ارائه دهیم.', readEasyEnglish: 'نسخه انگلیسی آسان را بخوانید' },
  vi: { summaryTitle: 'Tóm tắt Dễ Đọc', noteTitle: 'Xin lưu ý', noteText: 'Thông vị này có thể thảo luận về các chủ đề nhạy cảm. Nếu bạn cảm thấy khó chịu hoặc không thoải mái, vui lòng cho chúng tôi biết. Chúng tôi sẽ giúp bạn hiểu thông tin này theo cách khác hoặc cung cấp hỗ trợ.', readEasyEnglish: 'Đọc Phiên bản Tiếng Anh Dễ hiểu' }
};

const blogPosts = [
  {
    id: 1,
    title: 'NDIS Commission Releases New Practice Standards',
    date: 'May 18, 2026',
    category: 'Compliance',
    excerpt: 'The NDIS Quality and Safeguards Commission has released updated guidelines focusing on participant safety and positive behaviour support strategies.',
    content: 'The NDIS Quality and Safeguards Commission has officially released its updated Practice Standards for 2026. These updates focus heavily on ensuring participant safety, elevating the quality of positive behaviour support, and demanding higher transparency from registered providers.\n\nKey changes include mandatory reporting timelines for any restrictive practices, enhanced auditing requirements for providers offering high-intensity daily personal activities, and new mandatory training modules for all support workers dealing with complex needs participants.\n\nDYAR Pty Ltd is actively reviewing these changes and updating all internal policies to remain fully compliant. Participants can rest assured that our services will continue to exceed these new rigorous national standards.'
  },
  {
    id: 2,
    title: 'NDIA Price Guide Updates 2026-2027',
    date: 'May 10, 2026',
    category: 'Funding',
    excerpt: 'Key changes to the upcoming NDIA support catalogue, including adjustments to therapy rates and community participation limits.',
    content: 'The National Disability Insurance Agency (NDIA) has announced its updated Price Guide and Support Catalogue for the 2026-2027 financial year. This update introduces several critical adjustments to pricing caps for therapy services and community participation.\n\nMost notably, the price limits for core supports, including standard support worker hours, have been indexed to align with recent wage adjustments. Furthermore, there are new line items introduced to better support flexible, short-term accommodations (STA) and tailored community access programs.\n\nDYAR will be rolling out communications to all participants outlining how these changes might impact their upcoming plan reviews and budget utilization.'
  },
  {
    id: 3,
    title: 'Understanding the New Worker Screening Requirements',
    date: 'May 2, 2026',
    category: 'Workforce',
    excerpt: 'A comprehensive breakdown of the mandatory NDIS Worker Screening Check and what it means for DYAR providers and participants.',
    content: 'Ensuring the safety of participants is the cornerstone of the NDIS. To bolster this, the new mandatory NDIS Worker Screening Check has been implemented across all states and territories. This is a rigorous national assessment that evaluates a worker\'s history to determine if they pose any risk to people with a disability.\n\nAt DYAR, we mandate that 100% of our staff, including support workers, administrative staff, and contractors, hold a cleared NDIS Worker Screening Check before they ever interact with a participant. This update reinforces our zero-tolerance policy towards abuse, neglect, and exploitation, ensuring you are always supported by trusted, vetted professionals.'
  }
];

const Hub = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [expandedCM1, setExpandedCM1] = useState<string | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const getIconForText = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('phone') || lower.includes('call')) return Phone;
    if (lower.includes('email') || lower.includes('envelope')) return Mail;
    if (lower.includes('money') || lower.includes('dollar') || lower.includes('$')) return DollarSign;
    if (lower.includes('calendar') || lower.includes('date') || lower.includes('meeting')) return Calendar;
    if (lower.includes('map') || lower.includes('location')) return MapPin;
    if (lower.includes('building') || lower.includes('office')) return Building;
    if (lower.includes('ear') || lower.includes('listen')) return Ear;
    if (lower.includes('care') || lower.includes('support') || lower.includes('help')) return HandHeart;
    if (lower.includes('safe') || lower.includes('protect')) return ShieldCheck;
    if (lower.includes('alert') || lower.includes('emergency') || lower.includes('danger')) return AlertTriangle;
    if (lower.includes('form') || lower.includes('paper') || lower.includes('write')) return FileText;
    if (lower.includes('people') || lower.includes('person') || lower.includes('group') || lower.includes('family')) return Users;
    if (lower.includes('check') || lower.includes('good') || lower.includes('yes')) return CheckCircle;
    if (lower.includes('love') || lower.includes('happy')) return Heart;
    return Info;
  };

  const renderContent = (lines: string[]) => {
    return lines.map((rawLine, idx) => {
      let line = rawLine;
      if (line.startsWith('d') || line.startsWith('b')) {
        line = line.substring(1).trim();
      }
      
      if (!line) return null;
      if (line.includes('____________________')) return <hr key={idx} className="my-10 border-gray-200" />;
      if (line.includes('DYAR Pty Ltd') || line.includes('An NDIS Service Provider')) return null;
      if (line.includes('CM1 PRINCIPLE')) return null;

      if (line.includes('[IMAGE:') || line.includes('[ICON:') || line.includes('[HEADER-IMAGE:')) {
        const altText = line.replace(/\[.*?:\s*/, '').replace(']', '');
        const IconComponent = getIconForText(altText);
        
        return (
          <div key={idx} className="my-10 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center text-[#6A0DAD] shadow-sm mb-4">
              {createElement(IconComponent, { size: 48, strokeWidth: 1.5 })}
            </div>
          </div>
        );
      }

      if (line.startsWith('- ')) {
        return (
          <div key={idx} className="flex items-start gap-4 my-4">
            <div className="w-3 h-3 rounded-full bg-[#6A0DAD] mt-2.5 shrink-0" />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">{line.substring(2)}</p>
          </div>
        );
      }

      if (line.length > 0 && line.length < 50 && !line.endsWith('.') && !line.endsWith('?') && !line.includes(':')) {
        return <h3 key={idx} className="text-xl md:text-2xl font-extrabold text-gray-900 mt-12 mb-6 tracking-tight">{line}</h3>;
      }

      return <p key={idx} className="text-lg md:text-xl text-gray-700 leading-relaxed my-6 font-medium">{line}</p>;
    });
  };

  return (
    <div className="font-sans text-gray-800 bg-[#F8F9FA] min-h-screen pb-20">
      {/* Header Section */}
      <section className="relative bg-gradient-to-b from-[#FAF5FF] to-[#F8F9FA] pt-24 pb-16 border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6A0DAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Knowledge <span className="text-[#6A0DAD]">Hub</span> & Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">Latest updates, educational resources, and easy-read NDIS guidelines.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Blog Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center">
              <BookOpen size={20} strokeWidth={2} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Latest NDIS News & Updates</h2>
          </div>
          
          {selectedBlog !== null ? (
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10 animate-fade-in">
              <button 
                onClick={() => setSelectedBlog(null)} 
                className="flex items-center gap-2 text-purple-700 font-bold mb-8 hover:text-purple-900 transition-colors bg-purple-50 px-4 py-2 rounded-xl"
              >
                <ChevronLeft size={20} /> Back to all updates
              </button>
              
              {blogPosts.filter(p => p.id === selectedBlog).map(post => (
                <div key={post.id} className="max-w-3xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-lg">{post.category}</span>
                    <span className="text-sm text-gray-500 font-medium">{post.date}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tight">{post.title}</h3>
                  <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                    {post.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map(post => (
                <div 
                  key={post.id} 
                  onClick={() => setSelectedBlog(post.id)}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg hover:border-purple-300 transition-all cursor-pointer flex flex-col h-full group"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-md">{post.category}</span>
                    <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6A0DAD] transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-1">{post.excerpt}</p>
                  <button className="text-sm font-bold text-purple-600 flex items-center group-hover:text-purple-800 transition-colors">
                    Read Article <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CM1 Principles Accordion Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-200 pb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                  <ShieldCheck size={20} strokeWidth={2} />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Core Principles & Easy Read</h2>
              </div>
              <p className="text-gray-600 ml-13">Explore the 13 Core Module 1 principles in your preferred language.</p>
            </div>
            
            {/* Language Selector */}
            <div className="flex overflow-x-auto no-scrollbar pb-2">
              <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm">
                <Globe size={18} className="text-gray-400 mx-2 shrink-0" />
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${selectedLang === lang.code ? 'bg-[#6A0DAD] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {cm1Data.map((item, idx) => {
              const isExpanded = expandedCM1 === item.id;
              
              // Find the rich data for the easy read content if English
              const richData = cm1EasyReadData.find(d => {
                const enTitle = item.translations.en.title.replace(/^[0-9.]+\s*/, '').toLowerCase().trim();
                const dTitle = d.title.replace(/^[0-9—\s]+/, '').toLowerCase().trim();
                if (enTitle.includes('reportable incidents') && dTitle.includes('reportable incidents')) return true;
                if (enTitle.includes('code of conduct') && dTitle.includes('code of conduct')) return true;
                return dTitle === enTitle || dTitle.includes(enTitle);
              });

              return (
                <div key={item.id} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-purple-300 shadow-md' : 'border-gray-200 hover:border-purple-200 shadow-sm'}`}>
                  <button
                    onClick={() => setExpandedCM1(isExpanded ? null : item.id)}
                    className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors ${isExpanded ? 'bg-purple-50/50' : 'bg-white'}`}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${isExpanded ? 'bg-[#6A0DAD] text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {idx + 1}
                      </div>
                      <span className="font-bold text-lg md:text-xl text-gray-900 leading-tight">
                        {item.translations.en.title.replace(/^[0-9.]+\s*/, '')}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-500'}`}>
                      {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 md:p-8 bg-white border-t border-gray-100">
                      
                      <div dir={languages.find(l => l.code === selectedLang)?.dir}>
                        {selectedLang === 'en' && richData ? (
                          <div className="max-w-3xl mx-auto">
                            {renderContent(richData.content)}
                          </div>
                        ) : (
                          <div className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100 max-w-3xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
                              <div className="w-20 h-20 shrink-0 bg-purple-100 rounded-2xl flex items-center justify-center text-[#6A0DAD]">
                                <FileText size={40} strokeWidth={1.5} />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{modalTranslations[selectedLang as keyof typeof modalTranslations].summaryTitle}</h3>
                                <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                                  {item.translations[selectedLang as keyof typeof item.translations]?.content || item.translations.en.content}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pt-8 border-t border-gray-200">
                              <div className="w-20 h-20 shrink-0 flex items-center justify-center text-rose-500">
                                <AlertTriangle size={50} strokeWidth={2} />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{modalTranslations[selectedLang as keyof typeof modalTranslations].noteTitle}</h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                  {modalTranslations[selectedLang as keyof typeof modalTranslations].noteText}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hub;
