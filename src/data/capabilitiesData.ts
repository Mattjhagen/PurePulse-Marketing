export interface Capability {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  outcomes: string[];
  metric: string;
  metricSub: string;
  badge: string;
}

export const CAPABILITIES_DATA: Capability[] = [
  {
    id: 'engineering',
    number: '01',
    title: 'High-Velocity Engineering',
    headline: 'Handcrafted Code. Zero Framework Bloat.',
    description: 'We reject 40MB bloated page builders and cookie-cutter WordPress themes. Every PurePulse site is hand-coded with modern TypeScript, React, and tailored CSS to ensure atomic speed.',
    outcomes: ['Sub-second cold page loads', 'Zero render-blocking scripts', 'Flawless responsive behavior on every device'],
    metric: '99.4%',
    metricSub: 'Code optimization score',
    badge: 'Core Architecture',
  },
  {
    id: 'conversion',
    number: '02',
    title: 'High-Conversion Positioning',
    headline: 'Design That Moves People To Action.',
    description: 'A gorgeous website is useless if visitors bounce in 4 seconds. We structure your value proposition, typography, and clear calls-to-action so visitors immediately understand why you win.',
    outcomes: ['Clear above-the-fold value prop', 'Frictionless lead capture pathways', 'Intentional visual hierarchy that commands trust'],
    metric: '3.4x',
    metricSub: 'Higher form completion rate',
    badge: 'UX Strategy',
  },
  {
    id: 'speed',
    number: '03',
    title: 'Lightning Performance & SEO',
    headline: '100/100 Lighthouse as the Baseline.',
    description: 'Google penalizes slow websites. We engineer semantic markup, structured JSON-LD data, optimal image compression, and edge caching to place your brand ahead of competitors.',
    outcomes: ['Perfect 100 Lighthouse benchmark', 'Rich OpenGraph and Twitter card previews', 'Semantic HTML5 structure for high Google ranking'],
    metric: '100',
    metricSub: 'Lighthouse score standard',
    badge: 'Performance & Search',
  },
  {
    id: 'motion',
    number: '04',
    title: 'Kinetic Motion & Interaction',
    headline: 'Tactile Polish Inspired by Night & High Fashion.',
    description: 'Subtle micro-interactions, silky smooth kinetic transitions, and purposeful scroll dynamics elevate your website from a generic digital brochure into an unforgettable experience.',
    outcomes: ['Cubic-bezier smooth settling physics', 'Zero layout shift (CLS: 0.00)', 'Optional tactile Web Audio interactive sound design'],
    metric: '60 FPS',
    metricSub: 'Hardware-accelerated frames',
    badge: 'Creative Direction',
  },
  {
    id: 'care',
    number: '05',
    title: '12-Month Zero-Stress Care',
    headline: 'Your Dedicated Web Partner on Speed Dial.',
    description: 'Never worry about server outages, expired SSL certificates, DNS breakages, or content updates. PurePulse includes continuous hosting, security maintenance, and regular updates.',
    outcomes: ['Managed high-speed edge hosting', 'Unlimited minor copy and asset updates', 'Direct developer email & phone access with Matt'],
    metric: '100%',
    metricSub: 'Managed infrastructure care',
    badge: 'Hosting & Maintenance',
  },
  {
    id: 'launchpad',
    number: '06',
    title: 'The $150 Launchpad Model',
    headline: 'Enterprise Quality Without the $25,000 Agency Invoice.',
    description: 'Traditional agencies lock you into 12-week discovery phases and massive upfront fees. PurePulse flips the script: start with just a $150 deposit, followed by low predictable monthly plans.',
    outcomes: ['$150 refundable initial deposit', 'Predictable plans from $20/mo', 'Fast launch in as little as 7 business days'],
    metric: '$150',
    metricSub: 'Upfront deposit to begin',
    badge: 'Economic Advantage',
  },
];
