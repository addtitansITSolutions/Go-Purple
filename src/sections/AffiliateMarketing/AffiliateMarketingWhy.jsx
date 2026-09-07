import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Handshake,
  BadgePercent,
  LineChart,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "The right partners",
    description:
      "We find publishers, creators and affiliate partners whose audiences naturally fit your brand.",
    icon: Users,
  },
  {
    number: "02",
    title: "Trust that converts",
    description:
      "We focus on authentic placements and recommendations that feel useful rather than forced.",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Incentives that perform",
    description:
      "Commission structures and offers are shaped to motivate partners while protecting your margins.",
    icon: BadgePercent,
  },
];

const AffiliateMarketingWhy = () => {
  return (
    <section
      id="why-affiliate-marketing"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-4xl">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Why Affiliate Marketing
            </span>

            <h2 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--dark)] sm:text-5xl lg:text-7xl">
              Growth is stronger when{" "}
              <span className="text-[var(--primary)]">
                more people believe in your brand.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8 lg:pb-1">
            We build affiliate ecosystems around genuine partnerships,
            measurable performance and long-term value — not just clicks.
          </p>
        </motion.div>

        {/* Main feature layout */}
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.05fr_1.95fr]">

          {/* Featured panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative min-h-[420px] overflow-hidden rounded-[28px] bg-[var(--dark)] p-7 text-white transition-transform duration-500 sm:p-9 lg:min-h-[500px]"
          >
            {/* Decorative line */}
            <div className="absolute left-0 top-0 h-1 w-24 bg-[var(--primary)] transition-all duration-500 group-hover:w-40" />

            {/* Top */}
            <div className="flex items-start justify-between">
              <span className="font-[var(--font-display)] text-xs font-bold tracking-[0.08em] text-white/35">
                04
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--primary)]">
                <LineChart size={20} strokeWidth={1.8} />
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-8 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--secondary)]">
                Built to scale
              </span>

              <h3 className="mt-4 max-w-lg font-[var(--font-display)] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Turn partnerships into a{" "}
                <span className="text-[var(--secondary)]">
                  scalable revenue channel.
                </span>
              </h3>

              <p className="mt-5 max-w-lg font-[var(--font-body)] text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                The goal isn't simply to recruit more affiliates. It's to
                build a network where the right partners keep bringing
                qualified customers to your business.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  GoPurple approach
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[var(--dark)]">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.number}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--light)] p-7 transition-all duration-500 sm:min-h-[320px] sm:p-8"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="font-[var(--font-display)] text-xs font-bold tracking-[0.08em] text-[var(--dark)]/25">
                      {pillar.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--dark)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--dark)]">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                    <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Affiliate growth
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--primary)]">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  {/* Bottom hover accent */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
            Partners × Trust × Performance
          </span>

          <span className="font-[var(--font-body)] text-sm text-[var(--text)]">
            Build the network. Scale the result.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AffiliateMarketingWhy;