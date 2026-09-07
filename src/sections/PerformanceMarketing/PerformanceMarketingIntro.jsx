import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  MousePointerClick,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Reach",
    description:
      "Put your brand in front of the audiences most likely to take action.",
    icon: Target,
  },
  {
    number: "02",
    title: "Acquire",
    description:
      "Turn attention into qualified traffic, leads, customers and conversions.",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "Use real campaign data to understand what works and improve what doesn't.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Double down on winning campaigns while keeping efficiency and growth in balance.",
    icon: TrendingUp,
  },
];

const PerformanceMarketingIntro = () => {
  return (
    <section className="bg-[var(--light)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
              Performance Marketing
            </p>

            <h2 className="max-w-[580px] font-[var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Every campaign should have a{" "}
              <span className="text-[var(--primary)]">job to do.</span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-[620px]">
            <p className="text-base leading-7 text-[var(--text)] sm:text-lg">
              Performance isn't just about getting more clicks. It's about
              understanding what drives action, measuring what matters and
              continuously improving the path from investment to return.
            </p>

            <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--dark)]">
              <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
              Data before assumptions
            </div>
          </div>
        </motion.div>

        {/* Performance Pillars */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--border)] sm:mt-16 lg:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative min-h-[250px] bg-white p-7 transition-all duration-300 hover:bg-[#171323] hover:text-white sm:p-9 lg:min-h-[280px] lg:p-10"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-[var(--font-display)] text-xs font-bold tracking-[0.16em] text-[var(--primary)]">
                    {pillar.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-white/15 group-hover:bg-[var(--secondary)] group-hover:text-[var(--dark)]">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-10 max-w-[470px]">
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--dark)] transition-colors duration-300 group-hover:text-white sm:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--text)] transition-colors duration-300 group-hover:text-white/60 sm:text-[15px]">
                    {pillar.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-8 right-8 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-white/15 group-hover:text-white">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:px-8"
        >
          <p className="font-[var(--font-display)] text-lg font-semibold tracking-[-0.025em] text-[var(--dark)] sm:text-xl">
            Reach → Acquire → Optimize →{" "}
            <span className="text-[var(--primary)]">Scale</span>
          </p>

          <p className="text-sm text-[var(--text)]">
            Built around measurable business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMarketingIntro;