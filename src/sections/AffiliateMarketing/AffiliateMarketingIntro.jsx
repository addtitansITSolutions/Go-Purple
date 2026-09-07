import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const points = [
  {
    number: "01",
    title: "Find the right partners",
    description:
      "We identify publishers, creators and affiliate partners whose audiences genuinely align with your brand and offer.",
  },
  {
    number: "02",
    title: "Build partnerships that work",
    description:
      "From commission structures to campaign messaging, we create partnerships that give both brands and affiliates a reason to perform.",
  },
  {
    number: "03",
    title: "Scale what performs",
    description:
      "We track performance, optimize the channel and double down on the partnerships that consistently drive valuable customers.",
  },
];

const AffiliateMarketingIntro = () => {
  return (
    <section
      id="affiliate-intro"
      className="relative overflow-hidden bg-[var(--light)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="mb-5 block font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            Affiliate Marketing
          </span>

          <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
            Partnerships that turn{" "}
            <span className="text-[var(--primary)]">recommendations</span>{" "}
            into revenue.
          </h2>

          <p className="mt-6 max-w-2xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
            Affiliate marketing works best when the partnership feels
            natural. We connect brands with the publishers, creators and
            communities their customers already trust — creating a channel
            built around relevance, performance and measurable growth.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 border-t border-[var(--border)] lg:mt-20">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            {/* Left statement */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-[var(--border)] py-8 lg:border-b-0 lg:border-r lg:pr-12 lg:py-12"
            >
              <p className="max-w-xs font-[var(--font-display)] text-xl font-semibold leading-[1.25] tracking-[-0.025em] text-[var(--dark)] sm:text-2xl">
                The right partnership can become one of your most valuable
                growth channels.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />

                <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
                  Performance with purpose
                </span>
              </div>
            </motion.div>

            {/* Points */}
            <div>
              {points.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border-b border-[var(--border)] py-8 last:border-b-0 sm:py-9 lg:px-10 lg:py-10"
                >
                  <div className="flex gap-5 sm:gap-7">
                    {/* Number */}
                    <span className="shrink-0 pt-1 font-[var(--font-body)] text-xs font-semibold tracking-[0.12em] text-[var(--primary)]">
                      {point.number}
                    </span>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <h3 className="font-[var(--font-display)] text-xl font-semibold leading-tight tracking-[-0.025em] text-[var(--dark)] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                          {point.title}
                        </h3>

                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.8}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>

                      <p className="mt-3 max-w-xl font-[var(--font-body)] text-sm leading-6 text-[var(--text)] sm:text-base sm:leading-7">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
            Strategy × Partnerships × Performance
          </span>

          <span className="font-[var(--font-body)] text-sm text-[var(--text)]">
            Built for sustainable growth.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliateMarketingIntro;