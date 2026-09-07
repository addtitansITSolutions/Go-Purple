import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const outcomes = [
  "Campaigns built around clear objectives",
  "Continuous testing and optimization",
  "Decisions backed by real performance data",
];

const PerformanceMarketingCTA = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[30px] bg-[#171323] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        >
          {/* Decorative Number */}
          <div className="pointer-events-none absolute -right-4 -top-16 select-none font-[var(--font-display)] text-[190px] font-bold leading-none tracking-[-0.09em] text-white/[0.035] sm:text-[240px] lg:text-[280px]">
            01
          </div>

          {/* Purple Accent */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "65%" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-0 top-0 w-[3px] bg-[var(--primary)]"
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            {/* Main Content */}
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--secondary)]">
                Ready to perform?
              </p>

              <h2 className="max-w-[800px] font-[var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                Let's turn your marketing spend into{" "}
                <span className="text-[var(--primary)]">
                  meaningful growth.
                </span>
              </h2>

              <p className="mt-6 max-w-[650px] text-base leading-7 text-white/55 sm:text-lg">
                Tell us where you want to go. We'll help you build a
                performance strategy designed to get there with greater
                clarity, efficiency and momentum.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex w-full items-center justify-between rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--dark)] transition-all duration-300 hover:bg-[var(--secondary)] sm:w-auto sm:min-w-[220px]"
              >
                <span>Start a conversation</span>

                <span className="ml-6 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} strokeWidth={1.7} />
                </span>
              </Link>
            </div>

            {/* Outcomes */}
            <div className="lg:pb-1">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                What to expect
              </p>

              <div className="border-t border-white/10">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.3 + index * 0.08,
                    }}
                    className="flex items-start gap-4 border-b border-white/10 py-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check
                        size={13}
                        strokeWidth={2}
                        className="text-[var(--secondary)]"
                      />
                    </span>

                    <p className="text-sm leading-6 text-white/65">
                      {outcome}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  Data × Creative × Growth
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingCTA;