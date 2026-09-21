export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescAr: string;
  featuresEn: string[];
  featuresAr: string[];
  imageUrl: string;
}

export interface ProjectItem {
  id: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  categorySlug: 'contracting' | 'maintenance' | 'industrial' | 'management';
  locationEn: string;
  locationAr: string;
  scopeEn: string;
  scopeAr: string;
  imageUrl: string;
  featured?: boolean;
}

export const COMPANY_DETAILS = {
  legalNameEn: 'Aqarland Contracting & Transporting Est.',
  legalNameAr: 'مؤسسة عقارلاند للمقاولات العامة والنقل',
  brandNameEn: 'Aqar Land',
  brandNameAr: 'عقار لاند',
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
    },
    {
      titleEn: 'Excellence',
      titleAr: 'التميز',
      descEn: 'Commitment to the highest engineering standards and meticulous quality control.',
      descAr: 'الالتزام بأعلى المعايير الهندسية والرقابة الدقيقة على الجودة.',
    },
    {
      titleEn: 'Innovation',
      titleAr: 'الابتكار',
      descEn: 'Adoption of advanced construction technologies and modern methodology.',
      descAr: 'اعتماد أحدث تقنيات البناء والحلول الهندسية المتطورة.',
    },
    {
      titleEn: 'Collaboration',
      titleAr: 'التعاون',
      descEn: 'Building enduring client relationships based on active listening and shared success.',
      descAr: 'بناء علاقات طويلة الأمد مع العملاء قائمة على الإنصات الفعال والنجاح المشترك.',
    },
  ],
};

// 6 Stitch Verified Categories
export const STITCH_SERVICES: ServiceItem[] = [
  {
    id: 'general-contracting',
    slug: 'general-contracting',
    number: '01',
    titleEn: 'General Contracting',
    titleAr: 'المقاولات العامة',
    shortDescEn:
      'Turnkey contracting solutions for residential, commercial, and mixed-use structures across Abu Dhabi and the UAE.',
    shortDescAr:
      'حلول مقاولات شاملة وتسليم مفتاح للمشاريع السكنية والتجارية ومتعددة الاستخدامات في أبوظبي والإمارات.',
    fullDescEn:
      'Aqar Land executes comprehensive general contracting works with uncompromising attention to structural integrity, project scheduling, and architectural precision. From foundational groundwork to final exterior finishes, our engineering operations ensure durable execution aligned with regional standards.',
    fullDescAr:
      'تنفذ عقار لاند أعمال المقاولات العامة المتكاملة مع الاهتمام الصارم بالمتانة الإنشائية، والالتزام بالجداول الزمنية، والدقة المعمارية. من أعمال الأساسات وحتى التشطيبات الخارجية النهائية، تضمن عملياتنا الهندسية تنفيذاً مستداماً متوافقاً مع أفضل المعايير.',
    featuresEn: [
      'Residential villas, townhouses, and compound construction',
      'Commercial office spaces, retail complexes, and hospitality facilities',
      'Civil earthworks, reinforced concrete substructures, and superstructures',
      'Interior fit-out, architectural masonry, and perimeter landscaping',
    ],
    featuresAr: [
      'تشييد الفلل السكنية والمجمعات والوحدات الفاخرة',
      'مباني المكاتب التجارية والمراكز والمجمعات',
      'أعمال الحفر والخرسانة المسلحة للهياكل الإنشائية',
      'أعمال التشطيبات المعمارية والواجهات وتطوير الموقع العام',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'building-maintenance',
    slug: 'building-maintenance',
    number: '02',
    titleEn: 'Building Maintenance',
    titleAr: 'صيانة المباني',
    shortDescEn:
      'Reliable building upkeep, preventative maintenance programs, and comprehensive MEP facility support.',
    shortDescAr:
      'خدمات صيانة دورية للمباني، وبرامج صيانة وقائية، ودعم كهروميكانيكي متكامل للمرافق.',
    fullDescEn:
      'Our facility maintenance division provides systematic upkeep to preserve the integrity, functionality, and longevity of built assets. Through proactive inspection regimes and rapid troubleshooting, we safeguard physical assets against environmental wear and operational interruptions.',
    fullDescAr:
      'يقدم قسم صيانة المرافق لدينا رعاية منهجية للحفاظ على سلامة وكفاءة وعمر الأصول العقارية. من خلال برامج الفحص الاستباقي والتدخل السريع، نحمي الأصول من التأثيرات البيئية والتوقفات التشغيلية.',
    featuresEn: [
      'Comprehensive HVAC, mechanical ventilation, and cooling upkeep',
      'Electrical distribution, lighting systems, and power diagnostics',
      'Plumbing networks, water filtration, and drainage maintenance',
      'Structural inspections, waterproofing repairs, and building envelope care',
    ],
    featuresAr: [
      'صيانة شاملة لأنظمة التكييف والتهوية الميكانيكية والتبريد',
      'صيانة شبكات الكهرباء، الإضاءة، واللوحات الرئيسية',
      'صيانة شبكات السباكة وإمدادات المياه ومعالجة الصرف',
      'فحص ومعالجة عزل الأسطح والتشققات وصيانة الواجهات',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'support-services',
    slug: 'support-services',
    number: '03',
    titleEn: 'Support Services',
    titleAr: 'خدمات الدعم والمساندة',
    shortDescEn:
      'Essential operational support, logistics, technical site assistance, and specialized equipment deployment.',
    shortDescAr:
      'خدمات دعم لوجستي وميداني، ومساندة فنية للمشاريع، وتوفير المعدات التخصصية في مواقع العمل.',
    fullDescEn:
      'Aqar Land provides operational and technical support to ensure project continuity and site logistics efficiency. We supply trained technical workforce, on-site material coordination, and dedicated facility support across challenging environments.',
    fullDescAr:
      'توفر عقار لاند الدعم التشغيلي والفني لضمان استمرارية المشاريع وكفاءة الخدمات اللوجستية في الموقع. نحن نوفر الكوادر الفنية المدربة، وتنسيق التوريدات الميدانية، ودعم المنشآت التشغيلية في مختلف الظروف.',
    featuresEn: [
      'Site logistics coordination and heavy material transport assistance',
      'Specialized equipment deployment and operational staging',
      'Technical staffing for facility management and industrial sites',
      'Health, Safety, and Environmental (HSE) on-site coordination',
    ],
    featuresAr: [
      'تنسيق اللوجستيات ونقل المواد والمعدات الثقيلة في المواقع',
      'توفير المعدات التخصصية وتجهيز المواقع الإنشائية',
      'توفير الكوادر الفنية المتخصصة لإدارة المنشآت والمواقع',
      'التنسيق الميداني لمعايير الصحة والسلامة والبيئة (HSE)',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'project-management',
    slug: 'project-management',
    number: '04',
    titleEn: 'Project Management',
    titleAr: 'إدارة المشاريع',
    shortDescEn:
      'Disciplined construction oversight, budget planning, milestone tracking, and stakeholder communication.',
    shortDescAr:
      'إشراف هندسي دقيق، تخطيط الميزانيات، متابعة مراحل الإنجاز، والتنسيق الشفاف مع أصحاب المصلحة.',
    fullDescEn:
      'Our project management discipline bridges architectural vision and physical execution. We coordinate contractors, monitor procurement pipelines, maintain rigorous schedule control, and ensure that quality benchmarks are respected at each project gateway.',
    fullDescAr:
      'تربط إدارة المشاريع لدينا بين الرؤية التصميمية والتنفيذ الفعلي على أرض الواقع. ننسق مع كافة الأطراف، ونراقب سلاسل التوريد، ونحافظ على الانضباط الزمني الدقيق لضمان تحقيق أعلى معايير الجودة في كل مرحلة.',
    featuresEn: [
      'Comprehensive project programming and Critical Path Method (CPM) scheduling',
      'Cost planning, value engineering, and procurement oversight',
      'Quality assurance milestones and site inspection sign-offs',
      'Transparent milestone reporting for project owners and developers',
    ],
    featuresAr: [
      'تخطيط البرامج الزمنية للمشاريع وتحديد المسار الحرج (CPM)',
      'تخطيط التكاليف والهندسة القيمة ومتابعة المشتريات',
      'مراقبة الجودة واعتماد تقارير الفحص الدوري الميداني',
      'تقارير دورية شفافة لأصحاب المشاريع والمطورين',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'design-structural-analysis',
    slug: 'design-structural-analysis',
    number: '05',
    titleEn: 'Design & Structural Analysis',
    titleAr: 'التصميم والتحليل الإنشائي',
    shortDescEn:
      'Integrated engineering calculations, structural assessments, and architectural coordination for resilient structures.',
    shortDescAr:
      'حسابات هندسية متكاملة، تقييمات إنشائية دقيقة، وتنسيق معماري لضمان صلابة وديمومة المنشآت.',
    fullDescEn:
      'Aqar Land integrates architectural concepts with rigorous structural analysis. Our engineering specialists analyze soil capacities, dead and live load distributions, and climatic stresses to develop structural configurations that maximize safety, efficiency, and longevity.',
    fullDescAr:
      'تدمج عقار لاند المفاهيم المعمارية مع التحليل الإنشائي الدقيق. يحلل مهندسونا قدرات التربة، وتوزيع الأحمال الحية والميتة، وتأثيرات المناخ لتطوير هياكل إنشائية تحقق أعلى درجات الأمان والكفاءة والاستدامة.',
    featuresEn: [
      'Structural load analysis, foundation calculations, and framing design',
      'Evaluation of existing structures for renovation or load alterations',
      'Architectural coordination ensuring design intent matches engineering realities',
      'Material optimization balancing structural resilience and resource efficiency',
    ],
    featuresAr: [
      'تحليل الأحمال الإنشائية وتصميم الأساسات والهياكل الخرسانية والفولاذية',
      'تقييم المنشآت القائمة لمتطلبات التوسعة أو إعادة التأهيل',
      'التنسيق المعماري لضمان توافق التصميم مع الواقع الإنشائي',
      'تحسين اختيار المواد لتحقيق الصلابة الإنشائية وكفاءة الموارد',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'project-execution',
    slug: 'project-execution',
    number: '06',
    titleEn: 'Project Execution',
    titleAr: 'تنفيذ المشاريع',
    shortDescEn:
      'On-site construction delivery, precision craftsmanship, material staging, and seamless handover protocols.',
    shortDescAr:
      'تنفيذ ميداني متكامل، حرفية هندسية عالية، إدارة توريدات المواد، وبروتوكولات تسليم سلسة.',
    fullDescEn:
      'Execution is where blueprint precision becomes physical reality. Our on-site supervisors, licensed trades, and experienced crews execute works with strict adherence to approved drawings, safety regimes, and craftsmanship standards.',
    fullDescAr:
      'التنفيذ الميداني هو تحويل المخططات الهندسية إلى واقع حقيقي ملموس. يعمل مشرفو المواقع والفرق الفنية المتخصصة وفق أعلى درجات الانضباط للمخططات المعتمدة، وبروتوكولات السلامة، ومعايير الحرفية الرفيعة.',
    featuresEn: [
      'Disciplined site management and daily execution logs',
      'On-site material quality verification and testing coordination',
      'Phased commissioning of electrical, mechanical, and safety systems',
      'Final snagging, client walk-throughs, and structured project handover',
    ],
    featuresAr: [
      'إدارة ميدانية منضبطة وسجلات متابعة يومية لسير العمل',
      'التحقق من جودة المواد الموردة للموقع ومتابعة الاختبارات',
      'التشغيل التجريبي المرحلي للأنظمة الكهربائية والميكانيكية',
      'معالجة الملاحظات النهائية والتسليم المنظم للمشروع',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
  },
];

// Verified Project Portfolio (restrained metadata, verified company scopes, no fake stats/awards)
export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: 'commercial-hq-abu-dhabi',
    titleEn: 'Commercial Office Development',
    titleAr: 'مجمع مكاتب تجارية',
    categoryEn: 'General Contracting',
    categoryAr: 'المقاولات العامة',
    categorySlug: 'contracting',
    locationEn: 'Abu Dhabi, UAE',
    locationAr: 'أبوظبي، الإمارات',
    scopeEn: 'Core structural works, exterior cladding, and MEP integration',
    scopeAr: 'الأعمال الإنشائية الرئيسية، تكسية الواجهات، والأنظمة الكهروميكانيكية',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'residential-villa-compound',
    titleEn: 'Private Residential Compound',
    titleAr: 'مجمع فلل سكنية خاصة',
    categoryEn: 'General Contracting',
    categoryAr: 'المقاولات العامة',
    categorySlug: 'contracting',
    locationEn: 'Abu Dhabi, UAE',
    locationAr: 'أبوظبي، الإمارات',
    scopeEn: 'Turnkey villa construction, structural framing, and perimeter development',
    scopeAr: 'بناء متكامل للفلل، الهياكل الخرسانية، وأعمال الموقع العام',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'industrial-logistics-facility',
    titleEn: 'Industrial Storage & Logistics Facility',
    titleAr: 'مرفق تخزين وخدمات لوجستية',
    categoryEn: 'Project Execution',
    categoryAr: 'تنفيذ المشاريع',
    categorySlug: 'industrial',
    locationEn: 'Industrial Zone, Abu Dhabi, UAE',
    locationAr: 'المنطقة الصناعية، أبوظبي، الإمارات',
    scopeEn: 'Heavy steel framing, floor slab engineering, and specialized civil works',
    scopeAr: 'هياكل فولاذية ثقيلة، أرضيات صناعية معززة، وأعمال مدنية متخصصة',
    imageUrl:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'corporate-facility-maintenance',
    titleEn: 'Commercial Facility Upkeep Program',
    titleAr: 'برنامج صيانة المنشآت التجارية',
    categoryEn: 'Building Maintenance',
    categoryAr: 'صيانة المباني',
    categorySlug: 'maintenance',
    locationEn: 'Abu Dhabi, UAE',
    locationAr: 'أبوظبي، الإمارات',
    scopeEn: 'Scheduled HVAC overhaul, electrical system audits, and preventive servicing',
    scopeAr: 'صيانة دورية للتكييف المركزي، فحص الشبكات الكهربائية، والخدمات الوقائية',
    imageUrl:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'residential-tower-refurbishment',
    titleEn: 'Residential Complex Refurbishment',
    titleAr: 'تحديث وصيانة مجمع سكني',
    categoryEn: 'Building Maintenance',
    categoryAr: 'صيانة المباني',
    categorySlug: 'maintenance',
    locationEn: 'Abu Dhabi, UAE',
    locationAr: 'أبوظبي، الإمارات',
    scopeEn: 'Building envelope waterproofing, facade refurbishment, and MEP repairs',
    scopeAr: 'عزل أسطح المباني، تجديد الواجهات الخارجية، وإصلاح الأنظمة الميكانيكية',
    imageUrl:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'structural-site-management',
    titleEn: 'Multi-Phase Site Execution',
    titleAr: 'إدارة وتنفيذ موقع متعدد المراحل',
    categoryEn: 'Project Management',
    categoryAr: 'إدارة المشاريع',
    categorySlug: 'management',
    locationEn: 'Abu Dhabi, UAE',
    locationAr: 'أبوظبي، الإمارات',
    scopeEn: 'On-site technical supervision, quality verification, and handover coordination',
    scopeAr: 'إشراف فني ميداني، التحقق من معايير الجودة، وإدارة بروتوكولات التسليم',
    imageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
];
