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
  status: 'Completed' | 'In Progress';
  statusEn: string;
  statusAr: string;
  year?: string;
  value?: string;
  valueAr?: string;
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
      descEn: 'Commitment to high standards and quality control in all deliverables.',
      descAr: 'الالتزام بمعايير عالية وضبط الجودة في كافة الأعمال.',
    },
    {
      titleEn: 'Innovation',
      titleAr: 'الابتكار',
      descEn: 'Adoption of modern methods and effective construction solutions.',
      descAr: 'اعتماد أحدث الأساليب والحلول الإنشائية الفعالة.',
    },
    {
      titleEn: 'Collaboration',
      titleAr: 'التعاون',
      descEn: 'Building enduring client relationships based on active communication and shared success.',
      descAr: 'بناء علاقات طويلة الأمد مع العملاء قائمة على التواصل الفعال والنجاح المشترك.',
    },
  ],
};

// 6 Verified Services (Audited strictly against company profile)
export const STITCH_SERVICES: ServiceItem[] = [
  {
    id: 'general-contracting',
    slug: 'general-contracting',
    number: '01',
    titleEn: 'General Contracting',
    titleAr: 'المقاولات العامة',
    shortDescEn:
      'Turnkey contracting and civil construction for residential and commercial structures.',
    shortDescAr:
      'حلول مقاولات شاملة وبناء مدني للمشاريع السكنية والتجارية.',
    fullDescEn:
      'Aqar Land delivers turnkey general contracting works with adherence to approved specifications, structural integrity, and project schedules. We manage civil works from foundation to final structural delivery.',
    fullDescAr:
      'تنفذ عقار لاند أعمال المقاولات العامة المتكاملة مع الالتزام بالمواصفات المعتمدة والمتانة الإنشائية والجداول الزمنية. ندير الأعمال المدنية من الأساسات وحتى التسليم الإنشائي النهائي.',
    featuresEn: [
      'Residential villa and building construction',
      'Commercial building general contracting',
      'Civil earthworks and reinforced concrete structures',
      'Exterior and interior finishing works',
    ],
    featuresAr: [
      'تشييد الفلل السكنية والمباني',
      'المقاولات العامة للمباني التجارية',
      'الأعمال المدنية والهياكل الخرسانية المسلحة',
      'أعمال التشطيبات الخارجية والداخلية',
    ],
    imageUrl: '/images/services/general-contracting.jpg',
  },
  {
    id: 'building-maintenance',
    slug: 'building-maintenance',
    number: '02',
    titleEn: 'Building Maintenance',
    titleAr: 'صيانة المباني',
    shortDescEn:
      'Comprehensive building upkeep, preventative maintenance, and MEP facility support.',
    shortDescAr:
      'خدمات صيانة دورية للمباني، صيانة وقائية، ودعم كهروميكانيكي للمرافق.',
    fullDescEn:
      'Our building maintenance division provides ongoing upkeep to preserve the integrity and operation of built properties through regular maintenance and prompt repair services.',
    fullDescAr:
      'يقدم قسم صيانة المباني لدينا خدمات الرعاية الدورية للحفاظ على سلامة وكفاءة تشغيل العقارات والمنشآت من خلال أعمال الصيانة المجدولة والإصلاحات الفورية.',
    featuresEn: [
      'Air conditioning and ventilation system upkeep',
      'Electrical systems and lighting maintenance',
      'Plumbing networks and sanitary drainage maintenance',
      'Structural inspections and general building repairs',
    ],
    featuresAr: [
      'صيانة أنظمة التكييف والتهوية',
      'صيانة التمديدات واللوحات والشبكات الكهربائية',
      'صيانة شبكات السباكة وإمدادات المياه والصرف',
      'الفحص الدوري للمباني وأعمال الترميم العامة',
    ],
    imageUrl: '/images/services/building-maintenance.jpg',
  },
  {
    id: 'support-services',
    slug: 'support-services',
    number: '03',
    titleEn: 'Support Services',
    titleAr: 'خدمات الدعم والمساندة',
    shortDescEn:
      'Operational support, site logistics coordination, and technical assistance.',
    shortDescAr:
      'خدمات الدعم التشغيلي، تنسيق لوجستيات الموقع، والمساندة الفنية للمشاريع.',
    fullDescEn:
      'Aqar Land provides operational and technical support to facilitate smooth site operations and project continuity across diverse working environments.',
    fullDescAr:
      'توفر عقار لاند خدمات الدعم التشغيلي والمساندة الفنية لتسهيل سير العمل في المواقع الإنشائية وضمان استمرارية تنفيذ المشاريع.',
    featuresEn: [
      'Site logistics and material movement coordination',
      'Technical site support for ongoing projects',
      'Workforce assistance and operational staging',
      'General on-site coordination and project support',
    ],
    featuresAr: [
      'تنسيق اللوجستيات ونقل المواد في الموقع',
      'المساندة الفنية للمشاريع القائمة',
      'توفير الكوادر المساعدة وتجهيز مواقع العمل',
      'التنسيق الميداني العام ودعم متطلبات المشروع',
    ],
    imageUrl: '/images/services/support-services.jpg',
  },
  {
    id: 'project-management',
    slug: 'project-management',
    number: '04',
    titleEn: 'Project Management',
    titleAr: 'إدارة المشاريع',
    shortDescEn:
      'Disciplined construction supervision, schedule tracking, and stakeholder coordination.',
    shortDescAr:
      'إشراف هندسي ميداني، متابعة الجداول الزمنية، وتنسيق مستمر مع أصحاب المصلحة.',
    fullDescEn:
      'Our project management service provides structured oversight across all construction phases, ensuring budget discipline, schedule adherence, and clear communication with clients.',
    fullDescAr:
      'توفر خدمة إدارة المشاريع لدينا إشرافاً منهجياً عبر كافة مراحل البناء، مع التركيز على ضبط التكاليف والالتزام بالجدول الزمني والتواصل الشفاف مع العملاء.',
    featuresEn: [
      'Construction timeline and milestone management',
      'Cost planning and resource tracking',
      'Site supervision and quality checks',
      'Client progress reporting and communication',
    ],
    featuresAr: [
      'إدارة الجداول الزمنية ومراحل الإنجاز',
      'متابعة التكاليف وتنسيق الموارد',
      'الإشراف الميداني ومراجعة جودة الأعمال',
      'تقارير دورية للعملاء عن تقدم العمل',
    ],
    imageUrl: '/images/services/project-management.jpg',
  },
  {
    id: 'design-structural-analysis',
    slug: 'design-structural-analysis',
    number: '05',
    titleEn: 'Design & Structural Analysis',
    titleAr: 'التصميم والتحليل الإنشائي',
    shortDescEn:
      'Structural evaluations, engineering reviews, and coordination for resilient building frameworks.',
    shortDescAr:
      'تقييمات إنشائية، مراجعات هندسية، وتنسيق لضمان متانة الهياكل الخرسانية والمباني.',
    fullDescEn:
      'Aqar Land provides structural analysis and design coordination to ensure all structural elements are engineered safely and conform to approved engineering codes.',
    fullDescAr:
      'تقدم عقار لاند التحليل الإنشائي والتنسيق الهندسي لضمان تصميم كافة العناصر الإنشائية بأمان ومطابقتها للمواصفات الهندسية المعتمدة.',
    featuresEn: [
      'Structural design and engineering evaluation',
      'Review of structural alterations and additions',
      'Coordination between architectural drawings and structural plans',
      'Practical engineering solutions for structural durability',
    ],
    featuresAr: [
      'التصميم الإنشائي والتقييم الهندسي',
      'مراجعة التعديلات والإضافات الإنشائية',
      'التنسيق بين المخططات المعمارية والإنشائية',
      'حلول هندسية عملية لضمان المتانة الإنشائية',
    ],
    imageUrl: '/images/services/design-structural.jpg',
  },
  {
    id: 'project-execution',
    slug: 'project-execution',
    number: '06',
    titleEn: 'Project Execution',
    titleAr: 'تنفيذ المشاريع',
    shortDescEn:
      'Direct on-site construction delivery, quality craftsmanship, and organized handover.',
    shortDescAr:
      'تنفيذ ميداني مباشر للأعمال، جودة في البناء، وتسليم منظم للمشاريع.',
    fullDescEn:
      'Our on-site teams execute construction works with attention to detail and strict adherence to approved engineering drawings, specifications, and safety guidelines.',
    fullDescAr:
      'تنفذ فرقنا الميدانية أعمال البناء بعناية فائقة والتزام صارم بالمخططات الهندسية والمواصفات المعتمدة وإرشادات السلامة العامة.',
    featuresEn: [
      'Direct on-site construction supervision',
      'Execution according to approved drawings',
      'Quality review at every construction milestone',
      'Structured site delivery and project handover',
    ],
    featuresAr: [
      'إشراف ميداني مباشر على أعمال البناء',
      'التنفيذ وفق المخططات المعتمدة',
      'مراجعة الجودة في كل مرحلة من مراحل التنفيذ',
      'إنهاء الأعمال والتسليم المنظم للمشروع',
    ],
    imageUrl: '/images/services/project-execution.jpg',
  },
];

// The 8 REAL Projects Documented in the Aqar Land Company Profile
export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: 'villa-ground-first-roof-service-annex',
    titleEn: 'Residential Villa — Ground Floor, First Floor, Roof & Service Annex',
    titleAr: 'فيلا سكنية — طابق أرضي، طابق أول، سطح وملحق خدمات',
    status: 'Completed',
    statusEn: 'Completed',
    statusAr: 'مكتمل',
    year: '2023',
    value: 'AED 1,250,000',
    valueAr: '1,250,000 درهم',
    scopeEn: 'Residential Villa — Ground Floor, First Floor, Roof & Service Annex',
    scopeAr: 'فيلا سكنية — طابق أرضي، طابق أول، سطح وملحق خدمات',
    imageUrl: '/images/projects/aqar-land-villa-01.jpg',
    featured: true,
  },
  {
    id: 'villa-ground-first-electricity-room-fence',
    titleEn: 'Residential Villa — Ground Floor, First Floor, Electricity Room & External Fence',
    titleAr: 'فيلا سكنية — طابق أرضي، طابق أول، غرفة كهرباء وسور خارجي',
    status: 'In Progress',
    statusEn: 'In Progress',
    statusAr: 'قيد التنفيذ',
    value: 'AED 2,000,000',
    valueAr: '2,000,000 درهم',
    scopeEn: 'Residential Villa — Ground Floor, First Floor, Electricity Room & External Fence',
    scopeAr: 'فيلا سكنية — طابق أرضي، طابق أول، غرفة كهرباء وسور خارجي',
    imageUrl: '/images/projects/aqar-land-villa-02.jpg',
    featured: true,
  },
  {
    id: 'villa-ground-first-service-annex-electricity-fence',
    titleEn: 'Residential Villa — Ground Floor, First Floor, Service Annex, Electricity Room & External Fence',
    titleAr: 'فيلا سكنية — طابق أرضي، طابق أول، ملحق خدمات، غرفة كهرباء وسور خارجي',
    status: 'In Progress',
    statusEn: 'In Progress',
    statusAr: 'قيد التنفيذ',
    value: 'AED 1,250,000',
    valueAr: '1,250,000 درهم',
    scopeEn: 'Residential Villa — Ground Floor, First Floor, Service Annex, Electricity Room & External Fence',
    scopeAr: 'فيلا سكنية — طابق أرضي، طابق أول، ملحق خدمات، غرفة كهرباء وسور خارجي',
    imageUrl: '/images/projects/aqar-land-villa-03.jpg',
    featured: true,
  },
  {
    id: 'redesign-interior-ground-first-annex-landscaping',
    titleEn: 'Redesign & Interior Modifications — Ground Floor, First Floor, Service Annex & Landscaping',
    titleAr: 'إعادة تصميم وتعديلات داخلية — طابق أرضي، طابق أول، ملحق خدمات وتنسيق حدائق',
    status: 'Completed',
    statusEn: 'Completed',
    statusAr: 'مكتمل',
    year: '2024',
    value: 'AED 2,000,000',
    valueAr: '2,000,000 درهم',
    scopeEn: 'Redesign & Interior Modifications — Ground Floor, First Floor, Service Annex & Landscaping',
    scopeAr: 'إعادة تصميم وتعديلات داخلية — طابق أرضي، طابق أول، ملحق خدمات وتنسيق حدائق',
    imageUrl: '/images/projects/aqar-land-villa-04.jpg',
    featured: false,
  },
  {
    id: 'villa-ground-first-majlis-fence',
    titleEn: 'Residential Villa — Ground Floor, First Floor, External Majlis & External Fence',
    titleAr: 'فيلا سكنية — طابق أرضي، طابق أول، مجلس خارجي وسور خارجي',
    status: 'In Progress',
    statusEn: 'In Progress',
    statusAr: 'قيد التنفيذ',
    value: 'AED 1,750,000',
    valueAr: '1,750,000 درهم',
    scopeEn: 'Residential Villa — Ground Floor, First Floor, External Majlis & External Fence',
    scopeAr: 'فيلا سكنية — طابق أرضي، طابق أول، مجلس خارجي وسور خارجي',
    imageUrl: '/images/projects/aqar-land-villa-05.jpg',
    featured: false,
  },
  {
    id: 'villa-ground-first-service-annex-electricity-wall',
    titleEn: 'Residential Villa — Ground Floor, First Floor, Service Annex, Electricity Room & External Wall',
    titleAr: 'فيلا سكنية — طابق أرضي، طابق أول، ملحق خدمات، غرفة كهرباء وجدار خارجي',
    status: 'Completed',
    statusEn: 'Completed',
    statusAr: 'مكتمل',
    year: '2024',
    value: 'AED 2,000,000',
    valueAr: '2,000,000 درهم',
    scopeEn: 'Residential Villa — Ground Floor, First Floor, Service Annex, Electricity Room & External Wall',
    scopeAr: 'فيلا سكنية — طابق أرضي، طابق أول، ملحق خدمات، غرفة كهرباء وجدار خارجي',
    imageUrl: '/images/projects/aqar-land-villa-06.jpg',
    featured: false,
  },
  {
    id: 'villa-ground-first-annex-guard-electrical-fence',
    titleEn: 'Residential Villa — Ground Floor, First Floor, Service Annex, Guard Room, Electrical Room & External Fence',
    titleAr: 'فيلا سكنية — طابق أرضي، طابق أول، ملحق خدمات، غرفة حارس، غرفة كهرباء وسور خارجي',
    status: 'Completed',
    statusEn: 'Completed',
    statusAr: 'مكتمل',
    year: '2024',
    value: 'AED 2,300,000',
    valueAr: '2,300,000 درهم',
    scopeEn: 'Residential Villa — Ground Floor, First Floor, Service Annex, Guard Room, Electrical Room & External Fence',
    scopeAr: 'فيلا سكنية — طابق أرضي، طابق أول، ملحق خدمات، غرفة حارس، غرفة كهرباء وسور خارجي',
    imageUrl: '/images/projects/aqar-land-villa-07.jpg',
    featured: false,
  },
  {
    id: 'villa-ground-first-annex-electricity-fence-2025',
    titleEn: 'Residential Villa — Ground Floor, First Floor, Service Annex, Electricity Room & External Fence',
    titleAr: 'فيلا سكنية — طابق أرضي، طابق أول، ملحق خدمات، غرفة كهرباء وسور خارجي',
    status: 'Completed',
    statusEn: 'Completed',
    statusAr: 'مكتمل',
    year: '2025',
    value: 'AED 2,000,000',
    valueAr: '2,000,000 درهم',
    scopeEn: 'Residential Villa — Ground Floor, First Floor, Service Annex, Electricity Room & External Fence',
    scopeAr: 'فيلا سكنية — طابق أرضي، طابق أول، ملحق خدمات، غرفة كهرباء وسور خارجي',
    imageUrl: '/images/projects/aqar-land-villa-08.jpg',
    featured: false,
  },
];
