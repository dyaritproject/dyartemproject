export interface TranslationSet {
  title: string;
  content: string;
  auditText: string;
}

export interface CM1Article {
  id: string;
  category: string;
  color: string;
  translations: {
    en: TranslationSet;
    zh: TranslationSet;
    ar: TranslationSet;
    hi: TranslationSet;
    fa: TranslationSet;
    vi: TranslationSet;
  };
}

export const cm1Data: CM1Article[] = [
  {
    id: 'cm1-1',
    category: 'Rights & Responsibilities',
    color: 'from-blue-500 to-indigo-600',
    translations: {
      en: {
        title: '1. Person-Centred Supports',
        content: 'We will always put you first and make sure you have the choice and control over the services you receive.',
        auditText: 'DYAR ensures that all support plans are developed in collaboration with the participant. Our audit history demonstrates a strict adherence to individualised planning.'
      },
      zh: {
        title: '1. 以人为本的支持',
        content: '每位参与者都能获得促进、维护和尊重其合法和人权的支持，并能够行使知情的选择权和控制权。',
        auditText: 'DYAR 确保所有支持计划都是与参与者合作制定的。我们的审计历史证明我们严格遵守个性化规划。'
      },
      ar: {
        title: '1. الدعم المتمركز حول الشخص',
        content: 'يحصل كل مشارك على دعم يعزز ويحترم حقوقه القانونية والإنسانية، ويُمكن من ممارسة الاختيار والتحكم عن علم.',
        auditText: 'تضمن DYAR تطوير جميع خطط الدعم بالتعاون مع المشارك. يُظهر سجل التدقيق الخاص بنا التزاماً صارماً بالتخطيط الفردي.'
      },
      hi: {
        title: '1. व्यक्ति-केंद्रित समर्थन',
        content: 'प्रत्येक प्रतिभागी उन समर्थनों तक पहुंचता है जो उनके कानूनी और मानवाधिकारों को बढ़ावा देते हैं, और उन्हें सूचित विकल्प और नियंत्रण का प्रयोग करने में सक्षम बनाते हैं।',
        auditText: 'DYAR यह सुनिश्चित करता है कि सभी समर्थन योजनाएँ प्रतिभागी के सहयोग से विकसित की जाएँ। हमारा ऑडिट इतिहास व्यक्तिगत योजना के प्रति सख्त पालन प्रदर्शित करता है।'
      },
      fa: {
        title: '۱. حمایت‌های شخص‌محور',
        content: 'هر شرکت‌کننده به حمایت‌هایی دسترسی دارد که حقوق قانونی و انسانی او را ترویج و احترام می‌گذارد و او را قادر می‌سازد تا انتخاب و کنترل آگاهانه‌ای داشته باشد.',
        auditText: 'DYAR اطمینان حاصل می‌کند که تمام برنامه‌های حمایتی با همکاری شرکت‌کننده تدوین می‌شود. سابقه حسابرسی ما نشان‌دهنده پایبندی دقیق به برنامه‌ریزی فردی است.'
      },
      vi: {
        title: '1. Dịch vụ Hỗ trợ Lấy Con người làm Trung tâm',
        content: 'Mỗi người tham gia đều được tiếp cận các dịch vụ hỗ trợ nhằm thúc đẩy, duy trì và tôn trọng các quyền hợp pháp và nhân quyền của họ, đồng thời được tạo điều kiện để thực hiện quyền lựa chọn và kiểm soát dựa trên thông tin đầy đủ.',
        auditText: 'DYAR đảm bảo rằng tất cả các kế hoạch hỗ trợ đều được xây dựng với sự cộng tác của người tham gia. Lịch sử kiểm toán của chúng tôi chứng minh sự tuân thủ nghiêm ngặt đối với việc lập kế hoạch cá nhân hóa.'
      }
    }
  },
  {
    id: 'cm1-2',
    category: 'Rights & Responsibilities',
    color: 'from-purple-500 to-fuchsia-600',
    translations: {
      en: {
        title: '2. Individual Values and Beliefs',
        content: 'We respect your culture, religion, and beliefs, and we will make sure our services reflect what is important to you.',
        auditText: 'All DYAR staff undergo mandatory cultural competency training. Assessments explicitly record and incorporate the cultural and religious preferences of participants.'
      },
      zh: {
        title: '2. 个人价值观和信仰',
        content: '每位参与者都能获得尊重其文化、多样性、价值观和信仰的支持。',
        auditText: '所有 DYAR 员工都必须接受强制性的文化能力培训。评估明确记录并结合了参与者的文化和宗教偏好。'
      },
      ar: {
        title: '2. القيم والمعتقدات الفردية',
        content: 'يحصل كل مشارك على الدعم الذي يحترم ثقافته وتنوعه وقيمه ومعتقداته.',
        auditText: 'يخضع جميع موظفي DYAR لتدريب إلزامي على الكفاءة الثقافية. تسجل التقييمات التفضيلات الثقافية والدينية للمشاركين وتدمجها صراحة.'
      },
      hi: {
        title: '2. व्यक्तिगत मूल्य और मान्यताएँ',
        content: 'प्रत्येक प्रतिभागी उन समर्थनों तक पहुंचता है जो उनकी संस्कृति, विविधता, मूल्यों और मान्यताओं का सम्मान करते हैं।',
        auditText: 'सभी DYAR कर्मचारी अनिवार्य सांस्कृतिक योग्यता प्रशिक्षण से गुजरते हैं। मूल्यांकन स्पष्ट रूप से प्रतिभागियों की सांस्कृतिक और धार्मिक प्राथमिकताओं को रिकॉर्ड और शामिल करते हैं।'
      },
      fa: {
        title: '۲. ارزش‌ها و باورهای فردی',
        content: 'هر شرکت‌کننده به حمایت‌هایی دسترسی دارد که به فرهنگ، تنوع، ارزش‌ها و باورهای او احترام می‌گذارد.',
        auditText: 'تمام کارکنان DYAR تحت آموزش‌های اجباری شایستگی فرهنگی قرار می‌گیرند. ارزیابی‌ها صراحتاً ترجیحات فرهنگی و مذهبی شرکت‌کنندگان را ثبت و در نظر می‌گیرند.'
      },
      vi: {
        title: '2. Giá trị và Tín ngưỡng Cá nhân',
        content: 'Mỗi người tham gia đều được tiếp cận các dịch vụ hỗ trợ tôn trọng văn hóa, sự đa dạng, giá trị và tín ngưỡng của họ.',
        auditText: 'Tất cả nhân viên của DYAR đều phải trải qua khóa đào tạo bắt buộc về năng lực văn hóa. Các bài đánh giá ghi lại và kết hợp rõ ràng các sở thích về văn hóa và tôn giáo của người tham gia.'
      }
    }
  },
  {
    id: 'cm1-3',
    category: 'Rights & Responsibilities',
    color: 'from-emerald-500 to-teal-600',
    translations: {
      en: {
        title: '3. Privacy and Dignity',
        content: 'We will always protect your privacy, keep your information safe, and treat you with dignity and respect.',
        auditText: 'DYAR utilizes secure AWS databases for all client records. Staff adhere to strict confidentiality agreements, and consent is documented prior to any information sharing.'
      },
      zh: {
        title: '3. 隐私与尊严',
        content: '每位参与者都能获得尊重并保护其尊严和隐私权的支持。',
        auditText: 'DYAR 所有的客户记录均使用安全的 AWS 数据库。员工遵守严格的保密协议，并在共享任何信息之前记录同意书。'
      },
      ar: {
        title: '3. الخصوصية والكرامة',
        content: 'يحصل كل مشارك على الدعم الذي يحترم ويحمي كرامته وحقه في الخصوصية.',
        auditText: 'تستخدم DYAR قواعد بيانات AWS الآمنة لجميع سجلات العملاء. يلتزم الموظفون باتفاقيات سرية صارمة، ويتم توثيق الموافقة قبل أي مشاركة للمعلومات.'
      },
      hi: {
        title: '3. गोपनीयता और गरिमा',
        content: 'प्रत्येक प्रतिभागी उन समर्थनों तक पहुंचता है जो उनकी गरिमा और गोपनीयता के अधिकार का सम्मान करते हैं और उनकी रक्षा करते हैं।',
        auditText: 'DYAR सभी क्लाइंट रिकॉर्ड के लिए सुरक्षित AWS डेटाबेस का उपयोग करता है। कर्मचारी सख्त गोपनीयता समझौतों का पालन करते हैं, और किसी भी जानकारी को साझा करने से पहले सहमति का दस्तावेजीकरण किया जाता है।'
      },
      fa: {
        title: '۳. حریم خصوصی و کرامت',
        content: 'هر شرکت‌کننده به حمایت‌هایی دسترسی دارد که به کرامت و حق حریم خصوصی او احترام گذاشته و از آن محافظت می‌کند.',
        auditText: 'DYAR برای تمام سوابق مراجعین از پایگاه‌های داده امن AWS استفاده می‌کند. کارکنان به توافق‌نامه‌های دقیق رازداری پایبند هستند و قبل از هرگونه اشتراک‌گذاری اطلاعات، رضایت کتبی دریافت می‌شود.'
      },
      vi: {
        title: '3. Quyền riêng tư và Nhân phẩm',
        content: 'Mỗi người tham gia đều được tiếp cận các dịch vụ hỗ trợ tôn trọng và bảo vệ nhân phẩm cũng như quyền riêng tư của họ.',
        auditText: 'DYAR sử dụng cơ sở dữ liệu AWS an toàn cho tất cả hồ sơ khách hàng. Nhân viên tuân thủ các thỏa thuận bảo mật nghiêm ngặt và sự đồng ý được ghi chép lại trước khi chia sẻ bất kỳ thông tin nào.'
      }
    }
  },
  {
    id: 'cm1-4',
    category: 'Rights & Responsibilities',
    color: 'from-amber-500 to-orange-600',
    translations: {
      en: {
        title: '4. Independence and Informed Choice',
        content: 'We will help you make your own choices about your care and support you to be as independent as possible.',
        auditText: 'Participants are provided with accessible information (including easy-read formats and interpreters) to ensure decisions about their care are fully informed.'
      },
      zh: {
        title: '4. 独立性与知情选择',
        content: '支持每位参与者做出知情选择，行使控制权，并最大限度地提高与所提供支持相关的独立性。',
        auditText: '向参与者提供无障碍信息（包括易读格式和口译员），以确保有关其护理的决定是完全知情的。'
      },
      ar: {
        title: '4. الاستقلال والاختيار المستنير',
        content: 'يتم دعم كل مشارك لاتخاذ خيارات مستنيرة، وممارسة السيطرة، وتعظيم استقلاليتهم فيما يتعلق بالدعم المقدم.',
        auditText: 'يتم تزويد المشاركين بمعلومات يمكن الوصول إليها (بما في ذلك التنسيقات السهلة القراءة والمترجمين الفوريين) لضمان أن القرارات المتعلقة برعايتهم مستنيرة بالكامل.'
      },
      hi: {
        title: '4. स्वतंत्रता और सूचित विकल्प',
        content: 'प्रत्येक प्रतिभागी को सूचित विकल्प बनाने, नियंत्रण का प्रयोग करने और प्रदान किए गए समर्थन के संबंध में अपनी स्वतंत्रता को अधिकतम करने के लिए समर्थन दिया जाता है।',
        auditText: 'प्रतिभागियों को सुलभ जानकारी (जिसमें आसानी से पढ़े जाने वाले प्रारूप और दुभाषिए शामिल हैं) प्रदान की जाती है ताकि यह सुनिश्चित हो सके कि उनकी देखभाल के बारे में निर्णय पूरी तरह से सूचित हैं।'
      },
      fa: {
        title: '۴. استقلال و انتخاب آگاهانه',
        content: 'از هر شرکت‌کننده برای انجام انتخاب‌های آگاهانه، اعمال کنترل و به حداکثر رساندن استقلال خود در رابطه با حمایت‌های ارائه‌شده، پشتیبانی می‌شود.',
        auditText: 'به شرکت‌کنندگان اطلاعات قابل دسترسی (از جمله قالب‌های آسان‌خوان و مترجمان) ارائه می‌شود تا اطمینان حاصل شود که تصمیمات مربوط به مراقبت از آنها کاملاً آگاهانه است.'
      },
      vi: {
        title: '4. Sự Độc lập và Lựa chọn Có thông tin',
        content: 'Mỗi người tham gia được hỗ trợ để đưa ra những lựa chọn sáng suốt, thực hiện quyền kiểm soát và tối đa hóa sự độc lập của họ liên quan đến các dịch vụ hỗ trợ được cung cấp.',
        auditText: 'Người tham gia được cung cấp thông tin dễ tiếp cận (bao gồm các định dạng dễ đọc và thông dịch viên) để đảm bảo các quyết định về việc chăm sóc của họ được đưa ra với đầy đủ thông tin.'
      }
    }
  },
  {
    id: 'cm1-5',
    category: 'Rights & Responsibilities',
    color: 'from-rose-500 to-red-600',
    translations: {
      en: {
        title: '5. Freedom from Violence, Abuse, Neglect and Exploitation',
        content: 'We will keep you safe. We have a zero-tolerance policy for any kind of violence, abuse, neglect, or exploitation.',
        auditText: 'DYAR maintains a zero-tolerance policy. Incident management systems are audited regularly, and all staff are rigorously screened via NDIS Worker Screening Checks.'
      },
      zh: {
        title: '5. 免受暴力、虐待、忽视和剥削',
        content: '每位参与者都能获得免受暴力、虐待、忽视、剥削或歧视的支持。',
        auditText: 'DYAR 坚持零容忍政策。事件管理系统定期接受审计，所有员工均通过 NDIS 员工筛查进行严格审查。'
      },
      ar: {
        title: '5. التحرر من العنف والإساءة والإهمال والاستغلال',
        content: 'يحصل كل مشارك على دعم خالٍ من العنف أو الإساءة أو الإهمال أو الاستغلال أو التمييز.',
        auditText: 'تحتفظ DYAR بسياسة عدم التسامح مطلقاً. تخضع أنظمة إدارة الحوادث لتدقيق منتظم، ويتم فحص جميع الموظفين بدقة عبر فحوصات فحص عمال NDIS.'
      },
      hi: {
        title: '5. हिंसा, दुर्व्यवहार, उपेक्षा और शोषण से मुक्ति',
        content: 'प्रत्येक प्रतिभागी हिंसा, दुर्व्यवहार, उपेक्षा, शोषण या भेदभाव से मुक्त समर्थन प्राप्त करता है।',
        auditText: 'DYAR शून्य-सहिष्णुता नीति बनाए रखता है। घटना प्रबंधन प्रणालियों का नियमित रूप से ऑडिट किया जाता है, और NDIS वर्कर स्क्रीनिंग चेक के माध्यम से सभी कर्मचारियों की कठोर जांच की जाती है।'
      },
      fa: {
        title: '۵. رهایی از خشونت، سوء‌استفاده، غفلت و استثمار',
        content: 'هر شرکت‌کننده به حمایت‌هایی عاری از خشونت، سوءاستفاده، غفلت، استثمار یا تبعیض دسترسی دارد.',
        auditText: 'DYAR سیاست تحمل صفر را حفظ می‌کند. سیستم‌های مدیریت حوادث به طور منظم حسابرسی می‌شوند و تمامی کارکنان از طریق بررسی‌های پیشینه کارکنان NDIS به دقت ارزیابی می‌شوند.'
      },
      vi: {
        title: '5. Không bị Bạo lực, Lạm dụng, Bỏ bê và Bóc lột',
        content: 'Mỗi người tham gia đều được tiếp cận các dịch vụ hỗ trợ không có bạo lực, lạm dụng, bỏ bê, bóc lột hoặc phân biệt đối xử.',
        auditText: 'DYAR duy trì chính sách không khoan nhượng. Hệ thống quản lý sự cố được kiểm toán thường xuyên và tất cả nhân viên đều được sàng lọc kỹ lưỡng thông qua Hệ thống Kiểm tra Nhân viên NDIS.'
      }
    }
  },
  {
    id: 'cm1-6',
    category: 'Rights & Responsibilities',
    color: 'from-cyan-500 to-blue-600',
    translations: {
      en: {
        title: '6. Freedom of Expression',
        content: 'We will listen to you. You have the right to share your thoughts, and we will always take your views seriously.',
        auditText: 'DYAR provides multiple avenues for participant expression, including feedback forms, clinical reviews, and anonymous surveys, ensuring all voices are integrated into service design.'
      },
      zh: {
        title: '6. 表达自由',
        content: '每位参与者自由表达观点和被倾听的权利均受到尊重。',
        auditText: 'DYAR 为参与者提供多种表达途径，包括反馈表、临床审查和匿名调查，确保将所有声音整合到服务设计中。'
      },
      ar: {
        title: '6. حرية التعبير',
        content: 'يتم احترام حق كل مشارك في التعبير عن آرائه بحرية وأن يُسمع.',
        auditText: 'توفر DYAR طرقاً متعددة لتعبير المشاركين، بما في ذلك نماذج الملاحظات، والمراجعات السريرية، والاستطلاعات المجهولة، مما يضمن دمج جميع الأصوات في تصميم الخدمة.'
      },
      hi: {
        title: '6. अभिव्यक्ति की स्वतंत्रता',
        content: 'प्रत्येक प्रतिभागी के अपने विचारों को स्वतंत्र रूप से व्यक्त करने और सुने जाने के अधिकार का सम्मान किया जाता है।',
        auditText: 'DYAR प्रतिभागियों की अभिव्यक्ति के लिए कई रास्ते प्रदान करता है, जिसमें फीडबैक फॉर्म, नैदानिक ​​समीक्षाएं और अनाम सर्वेक्षण शामिल हैं, यह सुनिश्चित करते हुए कि सभी आवाज़ों को सेवा डिजाइन में एकीकृत किया गया है।'
      },
      fa: {
        title: '۶. آزادی بیان',
        content: 'حق هر شرکت‌کننده برای بیان آزادانه نظرات خود و شنیده شدن، محترم شمرده می‌شود.',
        auditText: 'DYAR راه‌های متعددی را برای بیان نظرات شرکت‌کنندگان، از جمله فرم‌های بازخورد، بررسی‌های بالینی و نظرسنجی‌های ناشناس فراهم می‌کند و اطمینان می‌دهد که تمام صداها در طراحی خدمات ادغام می‌شوند.'
      },
      vi: {
        title: '6. Quyền Tự do Biểu đạt',
        content: 'Quyền của mỗi người tham gia được tự do bày tỏ quan điểm và được lắng nghe đều được tôn trọng.',
        auditText: 'DYAR cung cấp nhiều phương tiện để người tham gia bày tỏ ý kiến, bao gồm các biểu mẫu phản hồi, đánh giá lâm sàng và khảo sát ẩn danh, đảm bảo mọi tiếng nói đều được tích hợp vào việc thiết kế dịch vụ.'
      }
    }
  },
  {
    id: 'cm1-7',
    category: 'Rights & Responsibilities',
    color: 'from-lime-500 to-green-600',
    translations: {
      en: {
        title: '7. Supported Decision Making',
        content: 'We will help you make decisions that affect your life. If you need support from an advocate or family member, we will include them.',
        auditText: 'Our clinical practices emphasize supported decision-making frameworks, where guardians or advocates are involved only with the participant’s explicit consent.'
      },
      zh: {
        title: '7. 支持性决策',
        content: '支持参与者做出决策并参与影响他们的决策。',
        auditText: '我们的临床实践强调支持性决策框架，只有在参与者明确同意的情况下，监护人或倡导者才能参与其中。'
      },
      ar: {
        title: '7. اتخاذ القرار المدعوم',
        content: 'يتم دعم المشاركين لاتخاذ القرارات والمشاركة في القرارات التي تؤثر عليهم.',
        auditText: 'تؤكد ممارساتنا السريرية على أطر اتخاذ القرار المدعومة، حيث يشارك الأوصياء أو المدافعون فقط بموافقة صريحة من المشارك.'
      },
      hi: {
        title: '7. समर्थित निर्णय लेना',
        content: 'प्रतिभागियों को निर्णय लेने और उन्हें प्रभावित करने वाले निर्णयों में शामिल होने के लिए समर्थन दिया जाता है।',
        auditText: 'हमारे नैदानिक ​​अभ्यास समर्थित निर्णय लेने वाले ढांचे पर जोर देते हैं, जहां अभिभावक या अधिवक्ता केवल प्रतिभागी की स्पष्ट सहमति से शामिल होते हैं।'
      },
      fa: {
        title: '۷. تصمیم‌گیری پشتیبانی‌شده',
        content: 'از شرکت‌کنندگان برای تصمیم‌گیری و مشارکت در تصمیماتی که بر آنها تأثیر می‌گذارد، پشتیبانی می‌شود.',
        auditText: 'شیوه‌های بالینی ما بر چارچوب‌های تصمیم‌گیری پشتیبانی‌شده تأکید دارند، جایی که سرپرستان یا حامیان تنها با رضایت صریح شرکت‌کننده درگیر می‌شوند.'
      },
      vi: {
        title: '7. Ra quyết định có hỗ trợ',
        content: 'Người tham gia được hỗ trợ để đưa ra quyết định và tham gia vào các quyết định có ảnh hưởng đến họ.',
        auditText: 'Các hoạt động lâm sàng của chúng tôi nhấn mạnh vào các khuôn khổ ra quyết định có hỗ trợ, trong đó người giám hộ hoặc người biện hộ chỉ tham gia khi có sự đồng ý rõ ràng của người tham gia.'
      }
    }
  },
  {
    id: 'cm1-8',
    category: 'Rights & Responsibilities',
    color: 'from-pink-500 to-rose-600',
    translations: {
      en: {
        title: '8. Risk Management and Dignity of Risk',
        content: 'We will help you try new things safely. We respect your right to take reasonable risks to live the life you want.',
        auditText: 'Comprehensive risk assessments are conducted, but we fundamentally respect the participant’s right to make choices that involve reasonable risk, as per NDIS Practice Standards.'
      },
      zh: {
        title: '8. 风险管理与风险尊严',
        content: '支持参与者了解风险并做出知情决定，拥抱风险的尊严。',
        auditText: '我们进行全面的风险评估，但根据 NDIS 实践标准，我们从根本上尊重参与者做出涉及合理风险的选择的权利。'
      },
      ar: {
        title: '8. إدارة المخاطر وكرامة المخاطرة',
        content: 'يتم دعم المشاركين لفهم المخاطر واتخاذ قرارات مستنيرة، واحتضان كرامة المخاطرة.',
        auditText: 'يتم إجراء تقييمات شاملة للمخاطر، لكننا نحترم بشكل أساسي حق المشارك في اتخاذ الخيارات التي تنطوي على مخاطر معقولة، وفقاً لمعايير ممارسة NDIS.'
      },
      hi: {
        title: '8. जोखिम प्रबंधन और जोखिम की गरिमा',
        content: 'प्रतिभागियों को जोखिमों को समझने और जोखिम की गरिमा को अपनाते हुए सूचित निर्णय लेने के लिए समर्थित किया जाता है।',
        auditText: 'व्यापक जोखिम आकलन किए जाते हैं, लेकिन हम NDIS अभ्यास मानकों के अनुसार उचित जोखिम वाले विकल्प बनाने के प्रतिभागी के अधिकार का मौलिक रूप से सम्मान करते हैं।'
      },
      fa: {
        title: '۸. مدیریت ریسک و کرامت خطرپذیری',
        content: 'از شرکت‌کنندگان برای درک خطرات و اتخاذ تصمیمات آگاهانه، با پذیرش کرامت خطرپذیری، پشتیبانی می‌شود.',
        auditText: 'ارزیابی‌های جامع ریسک انجام می‌شود، اما ما اساساً به حق شرکت‌کننده برای انجام انتخاب‌هایی که شامل خطرات معقول هستند، مطابق با استانداردهای عملکرد NDIS، احترام می‌گذاریم.'
      },
      vi: {
        title: '8. Quản lý Rủi ro và Nhân phẩm của Rủi ro',
        content: 'Người tham gia được hỗ trợ để hiểu rủi ro và đưa ra quyết định sáng suốt, đón nhận nhân phẩm của việc chấp nhận rủi ro.',
        auditText: 'Các đánh giá rủi ro toàn diện được tiến hành, nhưng về cơ bản, chúng tôi tôn trọng quyền của người tham gia trong việc đưa ra các lựa chọn có liên quan đến rủi ro hợp lý, theo Tiêu chuẩn Thực hành NDIS.'
      }
    }
  },
  {
    id: 'cm1-9',
    category: 'Rights & Responsibilities',
    color: 'from-sky-500 to-blue-600',
    translations: {
      en: {
        title: '9. Cultural Safety and Inclusion',
        content: 'We provide a safe and welcoming space for Aboriginal and Torres Strait Islander people and people from all cultural backgrounds.',
        auditText: 'DYAR actively implements our Reconciliation Action Plan and tailored language supports to guarantee culturally safe service delivery environments.'
      },
      zh: {
        title: '9. 文化安全与包容',
        content: '提供服务的方式旨在为原住民和托雷斯海峡岛民参与者以及来自不同文化和语言 (CALD) 背景的参与者提供文化安全。',
        auditText: 'DYAR 积极实施我们的和解行动计划和量身定制的语言支持，以保证文化安全的服务交付环境。'
      },
      ar: {
        title: '9. السلامة الثقافية والشمول',
        content: 'يتم تقديم الخدمات بطريقة توفر السلامة الثقافية للمشاركين من السكان الأصليين وسكان جزر مضيق توريس والمشاركين من خلفيات ثقافية ولغوية متنوعة (CALD).',
        auditText: 'تنفذ DYAR بنشاط خطة عمل المصالحة الخاصة بنا والدعم اللغوي المخصص لضمان بيئات تقديم خدمات آمنة ثقافياً.'
      },
      hi: {
        title: '9. सांस्कृतिक सुरक्षा और समावेशन',
        content: 'सेवाएं इस तरह से वितरित की जाती हैं जो आदिवासी और टोरेस स्ट्रेट आइलैंडर प्रतिभागियों और सांस्कृतिक और भाषाई रूप से विविध (CALD) पृष्ठभूमि के प्रतिभागियों के लिए सांस्कृतिक सुरक्षा प्रदान करती हैं।',
        auditText: 'DYAR सांस्कृतिक रूप से सुरक्षित सेवा वितरण वातावरण की गारंटी देने के लिए हमारी सुलह कार्य योजना और अनुकूलित भाषा समर्थन को सक्रिय रूप से लागू करता है।'
      },
      fa: {
        title: '۹. ایمنی فرهنگی و شمول',
        content: 'خدمات به گونه‌ای ارائه می‌شوند که ایمنی فرهنگی را برای شرکت‌کنندگان بومی و جزیره‌نشین تنگه تورس و شرکت‌کنندگانی از پیشینه‌های فرهنگی و زبانی متنوع (CALD) فراهم کند.',
        auditText: 'DYAR به طور فعال برنامه اقدام آشتی ما و حمایت‌های زبانی متناسب را برای تضمین محیط‌های ارائه خدمات ایمن از نظر فرهنگی، اجرا می‌کند.'
      },
      vi: {
        title: '9. An toàn Văn hóa và Hòa nhập',
        content: 'Các dịch vụ được cung cấp theo cách đảm bảo an toàn văn hóa cho những người tham gia là người Thổ dân và Cư dân đảo Eo biển Torres, cũng như những người tham gia có nguồn gốc văn hóa và ngôn ngữ đa dạng (CALD).',
        auditText: 'DYAR tích cực thực hiện Kế hoạch Hành động Hòa giải của chúng tôi và các hỗ trợ ngôn ngữ được điều chỉnh để đảm bảo môi trường cung cấp dịch vụ an toàn về mặt văn hóa.'
      }
    }
  },
  {
    id: 'cm1-10',
    category: 'Rights & Responsibilities',
    color: 'from-yellow-500 to-amber-600',
    translations: {
      en: {
        title: '10. Transparent Feedback and Complaints',
        content: 'If you are unhappy, please tell us. We welcome your feedback and complaints so we can fix the problem and do better.',
        auditText: 'Our audit demonstrates a robust, accessible complaints management system. Participants are informed of their right to escalate matters to the NDIS Quality and Safeguards Commission.'
      },
      zh: {
        title: '10. 透明的反馈和投诉',
        content: '参与者有权提供反馈和提出投诉，而不必担心产生不利后果，并有权公平、迅速地解决这些问题。',
        auditText: '我们的审计展示了一个健全、易于访问的投诉管理系统。我们告知参与者，他们有权将问题上报给 NDIS 质量和安全委员会。'
      },
      ar: {
        title: '10. الملاحظات والشكاوى الشفافة',
        content: 'يحق للمشاركين تقديم الملاحظات والشكاوى دون خوف من العواقب السلبية، وأن يتم حل هذه الأمور بإنصاف وسرعة.',
        auditText: 'يُظهر تدقيقنا نظاماً قوياً يسهل الوصول إليه لإدارة الشكاوى. يتم إبلاغ المشاركين بحقهم في تصعيد الأمور إلى لجنة جودة وضمانات NDIS.'
      },
      hi: {
        title: '10. पारदर्शी फीडबैक और शिकायतें',
        content: 'प्रतिभागियों को प्रतिकूल परिणामों के डर के बिना फीडबैक देने और शिकायत करने का अधिकार है, और इन मामलों को निष्पक्ष और तुरंत हल करने का अधिकार है।',
        auditText: 'हमारा ऑडिट एक मजबूत, सुलभ शिकायत प्रबंधन प्रणाली को प्रदर्शित करता है। प्रतिभागियों को NDIS गुणवत्ता और सुरक्षा आयोग को मामलों को आगे बढ़ाने के उनके अधिकार के बारे में सूचित किया जाता है।'
      },
      fa: {
        title: '۱۰. بازخورد و شکایات شفاف',
        content: 'شرکت‌کنندگان حق دارند بدون ترس از عواقب نامطلوب، بازخورد ارائه دهند و شکایت کنند و این مسائل به‌طور عادلانه و سریع حل و فصل شود.',
        auditText: 'حسابرسی ما یک سیستم مدیریت شکایات قوی و قابل دسترس را نشان می‌دهد. به شرکت‌کنندگان در مورد حق آنها برای ارجاع مسائل به کمیسیون کیفیت و حفاظت NDIS اطلاع داده می‌شود.'
      },
      vi: {
        title: '10. Phản hồi và Khiếu nại Minh bạch',
        content: 'Người tham gia có quyền đưa ra phản hồi và khiếu nại mà không sợ phải chịu hậu quả bất lợi, và được giải quyết các vấn đề này một cách công bằng và nhanh chóng.',
        auditText: 'Cuộc kiểm toán của chúng tôi chứng minh một hệ thống quản lý khiếu nại mạnh mẽ và dễ tiếp cận. Người tham gia được thông báo về quyền của họ trong việc báo cáo các vấn đề lên Ủy ban Chất lượng và An toàn NDIS.'
      }
    }
  },
  {
    id: 'cm1-11',
    category: 'Code of Conduct & Safety',
    color: 'from-rose-500 to-red-600',
    translations: {
      en: {
        title: '11. NDIS Code of Conduct',
        content: 'All our workers must follow the NDIS Code of Conduct. This means acting with respect, providing safe supports, and never exploiting or harming you.',
        auditText: 'DYAR enforces strict adherence to the NDIS Code of Conduct. All staff are trained and bound by these ethical and professional standards.'
      },
      zh: {
        title: '11. NDIS 行为准则',
        content: '我们所有的工作人员都必须遵守 NDIS 行为准则。这意味着要以尊重的态度行事，提供安全的支持，并且绝不剥削或伤害您。',
        auditText: 'DYAR enforces strict adherence to the NDIS Code of Conduct. All staff are trained and bound by these ethical and professional standards.'
      },
      ar: {
        title: '11. مدونة قواعد السلوك الخاصة بـ NDIS',
        content: 'يجب على جميع عاملينا اتباع مدونة قواعد السلوك الخاصة بـ NDIS. هذا يعني التصرف باحترام، وتقديم الدعم الآمن، وعدم استغلالك أو إيذائك أبدًا.',
        auditText: 'DYAR enforces strict adherence to the NDIS Code of Conduct. All staff are trained and bound by these ethical and professional standards.'
      },
      hi: {
        title: '11. NDIS आचार संहिता',
        content: 'हमारे सभी कार्यकर्ताओं को NDIS आचार संहिता का पालन करना चाहिए। इसका मतलब है सम्मान के साथ काम करना, सुरक्षित सहायता प्रदान करना, और कभी भी आपका शोषण या नुकसान नहीं पहुंचाना।',
        auditText: 'DYAR enforces strict adherence to the NDIS Code of Conduct. All staff are trained and bound by these ethical and professional standards.'
      },
      fa: {
        title: '۱۱. آیین‌نامه رفتار NDIS',
        content: 'همه کارکنان ما باید از آیین‌نامه رفتار NDIS پیروی کنند. این به معنای رفتار با احترام، ارائه حمایت‌های ایمن و هرگز استثمار یا آسیب نرساندن به شما است.',
        auditText: 'DYAR enforces strict adherence to the NDIS Code of Conduct. All staff are trained and bound by these ethical and professional standards.'
      },
      vi: {
        title: '11. Quy tắc Ứng xử NDIS',
        content: 'Tất cả nhân viên của chúng tôi phải tuân theo Quy tắc Ứng xử NDIS. Điều này có nghĩa là hành động với sự tôn trọng, cung cấp các hỗ trợ an toàn và không bao giờ bóc lột hoặc làm hại bạn.',
        auditText: 'DYAR enforces strict adherence to the NDIS Code of Conduct. All staff are trained and bound by these ethical and professional standards.'
      }
    }
  },
  {
    id: 'cm1-12',
    category: 'Code of Conduct & Safety',
    color: 'from-orange-500 to-amber-600',
    translations: {
      en: {
        title: '12. Reportable Incidents',
        content: 'If something serious or dangerous happens, we must report it to the NDIS Commission to keep you safe and investigate properly.',
        auditText: 'DYAR maintains a comprehensive Incident Management System. All reportable incidents are tracked, investigated, and reported to the NDIS Commission within mandatory timeframes.'
      },
      zh: {
        title: '12. 须报告的事件',
        content: '如果发生严重或危险的情况，我们必须向 NDIS 委员会报告，以确保您的安全并进行适当调查。',
        auditText: 'DYAR maintains a comprehensive Incident Management System. All reportable incidents are tracked, investigated, and reported to the NDIS Commission within mandatory timeframes.'
      },
      ar: {
        title: '12. الحوادث الواجب الإبلاغ عنها',
        content: 'إذا حدث شيء خطير أو خطير، يجب علينا إبلاغ لجنة NDIS للحفاظ على سلامتك والتحقيق فيه بشكل صحيح.',
        auditText: 'DYAR maintains a comprehensive Incident Management System. All reportable incidents are tracked, investigated, and reported to the NDIS Commission within mandatory timeframes.'
      },
      hi: {
        title: '12. रिपोर्ट करने योग्य घटनाएँ',
        content: 'यदि कुछ गंभीर या खतरनाक होता है, तो हमें आपको सुरक्षित रखने और ठीक से जांच करने के लिए NDIS आयोग को इसकी रिपोर्ट करनी होगी।',
        auditText: 'DYAR maintains a comprehensive Incident Management System. All reportable incidents are tracked, investigated, and reported to the NDIS Commission within mandatory timeframes.'
      },
      fa: {
        title: '۱۲. حوادث قابل گزارش',
        content: 'اگر اتفاق جدی یا خطرناکی رخ دهد، ما باید آن را به کمیسیون NDIS گزارش دهیم تا شما را ایمن نگه داریم و به درستی بررسی کنیم.',
        auditText: 'DYAR maintains a comprehensive Incident Management System. All reportable incidents are tracked, investigated, and reported to the NDIS Commission within mandatory timeframes.'
      },
      vi: {
        title: '12. Các Sự cố Cần Báo cáo',
        content: 'Nếu có điều gì đó nghiêm trọng hoặc nguy hiểm xảy ra, chúng tôi phải báo cáo cho Ủy ban NDIS để giữ an toàn cho bạn và điều tra kỹ lưỡng.',
        auditText: 'DYAR maintains a comprehensive Incident Management System. All reportable incidents are tracked, investigated, and reported to the NDIS Commission within mandatory timeframes.'
      }
    }
  }
];
