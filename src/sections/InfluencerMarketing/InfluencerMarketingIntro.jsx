import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const InfluencerMarketingIntro = () => {
  const pillars = [
    {
      number: "01",
      icon: Users,
      title: "The right creators",
      description:
        "We look beyond follower counts to find creators whose audience, voice and values genuinely align with your brand.",
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "The right story",
      description:
        "We help shape campaigns that feel natural to the creator and meaningful to the people listening.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "The right outcome",
      description:
        "Awareness is only part of the equation. We connect creator activity with measurable engagement, traffic and growth.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#100C1C]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />

          <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            The GoPurple Approach
          </span>
        </motion.div>

        {/* Main statement */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="
              max-w-[900px]
              font-[var(--font-display)]
              text-4xl
              font-semibold
              leading-[0.98]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Influence isn't bought.
            <span className="text-[var(--primary)]">
              {" "}It's earned.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl font-[var(--font-body)] text-base leading-7 text-white/55 sm:text-lg sm:leading-8"
          >
            The strongest influencer campaigns don't feel like advertising.
            They feel like a recommendation from someone people already
            trust. That's where we focus.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 origin-left border-t border-white/10 sm:mt-20"
        />

        {/* Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="
                  group
                  relative
                  min-h-[330px]
                  bg-[#100C1C]
                  p-7
                  transition-colors
                  duration-300
                  hover:bg-white
                  sm:p-9
                  lg:p-10
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-[var(--font-display)] text-sm font-semibold text-white/30 transition-colors duration-300 group-hover:text-black/30">
                    {pillar.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-black/10 group-hover:bg-[var(--secondary)] group-hover:text-[var(--dark)]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-20">
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[var(--dark)]">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-sm font-[var(--font-body)] text-sm leading-6 text-white/45 transition-colors duration-300 group-hover:text-[var(--text)]">
                    {pillar.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-7 right-7 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-[var(--dark)] group-hover:text-white sm:bottom-9 sm:right-9">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-[var(--font-display)] text-lg font-medium text-white/80 sm:text-xl">
            Creators × Community × Culture
          </p>

          <p className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
            Influence with a purpose
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfluencerMarketingIntro;