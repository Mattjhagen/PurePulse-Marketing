import p3Img from '../assets/images/p3_lending_protocol_1792445255952.jpg';
import velourImg from '../assets/images/velour_privacy_platform_1792445255748.jpg';
import fuelshieldImg from '../assets/images/fuelshield_gas_card_1792445257147.jpg';
import rootedImg from '../assets/images/rooted_daily_devotional_1792445257291.jpg';
import relayImg from '../assets/images/relay_ai_mobile_1792445275503.jpg';
import sdrImg from '../assets/images/matty_sdr_waterfall_1792445275683.jpg';
import pacmacImg from '../assets/images/pacmac_wireless_os_1792445276802.jpg';
import aquariusImg from '../assets/images/project_aquarius_flowos_1792445276730.jpg';
import northstarImg from '../assets/images/northstar_recovery_app_1792445293836.jpg';

export interface Project {
  id: string;
  name: string;
  domain: string;
  githubUrl: string;
  category: 'Fintech & Web3' | 'Privacy & Security' | 'Mobile & AI Apps' | 'Telecom & Cloud' | 'Hardware & SDR' | 'Community & Faith';
  kicker: string;
  description: string;
  highlightMetric: string;
  metricLabel: string;
  turnaroundTime: string;
  performanceScore: number;
  techStack: string[];
  image: string;
  clientStory: string;
  accentColor: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p3lending',
    name: 'P3 Lending Protocol',
    domain: 'p3lending.space',
    githubUrl: 'https://github.com/Mattjhagen/P3-Lending-Protocol',
    category: 'Fintech & Web3',
    kicker: 'Decentralized P2P Lending & Social Underwriting',
    description: 'Decentralized peer-to-peer lending protocol powered by AI reputation scoring and social underwriting. Replaces legacy FICO credit scoring with social trust, community verification, and risk-evaluated loan order books.',
    highlightMetric: '+215%',
    metricLabel: 'Underwriting conversion rate',
    turnaroundTime: '9 days',
    performanceScore: 100,
    techStack: ['React', 'TypeScript', 'Node.js', 'Gemini AI', 'Tailwind CSS'],
    image: p3Img,
    clientStory: 'P3 needed a high-contrast Neon Green & Dark Zinc exchange aesthetic (inspired by Kalshi) with zero-latency loan order books and real-time AI borrower reputation evaluation.',
    accentColor: '#10B981',
  },
  {
    id: 'velour',
    name: 'Velour Live',
    domain: 'velour.live',
    githubUrl: 'https://github.com/Mattjhagen/Velour-live',
    category: 'Privacy & Security',
    kicker: 'Privacy Operations & Data Exposure Intelligence',
    description: 'Modern consumer privacy management service and enterprise-grade remediation workflow platform. Discovers, monitors, and suppresses leaked personal data across data brokers, public record directories, and dark web intelligence feeds.',
    highlightMetric: 'Zero-Knowledge',
    metricLabel: 'Transient memory auditing',
    turnaroundTime: '6 days',
    performanceScore: 99,
    techStack: ['React 19', 'Tailwind CSS v4', 'Express', 'Gemini AI', 'Lucide'],
    image: velourImg,
    clientStory: 'Inspired by Stripe and Linear, Velour needed a calm, compliance-oriented design with automated data broker opt-out packets and encrypted identity verification that leaves no memory traces.',
    accentColor: '#A066FF',
  },
  {
    id: 'fuelshield',
    name: 'FuelShield',
    domain: 'fuelshield.xyz',
    githubUrl: 'https://github.com/Mattjhagen/FuelShield',
    category: 'Fintech & Web3',
    kicker: 'Gas Price Protection & Fleet Fuel Card',
    description: 'Predictable gas price protection subscription offering monthly gallon allowances and a dedicated physical/digital Fuel Card. Shields everyday commuters and commercial haulers against sudden price surges at the pump.',
    highlightMetric: '$3.29/gal',
    metricLabel: 'Guaranteed locked fuel rate',
    turnaroundTime: '7 days',
    performanceScore: 100,
    techStack: ['React', 'Tailwind CSS', 'PWA WebManifest', 'Edge Delivery'],
    image: fuelshieldImg,
    clientStory: 'Engineered with deep ink and mint glow styling, FuelShield needed an instant subscription configurator and dynamic gallon-allowance gauge that operates smoothly on mobile at gas station pumps.',
    accentColor: '#36E28F',
  },
  {
    id: 'rooted',
    name: 'Rooted Daily',
    domain: 'rootedapp.space',
    githubUrl: 'https://github.com/Mattjhagen/Rooted_Daily',
    category: 'Community & Faith',
    kicker: 'Offline KJV Bible Engine & Devotional Companion',
    description: 'Full-featured devotional platform bundling the complete 66-book KJV Bible in an offline SQLite database with 31,000+ verses. Includes dual 365-day reading plans (Canonical & Blended) and AI-powered spiritual journal reflections.',
    highlightMetric: '31,000+',
    metricLabel: 'Offline Scripture verses',
    turnaroundTime: '8 days',
    performanceScore: 100,
    techStack: ['React Native / PWA', 'SQLite Engine', 'Zustand', 'Gemini AI'],
    image: rootedImg,
    clientStory: 'Transformed from a simple chat into a tranquil spiritual anchor with instant local scripture querying in under 3 seconds and empathetic AI journaling sessions that remember previous reflections.',
    accentColor: '#F59E0B',
  },
  {
    id: 'relay',
    name: 'RelayAppPro (OpenCode Mobile)',
    domain: 'relayapp.pro',
    githubUrl: 'https://github.com/Mattjhagen/RelayAppPro',
    category: 'Mobile & AI Apps',
    kicker: 'Flagship Mobile AI Workspace & OpenCode Client',
    description: 'Flagship mobile AI client and PWA wrapper providing a desktop-grade ChatGPT, Claude, and Gemini experience on Android and iOS. Features full markdown syntax rendering, local session caching, and configurable server endpoints.',
    highlightMetric: '0ms',
    metricLabel: 'Client-side message lag',
    turnaroundTime: '6 days',
    performanceScore: 100,
    techStack: ['React Native', 'Expo 51', 'TypeScript', 'PWA ServiceWorker'],
    image: relayImg,
    clientStory: 'Built for developers and power users who need an ultra-responsive mobile AI assistant with dark/light themes, offline conversation history, and rapid server switching without app store friction.',
    accentColor: '#7B2FFF',
  },
  {
    id: 'mattysdr',
    name: "Matty's SDR & Radio Blog",
    domain: 'mattjhagen.xyz',
    githubUrl: 'https://github.com/Mattjhagen/Mattys-SDR-Blog',
    category: 'Hardware & SDR',
    kicker: '73 On The Air — Amateur Ham Radio & SDR Station',
    description: 'Comprehensive web platform documenting amateur radio adventures and SDR signal experiments. Features a live real-time waterfall display of RTL-SDR v4 feeds, Web Audio demodulator (SSB/CW/FM/FT8), Omaha police/fire scanner, and interactive QSO logbook map.',
    highlightMetric: 'Real-Time',
    metricLabel: 'RTL-SDR v4 waterfall feed',
    turnaroundTime: '5 days',
    performanceScore: 100,
    techStack: ['React', 'Web Audio API', 'HTML5 Canvas', 'RTL-SDR DSP', 'Vite'],
    image: sdrImg,
    clientStory: 'Designed with a tactical dark console and glowing amber/cyan waterfall spectrograms, enabling live broadcast monitoring, Maidenhead grid geodesic calculations, and emergency services audio streaming.',
    accentColor: '#00D4FF',
  },
  {
    id: 'pacmac',
    name: 'PacMac Wireless OS',
    domain: 'pacmacmobile.com',
    githubUrl: 'https://github.com/Mattjhagen/PacMacNTAP',
    category: 'Telecom & Cloud',
    kicker: 'White-Label MVNO Platform & eSIM Lifecycle',
    description: 'Production-style MVNO wireless platform managing customer accounts, usage-based data billing, instantaneous SIM/eSIM activations, PackieAI scam-call defense, and federal NTAP/Lifeline government assistance onboarding.',
    highlightMetric: '1-Tap',
    metricLabel: 'Instant eSIM activation',
    turnaroundTime: '10 days',
    performanceScore: 99,
    techStack: ['React', 'Vite', 'Express', 'Supabase Postgres', 'Stripe Billing'],
    image: pacmacImg,
    clientStory: 'Engineered for seamless subscriber onboarding with dynamic data dials, automated scam-call filtering rules, and self-service wireless plan upgrades without carrier retail overhead.',
    accentColor: '#0284C7',
  },
  {
    id: 'aquarius',
    name: 'FlowOS (Project Aquarius)',
    domain: 'projectaquarius.space',
    githubUrl: 'https://github.com/Mattjhagen/ProjectAquarius',
    category: 'Mobile & AI Apps',
    kicker: 'Next-Generation Mobile OS Architecture',
    description: 'Revolutionary mobile interaction architecture built around AI-driven partial app streaming. Delivers modular micro-components just-in-time, slashing device storage usage by 75% and improving battery longevity by 60%.',
    highlightMetric: '-75%',
    metricLabel: 'Device storage consumption',
    turnaroundTime: '12 days',
    performanceScore: 99,
    techStack: ['React', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Express'],
    image: aquariusImg,
    clientStory: 'Prototyped the future of mobile computing with intelligent ambient caching, continuous battery impact telemetry, and instant app launching without requiring massive 200MB app store downloads.',
    accentColor: '#00D4FF',
  },
  {
    id: 'northstar',
    name: 'Northstar Recovery',
    domain: 'cmameet.site',
    githubUrl: 'https://github.com/Mattjhagen/NorthStarRecovery',
    category: 'Community & Faith',
    kicker: 'Confidential CMA Recovery Companion',
    description: 'Private, secure recovery companion application for Crystal Meth Anonymous. Features pseudonym authentication via AWS Cognito, privacy-blurred sobriety streak counters, sponsor 1-tap emergency calling, and real-time local meeting directories.',
    highlightMetric: '100% Private',
    metricLabel: 'Zero-trace pseudonym security',
    turnaroundTime: '7 days',
    performanceScore: 100,
    techStack: ['React Native', 'Expo SDK 54', 'AWS Cognito', 'EAS Build'],
    image: northstarImg,
    clientStory: 'Built with compassion and uncompromising privacy at its core: features a privacy-blur toggle so sobriety dates are shielded from shoulder-surfers in public, and auto-detects upcoming meetings within 3 hours.',
    accentColor: '#10B981',
  },
];

export const CATEGORIES = [
  'All Projects',
  'Fintech & Web3',
  'Privacy & Security',
  'Mobile & AI Apps',
  'Telecom & Cloud',
  'Hardware & SDR',
  'Community & Faith',
] as const;
