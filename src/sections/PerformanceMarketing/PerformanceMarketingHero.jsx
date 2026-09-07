import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PerformanceMarketingHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-18 sm:px-10 sm:pt-32 lg:px-16 lg:pt-16">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 pt-12 sm:pt-16 lg:pt-20"
        >
          <h1 className="font-[var(--font-display)] text-[17vw] font-semibold leading-[0.82] tracking-[-0.075em] text-[var(--dark)] sm:text-[13vw] lg:text-[110px]">
            PERFORMANCE
            <br />
            MARKETING
          </h1>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative ml-auto mt-8 max-w-[740px] sm:-mt-4 lg:-mt-10"
        >
          <div className="group relative aspect-[16/9] overflow-hidden rounded-3xl">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Performance marketing strategy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65 transition-colors duration-500 group-hover:bg-black/25" />

            {/* Purple Accent */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "55%" }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 top-0 w-[3px] bg-[var(--primary)]"
            />

            {/* Image Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Data / Creative / Performance
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--dark)] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={19} strokeWidth={1.6} />
                </div>
              </div>

              <div>
                <p className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                  Marketing built around measurable growth.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.7,
            }}
            className="relative z-30 mt-10 max-w-[520px] sm:mt-12 lg:-mt-45 lg:ml-8"
          >
            <p className="font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
                Performance marketing should make every marketing dollar work
                harder. We combine data, creative and continuous optimization to
                reach the right audience, improve efficiency and turn campaigns
                into measurable business growth.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                style={{ color: "var(--white)" }}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--dark)] px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary)] sm:w-auto"
              >
                Let's talk

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </div>
          </motion.div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 mb-10 grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--secondary)] sm:mt-20 lg:mt-28 lg:grid-cols-3"
        >
          <div className="border-b border-black/10 p-6 lg:border-b-0 lg:border-r">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--dark)]/50">
              What we do
            </p>

            <p className="mt-3 font-[var(--font-display)] text-lg font-semibold tracking-[-0.025em] text-[var(--dark)]">
              Turn spend into growth
            </p>
          </div>

          <div className="border-b border-black/10 p-6 lg:border-b-0 lg:border-r">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--dark)]/50">
              Approach
            </p>

            <p className="mt-3 font-[var(--font-display)] text-lg font-semibold tracking-[-0.025em] text-[var(--dark)]">
              Data × Creative × Optimization
            </p>
          </div>

          <div className="p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--dark)]/50">
              Result
            </p>

            <p className="mt-3 font-[var(--font-display)] text-lg font-semibold tracking-[-0.025em] text-[var(--dark)]">
              Growth you can measure
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingHero;