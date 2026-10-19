import React from 'react';

const MARQUEE_ITEMS = [
  'p3lending.space',
  '100/100 Lighthouse Performance',
  'rootedapp.space',
  '$150 Deposit Launchpad',
  'fuelshield.xyz',
  'Sub-Second Cold Load',
  'velour.live',
  'zero-bloat typescript',
  'relayapp.pro',
  'Direct Developer Access',
  'mattjhagen.xyz',
  '60 FPS Kinetic Physics',
  'pacmacmobile.com',
  '12-Month Managed Care',
  'projectaquarius.space',
  'cmameet.site',
];

export const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#0c0c16] py-3.5 select-none">
      <div className="flex animate-marquee whitespace-nowrap items-center text-xs font-mono uppercase tracking-widest text-neutral-400">
        {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, index) => (
          <span key={index} className="flex items-center gap-6 mx-4">
            <span className={item.includes('.space') || item.includes('.xyz') || item.includes('.live') || item.includes('.pro') || item.includes('.com') || item.includes('.site') ? 'text-[#00D4FF] font-semibold' : item.includes('$150') || item.includes('100/100') ? 'text-[#A066FF] font-semibold' : 'text-neutral-300'}>
              {item}
            </span>
            <span className="text-white/20" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};
