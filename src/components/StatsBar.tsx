import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const STATS = [
  {
    end: 3500,
    suffix: '+',
    label: 'Deployed personnel',
    sub: 'Police-verified & uniformed',
    tone: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  {
    end: 500,
    suffix: '+',
    label: 'Commercial clients',
    sub: 'IT parks, malls & factories',
    tone: 'bg-orange-50 text-orange-800 border-orange-200',
  },
  {
    end: 10,
    suffix: '+',
    label: 'Years of command',
    sub: 'Proven operational record',
    tone: 'bg-red-50 text-red-800 border-red-200',
  },
  {
    end: 24,
    suffix: '/7',
    label: 'Operations center',
    sub: 'Instant emergency QRT response',
    tone: 'bg-violet-50 text-violet-800 border-violet-200',
  },
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
  tone,
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
      className={`relative rounded-xl border px-4 py-4 shadow-sm transition-transform hover:-translate-y-0.5 sm:px-5 ${tone}`}
    >
      <p className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        {formatted}
        <span>{suffix}</span>
      </p>
      <div className="my-3 h-px max-w-[5.5rem] bg-current opacity-25" />
      <p className="text-sm font-black tracking-wide text-slate-950">{label}</p>
      <p className="mt-1 text-xs font-semibold text-slate-600">{sub}</p>
    </motion.div>
  );
};

export const StatsBar: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-10">
      <div className="relative mx-auto grid max-w-[96rem] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, idx) => (
          <StatCell key={stat.label} {...stat} delay={idx * 0.08} active={inView} />
        ))}
      </div>
    </section>
  );
};
