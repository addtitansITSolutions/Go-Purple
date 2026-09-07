import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Every project starts with understanding the problem, the audience, and the opportunity before we build.",
  },
  {
    number: "02",
    title: "Creativity",
    description:
      "Ideas should be distinctive enough to earn attention, create connection, and stay memorable.",
  },
  {
    number: "03",
    title: "Performance",
    description:
      "Every experience has a purpose. We design around measurable outcomes rather than aesthetics alone.",
  },
  {
    number: "04",
    title: "Evolution",
    description:
      "The work doesn't stop at launch. We learn from behaviour, data, and results to keep making it better.",
  },
];

const WhatMakesItWork = () => {
  return (
    <section className="relative overflow-hidden bg-[#17151a] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-xs">
              What makes it work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-[var(--font-display)] text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
              Good work gets
              <br />
              attention.
              <br />
              <span className="text-white/30">
                Great work moves people.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-20 border-t border-white/10 sm:mt-28">

          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative grid gap-5 border-b border-white/10 py-8 sm:py-10 lg:grid-cols-[0.15fr_0.5fr_1fr_0.1fr] lg:items-center lg:gap-8"
            >

              {/* Hover Background */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-full origin-left scale-x-0 bg-white/[0.035] transition-transform duration-500 ease-out group-hover:scale-x-100" />

              {/* Number */}
              <div className="relative">
                <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.18em] text-[var(--primary)] sm:text-xs">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="relative">
                <h3 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.055em] text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="relative max-w-xl">
                <p className="font-[var(--font-body)] text-sm leading-[1.7] text-white/45 transition-colors duration-500 group-hover:text-white/65 sm:text-base">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="relative hidden lg:flex lg:justify-end">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#17151a] group-hover:rotate-45">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 flex flex-col gap-5 sm:mt-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-xl font-[var(--font-body)] text-sm leading-[1.7] text-white/40 sm:text-base">
            The strongest work happens when strategy, creativity, and
            performance aren't separate disciplines — but part of the same
            thinking.
          </p>

          <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-white/25">
            Strategy × Creativity × Performance
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatMakesItWork;