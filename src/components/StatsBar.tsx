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
      className="relative px-2 py-4 sm:px-6"
    >
      <p className="font-display text-4xl font-medium tracking-tight text-ivory sm:text-5xl lg:text-6xl">
        {formatted}
        <span className="text-gold">{suffix}</span>
      </p>
      <div className="gold-hairline mt-4 mb-3 max-w-[7rem]" />
      <p className="text-sm font-semibold tracking-wide text-ivory">{label}</p>
      <p className="mt-1 text-xs text-ivory/50">{sub}</p>
    </motion.div>
  );
};

export const StatsBar: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/8 bg-ink-2">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-[96rem] grid-cols-1 divide-y divide-white/8 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, idx) => (
          <StatCell key={stat.label} {...stat} delay={idx * 0.08} active={inView} />
        ))}
      </div>
    </section>
  );
};
