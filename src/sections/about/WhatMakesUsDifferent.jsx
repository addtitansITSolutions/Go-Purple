import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Plan Before We Build",
    description:
      "Every campaign has a clear plan shaped around your business, your audience, and what you aim to achieve.",
  },
  {
    number: "02",
    title: "One Connected System",
    description:
      "Affiliate marketing, performance marketing, digital marketing, ecommerce marketing, and mobile performance marketing are managed together, not as separate, disconnected pieces.",
  },
  {
    number: "03",
    title: "A Partner, Not Just a Vendor",
    description:
      "We work as part of your team, bringing expertise, honesty, and constant fine tuning to help you grow.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
              What Makes Us Different
            </p>

            <h2 className="max-w-[560px] font-[var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              We don't just{" "}
              <span className="text-[var(--primary)]">do the work.</span>
              <br />
              We think with you.
            </h2>
          </div>

          <p className="max-w-[620px] text-base leading-7 text-[var(--text)] lg:ml-auto lg:text-lg">
            Good digital growth comes from having the right people, the right
            thinking and the right system working together. That's how we
            approach every partnership.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="mt-14 border-t border-[var(--border)] sm:mt-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group grid gap-6 border-b border-[var(--border)] py-8 transition-all duration-300 sm:py-10 lg:grid-cols-[100px_0.8fr_1.2fr_auto] lg:items-center lg:gap-10"
            >
              {/* Number */}
              <span className="font-[var(--font-display)] text-xs font-bold tracking-[0.16em] text-[var(--primary)]">
                {principle.number}
              </span>

              {/* Title */}
              <h3 className="max-w-[430px] font-[var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[var(--dark)] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="max-w-[560px] text-sm leading-6 text-[var(--text)] sm:text-[15px]">
                {principle.description}
              </p>

              {/* Arrow */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-5 rounded-2xl border border-[var(--border)] bg-[var(--light)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p className="font-[var(--font-display)] text-xl font-semibold leading-tight tracking-[-0.03em] text-[var(--dark)] sm:text-2xl">
              Strategy first. Connected thinking.{" "}
              <span className="text-[var(--primary)]">
                Better growth.
              </span>
            </p>

            <p className="mt-2 text-sm leading-6 text-[var(--text)]">
              That's the GoPurple way of working.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--dark)]">
            <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
            Built together
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;