import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const STATS = [
  { end: 3500, suffix: '+', label: 'Deployed personnel', sub: 'Police-verified & uniformed' },
  { end: 500, suffix: '+', label: 'Commercial clients', sub: 'IT parks, malls & factories' },
  { end: 10, suffix: '+', label: 'Years of command', sub: 'Proven operational record' },
  { end: 24, suffix: '/7', label: 'Operations center', sub: 'Instant emergency QRT response' },
];

const useCountUp = (end: number, active: boolean, duration = 1600) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, active, duration]);

  return value;
};

const StatCell: React.FC<(typeof STATS)[number] & { delay: number; active: boolean }> = ({
  end,
  suffix,
  label,
  sub,
  delay,
  active,
}) => {
  const value = useCountUp(end, active, 1500 + delay * 200);
  const formatted = end >= 1000 ? value.toLocaleString('en-IN') : String(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative px-4 py-4 transition-colors hover:bg-white/[0.035] sm:px-5"
    >
      <p className="font-display text-3xl font-medium tracking-tight text-ivory sm:text-4xl lg:text-5xl">
        {formatted}
        <span className="text-gold">{suffix}</span>
      </p>
      <div className="gold-hairline mt-3 mb-2 max-w-[5.5rem]" />
      <p className="text-sm font-semibold tracking-wide text-ivory">{label}</p>
      <p className="mt-1 text-xs text-ivory/50">{sub}</p>
    </motion.div>
  );
};

export const StatsBar: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/8 bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.08),transparent_28%,transparent_72%,rgba(16,185,129,0.06))]" />
      <div className="relative mx-auto grid max-w-[96rem] grid-cols-1 divide-y divide-white/8 px-3 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-6">
        {STATS.map((stat, idx) => (
          <StatCell key={stat.label} {...stat} delay={idx * 0.08} active={inView} />
        ))}
      </div>
    </section>
  );
};
