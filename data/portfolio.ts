import { TypeCareer, TypeProject, TypeQuestion, TypeTestimonial } from './types';

const block = (text: string) => [{ _type: 'block', children: [{ _type: 'span', text }] }] as any;

const image = '/images/need-to-be-filled.svg';

export const portfolioProjects: TypeProject[] = [
  {
    projectIndex: 1,
    slug: { _type: 'slug', current: 'network-security-monitoring-system' },
    title: 'Network Security Monitoring System',
    updatedAt: 'NEED TO BE FILLED',
    mainImageDesktop: image,
    mainImageMobile: image,
    descriptionEn: block('Major capstone project. CURRENT: React, Vite, TypeScript frontend dashboard; FastAPI and Python backend; PostgreSQL, SQLAlchemy, Alembic, JWT authentication, and role-based access control for viewer, analyst, and admin roles. Includes alert management and actions, host monitoring, analytics, network topology, WebSocket live alerts, alert timeline, and replay controls. IN DEVELOPMENT: GraphSAGE-based AI detection, Ryu controller, and OpenFlow-based SDN mitigation.'),
    descriptionFr: block('Major capstone project. CURRENT: React, Vite, TypeScript frontend dashboard; FastAPI and Python backend; PostgreSQL, SQLAlchemy, Alembic, JWT authentication, and role-based access control for viewer, analyst, and admin roles. Includes alert management and actions, host monitoring, analytics, network topology, WebSocket live alerts, alert timeline, and replay controls. IN DEVELOPMENT: GraphSAGE-based AI detection, Ryu controller, and OpenFlow-based SDN mitigation.'),
    authors: [], sections: [], types: ['software', 'security', 'current'],
  },
  {
    projectIndex: 2,
    slug: { _type: 'slug', current: 'multimodal-sentiment-analyzer' },
    title: 'Multimodal Sentiment Analyzer',
    updatedAt: 'NEED TO BE FILLED', mainImageDesktop: image, mainImageMobile: image,
    descriptionEn: block('Multimodal sentiment analysis using the MVSA-Multiple dataset. Combines image representation from ResNet18 with transformer/LSTM-based text representation through multimodal fusion. Metrics and deployment information: NEED TO BE FILLED.'),
    descriptionFr: block('Multimodal sentiment analysis using the MVSA-Multiple dataset. Combines image representation from ResNet18 with transformer/LSTM-based text representation through multimodal fusion. Metrics and deployment information: NEED TO BE FILLED.'),
    authors: [], sections: [], types: ['software', 'ai'],
  },
  {
    projectIndex: 3,
    slug: { _type: 'slug', current: 'pdf-outline-extractor' },
    title: 'PDF Outline Extractor',
    updatedAt: 'NEED TO BE FILLED', mainImageDesktop: image, mainImageMobile: image,
    descriptionEn: block('Adobe India Hackathon project. Designed for fully offline, CPU-only execution, model-based heading detection, a model size of 200 MB or less, and Docker compatibility. Ranking and benchmark results: NEED TO BE FILLED.'),
    descriptionFr: block('Adobe India Hackathon project. Designed for fully offline, CPU-only execution, model-based heading detection, a model size of 200 MB or less, and Docker compatibility. Ranking and benchmark results: NEED TO BE FILLED.'),
    authors: [], sections: [], types: ['software', 'ai'],
  },
];

export const portfolioCareer: TypeCareer[] = [
  { startDate: '2026-08-01', endDate: '', titleEn: 'Oracle Certified Foundations Associate — Java', titleFr: 'Oracle Certified Foundations Associate — Java', descriptionEn: block('Certification date: August 2026.'), descriptionFr: block('Certification date: August 2026.') },
  { startDate: 'NEED TO BE FILLED', endDate: '', titleEn: 'B.Tech — Computer Science and Engineering | VIT-AP University', titleFr: 'B.Tech — Computer Science and Engineering | VIT-AP University', descriptionEn: block('GPA, graduation date, school, coursework, and academic achievements: NEED TO BE FILLED.'), descriptionFr: block('GPA, graduation date, school, coursework, and academic achievements: NEED TO BE FILLED.') },
];

export const portfolioQuestions: TypeQuestion[] = [
  { questionEn: 'What am I studying?', questionFr: 'What am I studying?', answerEn: block('B.Tech in Computer Science and Engineering at VIT-AP University.'), answerFr: block('B.Tech in Computer Science and Engineering at VIT-AP University.') },
  { questionEn: 'Which project is in development?', questionFr: 'Which project is in development?', answerEn: block('GraphSAGE-based AI detection, a Ryu controller, and OpenFlow-based SDN mitigation for the Network Security Monitoring System.'), answerFr: block('GraphSAGE-based AI detection, a Ryu controller, and OpenFlow-based SDN mitigation for the Network Security Monitoring System.') },
  { questionEn: 'Contact and social links', questionFr: 'Contact and social links', answerEn: block('NEED TO BE FILLED'), answerFr: block('NEED TO BE FILLED') },
];

export const portfolioTestimonials: TypeTestimonial[] = [
  { author: 'NEED TO BE FILLED', entity: 'NEED TO BE FILLED', testimonialEn: block('NEED TO BE FILLED'), testimonialFr: block('NEED TO BE FILLED') },
];

export const portfolioFilters = [
  { labelEn: 'All', labelFr: 'All', value: 'all' },
  { labelEn: 'Software', labelFr: 'Software', value: 'software' },
  { labelEn: 'AI / ML', labelFr: 'AI / ML', value: 'ai' },
  { labelEn: 'Security', labelFr: 'Security', value: 'security' },
];
