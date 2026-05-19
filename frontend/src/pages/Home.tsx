import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle, Phone, Mail, AlertTriangle, Globe } from 'lucide-react';

const stepTranslations = {
  en: {
    title: "How to Access Our Services",
    titleHL: "Services",
    subtitle: "We make it simple and stress-free to start your journey with us.",
    s1Title: "Free Consultation",
    s1Desc: "Reach out for a free, no-obligation chat to discuss your needs and how we can support your NDIS goals.",
    s2Title: "Intake & Planning",
    s2Desc: "We work together to create a personalised service agreement and support plan tailored entirely to you.",
    s3Title: "Service Delivery",
    s3Desc: "Our qualified practitioners begin delivering high-quality, compassionate, and evidence-based supports.",
    s4Title: "Feedback & Review",
    s4Desc: "We regularly check in to ensure you are happy. We value your feedback as a gift to continuously improve."
  },
  easy: {
    title: "How to Use Our Services",
    titleHL: "Services",
    subtitle: "It is easy to start working with us.",
    s1Title: "Say Hello",
    s1Desc: "Call or email us. We will talk about what you need for free.",
    s2Title: "Make a Plan",
    s2Desc: "We will work with you to make a plan that is just for you.",
    s3Title: "Get Support",
    s3Desc: "Our friendly team will start helping you.",
    s4Title: "Tell Us What You Think",
    s4Desc: "We will ask if you are happy. You can tell us if we need to do better."
  },
  ar: {
    title: "كيفية الوصول إلى",
    titleHL: "خدماتنا",
    subtitle: "نجعل بدء رحلتك معنا بسيطاً وخالياً من التوتر.",
    s1Title: "استشارة مجانية",
    s1Desc: "تواصل معنا لإجراء محادثة مجانية بدون التزام لمناقشة احتياجاتك وكيف يمكننا دعم أهداف NDIS الخاصة بك.",
    s2Title: "الاستقبال والتخطيط",
    s2Desc: "نعمل معاً لإنشاء اتفاقية خدمة مخصصة وخطة دعم مصممة خصيصاً لك.",
    s3Title: "تقديم الخدمة",
    s3Desc: "يبدأ ممارسونا المؤهلون في تقديم دعم عالي الجودة ورحيم وقائم على الأدلة.",
    s4Title: "الملاحظات والمراجعة",
    s4Desc: "نتحقق بانتظام للتأكد من أنك سعيد. نحن نقدر ملاحظاتك كهدية للتحسين المستمر."
  },
  fa: {
    title: "نحوه دسترسی به",
    titleHL: "خدمات ما",
    subtitle: "ما شروع سفر شما با خودمان را ساده و بدون استرس می‌کنیم.",
    s1Title: "مشاوره رایگان",
    s1Desc: "برای گفتگوی رایگان و بدون تعهد با ما تماس بگیرید تا در مورد نیازهای شما و نحوه حمایت از اهداف NDIS شما صحبت کنیم.",
    s2Title: "پذیرش و برنامه‌ریزی",
    s2Desc: "ما با هم کار می‌کنیم تا یک توافق‌نامه خدمات شخصی و برنامه حمایتی کاملاً متناسب با شما ایجاد کنیم.",
    s3Title: "ارائه خدمات",
    s3Desc: "متخصصان واجد شرایط ما شروع به ارائه حمایت‌های با کیفیت بالا، دلسوزانه و مبتنی بر شواهد می‌کنند.",
    s4Title: "بازخورد و بررسی",
    s4Desc: "ما مرتباً وضعیت را بررسی می‌کنیم تا از رضایت شما اطمینان حاصل کنیم. ما برای بازخورد شما به عنوان فرصتی برای بهبود مستمر ارزش قائل هستیم."
  },
  zh: {
    title: "如何获得我们的",
    titleHL: "服务",
    subtitle: "我们让您轻松无忧地开启与我们的旅程。",
    s1Title: "免费咨询",
    s1Desc: "请联系我们进行免费的无义务沟通，讨论您的需求以及我们如何支持您的 NDIS 目标。",
    s2Title: "接收与计划",
    s2Desc: "我们共同努力，制定完全为您量身定制的个性化服务协议和支持计划。",
    s3Title: "服务交付",
    s3Desc: "我们合格的从业人员开始提供高质量、富有同情心且循证的支持。",
    s4Title: "反馈与审查",
    s4Desc: "我们会定期回访以确保您满意。我们将您的反馈视为不断改进的礼物。"
  },
  hi: {
    title: "हमारी सेवाओं तक कैसे",
    titleHL: "पहुंचें",
    subtitle: "हम आपके लिए हमारे साथ अपनी यात्रा शुरू करना सरल और तनावमुक्त बनाते हैं।",
    s1Title: "मुफ्त परामर्श",
    s1Desc: "आपकी आवश्यकताओं और हम आपके NDIS लक्ष्यों का समर्थन कैसे कर सकते हैं, इस पर चर्चा करने के लिए मुफ्त, बिना दायित्व वाली बातचीत के लिए संपर्क करें।",
    s2Title: "प्रवेश और योजना",
    s2Desc: "हम पूरी तरह से आपके अनुरूप एक व्यक्तिगत सेवा समझौता और सहायता योजना बनाने के लिए मिलकर काम करते हैं।",
    s3Title: "सेवा वितरण",
    s3Desc: "हमारे योग्य चिकित्सक उच्च गुणवत्ता वाले, दयालु और साक्ष्य-आधारित समर्थन प्रदान करना शुरू करते हैं।",
    s4Title: "प्रतिक्रिया और समीक्षा",
    s4Desc: "हम यह सुनिश्चित करने के लिए नियमित रूप से जांच करते हैं कि आप खुश हैं। हम आपकी प्रतिक्रिया को लगातार सुधारने के लिए एक उपहार के रूप में महत्व देते हैं।"
  },
  vi: {
    title: "Cách Tiếp cận",
    titleHL: "Dịch vụ của Chúng tôi",
    subtitle: "Chúng tôi giúp bạn bắt đầu hành trình với chúng tôi một cách đơn giản và không căng thẳng.",
    s1Title: "Tư vấn miễn phí",
    s1Desc: "Hãy liên hệ để được trò chuyện miễn phí, không ràng buộc nhằm thảo luận về nhu cầu của bạn và cách chúng tôi có thể hỗ trợ các mục tiêu NDIS của bạn.",
    s2Title: "Tiếp nhận & Lập kế hoạch",
    s2Desc: "Chúng ta cùng nhau tạo ra một thỏa thuận dịch vụ được cá nhân hóa và kế hoạch hỗ trợ hoàn toàn phù hợp với bạn.",
    s3Title: "Cung cấp Dịch vụ",
    s3Desc: "Đội ngũ chuyên gia có trình độ của chúng tôi bắt đầu cung cấp các hỗ trợ chất lượng cao, tận tâm và dựa trên bằng chứng.",
    s4Title: "Phản hồi & Đánh giá",
    s4Desc: "Chúng tôi thường xuyên kiểm tra để đảm bảo bạn hài lòng. Chúng tôi trân trọng phản hồi của bạn như một món quà để không ngừng cải thiện."
  }
};

const languages = [
  { code: 'en', name: 'English' },
  { code: 'easy', name: 'Easy Read' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fa', name: 'فارسی', dir: 'rtl' },
  { code: 'zh', name: '中文' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'vi', name: 'Tiếng Việt' },
];

const Home = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const t = stepTranslations[selectedLang as keyof typeof stepTranslations];
  const currentDir = languages.find(l => l.code === selectedLang)?.dir || 'ltr';
  const services = [
    { name: 'Specialist Behaviour Support (PBS)', desc: 'Functional assessments and individualised PBS plans.' },
    { name: 'Specialist Disability Accommodation (SDA)', desc: 'Connecting participants to appropriate housing solutions.' },
    { name: 'Therapeutic Supports', desc: 'Allied health assessments and evidence-based interventions.' },
    { name: 'Psychosocial Recovery Coaching', desc: 'Supporting recovery and building resilience.' },
    { name: 'Early Childhood Supports', desc: 'Early intervention for children under 9 with developmental needs.' },
    { name: 'Core Civic & Social Participation', desc: 'Community Access, group activities, and social inclusion.' },
    { name: 'Core Support – Assistance with Daily Life', desc: 'Practical supports for everyday activities and independence.' },
    { name: 'Consumables & Transport', desc: 'Essential consumable supports and travel assistance.' },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF5FF] via-white to-white pt-24 pb-20 border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6A0DAD 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-bold tracking-wide border border-purple-100 mb-8 shadow-sm">
            <ShieldCheck size={16} />
            <span>An NDIS Service Provider</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Empowering Your Independence <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-[#6A0DAD]">Through Person-Centred Supports.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 font-medium mx-auto mb-10 leading-relaxed">
            Welcome to DYAR. We deliver professional, accessible, and high-quality services across Western Australia designed to help you exercise choice and control, build vital life skills, and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-xl shadow-purple-200 transition-all active:scale-95">
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-[#6A0DAD] bg-purple-50 hover:bg-purple-100 border border-purple-100 transition-all active:scale-95">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Public Audit Notice */}
      <section className="py-10 bg-amber-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-white rounded-2xl border border-amber-300 shadow-md p-6 md:p-8">
            <div className="flex-shrink-0 mt-1">
              <AlertTriangle size={28} className="text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                Public Notice: Upcoming NDIS Certification Audit
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                DYAR Pty Ltd is currently undergoing the formal process of registration with the NDIS Quality and Safeguards Commission. As part of this legislative licensing pathway, our comprehensive certification audit will be conducted by <strong>HDAA Australia Pty Ltd</strong> (an Approved NDIS Quality Auditor) this coming <strong>Wednesday, 20 May 2026</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to absolute transparency and welcoming community feedback. If you are a participant, family member, carer, or community stakeholder and would like to provide feedback regarding our service delivery models, or wish to participate in a confidential interview with the audit team, please contact HDAA directly:
              </p>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-4 space-y-2">
                <p className="font-bold text-gray-800">Audit Body: HDAA Australia Pty Ltd</p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone size={15} className="text-amber-600" />
                  <a href="tel:1800601696" className="hover:text-amber-700 font-semibold">1800 601 696</a>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail size={15} className="text-amber-600" />
                  <a href="mailto:info@hdaau.com.au" className="hover:text-amber-700 font-semibold">info@hdaau.com.au</a>
                </p>
              </div>
              <p className="text-sm text-gray-500 italic">
                Please note: Participation is entirely voluntary. Any feedback provided directly to HDAA remains strictly confidential and will have absolutely no impact on the continuity, funding, or quality of your supports with DYAR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our <span className="text-[#6A0DAD]">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              DYAR delivers a comprehensive suite of professional supports tailored to your unique NDIS plan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <CheckCircle size={16} className="text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-tight">{service.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/referral" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#6A0DAD] hover:bg-purple-800 shadow-lg transition-all active:scale-95">
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Access Our Services */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight" dir={currentDir}>
              {t.title} <span className="text-[#6A0DAD]">{t.titleHL}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg" dir={currentDir}>
              {t.subtitle}
            </p>
          </div>

          <div className="flex justify-center mb-16 overflow-x-auto no-scrollbar pb-4">
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
          
          <div className="grid md:grid-cols-4 gap-8" dir={currentDir}>
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.s1Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.s1Desc}</p>
              <div className={`hidden md:block absolute top-8 ${currentDir === 'rtl' ? 'right-[60%]' : 'left-[60%]'} w-[80%] border-t-2 border-dashed border-purple-200 -z-10`}></div>
=======
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">How to Access Our <span className="text-[#6A0DAD]">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We make it simple and stress-free to start your journey with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Consultation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Reach out for a free, no-obligation chat to discuss your needs and how we can support your NDIS goals.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-purple-200 -z-10"></div>
>>>>>>> 20d01c0caf1d93b732cf11134d598f550defc699
            </div>
            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">2</div>
<<<<<<< HEAD
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.s2Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.s2Desc}</p>
              <div className={`hidden md:block absolute top-8 ${currentDir === 'rtl' ? 'right-[60%]' : 'left-[60%]'} w-[80%] border-t-2 border-dashed border-blue-200 -z-10`}></div>
=======
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intake & Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We work together to create a personalized service agreement and support plan tailored entirely to you.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-blue-200 -z-10"></div>
>>>>>>> 20d01c0caf1d93b732cf11134d598f550defc699
            </div>
            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">3</div>
<<<<<<< HEAD
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.s3Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.s3Desc}</p>
              <div className={`hidden md:block absolute top-8 ${currentDir === 'rtl' ? 'right-[60%]' : 'left-[60%]'} w-[80%] border-t-2 border-dashed border-emerald-200 -z-10`}></div>
=======
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our qualified practitioners begin delivering high-quality, compassionate, and evidence-based supports.</p>
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-emerald-200 -z-10"></div>
>>>>>>> 20d01c0caf1d93b732cf11134d598f550defc699
            </div>
            {/* Step 4 */}
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-2xl mb-6 relative z-10">4</div>
<<<<<<< HEAD
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.s4Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.s4Desc}</p>
=======
              <h3 className="text-xl font-bold text-gray-900 mb-3">Feedback & Review</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We regularly check in to ensure you are happy. We value your feedback as a gift to continuously improve.</p>
>>>>>>> 20d01c0caf1d93b732cf11134d598f550defc699
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
