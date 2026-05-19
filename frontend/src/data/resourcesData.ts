export const languages = [
  { code: 'en', name: 'English' },
  { code: 'easy', name: 'Easy Read' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fa', name: 'فارسی', dir: 'rtl' },
  { code: 'zh', name: '中文' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'vi', name: 'Tiếng Việt' },
];

export const resourceTranslations = {
  en: {
    pageTitle: "Participant",
    pageTitleHL: "Rights & Resources",
    pageSubtitle: "We are committed to empowering you. Read about your rights, how to get an independent advocate, and our zero-tolerance policy for abuse.",
    categories: [
      {
        id: 'advocacy',
        title: "Independent Advocacy Services",
        content: `
          <h4 class="font-bold text-gray-900 mb-2">What is an Independent Advocate?</h4>
          <p class="mb-4">An independent advocate is a person who can help you understand your rights, speak up for what you need, and help you make decisions about your NDIS plan and services. They are completely separate from DYAR and work only for you.</p>
          <h4 class="font-bold text-gray-900 mb-2">How to get an Advocate in Western Australia</h4>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Kin Advocacy:</strong> A WA-based advocacy service for people with disability. Call them on 1800 659 921 or visit kinadvocacy.org.au</li>
            <li><strong>Sussex Street Community Law Service:</strong> Provides disability advocacy in WA. Call (08) 6253 9500.</li>
            <li><strong>Disability Advocacy Finder:</strong> You can search for an advocate near you using the Australian Government's online tool at askizzy.org.au/disability-advocacy-finder</li>
          </ul>
          <p>If you need help contacting an advocate, our staff are required by law to assist you in making that connection if you ask us to.</p>
        `
      },
      {
        id: 'abuse',
        title: "Reporting Abuse, Neglect & Exploitation",
        content: `
          <h4 class="font-bold text-gray-900 mb-2">Zero Tolerance Policy</h4>
          <p class="mb-4">DYAR has a strict zero-tolerance policy towards any form of abuse, neglect, violence, or exploitation. You have the absolute right to feel safe and be safe at all times.</p>
          <h4 class="font-bold text-gray-900 mb-2">What you should do if you feel unsafe</h4>
          <p class="mb-4">If you are in immediate danger, call the Police on <strong>000</strong> immediately.</p>
          <p class="mb-4">If you have experienced or witnessed abuse or neglect by anyone (including our staff), you can report it directly to the NDIS Quality and Safeguards Commission. You do not need our permission to do this, and you can remain anonymous.</p>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Call the NDIS Commission:</strong> 1800 035 544 (free call from landlines)</li>
            <li><strong>National Relay Service:</strong> Ask for 1800 035 544</li>
            <li><strong>Translating and Interpreting Service (TIS):</strong> Call 131 450 and ask to be connected to 1800 035 544</li>
          </ul>
        `
      },
      {
        id: 'feedback',
        title: "Feedback & Complaints Process",
        content: `
          <h4 class="font-bold text-gray-900 mb-2">Internal Feedback to DYAR</h4>
          <p class="mb-6 text-gray-700">We want to know if you are unhappy with our services. You can tell any support worker, email <a href="mailto:complaints@dyar.com.au" class="text-purple-600 hover:underline">complaints@dyar.com.au</a>, or call 0470 540 306. Making a complaint will never result in you losing your services.</p>

          <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6">
            <p class="mb-4 text-gray-800 font-medium">To lodge a direct, external complaint, you must direct it to the correct agency, as the NDIS Commission and the NDIA handle entirely different issues.</p>
            <ul class="list-disc pl-5 mb-2 space-y-1 text-sm text-gray-700">
              <li>The <strong>NDIS Commission</strong> handles complaints regarding the safety, quality, and conduct of NDIS providers or workers.</li>
              <li>The <strong>NDIA</strong> handles complaints regarding NDIS plans, funding, decisions, or the conduct of NDIA staff.</li>
            </ul>
          </div>

          <h4 class="font-bold text-gray-900 mb-3">🏛️ Complaints to the NDIS Quality and Safeguards Commission</h4>
          <p class="mb-3 text-sm text-gray-600">Contact the NDIS Commission if you are experiencing poor-quality, unsafe, or missing supports, or if a provider/worker is acting unfairly.</p>
          <ul class="list-disc pl-5 mb-8 space-y-2 text-sm text-gray-700">
            <li><strong>Online Form:</strong> Submit a complaint using the NDIS Commission Complaint Form.</li>
            <li><strong>Phone:</strong> Call <strong>1800 035 544</strong> (free call from landlines).</li>
            <li><strong>Hours:</strong> Monday to Friday. 7:30 am – 3:30 pm in WA; 9:00 am – 5:00 pm in all other states/territories.</li>
            <li><strong>Email:</strong> Contact them directly via <a href="mailto:contactcentre@ndiscommission.gov.au" class="text-purple-600 hover:underline">contactcentre@ndiscommission.gov.au</a>.</li>
            <li><strong>TTY / Relay:</strong> Call 133 677 or ask the National Relay Service for 1800 035 544.</li>
            <li><strong>Mail:</strong> Send a letter to PO Box 210, Penrith NSW 2751.</li>
          </ul>

          <h4 class="font-bold text-gray-900 mb-3">📄 Complaints to the National Disability Insurance Agency (NDIA)</h4>
          <p class="mb-3 text-sm text-gray-600">Contact the NDIA if you are unhappy with an internal funding decision, local area coordinators (LACs), or your experience with NDIA systems.</p>
          <ul class="list-disc pl-5 mb-8 space-y-2 text-sm text-gray-700">
            <li><strong>Online Form:</strong> Fill out the NDIA Feedback and Complaints Form.</li>
            <li><strong>Phone:</strong> Call the NDIS National Contact Centre on <strong>1800 800 110</strong>.</li>
            <li><strong>Hours:</strong> Monday to Friday, 8:00 am to 8:00 pm (local time).</li>
            <li><strong>Email:</strong> Send your feedback directly to <a href="mailto:enquiries@ndis.gov.au" class="text-purple-600 hover:underline">enquiries@ndis.gov.au</a>.</li>
            <li><strong>In Person:</strong> Visit your local NDIS office, Local Area Coordinator (LAC), or Early Childhood partner.</li>
            <li><strong>Mail:</strong> Send a letter to NDIA, GPO Box 700, Canberra ACT 2601.</li>
          </ul>

          <h4 class="font-bold text-rose-600 mb-3">🚨 NDIS Fraud, Scams, and Emergencies</h4>
          <ul class="list-disc pl-5 mb-8 space-y-2 text-sm text-gray-700">
            <li><strong>Fraud & Overcharging:</strong> If you suspect a provider is overcharging or misusing NDIS plan money, call the NDIS Fraud Reporting and Scams Helpline on <strong>1800 650 717</strong> or email <a href="mailto:fraudreporting@ndis.gov.au" class="text-purple-600 hover:underline">fraudreporting@ndis.gov.au</a>.</li>
            <li><strong>Emergencies:</strong> If an individual is in immediate danger or a crime has been committed, call emergency services on <strong>000</strong> immediately.</li>
          </ul>

          <h4 class="font-bold text-gray-900 mb-3">⚖️ Escalating Your Complaint</h4>
          <p class="text-sm text-gray-700">If you have already lodged a complaint with either the NDIA or the NDIS Commission and are unhappy with how it was handled, you can escalate the matter to the Commonwealth Ombudsman by calling <strong>1300 362 072</strong>. Always ask for a complaint reference number from the NDIS/NDIA before contacting the Ombudsman.</p>
        `
      },
      {
        id: 'person_centred',
        title: "Person-Centred Support Principles",
        content: `
          <h4 class="font-bold text-gray-900 mb-2">You Are In Control</h4>
          <p class="mb-4">Person-centred support means that YOU are at the center of all decisions made about your care. Our services are designed to fit your life, not the other way around.</p>
          <h4 class="font-bold text-gray-900 mb-2">Our Commitment to You</h4>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li>We will respect your cultural, religious, and personal beliefs.</li>
            <li>We will support your right to take reasonable risks to achieve your goals.</li>
            <li>We will communicate with you in the way you prefer (e.g., Easy Read, verbal, translated).</li>
            <li>We will protect your privacy and only share your information when you say it's okay or if the law requires it.</li>
          </ul>
        `
      }
    ]
  },
  easy: {
    pageTitle: "Your",
    pageTitleHL: "Rights",
    pageSubtitle: "Read about how we keep you safe and how to get help.",
    categories: [
      {
        id: 'advocacy',
        title: "Get Help to Speak Up (Advocacy)",
        content: `
          <p class="mb-4">An advocate is a helper. They help you speak up for what you want.</p>
          <p class="mb-4">They do not work for us. They only work for you.</p>
          <p class="mb-4">You can get a free advocate in WA by calling <strong>Kin Advocacy</strong> on 1800 659 921.</p>
          <p>If you want an advocate, tell us. We can help you call them.</p>
        `
      },
      {
        id: 'abuse',
        title: "If Someone Hurts You (Abuse)",
        content: `
          <p class="mb-4">No one is allowed to hurt you, yell at you, or take your things.</p>
          <p class="mb-4">If someone hurts you and you are in danger, call the Police on <strong>000</strong>.</p>
          <p class="mb-4">If a support worker hurts you or makes you feel bad, you can tell the NDIS Commission.</p>
          <p>Call the NDIS Commission on <strong>1800 035 544</strong>. They will help keep you safe.</p>
        `
      },
      {
        id: 'feedback',
        title: "Tell Us If You Are Unhappy (Complaints)",
        content: `
          <p class="mb-4">If you do not like our service, please tell us. We will not be angry.</p>
          <p class="mb-4">You can tell your support worker, or you can call us.</p>
          <p class="mb-4">We will listen to you and try to fix the problem to make you happy.</p>
          <p>If we do not fix it, you can call the NDIS Commission to complain about us.</p>
        `
      },
      {
        id: 'person_centred',
        title: "You Are The Boss",
        content: `
          <p class="mb-4">You are the boss of your own life.</p>
          <p class="mb-4">You get to choose what you do, who helps you, and when they help you.</p>
          <p class="mb-4">We will always listen to what you want.</p>
          <p>We will keep your private information safe and not tell other people without asking you first.</p>
        `
      }
    ]
  },
  ar: {
    pageTitle: "حقوق",
    pageTitleHL: "المشارك والموارد",
    pageSubtitle: "نحن ملتزمون بتمكينك. اقرأ عن حقوقك وكيفية الحصول على محامٍ مستقل وسياستنا لعدم التسامح مع الإساءة.",
    categories: [
      {
        id: 'advocacy',
        title: "خدمات المناصرة المستقلة",
        content: `
          <p class="mb-4">المناصر المستقل هو شخص يمكنه مساعدتك على فهم حقوقك والتحدث عما تحتاجه.</p>
          <p class="mb-4">للحصول على مناصر في غرب أستراليا، يمكنك الاتصال بـ <strong>Kin Advocacy</strong> على الرقم 1800 659 921.</p>
          <p>إذا كنت بحاجة إلى مساعدة في الاتصال بمناصر، سيقوم موظفونا بمساعدتك.</p>
        `
      },
      {
        id: 'abuse',
        title: "الإبلاغ عن الإساءة والإهمال والاستغلال",
        content: `
          <p class="mb-4">تتبع DYAR سياسة صارمة بعدم التسامح مع أي شكل من أشكال الإساءة أو الإهمال.</p>
          <p class="mb-4">إذا كنت في خطر، اتصل بالشرطة على <strong>000</strong> فوراً.</p>
          <p>للإبلاغ عن إساءة، يمكنك الاتصال بلجنة NDIS على <strong>1800 035 544</strong>.</p>
        `
      },
      {
        id: 'feedback',
        title: "عملية الملاحظات والشكاوى",
        content: `
          <p class="mb-4">نريد أن نعرف إذا كنت غير راضٍ عن خدماتنا. تقديم شكوى لن يؤدي أبداً إلى فقدانك للخدمات.</p>
          <p class="mb-4">يمكنك إخبار موظفينا أو مراسلتنا عبر البريد الإلكتروني.</p>
          <p>إذا لم تكن سعيداً بكيفية تعاملنا مع شكواك، اتصل بلجنة NDIS على 1800 035 544.</p>
        `
      },
      {
        id: 'person_centred',
        title: "مبادئ الدعم المتمحور حول الشخص",
        content: `
          <p class="mb-4">أنت في مركز جميع القرارات المتعلقة برعايتك.</p>
          <p class="mb-4">سنحترم معتقداتك الثقافية والدينية والشخصية.</p>
          <p>سنحمي خصوصيتك ولا نشارك معلوماتك إلا إذا سمحت بذلك.</p>
        `
      }
    ]
  },
  fa: {
    pageTitle: "حقوق",
    pageTitleHL: "شرکت کننده",
    pageSubtitle: "ما متعهد به توانمندسازی شما هستیم. درباره حقوق خود، نحوه دریافت وکیل مستقل و سیاست عدم تحمل سوءاستفاده ما بخوانید.",
    categories: [
      {
        id: 'advocacy',
        title: "خدمات حمایت مستقل",
        content: `
          <p class="mb-4">حامی مستقل شخصی است که می‌تواند به شما در درک حقوق خود و صحبت در مورد نیازهایتان کمک کند.</p>
          <p class="mb-4">برای دریافت حامی در استرالیای غربی، می‌توانید با <strong>Kin Advocacy</strong> با شماره 1800 659 921 تماس بگیرید.</p>
          <p>اگر برای تماس با یک حامی به کمک نیاز دارید، کارکنان ما به شما کمک خواهند کرد.</p>
        `
      },
      {
        id: 'abuse',
        title: "گزارش سوء استفاده، غفلت و بهره‌کشی",
        content: `
          <p class="mb-4">DYAR سیاست سختگیرانه عدم تحمل در قبال هرگونه سوء استفاده یا غفلت دارد.</p>
          <p class="mb-4">اگر در خطر هستید، بلافاصله با پلیس با شماره <strong>000</strong> تماس بگیرید.</p>
          <p>برای گزارش سوء استفاده، می‌توانید با کمیسیون NDIS با شماره <strong>1800 035 544</strong> تماس بگیرید.</p>
        `
      },
      {
        id: 'feedback',
        title: "روند بازخورد و شکایات",
        content: `
          <p class="mb-4">ما می‌خواهیم بدانیم اگر از خدمات ما ناراضی هستید. شکایت کردن هرگز باعث از دست دادن خدمات شما نمی‌شود.</p>
          <p class="mb-4">می‌توانید به کارکنان ما بگویید یا به ما ایمیل بزنید.</p>
          <p>اگر از نحوه رسیدگی ما به شکایت خود راضی نیستید، با کمیسیون NDIS با شماره 1800 035 544 تماس بگیرید.</p>
        `
      },
      {
        id: 'person_centred',
        title: "اصول حمایت شخص محور",
        content: `
          <p class="mb-4">شما در مرکز تمام تصمیمات مربوط به مراقبت خود هستید.</p>
          <p class="mb-4">ما به اعتقادات فرهنگی، مذهبی و شخصی شما احترام خواهیم گذاشت.</p>
          <p>ما از حریم خصوصی شما محافظت می‌کنیم و اطلاعات شما را به اشتراک نمی‌گذاریم مگر اینکه شما اجازه دهید.</p>
        `
      }
    ]
  },
  zh: {
    pageTitle: "参与者",
    pageTitleHL: "权利和资源",
    pageSubtitle: "我们致力于赋予您权力。了解您的权利，如何获得独立倡导者，以及我们对虐待的零容忍政策。",
    categories: [
      {
        id: 'advocacy',
        title: "独立倡导服务",
        content: `
          <p class="mb-4">独立倡导者可以帮助您了解自己的权利，并说出您的需求。</p>
          <p class="mb-4">要在西澳大利亚州寻找倡导者，您可以致电 <strong>Kin Advocacy</strong>：1800 659 921。</p>
          <p>如果您需要帮助联系倡导者，我们的工作人员将协助您。</p>
        `
      },
      {
        id: 'abuse',
        title: "报告虐待、忽视和剥削",
        content: `
          <p class="mb-4">DYAR 对任何形式的虐待或忽视采取严格的零容忍政策。</p>
          <p class="mb-4">如果您处于危险之中，请立即拨打 <strong>000</strong> 报警。</p>
          <p>如需报告虐待，您可以致电 NDIS 委员会：<strong>1800 035 544</strong>。</p>
        `
      },
      {
        id: 'feedback',
        title: "反馈和投诉流程",
        content: `
          <p class="mb-4">如果您对我们的服务不满意，我们希望了解。提出投诉绝不会导致您失去服务。</p>
          <p class="mb-4">您可以告诉我们的工作人员或给我们发电子邮件。</p>
          <p>如果您对我们处理投诉的方式不满意，请致电 NDIS 委员会：1800 035 544。</p>
        `
      },
      {
        id: 'person_centred',
        title: "以人为本的支持原则",
        content: `
          <p class="mb-4">您是所有关于您护理的决定的中心。</p>
          <p class="mb-4">我们将尊重您的文化、宗教和个人信仰。</p>
          <p>我们将保护您的隐私，除非您同意，否则不会分享您的信息。</p>
        `
      }
    ]
  },
  hi: {
    pageTitle: "प्रतिभागी",
    pageTitleHL: "अधिकार और संसाधन",
    pageSubtitle: "हम आपको सशक्त बनाने के लिए प्रतिबद्ध हैं। अपने अधिकारों के बारे में पढ़ें, स्वतंत्र अधिवक्ता कैसे प्राप्त करें, और दुर्व्यवहार के लिए हमारी शून्य-सहिष्णुता नीति।",
    categories: [
      {
        id: 'advocacy',
        title: "स्वतंत्र वकालत सेवाएँ",
        content: `
          <p class="mb-4">एक स्वतंत्र अधिवक्ता वह व्यक्ति होता है जो आपको अपने अधिकारों को समझने और अपनी आवश्यकताओं के लिए बोलने में मदद कर सकता है।</p>
          <p class="mb-4">पश्चिमी ऑस्ट्रेलिया में एक अधिवक्ता प्राप्त करने के लिए, आप <strong>Kin Advocacy</strong> को 1800 659 921 पर कॉल कर सकते हैं।</p>
          <p>यदि आपको एक अधिवक्ता से संपर्क करने में सहायता की आवश्यकता है, तो हमारे कर्मचारी आपकी सहायता करेंगे।</p>
        `
      },
      {
        id: 'abuse',
        title: "दुर्व्यवहार, उपेक्षा और शोषण की रिपोर्ट करना",
        content: `
          <p class="mb-4">DYAR की किसी भी रूप के दुर्व्यवहार या उपेक्षा के प्रति सख्त शून्य-सहिष्णुता नीति है।</p>
          <p class="mb-4">यदि आप खतरे में हैं, तो तुरंत <strong>000</strong> पर पुलिस को कॉल करें।</p>
          <p>दुर्व्यवहार की रिपोर्ट करने के लिए, आप NDIS आयोग को <strong>1800 035 544</strong> पर कॉल कर सकते हैं।</p>
        `
      },
      {
        id: 'feedback',
        title: "प्रतिक्रिया और शिकायत प्रक्रिया",
        content: `
          <p class="mb-4">हम जानना चाहते हैं कि क्या आप हमारी सेवाओं से नाखुश हैं। शिकायत करने से कभी भी आपकी सेवाएँ समाप्त नहीं होंगी।</p>
          <p class="mb-4">आप हमारे कर्मचारियों को बता सकते हैं या हमें ईमेल कर सकते हैं।</p>
          <p>यदि आप इस बात से खुश नहीं हैं कि हमने आपकी शिकायत को कैसे संभाला, तो NDIS आयोग को 1800 035 544 पर कॉल करें।</p>
        `
      },
      {
        id: 'person_centred',
        title: "व्यक्ति-केंद्रित समर्थन सिद्धांत",
        content: `
          <p class="mb-4">आप अपनी देखभाल के बारे में सभी निर्णयों के केंद्र में हैं।</p>
          <p class="mb-4">हम आपके सांस्कृतिक, धार्मिक और व्यक्तिगत विश्वासों का सम्मान करेंगे।</p>
          <p>हम आपकी गोपनीयता की रक्षा करेंगे और आपकी जानकारी तब तक साझा नहीं करेंगे जब तक आप अनुमति नहीं देते।</p>
        `
      }
    ]
  },
  vi: {
    pageTitle: "Quyền &",
    pageTitleHL: "Tài nguyên",
    pageSubtitle: "Chúng tôi cam kết trao quyền cho bạn. Đọc về quyền của bạn, cách nhận người biện hộ độc lập và chính sách không khoan nhượng của chúng tôi đối với lạm dụng.",
    categories: [
      {
        id: 'advocacy',
        title: "Dịch vụ Biện hộ Độc lập",
        content: `
          <p class="mb-4">Người biện hộ độc lập có thể giúp bạn hiểu quyền của mình và lên tiếng cho những gì bạn cần.</p>
          <p class="mb-4">Để tìm người biện hộ ở Tây Úc, bạn có thể gọi <strong>Kin Advocacy</strong> theo số 1800 659 921.</p>
          <p>Nếu bạn cần giúp đỡ liên hệ với người biện hộ, nhân viên của chúng tôi sẽ hỗ trợ bạn.</p>
        `
      },
      {
        id: 'abuse',
        title: "Báo cáo Lạm dụng, Bỏ bê & Bóc lột",
        content: `
          <p class="mb-4">DYAR có chính sách không khoan nhượng nghiêm ngặt đối với bất kỳ hình thức lạm dụng hoặc bỏ bê nào.</p>
          <p class="mb-4">Nếu bạn đang gặp nguy hiểm, hãy gọi Cảnh sát theo số <strong>000</strong> ngay lập tức.</p>
          <p>Để báo cáo lạm dụng, bạn có thể gọi cho Ủy ban NDIS theo số <strong>1800 035 544</strong>.</p>
        `
      },
      {
        id: 'feedback',
        title: "Quy trình Phản hồi & Khiếu nại",
        content: `
          <p class="mb-4">Chúng tôi muốn biết nếu bạn không hài lòng với dịch vụ của chúng tôi. Đưa ra khiếu nại sẽ không bao giờ khiến bạn bị mất dịch vụ.</p>
          <p class="mb-4">Bạn có thể nói với nhân viên của chúng tôi hoặc gửi email cho chúng tôi.</p>
          <p>Nếu bạn không hài lòng với cách chúng tôi xử lý khiếu nại của bạn, hãy gọi cho Ủy ban NDIS theo số 1800 035 544.</p>
        `
      },
      {
        id: 'person_centred',
        title: "Nguyên tắc Hỗ trợ Lấy con người làm trung tâm",
        content: `
          <p class="mb-4">Bạn là trung tâm của tất cả các quyết định về sự chăm sóc của bạn.</p>
          <p class="mb-4">Chúng tôi sẽ tôn trọng tín ngưỡng văn hóa, tôn giáo và cá nhân của bạn.</p>
          <p>Chúng tôi sẽ bảo vệ quyền riêng tư của bạn và chỉ chia sẻ thông tin của bạn khi bạn cho phép.</p>
        `
      }
    ]
  }
};
