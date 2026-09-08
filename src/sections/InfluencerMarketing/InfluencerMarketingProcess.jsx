import { motion } from "framer-motion";
import {
  Search,
  UserCheck,
  Sparkles,
  Megaphone,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const InfluencerMarketingProcess = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      text: "We identify creators, communities and audience segments that make sense for your brand.",
      detail: "Audience first",
    },
    {
      number: "02",
      icon: UserCheck,
      title: "Match",
      text: "We evaluate creator relevance, content quality, audience fit and brand alignment.",
      detail: "The right fit",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Create",
      text: "We shape campaign ideas that give creators room to tell your story in their own voice.",
      detail: "Authentic content",
    },
    {
      number: "04",
      icon: Megaphone,
      title: "Amplify",
      text: "We turn strong creator content into wider campaigns that extend reach and engagement.",
      detail: "More meaningful reach",
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Measure",
      text: "We track campaign performance to understand what worked and where the next opportunity lies.",
      detail: "Growth you can see",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--light)]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                How We Work
              </span>
            </div>

            <p className="mt-5 font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--dark)]">
              From creator to campaign
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              From the right creator to the
              <span className="text-[var(--primary)]"> right result.</span>
            </h2>
          </div>
        </motion.div>

        {/* Process line */}
        <div className="relative mt-16 sm:mt-20">

          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[28px] hidden h-px bg-black/10 lg:block" />

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >
                  {/* Mobile / Tablet connector */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[28px] top-16 h-[calc(100%-16px)] w-px bg-black/10 lg:hidden" />
                  )}

                  <div className="relative z-10 flex gap-6 pb-10 lg:block lg:pb-0 lg:pr-7">
                    
                    {/* Icon */}
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white lg:h-14 lg:w-14">
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="pt-1 lg:mt-10 lg:pt-0">
                      <div className="flex items-center gap-3">
                        <span className="font-[var(--font-display)] text-xs font-bold tracking-[0.12em] text-gray-400">
                          {step.number}
                        </span>

                        <span className="hidden h-px w-6 bg-black/10 sm:block lg:hidden" />

                        <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--primary)]">
                          {step.detail}
                        </span>
                      </div>

                      <h3 className="mt-3 font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--dark)]">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-[230px] font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid gap-6 rounded-3xl bg-[var(--dark)] p-7 sm:mt-20 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12"
        >
          <div>
            <p className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
              The goal
            </p>

            <h3 className="mt-3 max-w-3xl font-[var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
              Build creator partnerships that people want to believe in.
            </h3>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--dark)]">
            <ArrowUpRight size={21} strokeWidth={1.7} />
          </div>
        </motion.div>

        {/* Bottom meta */}
        <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[var(--font-display)] text-sm font-semibold text-[var(--dark)] sm:text-base">
            Discover × Match × Create × Amplify × Measure
          </p>

          <p className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
            Built for meaningful influence
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfluencerMarketingProcess;