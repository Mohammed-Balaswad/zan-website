/**
 * Structured project portfolio data
 * Fully decoupled from UI layout for simple Phase 2 content replacement.
 */
export const PROJECTS_DATA = [
  {
    id: 'proj-01',
    slug: 'hospitality-complex-riyadh',
    status: 'under-execution', // active | under-development | under-execution | expansion | completed
    featured: true,
    name: {
      ar: 'مجمع الضيافة والسياحة الفاخرة',
      en: 'Luxury Hospitality & Tourism Complex',
      ru: 'Гостиничный и туристический комплекс премиум-класса',
    },
    sector: {
      ar: 'الضيافة والسياحة',
      en: 'Hospitality & Tourism',
      ru: 'Гостиничный бизнес и туризм',
    },
    location: {
      ar: 'الرياض، المملكة العربية السعودية',
      en: 'Riyadh, Saudi Arabia',
      ru: 'Эр-Рияд, Саудовская Аравия',
    },
    role: {
      ar: 'المطور الرئيسي والشريك الاستثماري',
      en: 'Master Developer & Investment Partner',
      ru: 'Главный застройщик и инвестиционный партнер',
    },
    description: {
      ar: 'مشروع ضيافة متكامل يهدف لإثراء القطاع السياحي وتوفير تجارب فندقية متميزة وفق أعلى المعايير العالمية.',
      en: 'An integrated hospitality project aimed at enriching the tourism sector and delivering premium hotel experiences.',
      ru: 'Комплексный проект в сфере гостеприимства, направленный на развитие туристического сектора.',
    },
    imageUrl: null,
  },
  {
    id: 'proj-02',
    slug: 'logistics-hub-western-region',
    status: 'active',
    featured: true,
    name: {
      ar: 'المركز اللوجستي والتجاري المتقدم',
      en: 'Advanced Logistics & Commercial Hub',
      ru: 'Передовой логистический и коммерческий центр',
    },
    sector: {
      ar: 'الخدمات اللوجستية والتطوير العمراني',
      en: 'Logistics & Urban Development',
      ru: 'Логистика и городское развитие',
    },
    location: {
      ar: 'جدة، المملكة العربية السعودية',
      en: 'Jeddah, Saudi Arabia',
      ru: 'Джидда, Саудовская Аравия',
    },
    role: {
      ar: 'إدارة وتطوير الاستثمار',
      en: 'Investment Development & Management',
      ru: 'Управление и развитие инвестиций',
    },
    description: {
      ar: 'منصة لوجستية حديثة لتدفق البضائع ودعم سلاسل الإمداد المتطورة بالمنطقة الغربية.',
      en: 'A modern logistics platform facilitating trade flows and supporting regional supply chain efficiency.',
      ru: 'Современная логистическая платформа для поддержки торговых потоков и цепочек поставок.',
    },
    imageUrl: null,
  },
  {
    id: 'proj-03',
    slug: 'mixed-use-commercial-tower',
    status: 'under-development',
    featured: false,
    name: {
      ar: 'البرج التجاري والسكني المتعدد الاستخدامات',
      en: 'Mixed-Use Commercial & Residential Tower',
      ru: 'Многофункциональный коммерческий и жилой комплекс',
    },
    sector: {
      ar: 'التطوير العقاري',
      en: 'Real Estate Development',
      ru: 'Девелопмент недвижимости',
    },
    location: {
      ar: 'الخبر، المملكة العربية السعودية',
      en: 'Khobar, Saudi Arabia',
      ru: 'Эль-Хубар, Саудовская Аравия',
    },
    role: {
      ar: 'مالك المشروع وهيكلة الاستثمار',
      en: 'Project Owner & Investment Structuring',
      ru: 'Владелец проекта и структурирование инвестиций',
    },
    description: {
      ar: 'معلم معماري جديد يدمج المكاتب التنفيذية والمساحات السكنية المتميزة باكتفاء ذاتي.',
      en: 'A modern architectural landmark integrating premium executive office space and residences.',
      ru: 'Новый архитектурный ориентир, объединяющий премиальные офисные пространства и жилые зоны.',
    },
    imageUrl: null,
  },
];
