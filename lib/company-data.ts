export interface ServiceItem {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescAr: string;
  featuresEn: string[];
  featuresAr: string[];
  icon: string;
  imageUrl: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
  imageUrl: string;
  services: ServiceItem[];
}

export const COMPANY_DETAILS = {
  legalNameEn: 'Aqarland Contracting & Transporting Est.',
  legalNameAr: 'مؤسسة عقارلاند للمقاولات العامة والنقل',
  brandNameEn: 'Aqar Land',
  brandNameAr: 'عقار لاند',
  establishedYear: 2000,
  headquarters: {
    cityEn: 'Abu Dhabi',
    cityAr: 'أبوظبي',
    countryEn: 'United Arab Emirates',
    countryAr: 'الإمارات العربية المتحدة',
    addressEn: 'Headquarters, Abu Dhabi, UAE',
    addressAr: 'المقر الرئيسي، أبوظبي، الإمارات العربية المتحدة',
    coordinates: {
      lat: 24.4538818,
      lng: 54.3922035,
    },
    googleMapsUrl: 'https://maps.app.goo.gl/1CVtL5QgVxYEXERf8',
  },
  contact: {
    mobile: '0504754070',
    mobileFormatted: '+971 50 475 4070',
    mobileTel: 'tel:0504754070',
    landline: '026588909',
    landlineFormatted: '+971 2 658 8909',
    landlineTel: 'tel:026588909',
    email: 'info@aqarland.ae',
    emailMailto: 'mailto:info@aqarland.ae',
    whatsappUrl: 'https://wa.me/971504754070',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61568482734458',
    instagram: 'https://www.instagram.com/aqarland195/',
    twitter: 'https://x.com/AqarLand195',
  },
  tagline: {
    en: "Constructing Tomorrow's Landmarks with Emirati Pride",
    ar: 'بناء معالم الغد بفخر إماراتي',
  },
  visionPhilosophy: {
    en: 'AqarLand Shaping Your Vision with Premier Construction and Inspired Design',
    ar: 'عقار لاند تشكل رؤيتك مع أفضل خدمات البناء والتصميم الملهم',
  },
  mission: {
    en: "Our mission is to provide quality services and solutions that exceed our customers' expectations, focusing on client satisfaction, professional excellence, and sustainability.",
    ar: 'مهمتنا هي تقديم خدمات وحلول عالية الجودة تتجاوز توقعات عملائنا، مع التركيز على رضا العملاء والتميز المهني والاستدامة.',
  },
  vision: {
    en: "To be the UAE's leading provider of reliable contracting and maintenance services, fostering sustainable community development and driving innovation in every sector.",
    ar: 'أن نكون المزود الرائد في دولة الإمارات لخدمات المقاولات والصيانة الموثوقة، مع تعزيز التنمية المجتمعية المستدامة ودفع الابتكار في كل قطاع.',
  },
  values: [
    {
      titleEn: 'Integrity',
      titleAr: 'النزاهة',
      descEn: 'Transparent, ethical, and honest partnerships with every stakeholder.',
      descAr: 'شراكات شفافة وأخلاقية وصادقة مع كافة العملاء والشركاء.',
      icon: 'ShieldCheck',
    },
    {
      titleEn: 'Excellence',
      titleAr: 'التميز',
      descEn: 'Commitment to the highest engineering standards and meticulous quality control.',
      descAr: 'الالتزام بأعلى المعايير الهندسية والرقابة الدقيقة على الجودة.',
      icon: 'Award',
    },
    {
      titleEn: 'Innovation',
      titleAr: 'الابتكار',
      descEn: 'Adoption of advanced construction technologies and modern methodology.',
      descAr: 'اعتماد أحدث تقنيات البناء والحلول الهندسية المتطورة.',
      icon: 'Sparkles',
    },
    {
      titleEn: 'Collaboration',
      titleAr: 'التعاون',
      descEn: 'Building enduring client relationships based on active listening and shared success.',
      descAr: 'بناء علاقات طويلة الأمد مع العملاء قائمة على الإنصات الفعال والنجاح المشترك.',
      icon: 'Users',
    },
    {
      titleEn: 'Safety Priority',
      titleAr: 'أولوية السلامة',
      descEn: 'Zero-accident goal through rigorous safety protocols and compliance standards.',
      descAr: 'هدف الحوادث الصفرية من خلال بروتوكولات سلامة صارمة ومعايير امتثال عالية.',
      icon: 'HardHat',
    },
    {
      titleEn: 'Sustainability',
      titleAr: 'الاستدامة',
      descEn: 'Promoting environmentally responsible practices and durable materials.',
      descAr: 'تعزيز الممارسات المسؤولة بيئياً واستخدام مواد بناء مستدامة ودائمة.',
      icon: 'Compass',
    },
  ],
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'general-contracting',
    slug: 'general-contracting',
    titleEn: 'General Contracting',
    titleAr: 'المقاولات العامة',
    subtitleEn: 'Quality construction management from start to finish',
    subtitleAr: 'إدارة بناء ذات جودة من البداية إلى النهاية',
    descriptionEn:
      'Comprehensive general contracting for residential, commercial, and industrial developments in Abu Dhabi and across the UAE, balancing architectural aesthetics, safety, and durability.',
    descriptionAr:
      'خدمات مقاولات عامة شاملة للمشاريع السكنية والتجارية والصناعية في أبوظبي وجميع أنحاء الإمارات، تجمع بين جمال التصميم والسلامة والمتانة طويلة الأمد.',
    icon: 'Building2',
    imageUrl:
      'https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1200&auto=format&fit=crop',
    services: [
      {
        id: 'residential-construction',
        slug: 'residential-building-construction',
        titleEn: 'Residential Building Construction',
        titleAr: 'بناء المباني السكنية',
        shortDescEn:
          'Specializing in constructing high-quality residential buildings that meet modern demands of safety, efficiency, and design.',
        shortDescAr:
          'متخصصون في تشييد مبانٍ سكنية عالية الجودة تلبي متطلبات السلامة والكفاءة والتصميم العصري.',
        fullDescEn:
          'At Aqar Land, we specialize in constructing high-quality residential buildings that meet the modern demands of safety, efficiency, and design aesthetics. Our approach ensures that each home is a haven of comfort and sustainability, crafted to enhance the quality of living for every resident. Our team ensures every home we build stands the test of time.',
        fullDescAr:
          'في عقار لاند، نتخصص في تشييد المباني السكنية الفاخرة التي تلبي أعلى معايير السلامة والكفاءة والجمال المعماري. يضمن نهجنا أن يكون كل منزل واحة من الراحة والاستدامة، مصمماً لرفع جودة حياة السكان والصمود طويلاً عبر الزمن.',
        featuresEn: [
          'Custom architectural villas & modern luxury residential towers',
          'Energy-efficient building materials & climate-responsive insulation',
          'Comprehensive structural engineering, foundation work, and finishing',
          'Full conformity with UAE residential building codes and municipality regulations',
        ],
        featuresAr: [
          'فلل مخصصة بتصاميم معمارية فريدة وأبراج سكنية عصرية',
          'مواد بناء موفرة للطاقة وعزل حراري متطور يلائم مناخ الإمارات',
          'هندسة إنشائية متكاملة وأعمال أساسات وتشطيبات دقيقة',
          'التوافق الكامل مع كودات البناء السكنية ولوائح البلديات في دولة الإمارات',
        ],
        icon: 'Building2',
        imageUrl:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'commercial-construction',
        slug: 'commercial-building-construction',
        titleEn: 'Commercial Building Construction',
        titleAr: 'بناء المباني التجارية',
        shortDescEn:
          'Delivering commercial projects that combine modern design, functionality, and innovation to drive business growth.',
        shortDescAr:
          'تنفيذ مشاريع تجارية تجمع بين التصميم العصري والوظيفة والابتكار لدعم نمو الأعمال.',
        fullDescEn:
          'Our expertise in commercial construction delivers projects that combine functionality with innovation. Aqar Land is your partner in developing spaces that drive business growth and customer engagement, creating structures that embody modern design and sustainable efficiency.',
        fullDescAr:
          'تقدم خبرتنا في البناء التجاري مشاريع تجمع بين الكفاءة التشغيلية والابتكار المعماري. عقار لاند هي شريكك الموثوق لتطوير مساحات ومجمعات تجارية تدعم نمو الأعمال وتعزز تجربة العملاء.',
        featuresEn: [
          'Corporate office towers, retail centers, and mixed-use commercial developments',
          'Smart building automation, integrated MEP, and high-efficiency circulation',
          'Agile structural design accommodating tenant configurations and retail requirements',
          'Strict schedule management ensuring prompt commercial handover',
        ],
        featuresAr: [
          'أبراج المكاتب ومراكز التسوق والمجمعات التجارية متعددة الاستخدامات',
          'أنظمة البناء الذكية والأنظمة الكهروميكانيكية المتكاملة',
          'مرونة التصميم الإنشائي لاستيعاب متطلبات المستأجرين والتجزئة',
          'إدارة زمنية دقيقة لضمان التسليم في الموعد المحدد للتشغيل التجاري',
        ],
        icon: 'Building2',
        imageUrl:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'industrial-construction',
        slug: 'industrial-construction-services',
        titleEn: 'Industrial Construction Services',
        titleAr: 'خدمات البناء الصناعي',
        shortDescEn:
          'Tailored industrial construction from large-scale manufacturing facilities to specialized logistics warehouses.',
        shortDescAr:
          'بناء صناعي مخصص يشمل المنشآت التصنيعية الكبرى ومستودعات الخدمات اللوجستية المتخصصة.',
        fullDescEn:
          'We provide comprehensive industrial construction services tailored to meet the specific needs of your industry. From large-scale manufacturing facilities to specialized warehouses, our solutions are designed to optimize efficiency, operational workflow, and heavy-duty structural durability.',
        fullDescAr:
          'نقدم خدمات متكاملة في البناء الصناعي مصممة خصيصاً لتلبية متطلبات مختلف القطاعات الصناعية. من مرافق التصنيع الكبرى إلى المستودعات اللوجستية المتطورة، تهدف حلولنا لتحقيق الكفاءة التشغيلية والمتانة القصوى.',
        featuresEn: [
          'Heavy industrial warehouses, logistics hubs, and manufacturing plants',
          'Reinforced structural steelwork and heavy-load floor engineering',
          'Specialized mechanical, electrical, and safety integration for industrial zones',
          'Compliance with UAE industrial standards, civil defense, and environmental guidelines',
        ],
        featuresAr: [
          'مستودعات صناعية ثقيلة، ومراكز لوجستية، ومصانع إنتاجية',
          'أعمال الهياكل الفولاذية المعززة والأرضيات الهندسية المخصصة للأحمال الثقيلة',
          'أنظمة ميكانيكية وكهربائية ودفاع مدني مخصصة للمناطق الصناعية',
          'مطابقة المعايير الصناعية ولوائح الدفاع المدني والبيئة في الدولة',
        ],
        icon: 'Building2',
        imageUrl:
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'building-maintenance',
    slug: 'building-maintenance',
    titleEn: 'Building Maintenance',
    titleAr: 'صيانة المباني',
    subtitleEn: 'Reliable solutions for seamless facility upkeep',
    subtitleAr: 'حلول موثوقة للحفاظ على المرافق بسلاسة',
    descriptionEn:
      'Professional facility maintenance services including proactive routine upkeep, 24/7 emergency repairs, and custom annual maintenance contracts across the UAE.',
    descriptionAr:
      'خدمات احترافية متخصصة في صيانة المرافق تشمل الصيانة الدورية الوقائية، والاستجابة الطارئة على مدار الساعة، وعقود الصيانة السنوية المتكاملة في الإمارات.',
    icon: 'Wrench',
    imageUrl:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    services: [
      {
        id: 'routine-maintenance',
        slug: 'routine-maintenance-services',
        titleEn: 'Routine Maintenance Services',
        titleAr: 'خدمات الصيانة الدورية',
        shortDescEn:
          'Comprehensive scheduled maintenance to ensure facilities operate at peak efficiency and extend property lifespan.',
        shortDescAr:
          'صيانة دورية مجدولة وشاملة لضمان عمل المرافق بأعلى كفاءة وإطالة العمر الافتراضي للممتلكات.',
        fullDescEn:
          'Aqar Land offers comprehensive routine maintenance services designed to keep your facilities in top condition. Our proactive approach ensures that all systems function optimally, reducing the risk of unexpected breakdowns and extending the life of your physical assets.',
        fullDescAr:
          'توفر عقار لاند خدمات صيانة دورية شاملة تضمن بقاء منشآتكم في أفضل حالاتها التشغيلية. يضمن نهجنا الوقائي عمل جميع الأنظمة بكفاءة، مما يقلل مخاطر الأعطال المفاجئة ويطيل عمر الأصول العقارية.',
        featuresEn: [
          'Scheduled HVAC, electrical, plumbing, and structural inspections',
          'Preventive diagnostic testing and component replacement before failure',
          'Detailed facility performance reports and maintenance logs',
          'Asset life-cycle optimization reducing long-term operational costs',
        ],
        featuresAr: [
          'فحوصات دورية مجدولة لأنظمة التكييف والكهرباء والسباكة والهياكل',
          'فحوصات تشخيصية وقائية واستبدال القطع الاستهلاكية قبل حدوث الأعطال',
          'تقارير تفصيلية وسجلات صيانة دورية لأداء المرافق',
          'إطالة دورة حياة الأصول وتقليل التكاليف التشغيلية على المدى الطويل',
        ],
        icon: 'Wrench',
        imageUrl:
          'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'emergency-repairs',
        slug: 'emergency-repair-services',
        titleEn: 'Emergency Repair Services',
        titleAr: 'خدمات الإصلاح الطارئ (24/7)',
        shortDescEn:
          'Rapid 24/7 emergency response by skilled technicians to restore critical systems and minimize downtime.',
        shortDescAr:
          'استجابة سريعة على مدار الساعة طوال أيام الأسبوع لإصلاح الأنظمة الحيوية وتقليل توقف العمل.',
        fullDescEn:
          "When unexpected breakdowns occur, Aqar Land's emergency repair services provide rapid and reliable solutions. Our dedicated team of skilled technicians is available 24/7 to address and resolve urgent facility issues, minimizing downtime and restoring safety immediately.",
        fullDescAr:
          'عند وقوع الأعطال المفاجئة، توفر خدمات الإصلاح الطارئ من عقار لاند استجابة فورية وحلولاً موثوقة. فريقنا المتخصص متأهب 24 ساعة يومياً طوال الأسبوع للتعامل مع أي عطل طارئ واستعادة السلامة والتشغيل فوراً.',
        featuresEn: [
          'Round-the-clock 24/7 dedicated dispatch team across Abu Dhabi and UAE',
          'Rapid mitigation for power disruptions, water leaks, and cooling system failures',
          'Equipped mobile maintenance units with specialized diagnostics and tooling',
          'Priority safety containment protecting building occupants and assets',
        ],
        featuresAr: [
          'فريق طوارئ متأهب على مدار 24/7 في أبوظبي ومختلف مناطق الإمارات',
          'استجابة فورية لانقطاع الكهرباء، تسربات المياه، وأعطال التكييف الحيوية',
          'وحدات صيانة متنقلة مجهزة بأحدث أدوات الفحص وقطع الغيار الضرورية',
          'إجراءات احتواء سريعة لحماية شاغلي المبنى والممتلكات',
        ],
        icon: 'Wrench',
        imageUrl:
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'annual-maintenance-contracts',
        slug: 'annual-maintenance-contracts',
        titleEn: 'Annual Maintenance Contracts (AMC)',
        titleAr: 'عقود الصيانة السنوية (AMC)',
        shortDescEn:
          'Tailored annual contracts covering all aspects of building maintenance for smooth operations and cost efficiency.',
        shortDescAr:
          'عقود سنوية مخصصة تغطي كافة جوانب صيانة المبنى لضمان تشغيل سلس وكفاءة التكاليف.',
        fullDescEn:
          "Secure your operations with Aqar Land's annual maintenance contracts. We offer tailored plans that cover all aspects of building maintenance, ensuring smooth operations, predictable budgeting, and continuous cost efficiency all year round.",
        fullDescAr:
          'احمِ استثماراتك مع عقود الصيانة السنوية الشاملة من عقار لاند. نقدم خططاً سنوية مرنة تغطي جميع جوانب صيانة المباني والمرافق، مما يضمن تشغيلاً سلساً وميزانيات تشغيلية واضحة ومدروسة على مدار العام.',
        featuresEn: [
          'Comprehensive multi-tier coverage (Residential, Commercial, Industrial)',
          'Dedicated account manager and assigned certified engineering team',
          'Quarterly preventative overhauls and unlimited priority emergency calls',
          'Clear Service Level Agreements (SLAs) with verified response times',
        ],
        featuresAr: [
          'باقات صيانة مرنة للمباني السكنية والتجارية والصناعية',
          'مدير حساب مخصص وفريق هندسي وفني معتمد لكل منشأة',
          'فحوصات شاملة ربع سنوية وطلبات صيانة طارئة ذات أولوية قصوى',
          'اتفاقيات مستوى خدمة (SLA) واضحة مع أوقات استجابة مضمونة',
        ],
        icon: 'Wrench',
        imageUrl:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'support-services',
    slug: 'support-services',
    titleEn: 'Support Services',
    titleAr: 'خدمات الدعم والمساندة',
    subtitleEn: 'Essential support to enhance operations and productivity',
    subtitleAr: 'دعم أساسي لتعزيز العمليات والإنتاجية',
    descriptionEn:
      'High-impact engineering support services including project management, compliance and safety audits, and workforce development programs.',
    descriptionAr:
      'خدمات دعم واستشارات هندسية متخصصة تشمل إدارة المشاريع، وتدقيق الامتثال والسلامة المهنية، وبرامج التطوير والتأهيل الفني.',
    icon: 'HardHat',
    imageUrl:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    services: [
      {
        id: 'consultation-project-management',
        slug: 'consultation-project-management',
        titleEn: 'Consultation & Project Management',
        titleAr: 'الاستشارات وإدارة المشاريع',
        shortDescEn:
          'Streamlining construction projects from concept to completion with experienced managers ensuring budget and schedule adherence.',
        shortDescAr:
          'تيسير وتنفيذ مشاريع البناء من الفكرة حتى التسليم مع مدراء مشاريع ذوي خبرة لضمان الميزانية والجدول الزمني.',
        fullDescEn:
          'Aqar Land provides expert consultation and project management services to streamline your construction projects from inception to completion. Our experienced team ensures timely delivery, budget adherence, and high-quality standards, making your vision a reality with precision and efficiency.',
        fullDescAr:
          'تقدم عقار لاند استشارات هندسية وإدارة مشاريع احترافية لتوجيه مشاريع البناء من الفكرة الأولى وحتى التسليم النهائي. يضمن فريقنا ذو الخبرة الالتزام بالميزانية والجدول الزمني ومعايير الجودة العالية، لتحويل رؤيتك إلى واقع ملموس بدقة واحترافية.',
        featuresEn: [
          'Feasibility analysis, procurement management, and cost engineering',
          'On-site quality surveillance and subcontractor milestone verification',
          'Risk management and transparent stakeholder reporting dashboards',
          'Permit facilitation and liaison with UAE local authorities',
        ],
        featuresAr: [
          'دراسات الجدوى الهندسية وإدارة المشتريات وهندسة التكاليف',
          'الإشراف الميداني على الجودة ومتابعة إنجاز مقاولي الباطن',
          'إدارة المخاطر وتقارير دورية شفافة لأصحاب المصلحة والمستثمرين',
          'تسهيل استخراج التصاريح والتنسيق مع الدوائر والجهات المعنية في الدولة',
        ],
        icon: 'HardHat',
        imageUrl:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'compliance-safety-audits',
        slug: 'compliance-safety-audits',
        titleEn: 'Compliance & Safety Audits',
        titleAr: 'تدقيق الامتثال والسلامة',
        shortDescEn:
          'Ensuring projects comply with all regulatory requirements and maintain the highest safety and operational integrity.',
        shortDescAr:
          'ضمان امتثال المشاريع لكافة المتطلبات واللوائح والحفاظ على أعلى معايير السلامة والنزاهة التشغيلية.',
        fullDescEn:
          'Ensure your projects comply with all regulatory requirements with Aqar Land’s compliance and safety audits. We offer comprehensive audits to ensure your construction projects meet all regulatory standards, Civil Defense codes, and safety protocols, minimizing risks and achieving operational excellence.',
        fullDescAr:
          'اضمن امتثال مشاريعك لجميع اللوائح والمتطلبات التنظيمية مع تدقيقات السلامة والامتثال من عقار لاند. نقدم تدقيقاً شاملاً يغطي معايير السلامة وكودات الدفاع المدني، مما يقلل المخاطر ويحقق أعلى مستويات الأمان والتميز التشغيلي.',
        featuresEn: [
          'Occupational Health, Safety & Environment (HSE) on-site audits',
          'Civil Defense safety systems inspection and compliance verification',
          'Hazard identification, risk assessment, and mitigation roadmaps',
          'Detailed formal audit documentation for regulatory submission',
        ],
        featuresAr: [
          'تدقيق ميداني شامل لأنظمة الصحة والسلامة والبيئة (HSE)',
          'فحص أنظمة السلامة والدفاع المدني والتأكد من مطابقتها للوائح',
          'تحديد المخاطر المحتملة ووضع خطط العمل الوقائية',
          'إعداد تقارير تدقيق رسمية معتمدة للجهات التنظيمية والرقابية',
        ],
        icon: 'HardHat',
        imageUrl:
          'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 'training-development',
        slug: 'training-development-programs',
        titleEn: 'Training & Development Programs',
        titleAr: 'برامج التدريب والتطوير المهني',
        shortDescEn:
          'Empowering workforces with industry best practices, safety protocols, and innovative techniques.',
        shortDescAr:
          'تمكين وتأهيل الكوادر الفنية بأفضل الممارسات الصناعية وبروتوكولات السلامة والتقنيات المبتكرة.',
        fullDescEn:
          "Aqar Land's Training and Development Programs are designed to empower your workforce with the skills and knowledge necessary to excel in their roles. Our tailored programs focus on industry best practices, safety protocols, and innovative techniques to enhance productivity and ensure continuous professional growth.",
        fullDescAr:
          'صُممت برامج التدريب والتطوير في عقار لاند لتمكين الكوادر الفنية والتشغيلية بالمهارات والمعارف الضرورية للتفوق في مهامهم. تركز برامجنا المخصصة على أفضل الممارسات المهنية وبروتوكولات السلامة الصارمة والتقنيات المبتكرة لرفع الإنتاجية.',
        featuresEn: [
          'On-site safety protocols and hazard prevention workshops',
          'Technical skills enhancement for MEP and construction trades',
          'Modern equipment handling and quality control methodologies',
          'Custom corporate modules tailored to specific project needs',
        ],
        featuresAr: [
          'ورش عمل تدريبية ميدانية في بروتوكولات السلامة والوقاية من المخاطر',
          'تطوير المهارات الفنية لفرق الميكانيك والكهرباء وأعمال الإنشاءات',
          'التدريب على استخدام المعدات الحديثة ومنهجيات ضبط الجودة',
          'برامج مخصصة مصممة خصيصاً لاحتياجات كل مشروع ومؤسسة',
        ],
        icon: 'HardHat',
        imageUrl:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
      },
    ],
  },
];
