/**
 * MIRA — Architectural Domestic Intelligence
 * Apple-Level Minimalist E-Commerce Web Application
 */

(function () {
  'use strict';

  // ==========================================
  // 1. PRODUCT CATALOG DATA & DUAL PRICING
  // ==========================================
  const PRODUCTS = [
    {
      id: 'mira-home',
      name: 'MIRA HOME',
      category: 'hub',
      tagline: {
        en: 'Smart Home Orchestration & Central Hub',
        ar: 'مركز التحكم والتشغيل العصبي للمنزل الذكي'
      },
      description: {
        en: 'A monolithic circular interface that coordinates your entire home in absolute silence. Built with an on-device neural core and circular ambient OLED.',
        ar: 'واجهة دائرية موحدة تُدير منزلك بالكامل في هدوء مطلق. مدعومة بمعالج عصبي محلي وشاشة OLED محيطية.'
      },
      priceUSD: 149,
      priceSAR: 558.75,
      images: {
        charcoal: 'assets/images/mira-home-charcoal.jpg',
        white: 'assets/images/mira-home-white.jpg',
        wall: 'assets/images/mira-home-wall.jpg',
        unboxing: 'assets/images/mira-home-white-wall.jpg'
      },
      badge: { en: 'Signature Hub', ar: 'المركز الرئيسي' },
      specs: {
        materials: { en: 'Anodized 6000-Series Aluminum, FSC American Walnut', ar: 'ألومنيوم مؤكسد فئة 6000، خشب جوز أمريكي مستدام' },
        display: { en: '5.4" Circular TrueTone OLED, 1000 nits', ar: 'شاشة OLED دائرية 5.4 بوصة تدعم TrueTone' },
        connectivity: { en: 'Matter 2.0, Thread Border Router, Wi-Fi 7, Zigbee 3.0', ar: 'بروتوكول Matter 2.0، موجه Thread، واي فاي 7' },
        acoustics: { en: 'Zero-decibel silent passive dissipation', ar: 'تبريد خامل صامت تماماً (0 ديسيبل)' },
        dimensions: { en: '210 mm × 170 mm × 95 mm | 1.4 kg', ar: '210 مم × 170 مم × 95 مم | 1.4 كجم' }
      }
    },
    {
      id: 'mira-fridge',
      name: 'MIRA FRIDGE',
      category: 'refrigeration',
      tagline: {
        en: 'Intelligent Culinary Cold Sanctuary & Expiration AI',
        ar: 'صرح التبريد الذكي مع ذكاء اصطناعي لرصد الصلاحية'
      },
      description: {
        en: 'Dual-column architectural refrigerator with integrated ambient telemetry. Proactive expiration alerts and precision vacuum-sealed preservation.',
        ar: 'ثلاجة بتصميم معماري مزدوج مع شاشة تفاعلية ذكية. تنبيهات استباقية للصلاحية ومناطق تبريد فراغية فائقة الدقة.'
      },
      priceUSD: 3299,
      priceSAR: 12371.25,
      images: {
        white: 'assets/images/mira-fridge-white.jpg',
        charcoal: 'assets/images/mira-fridge-box-charcoal.jpg',
        unboxing: 'assets/images/mira-fridge-box-white.jpg'
      },
      badge: { en: 'Culinary Masterpiece', ar: 'تحفة المطبخ' },
      specs: {
        materials: { en: 'Bead-blasted Matte Titanium composite, Natural Oak base', ar: 'مركب تيتانيوم مطفي، وقاعدة من خشب البلوط الطبيعي' },
        capacity: { en: '680 Liters (Net Storage) with 4 Micro-Climate Zones', ar: '680 لتر مع 4 مناطق مناخية دقيقة' },
        display: { en: 'Integrated Curved Arabic/English Smart Door Glass', ar: 'شاشة زجاجية ذكية مدمجة في الباب تدعم العربية' },
        acoustics: { en: 'Whisper-quiet Inverter, 24 dB(A)', ar: 'ضاغط رقمي عاكس فائق الهدوء (24 ديسيبل)' },
        dimensions: { en: '1980 mm × 920 mm × 730 mm | 148 kg', ar: '1980 مم × 920 مم × 730 مم | 148 كجم' }
      }
    },
    {
      id: 'mira-mini-fridge',
      name: 'MIRA MINI FRIDGE',
      category: 'refrigeration',
      tagline: {
        en: 'Master Suite & Bedside Cold Preservation',
        ar: 'حفظ المشروبات والعناية الشخصية لغرف النوم الفاخرة'
      },
      description: {
        en: 'Conceived for bedroom suites and executive lounges. Absorptive thermoelectric cooling ensures absolute acoustic silence while sleeping.',
        ar: 'صُممت لأجنحة النوم وصالات كبار الشخصيات. تبريد حراري إلكتروني صامت تماماً بدون اهتزاز.'
      },
      priceUSD: 599,
      priceSAR: 2246.25,
      images: {
        charcoal: 'assets/images/mira-mini-fridge-charcoal.jpg',
        white: 'assets/images/mira-mini-fridge-white.jpg',
        unboxing: 'assets/images/mira-mini-fridge-box-charcoal.jpg'
      },
      badge: { en: 'Whisper Silent', ar: 'صمت تام' },
      specs: {
        materials: { en: 'Matte composite shell, solid steamed walnut pedestal', ar: 'هيكل مركب مطفي مع قاعدة من خشب الجوز المعالج' },
        capacity: { en: '45 Liters chilled storage with UV-C beverage sanitization', ar: '45 لتر مع تعقيم مستمر بالأشعة فوق البنفسجية UV-C' },
        acoustics: { en: 'True Zero dB (Peltier Solid-State System)', ar: 'صفر ديسيبل حقيقي (نظام بلتيير الميكرو-حراري)' },
        temperature: { en: 'Precision setting from 3°C to 12°C', ar: 'تحكم دقيق من 3 إلى 12 درجة مئوية' },
        dimensions: { en: '620 mm × 460 mm × 480 mm | 19.5 kg', ar: '620 مم × 460 مم × 480 مم | 19.5 كجم' }
      }
    },
    {
      id: 'mira-oven',
      name: 'MIRA OVEN',
      category: 'culinary',
      tagline: {
        en: 'Precision Thermal Gourmet & Induction Surface',
        ar: 'فرن الطهي الدقيق وسطح الحث الحراري المدمج'
      },
      description: {
        en: 'Seamless monolithic cooking sculpture. Features full-spectrum steam injection, wireless internal probe sensors, and clean ceramic induction.',
        ar: 'منحوتة طهي متكاملة. حقن بخار فائق، ومستشعرات حرارية لاسلكية، وسطح طهي سيراميكي خفي.'
      },
      priceUSD: 899,
      priceSAR: 3371.25,
      images: {
        charcoal: 'assets/images/mira-oven-charcoal.jpg',
        white: 'assets/images/mira-oven-white.jpg',
        unboxing: 'assets/images/mira-oven-box-charcoal.jpg'
      },
      badge: { en: 'Thermal Precision', ar: 'دقة حرارية فائقة' },
      specs: {
        materials: { en: 'Low-iron Ceramic Glass, Dark Anodized Alloy, Timber trim', ar: 'زجاج سيراميكي نقي، سبائك ألومنيوم مؤكسدة، حواف خشبية' },
        thermalRange: { en: '30°C Sous-Vide to 300°C High-Bake', ar: 'من 30 مئوية (طهي بطيء) إلى 300 مئوية (شواء مكثف)' },
        connectivity: { en: 'Matter Protocol & Recipe Neural Automation', ar: 'تكامل بروتوكول Matter والتعرف التلقائي على الوصفات' },
        dimensions: { en: '750 mm × 650 mm × 580 mm | 42 kg', ar: '750 مم × 650 مم × 580 مم | 42 كجم' }
      }
    },
    {
      id: 'mira-brew',
      name: 'MIRA BREW',
      category: 'beverage',
      tagline: {
        en: 'Artisanal Extraction & Thermodynamic Pour',
        ar: 'استخلاص القهوة المختصة والصب الديناميكي الحراري'
      },
      description: {
        en: 'Conical monolithic coffee laboratory. Micro-dosed thermodynamic water delivery and ultrasonic agitation extract complex floral and fruity notes.',
        ar: 'محطة استخلاص قهوة مخروطية نقية. توزيع مائي حراري دقيق واهتزاز فوق صوتي لإبراز أدق نغمات البن.'
      },
      priceUSD: 399,
      priceSAR: 1496.25,
      images: {
        charcoal: 'assets/images/mira-brew-charcoal.jpg',
        white: 'assets/images/mira-brew-white.jpg',
        unboxing: 'assets/images/mira-brew-box-charcoal.jpg'
      },
      badge: { en: 'Artisanal Pour', ar: 'تحضير فاخر' },
      specs: {
        materials: { en: 'Food-grade SUS316 Stainless Steel, Matte Shell, Walnut coaster', ar: 'ستانلس ستيل طبي SUS316، هيكل مطفي، قاعدة خشب' },
        precision: { en: '±0.2°C PID thermal stability, 0.1g integrated scale', ar: 'ثبات حراري بمقدار ±0.2 مئوية، وميزان مدمج بحساسية 0.1 جرام' },
        pressure: { en: '9 Bar variable extraction or gentle Gravity Drip', ar: 'ضغط متغير 9 بار أو تقطير انسيابي هادئ' },
        dimensions: { en: '410 mm × 220 mm × 240 mm | 5.8 kg', ar: '410 مم × 220 مم × 240 مم | 5.8 كجم' }
      }
    },
    {
      id: 'mira-air',
      name: 'MIRA AIR',
      category: 'climate',
      tagline: {
        en: 'Atmospheric Purification & Silent Laminar Flow',
        ar: 'تنقية الهواء المتطورة والتدفق الصفائحي الصامت'
      },
      description: {
        en: 'A tall sculptural column that scrubs particulate matter and aerosols while emitting balanced negative ions. Minimalist vertical slit diffuser.',
        ar: 'عمود نحتي نقي ينقي الهواء من الجسيمات الدقيقة والروائح، ناشراً أيونات طبيعية عبر شق انسيابي عمودي.'
      },
      priceUSD: 799,
      priceSAR: 2996.25,
      images: {
        charcoal: 'assets/images/mira-air-tower-charcoal.jpg',
        white: 'assets/images/mira-air-tower-white.jpg',
        wall: 'assets/images/mira-air-wall-charcoal.jpg',
        unboxing: 'assets/images/mira-air-box-charcoal.jpg'
      },
      badge: { en: 'Medical-Grade HEPA H14', ar: 'فلترة طبية H14' },
      specs: {
        filtration: { en: 'Activated Coconut Carbon + HyperHEPA H14 (0.003 micron)', ar: 'كربون جوز الهند النشط + فلتر HyperHEPA H14 طبي' },
        coverage: { en: 'Cleans 120 m² in under 18 minutes', ar: 'يغطي مساحة 120 متر مربع في أقل من 18 دقيقة' },
        acoustics: { en: '18 dB(A) Night Mode (Imperceptible whisper)', ar: '18 ديسيبل في الوضع الليلي الهادئ' },
        dimensions: { en: '1020 mm × 240 mm × 240 mm | 8.2 kg', ar: '1020 مم × 240 مم × 240 مم | 8.2 كجم' }
      }
    },
    {
      id: 'mira-wash',
      name: 'MIRA WASH',
      category: 'laundry',
      tagline: {
        en: 'Ultrasonic Hydrodynamic Fabric Sanctuary',
        ar: 'العناية الفائقة بالأقمشة عبر الأمواج فوق الصوتية'
      },
      description: {
        en: 'Reinventing garment care. Acoustic micro-cavitation lifts stains at microscopic levels without mechanical fabric abrasion.',
        ar: 'إعادة ابتكار غسيل الملابس الفاخرة. فقاعات فوق صوتية متناهية الصغر تزيل الشوائب دون احتكاك ميكانيكي.'
      },
      priceUSD: 949,
      priceSAR: 3558.75,
      images: {
        charcoal: 'assets/images/mira-wash-charcoal.jpg',
        white: 'assets/images/mira-wash-white.jpg',
        unboxing: 'assets/images/mira-wash-box-dark.jpg'
      },
      badge: { en: 'Zero Friction', ar: 'بدون احتكاك' },
      specs: {
        drum: { en: 'Pillow-cushioned Titanium Alloy Drum with soft LED halo', ar: 'حوض تيتانيوم وسائدي فائق النعومة مع هالة إضاءة خافتة' },
        acoustics: { en: 'Magnetic Levitation Direct Drive Motor, 32 dB', ar: 'محرك رفع مغناطيسي مباشر فائق الهدوء (32 ديسيبل)' },
        efficiency: { en: 'Consumes 60% less water than conventional laundry', ar: 'يوفر 60% من استهلاك المياه مقارنة بالغسالات التقليدية' },
        dimensions: { en: '850 mm × 600 mm × 620 mm | 68 kg', ar: '850 مم × 600 مم × 620 مم | 68 كجم' }
      }
    }
  ];

  // ==========================================
  // 2. BILINGUAL DICTIONARY (EN & AR)
  // ==========================================
  const I18N = {
    en: {
      topBanner: 'MIRA Ecosystem 2026 — Private Virtual Reserve Open in Riyadh & Worldwide',
      navOverview: 'Overview',
      navKeynote: 'Keynote',
      navCollection: 'Collection (7)',
      navPhilosophy: 'Philosophy',
      heroBadge: 'Architecture in Silence',
      heroHeadline: 'The quiet revolution in domestic intelligence.',
      heroSubhead: 'Seven monolithic home instruments forged from matte aerospace aluminum and solid walnut. Designed in Arabia. Refined for the world.',
      btnExplore: 'Explore Collection',
      btnOrderHome: 'Order MIRA HOME',
      heroHubTitle: 'MIRA HOME — Central Command Hub',
      heroHubStatus: 'Matter 2.0 • Ultra-Wideband Radar • Offline NPU',
      spot1Title: 'Circular OLED Display',
      spot1Desc: 'Full Arabic & English calm interface showing real-time home telemetry.',
      spot2Title: 'Solid Natural Walnut',
      spot2Desc: 'Acoustic isolation plinth crafted from sustainably harvested timber.',
      spec1Label: 'Audio Engine',
      spec1Val: 'Spatial 360° Array',
      spec2Label: 'Neural Core',
      spec2Val: 'Zero-Cloud Latency',
      spec3Label: 'Chassis',
      spec3Val: 'Unibody Anodized',
      keynoteTagline: 'Apple Scrollytelling Experience',
      keynoteHeading: 'The 2026 Keynote Showcase.',
      keynoteSub: 'Every appliance is engineered to disappear into your home until summoned. Explore the seven pillars of MIRA engineering.',
      catalogTagline: 'The Official Suite',
      catalogHeading: 'Seven Instruments. One Ecosystem.',
      catalogSubtitle: 'Designed with unified architectural proportions. Switch colors, inspect packaging crates, and order with instant virtual card approval.',
      philo1Title: 'Monolithic Proportion',
      philo1Desc: 'Eliminating visual clutter, seams, and visible screws. Each unit is carved from bead-blasted aluminum alloy seated upon sustainable solid walnut timber.',
      philo2Title: 'Calm UI & Arabic First',
      philo2Desc: 'Screens remain dormant black or gentle ambient rings until approached. Native Arabic typography crafted with IBM Plex Sans and Cairo for pure cultural resonance.',
      philo3Title: 'Encrypted Mesh Interconnect',
      philo3Desc: 'Zero reliance on foreign cloud servers. MIRA devices sync locally across encrypted Thread and Matter protocols, ensuring privacy and sub-millisecond response.',
      checkoutTitle: 'MIRA Instant Pay',
      cardHolder: 'Cardholder',
      cardExpiry: 'Expires',
      labelCardHolder: 'Cardholder Name',
      labelCardNumber: '16-Digit Virtual Card Number',
      labelExpiry: 'MM / YY',
      labelCVC: 'CVC',
      cardPolicyNotice: 'Always Approved Mock Mode: Any test card credentials will be validated and authorized instantly.',
      authorizingToken: 'Authorizing Virtual Token...',
      securingEnclave: 'MIRA Secure Enclave Handshake',
      orderApproved: 'Transaction Approved',
      orderApprovedSub: 'Authorized via MIRA Secure Enclave Cryptographic Vault',
      receiptOrderId: 'Order Reference',
      receiptItem: 'Product Instrument',
      receiptFinish: 'Architectural Finish',
      receiptTotal: 'Total Amount Paid',
      receiptAuthCode: 'Authorization Code',
      receiptDate: 'Timestamp',
      btnDownloadReceipt: 'Download Official Virtual Receipt',
      btnAnotherOrder: 'Configure Another Instrument',
      totalDue: 'Total Due',
      btnAuthorizePay: 'Authorize Virtual Payment',
      encryptedHandshake: 'Zero Friction • Instant Mock Authorization • Encrypted Vault',
      techSpecBadge: 'Architectural Specification',
      footerInstruments: 'The Instruments',
      footerInstrumentsMore: 'More Appliances',
      footerEcosystem: 'Ecosystem',
      footerStudio: 'MIRA Studio',
      footerStudioText: 'Virtual atelier in Riyadh, Kingdom of Saudi Arabia. Creating domestic serenity through understated form.',
      orderNow: 'Order Now',
      viewSpecs: 'View Specs',
      unboxingPeek: 'Unboxing Crate',
      standardView: 'Product View',
      finishCharcoal: 'Matte Charcoal',
      finishWhite: 'Pristine White'
    },
    ar: {
      topBanner: 'منظومة ميرا ٢٠٢٦ — باب الحجز الافتراضي متاح في الرياض وكافة أنحاء العالم',
      navOverview: 'نظرة عامة',
      navKeynote: 'العرض الرئيسي',
      navCollection: 'المجموعة (٧ أجهزة)',
      navPhilosophy: 'فلسفة التصميم',
      heroBadge: 'عمارة في صمت',
      heroHeadline: 'الثورة الهادئة في الذكاء المنزلي الفاخر.',
      heroSubhead: 'سبع تحف منزلية مصممة من الألومنيوم الجوي المطفي وخشب الجوز الطبيعي. صُممت في الجزيرة العربية، وأُتقنت للعالم.',
      btnExplore: 'استكشف المجموعة',
      btnOrderHome: 'طلب ميرا هوم',
      heroHubTitle: 'ميرا هوم — مركز القيادة والتحكم الذكي',
      heroHubStatus: 'بروتوكول Matter 2.0 • رادار فائق الدقة • معالج محلي',
      spot1Title: 'شاشة OLED دائرية هادئة',
      spot1Desc: 'واجهة عربية وإنجليزية سلسة تعرض بيانات المنزل لحظياً وبشكل هادئ.',
      spot2Title: 'خشب جوز طبيعي فاخر',
      spot2Desc: 'قاعدة عزل صوتي ونغمي منحوتة من أخشاب طبيعية مستدامة.',
      spec1Label: 'النظام الصوتي',
      spec1Val: 'مصفوفة محيطية 360°',
      spec2Label: 'المعالج العصبي',
      spec2Val: 'استجابة محلية فورية',
      spec3Label: 'الهيكل',
      spec3Val: 'ألومنيوم مؤكسد متصل',
      keynoteTagline: 'تجربة سكروليتيلينج بأسلوب آبل',
      keynoteHeading: 'العرض الرئيسي لعام ٢٠٢٦.',
      keynoteSub: 'صُمم كل جهاز ليتناغم تماماً مع بيتك ويختفي في هدوء إلى أن تطلبه. اكتشف الركائز السبع لهندسة ميرا.',
      catalogTagline: 'المجموعة الرسمية الكاملة',
      catalogHeading: 'سبعة أجهزة. منظومة معمارية واحدة.',
      catalogSubtitle: 'بنسب هندسية متناسقة وخامات موحدة. اختر اللون، عاين صناديق التغليف الفاخرة، وادفع ببطاقة افتراضية مقبولة فوراً.',
      philo1Title: 'كتلة معمارية متصلة',
      philo1Desc: 'إلغاء الفوضى البصرية والفواصل والمسامير الظاهرة. كل قطعة منحوتة من الألومنيوم المصقول فوق قاعدة من خشب الجوز الأصيل.',
      philo2Title: 'واجهة هادئة وهوية عربية أصيلة',
      philo2Desc: 'تبقى الشاشات في وضع السكون الأسود حتى تقترب منها. طباعة عربية أصلية بخطي كايرو وIBM Plex Sans لتجسيد الهوية الثقافية.',
      philo3Title: 'شبكة اتصال محلية مشفرة',
      philo3Desc: 'خصوصية كاملة دون اعتماد على خوادم خارجية. تتواصل أجهزة ميرا عبر شبكة Thread وMatter المشفرة بأعلى سرعة وأمان.',
      checkoutTitle: 'دفع ميرا الفوري السريع',
      cardHolder: 'اسم حامل البطاقة',
      cardExpiry: 'تاريخ الانتهاء',
      labelCardHolder: 'اسم حامل البطاقة',
      labelCardNumber: 'رقم البطاقة الافتراضية (16 رقماً)',
      labelExpiry: 'الشهر / السنة',
      labelCVC: 'رمز الأمان CVC',
      cardPolicyNotice: 'وضع التجربة المقبول دائماً: سيتم قبول واعتماد أي بيانات تجريبية يتم إدخالها على الفور وبنجاح مضمون.',
      authorizingToken: 'جارٍ توثيق الرمز الافتراضي المشفر...',
      securingEnclave: 'مصافحة آمنة عبر معالج MIRA Secure Enclave',
      orderApproved: 'تم قبول العملية بنجاح',
      orderApprovedSub: 'تم التوثيق والاعتماد عبر المحفظة المشفرة المعتمدة',
      receiptOrderId: 'رقم مرجع الطلب',
      receiptItem: 'الجهاز المختار',
      receiptFinish: 'اللمسة المعمارية',
      receiptTotal: 'إجمالي المبلغ المدفوع',
      receiptAuthCode: 'رمز التفويض البنكي',
      receiptDate: 'التاريخ والوقت',
      btnDownloadReceipt: 'تحميل الإيصال الرقمي الرسمي',
      btnAnotherOrder: 'طلب جهاز آخر من المجموعة',
      totalDue: 'المبلغ الإجمالي',
      btnAuthorizePay: 'تفويض الدفع الافتراضي',
      encryptedHandshake: 'بدون احتكاك • اعتماد فوري مضمون • محفظة مشفرة',
      techSpecBadge: 'المواصفات المعمارية التقنية',
      footerInstruments: 'الأجهزة السبعة',
      footerInstrumentsMore: 'بقية المجموعة',
      footerEcosystem: 'المنظومة',
      footerStudio: 'استوديو ميرا',
      footerStudioText: 'استوديو التصميم المعماري في الرياض، المملكة العربية السعودية. نسعى لخلق السكينة المنزلية من خلال النقاء التصميمي.',
      orderNow: 'طلب الآن',
      viewSpecs: 'المواصفات',
      unboxingPeek: 'معاينة الصندوق الفاخر',
      standardView: 'عرض الجهاز',
      finishCharcoal: 'فحمي مطفي',
      finishWhite: 'أبيض ناصع'
    }
  };

  // ==========================================
  // 3. APPLICATION STATE
  // ==========================================
  const state = {
    lang: 'en', // 'en' | 'ar'
    currency: 'USD', // 'USD' | 'SAR'
    keynoteIndex: 0,
    selectedProduct: PRODUCTS[0],
    selectedFinish: 'charcoal',
    productFinishes: {
      'mira-home': 'charcoal',
      'mira-fridge': 'white',
      'mira-mini-fridge': 'charcoal',
      'mira-oven': 'charcoal',
      'mira-brew': 'charcoal',
      'mira-air': 'charcoal',
      'mira-wash': 'charcoal'
    },
    productViews: {
      // id -> 'product' | 'unboxing'
    },
    lastOrder: null
  };

  // ==========================================
  // 4. PRICE FORMATTING HELPER
  // ==========================================
  function formatPrice(usd, sar) {
    if (state.currency === 'USD') {
      return `$${usd.toLocaleString('en-US')}`;
    } else {
      const formatted = sar.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return state.lang === 'ar' ? `${formatted} ر.س` : `${formatted} SAR`;
    }
  }

  // ==========================================
  // 5. I18N STRINGS UPDATE
  // ==========================================
  function updateTextTranslations() {
    const dict = I18N[state.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update document title & html lang/dir
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    document.title = state.lang === 'ar' 
      ? 'ميرا — الأجهزة المنزلية المعمارية الفاخرة' 
      : 'MIRA — Architectural Domestic Intelligence';

    // Update Hero Dynamic Price
    const heroPriceTag = document.getElementById('heroPriceTag');
    if (heroPriceTag) {
      heroPriceTag.textContent = formatPrice(PRODUCTS[0].priceUSD, PRODUCTS[0].priceSAR);
    }
  }

  // ==========================================
  // 6. RENDER KEYNOTE SECTION
  // ==========================================
  function renderKeynote() {
    const tabsContainer = document.getElementById('keynoteNavTabs');
    const stageContainer = document.getElementById('keynoteStage');
    if (!tabsContainer || !stageContainer) return;

    // Render navigation pill buttons
    tabsContainer.innerHTML = PRODUCTS.map((p, idx) => `
      <button type="button" class="keynote-pill-tab shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border border-white/10 ${
        idx === state.keynoteIndex ? 'bg-white text-black font-bold shadow-md' : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
      }" data-keynote-idx="${idx}">
        ${String(idx + 1).padStart(2, '0')} ${p.name.replace('MIRA ', '')}
      </button>
    `).join('');

    // Attach click events to tabs
    tabsContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-keynote-idx'), 10);
        state.keynoteIndex = idx;
        renderKeynote();
      });
    });

    // Render active stage slide
    const product = PRODUCTS[state.keynoteIndex];
    const currentFinish = state.productFinishes[product.id] || (product.images.charcoal ? 'charcoal' : 'white');
    const activeImgSrc = product.images[currentFinish] || product.images.white || product.images.charcoal;

    stageContainer.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Product Details & Story -->
        <div class="lg:col-span-5 space-y-6 text-start">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-[11px] font-mono tracking-widest uppercase">
            <span>${product.badge[state.lang]}</span>
          </div>

          <div>
            <h3 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              ${product.name}
            </h3>
            <p class="text-sm sm:text-base font-medium text-emerald-400">
              ${product.tagline[state.lang]}
            </p>
          </div>

          <p class="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
            ${product.description[state.lang]}
          </p>

          <!-- Finish Selector on Keynote Stage -->
          <div class="pt-2">
            <p class="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2">
              ${state.lang === 'ar' ? 'اختر اللمسة المعمارية' : 'Select Architectural Finish'}:
            </p>
            <div class="flex items-center gap-3">
              ${product.images.charcoal ? `
                <button type="button" class="keynote-color-btn flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border transition ${
                  currentFinish === 'charcoal' ? 'border-white bg-white/20 text-white font-semibold' : 'border-white/10 bg-white/5 text-white/60 hover:text-white'
                }" data-finish="charcoal">
                  <span class="w-3.5 h-3.5 rounded-full bg-[#2A2B2E] border border-white/40"></span>
                  <span>${I18N[state.lang].finishCharcoal}</span>
                </button>
              ` : ''}

              ${product.images.white ? `
                <button type="button" class="keynote-color-btn flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border transition ${
                  currentFinish === 'white' ? 'border-white bg-white/20 text-white font-semibold' : 'border-white/10 bg-white/5 text-white/60 hover:text-white'
                }" data-finish="white">
                  <span class="w-3.5 h-3.5 rounded-full bg-[#EAEAE8] border border-white/40"></span>
                  <span>${I18N[state.lang].finishWhite}</span>
                </button>
              ` : ''}
            </div>
          </div>

          <!-- Dynamic Dual Price & Order Button -->
          <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p class="text-[10px] text-white/50 uppercase tracking-widest">${state.lang === 'ar' ? 'السعر الرسمي' : 'Official Pricing'}</p>
              <p class="text-2xl font-bold font-mono text-white">
                ${formatPrice(product.priceUSD, product.priceSAR)}
              </p>
            </div>

            <div class="flex items-center gap-2">
              <button type="button" class="btn-keynote-specs px-4 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition active:scale-95" data-spec-id="${product.id}">
                ${I18N[state.lang].viewSpecs}
              </button>
              
              <button type="button" class="btn-keynote-buy px-5 py-2.5 rounded-full text-xs font-semibold bg-white hover:bg-gray-100 text-black shadow-lg transition active:scale-95 flex items-center gap-2" data-product-id="${product.id}">
                <span>${I18N[state.lang].orderNow}</span>
                <svg class="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Right Stage Image Canvas with Subtle Floating Elevation -->
        <div class="lg:col-span-7 relative">
          <div class="relative w-full aspect-[4/5] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl flex items-center justify-center group">
            <img id="keynoteStageImg" src="${activeImgSrc}" alt="${product.name}" class="w-full h-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-105">
            <div class="absolute bottom-4 start-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white/80 font-mono">
              ${product.name} • 2026 Edition
            </div>
          </div>
        </div>

      </div>
    `;

    // Bind keynote finish buttons
    stageContainer.querySelectorAll('.keynote-color-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const finish = btn.getAttribute('data-finish');
        state.productFinishes[product.id] = finish;
        renderKeynote();
        renderCatalog(); // Keep in sync
      });
    });

    // Bind Specs button
    stageContainer.querySelector('.btn-keynote-specs')?.addEventListener('click', () => {
      openSpecsModal(product);
    });

    // Bind Order button
    stageContainer.querySelector('.btn-keynote-buy')?.addEventListener('click', () => {
      openCheckoutDrawer(product);
    });
  }

  // ==========================================
  // 7. RENDER FULL CATALOG GRID (7 PRODUCTS)
  // ==========================================
  function renderCatalog() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = PRODUCTS.map((product) => {
      const currentFinish = state.productFinishes[product.id] || (product.images.charcoal ? 'charcoal' : 'white');
      const isUnboxing = state.productViews[product.id] === 'unboxing';
      
      let imgSrc = product.images[currentFinish] || product.images.white || product.images.charcoal;
      if (isUnboxing && product.images.unboxing) {
        imgSrc = product.images.unboxing;
      }

      return `
        <article class="product-card group rounded-3xl bg-[#FBFBFC] hover:bg-white border border-black/[0.06] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300">
          
          <div>
            <!-- Header row: category & badge -->
            <div class="flex items-center justify-between mb-3 text-xs">
              <span class="text-[10px] font-mono uppercase tracking-widest text-[#86868B]">${product.badge[state.lang]}</span>
              
              <!-- Colorway Pill Switcher -->
              <div class="flex items-center gap-1.5 bg-black/[0.04] p-1 rounded-full">
                ${product.images.charcoal ? `
                  <button type="button" class="color-swatch-dot w-4 h-4 rounded-full bg-[#2A2B2E] ${currentFinish === 'charcoal' && !isUnboxing ? 'active-swatch' : ''}" data-color-prod="${product.id}" data-color="charcoal" title="${I18N[state.lang].finishCharcoal}"></button>
                ` : ''}
                ${product.images.white ? `
                  <button type="button" class="color-swatch-dot w-4 h-4 rounded-full bg-[#EAEAE8] ${currentFinish === 'white' && !isUnboxing ? 'active-swatch' : ''}" data-color-prod="${product.id}" data-color="white" title="${I18N[state.lang].finishWhite}"></button>
                ` : ''}
              </div>
            </div>

            <!-- Product Title & Tagline -->
            <h3 class="text-xl font-bold tracking-tight text-jet mb-1">${product.name}</h3>
            <p class="text-xs text-[#86868B] line-clamp-1 mb-4">${product.tagline[state.lang]}</p>

            <!-- Image View Container with Unboxing peek button -->
            <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#EFEFEF] border border-black/[0.04] mb-5">
              <img src="${imgSrc}" alt="${product.name}" class="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.03]">
              
              <!-- Unboxing Peek Button -->
              ${product.images.unboxing ? `
                <button type="button" class="btn-toggle-unboxing absolute bottom-3 end-3 px-2.5 py-1 rounded-full bg-white/90 hover:bg-white backdrop-blur text-[10px] font-medium text-jet border border-black/10 shadow-sm transition active:scale-95 flex items-center gap-1" data-unboxing-id="${product.id}">
                  <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>
                  <span>${isUnboxing ? I18N[state.lang].standardView : I18N[state.lang].unboxingPeek}</span>
                </button>
              ` : ''}
            </div>

            <p class="text-xs text-[#6E6E73] leading-relaxed line-clamp-2 mb-4 font-normal">
              ${product.description[state.lang]}
            </p>
          </div>

          <!-- Card Footer: Dual Price & Actions -->
          <div class="pt-4 border-t border-black/[0.05] flex items-center justify-between gap-2">
            <div>
              <p class="text-[9px] uppercase font-mono tracking-wider text-[#86868B]">${state.lang === 'ar' ? 'السعر' : 'Price'}</p>
              <p class="text-lg font-bold font-mono text-jet">
                ${formatPrice(product.priceUSD, product.priceSAR)}
              </p>
            </div>

            <div class="flex items-center gap-1.5">
              <button type="button" class="btn-view-specs p-2 rounded-full hover:bg-[#F5F5F7] text-gray-600 hover:text-black border border-black/[0.06] transition" data-spec-id="${product.id}" title="${I18N[state.lang].viewSpecs}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>
              </button>

              <button type="button" class="btn-catalog-order px-4 py-2 rounded-full text-xs font-semibold text-white bg-black hover:bg-[#2C2C2E] shadow-sm transition active:scale-95" data-product-id="${product.id}">
                ${I18N[state.lang].orderNow}
              </button>
            </div>
          </div>

        </article>
      `;
    }).join('');

    // Attach Color Swatch events
    grid.querySelectorAll('.color-swatch-dot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = btn.getAttribute('data-color-prod');
        const color = btn.getAttribute('data-color');
        state.productFinishes[prodId] = color;
        state.productViews[prodId] = 'product'; // switch back to product view
        renderCatalog();
        if (PRODUCTS[state.keynoteIndex].id === prodId) {
          renderKeynote();
        }
      });
    });

    // Attach Unboxing Toggle events
    grid.querySelectorAll('.btn-toggle-unboxing').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = btn.getAttribute('data-unboxing-id');
        state.productViews[prodId] = state.productViews[prodId] === 'unboxing' ? 'product' : 'unboxing';
        renderCatalog();
      });
    });

    // Attach Specs Modal triggers
    grid.querySelectorAll('.btn-view-specs').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-spec-id');
        const prod = PRODUCTS.find(p => p.id === prodId);
        if (prod) openSpecsModal(prod);
      });
    });

    // Attach Quick Order triggers
    grid.querySelectorAll('.btn-catalog-order').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-product-id');
        const prod = PRODUCTS.find(p => p.id === prodId);
        if (prod) openCheckoutDrawer(prod);
      });
    });
  }

  // ==========================================
  // 8. ARCHITECTURAL SPECS MODAL
  // ==========================================
  function openSpecsModal(product) {
    const backdrop = document.getElementById('specsModalBackdrop');
    const modalName = document.getElementById('modalProductName');
    const modalBody = document.getElementById('modalSpecsBody');
    if (!backdrop || !modalName || !modalBody) return;

    modalName.textContent = product.name;
    const currentFinish = state.productFinishes[product.id] || 'charcoal';
    const finishLabel = currentFinish === 'charcoal' ? I18N[state.lang].finishCharcoal : I18N[state.lang].finishWhite;

    let specsRows = `
      <div class="flex items-center gap-4 p-3 rounded-2xl bg-[#F5F5F7] mb-4">
        <img src="${product.images[currentFinish] || product.images.white}" class="w-16 h-16 rounded-xl object-cover bg-white">
        <div>
          <p class="font-bold text-sm text-jet">${product.name}</p>
          <p class="text-xs text-[#86868B]">${finishLabel}</p>
          <p class="text-xs font-mono font-bold text-jet mt-0.5">${formatPrice(product.priceUSD, product.priceSAR)}</p>
        </div>
      </div>
      <div class="divide-y divide-black/[0.06]">
    `;

    for (const [key, val] of Object.entries(product.specs)) {
      const label = state.lang === 'ar' ? key : key.replace(/([A-Z])/g, ' $1').toUpperCase();
      const content = typeof val === 'object' ? val[state.lang] : val;
      specsRows += `
        <div class="py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <span class="text-[#86868B] font-medium capitalize">${label}</span>
          <span class="font-semibold text-jet sm:text-end max-w-xs">${content}</span>
        </div>
      `;
    }
    specsRows += `</div>`;

    modalBody.innerHTML = specsRows;

    // Show modal
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    document.getElementById('specsModalCard').classList.remove('scale-95');
    document.getElementById('specsModalCard').classList.add('scale-100');
  }

  function closeSpecsModal() {
    const backdrop = document.getElementById('specsModalBackdrop');
    if (!backdrop) return;
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
    document.getElementById('specsModalCard').classList.add('scale-95');
    document.getElementById('specsModalCard').classList.remove('scale-100');
  }

  // ==========================================
  // 9. CHECKOUT DRAWER & VIRTUAL CARD LOGIC
  // ==========================================
  function openCheckoutDrawer(product) {
    state.selectedProduct = product || PRODUCTS[0];
    const currentFinish = state.productFinishes[state.selectedProduct.id] || 'charcoal';
    state.selectedFinish = currentFinish;

    const drawer = document.getElementById('checkoutDrawer');
    const backdrop = document.getElementById('checkoutBackdrop');
    if (!drawer || !backdrop) return;

    // Reset drawer views to Step 1
    document.getElementById('checkoutFormStep').classList.remove('hidden');
    document.getElementById('checkoutAuthStep').classList.add('hidden');
    document.getElementById('checkoutSuccessStep').classList.add('hidden');
    document.getElementById('checkoutDrawerFooter').classList.remove('hidden');

    // Populate Product Information
    const finishLabel = currentFinish === 'charcoal' ? I18N[state.lang].finishCharcoal : I18N[state.lang].finishWhite;
    document.getElementById('drawerProductName').textContent = state.selectedProduct.name;
    document.getElementById('drawerProductFinish').textContent = finishLabel;
    
    const priceText = formatPrice(state.selectedProduct.priceUSD, state.selectedProduct.priceSAR);
    document.getElementById('drawerProductPrice').textContent = priceText;
    document.getElementById('drawerTotalDue').textContent = priceText;

    const imgEl = document.getElementById('drawerProductImg');
    if (imgEl) {
      imgEl.src = state.selectedProduct.images[currentFinish] || state.selectedProduct.images.white;
    }

    // Slide open drawer
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    drawer.classList.remove('translate-x-full', 'rtl:-translate-x-full');
  }

  function closeCheckoutDrawer() {
    const drawer = document.getElementById('checkoutDrawer');
    const backdrop = document.getElementById('checkoutBackdrop');
    if (!drawer || !backdrop) return;

    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
    drawer.classList.add('translate-x-full', 'rtl:-translate-x-full');
  }

  // Formatter for Virtual Card Inputs
  function setupCardInputs() {
    const inputHolder = document.getElementById('inputCardHolder');
    const inputNumber = document.getElementById('inputCardNumber');
    const inputExpiry = document.getElementById('inputCardExpiry');
    const inputCVC = document.getElementById('inputCardCVC');

    const displayHolder = document.getElementById('virtualCardHolderDisplay');
    const displayNumber = document.getElementById('virtualCardNumberDisplay');
    const displayExpiry = document.getElementById('virtualCardExpiryDisplay');
    const brandBadge = document.getElementById('cardBrandBadge');

    // Cardholder Mirror
    inputHolder?.addEventListener('input', (e) => {
      const val = e.target.value.trim().toUpperCase();
      displayHolder.textContent = val || 'MIRA PRIVILEGE';
    });

    // 16-Digit Card Formatting (Groups of 4)
    inputNumber?.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').slice(0, 16);
      let formatted = val.match(/.{1,4}/g)?.join(' ') || '';
      e.target.value = formatted;

      // Update card preview display with masking
      if (!val) {
        displayNumber.textContent = '•••• •••• •••• 4242';
      } else {
        const masked = val.padEnd(16, '•');
        displayNumber.textContent = `${masked.slice(0,4)} ${masked.slice(4,8)} ${masked.slice(8,12)} ${masked.slice(12,16)}`;
      }

      // Network detection
      if (val.startsWith('4')) {
        brandBadge.textContent = 'VISA / APPLE PAY';
      } else if (val.startsWith('5')) {
        brandBadge.textContent = 'MASTERCARD / MADA';
      } else if (val.startsWith('9') || val.startsWith('5888')) {
        brandBadge.textContent = 'MADA';
      } else {
        brandBadge.textContent = 'MADA / VISA';
      }
    });

    // Expiry MM/YY formatting
    inputExpiry?.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').slice(0, 4);
      if (val.length >= 2) {
        val = val.slice(0, 2) + '/' + val.slice(2);
      }
      e.target.value = val;
      displayExpiry.textContent = val || '12/28';
    });

    // CVC digits
    inputCVC?.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
    });

    // Payment Authorization Trigger
    const submitBtn = document.getElementById('submitAuthBtn');
    submitBtn?.addEventListener('click', handlePaymentAuthorization);
  }

  // ==========================================
  // 10. MOCK AUTHORIZATION FLOW (ALWAYS APPROVED)
  // ==========================================
  function handlePaymentAuthorization() {
    const form = document.getElementById('virtualPaymentForm');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Switch to step 2: Mock Authorization Progress
    document.getElementById('checkoutFormStep').classList.add('hidden');
    document.getElementById('checkoutDrawerFooter').classList.add('hidden');
    document.getElementById('checkoutAuthStep').classList.remove('hidden');

    const authProgress = document.getElementById('authProgressBar');
    const authStatus = document.getElementById('authStatusText');

    // Simulate Apple Pay handshake steps
    authProgress.style.width = '20%';
    authStatus.textContent = state.lang === 'ar' ? 'جارٍ الاتصال بمعالج MIRA الآمن...' : 'Securing tokenized handshake...';

    setTimeout(() => {
      authProgress.style.width = '65%';
      authStatus.textContent = state.lang === 'ar' ? 'جارٍ اعتماد البطاقة الافتراضية مع البنك...' : 'Validating virtual credentials...';
    }, 600);

    setTimeout(() => {
      authProgress.style.width = '100%';
      authStatus.textContent = state.lang === 'ar' ? 'تمت الموافقة والاعتماد!' : 'Transaction Approved!';
    }, 1200);

    setTimeout(() => {
      showSuccessReceipt();
    }, 1600);
  }

  function showSuccessReceipt() {
    document.getElementById('checkoutAuthStep').classList.add('hidden');
    document.getElementById('checkoutSuccessStep').classList.remove('hidden');

    // Generate unique order reference
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `MIRA-2026-${randNum}-SA`;
    const authCode = `AUTH-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} GMT+3`;

    const finishLabel = state.selectedFinish === 'charcoal' ? I18N[state.lang].finishCharcoal : I18N[state.lang].finishWhite;
    const amountPaid = formatPrice(state.selectedProduct.priceUSD, state.selectedProduct.priceSAR);

    // Populate receipt UI
    document.getElementById('receiptOrderId').textContent = orderId;
    document.getElementById('receiptItemName').textContent = state.selectedProduct.name;
    document.getElementById('receiptFinishVal').textContent = finishLabel;
    document.getElementById('receiptAmountVal').textContent = amountPaid;
    document.getElementById('receiptAuthCode').textContent = authCode;
    document.getElementById('receiptTimestamp').textContent = timestamp;

    // Cache order details for receipt download
    state.lastOrder = {
      orderId,
      authCode,
      timestamp,
      product: state.selectedProduct.name,
      finish: finishLabel,
      amount: amountPaid,
      currency: state.currency
    };

    // Increment Bag counter badge
    const badge = document.getElementById('cartCountBadge');
    if (badge) {
      badge.textContent = '1';
      badge.classList.remove('hidden');
    }
  }

  // Download receipt as clean formatted text file
  function downloadReceiptFile() {
    if (!state.lastOrder) return;
    const o = state.lastOrder;

    const receiptContent = 
`=============================================================
             MIRA ARCHITECTURAL APPLIANCES
                OFFICIAL VIRTUAL RECEIPT
=============================================================
Order Reference  : ${o.orderId}
Authorization    : ${o.authCode} (Status: APPROVED)
Timestamp        : ${o.timestamp}
Payment Method   : Apple Pay / Virtual Token (Always Approved)
Merchant Atelier : MIRA Technologies LLC, Riyadh, Saudi Arabia

-------------------------------------------------------------
ITEM DESCRIPTION                           PRICE
-------------------------------------------------------------
${o.product.padEnd(42, ' ')} ${o.amount}
Finish: ${o.finish}
White-Glove Delivery: Riyadh / International Express included
Matter 2.0 & Local Mesh Calibration: Active

-------------------------------------------------------------
TOTAL PAID                                 ${o.amount}
-------------------------------------------------------------
Guaranteed 5-Year Comprehensive Architectural Warranty.
Encrypted offline authentication token: #${Math.random().toString(36).substring(2, 10).toUpperCase()}

Thank you for choosing domestic serenity.
Designed in Arabia. Refined for the World.
=============================================================
`;

    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${o.orderId}_Receipt.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // ==========================================
  // 11. HERO FINISH SELECTOR
  // ==========================================
  function setupHeroFinish() {
    const heroImg = document.getElementById('heroImage');
    const buttons = document.querySelectorAll('.hero-color-btn');
    if (!heroImg || !buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('active-color', 'border-white');
          b.classList.add('border-transparent');
        });
        btn.classList.add('active-color', 'border-white');
        btn.classList.remove('border-transparent');

        const finish = btn.getAttribute('data-finish');
        if (finish === 'charcoal') {
          heroImg.src = PRODUCTS[0].images.charcoal;
        } else if (finish === 'white') {
          heroImg.src = PRODUCTS[0].images.white;
        } else if (finish === 'wall') {
          heroImg.src = PRODUCTS[0].images.wall;
        }
      });
    });
  }

  // ==========================================
  // 12. CURRENCY & LANGUAGE TOGGLES
  // ==========================================
  function setupToggles() {
    // Currency Toggle
    const btnUSD = document.getElementById('btnUSD');
    const btnSAR = document.getElementById('btnSAR');

    btnUSD?.addEventListener('click', () => {
      if (state.currency === 'USD') return;
      state.currency = 'USD';
      btnUSD.classList.add('active-pill');
      btnSAR.classList.remove('active-pill');
      btnSAR.classList.add('text-[#6E6E73]');
      btnUSD.classList.remove('text-[#6E6E73]');
      renderKeynote();
      renderCatalog();
      updateTextTranslations();
    });

    btnSAR?.addEventListener('click', () => {
      if (state.currency === 'SAR') return;
      state.currency = 'SAR';
      btnSAR.classList.add('active-pill');
      btnUSD.classList.remove('active-pill');
      btnUSD.classList.add('text-[#6E6E73]');
      btnSAR.classList.remove('text-[#6E6E73]');
      renderKeynote();
      renderCatalog();
      updateTextTranslations();
    });

    // Language Toggle
    const btnEN = document.getElementById('btnLangEN');
    const btnAR = document.getElementById('btnLangAR');

    btnEN?.addEventListener('click', () => {
      if (state.lang === 'en') return;
      state.lang = 'en';
      btnEN.classList.add('active-pill');
      btnAR.classList.remove('active-pill');
      btnAR.classList.add('text-[#6E6E73]');
      btnEN.classList.remove('text-[#6E6E73]');
      updateTextTranslations();
      renderKeynote();
      renderCatalog();
    });

    btnAR?.addEventListener('click', () => {
      if (state.lang === 'ar') return;
      state.lang = 'ar';
      btnAR.classList.add('active-pill');
      btnEN.classList.remove('active-pill');
      btnEN.classList.add('text-[#6E6E73]');
      btnAR.classList.remove('text-[#6E6E73]');
      updateTextTranslations();
      renderKeynote();
      renderCatalog();
    });
  }

  // ==========================================
  // 13. GLOBAL EVENT LISTENERS & INIT
  // ==========================================
  function init() {
    setupToggles();
    setupHeroFinish();
    setupCardInputs();
    renderKeynote();
    renderCatalog();
    updateTextTranslations();

    // Drawer close buttons
    document.getElementById('closeDrawerBtn')?.addEventListener('click', closeCheckoutDrawer);
    document.getElementById('checkoutBackdrop')?.addEventListener('click', closeCheckoutDrawer);
    document.getElementById('orderAnotherBtn')?.addEventListener('click', () => {
      closeCheckoutDrawer();
    });

    // Cart bag toggle button
    document.getElementById('cartToggleBtn')?.addEventListener('click', () => {
      openCheckoutDrawer(state.selectedProduct || PRODUCTS[0]);
    });

    // Receipt download
    document.getElementById('downloadReceiptBtn')?.addEventListener('click', downloadReceiptFile);

    // Specs modal close
    document.getElementById('closeSpecsModalBtn')?.addEventListener('click', closeSpecsModal);
    document.getElementById('specsModalBackdrop')?.addEventListener('click', (e) => {
      if (e.target.id === 'specsModalBackdrop') closeSpecsModal();
    });

    // Esc key close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCheckoutDrawer();
        closeSpecsModal();
      }
    });

    // Expose helpers to window for inline onclick handlers
    window.miraApp = {
      openDirectCheckout: (prodId) => {
        const p = PRODUCTS.find(x => x.id === prodId) || PRODUCTS[0];
        openCheckoutDrawer(p);
      }
    };
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
