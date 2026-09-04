import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Eye,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Reach the right people",
    description:
      "Connect with the audiences that matter most to your business through targeted channels, campaigns and messaging.",
    icon: Target,
    size: "lg:col-span-2",
    theme: "dark",
  },
  {
    number: "02",
    title: "Build meaningful visibility",
    description:
      "Put your brand in front of people at the moments that matter — when they are discovering, considering and choosing.",
    icon: Eye,
    size: "",
    theme: "purple",
  },
  {
    number: "03",
    title: "Measure what matters",
    description:
      "Use real performance data to understand what works, improve what doesn't and make smarter marketing decisions.",
    icon: BarChart3,
    size: "",
    theme: "light",
  },
  {
    number: "04",
    title: "Turn attention into growth",
    description:
      "Move beyond impressions and engagement with campaigns designed to generate leads, customers and sustainable growth.",
    icon: TrendingUp,
    size: "lg:col-span-2",
    theme: "yellow",
  },
  {
    number: "04",
    title: "Turn attention into growth",
    description:
      "Move beyond impressions and engagement with campaigns designed to generate leads, customers and sustainable growth.",
    icon: TrendingUp,
    size: "lg:col-span-2",
    theme: "yellow",
  },
];

const DigitalMarketingWhy = () => {
  return (
    <section
      id="why-digital-marketing"
      className="overflow-hidden bg-[var(--white)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <div className="mb-5 flex items-center gap-3">
            {/* <span className="h-px w-8 bg-[var(--primary)]" /> */}

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Why Digital Marketing
            </span>
          </div>

          <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--dark)] sm:text-5xl lg:text-7xl">
            Digital gives your brand{" "}
            <span className="text-[var(--primary)]">room to grow.</span>
          </h2>

          <p className="mt-6 max-w-2xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
            Your audience is already online. The opportunity is to reach them
            with the right message, at the right moment, and turn attention
            into something meaningful for your business.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group ${reason.size}`}
              >
                <div
                  className={`relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[28px] p-7 transition-all duration-500 sm:min-h-[320px] sm:p-8 ${
                    reason.theme === "dark"
                      ? "bg-[var(--dark)] text-white"
                      : reason.theme === "purple"
                        ? "bg-[var(--primary)] text-white"
                        : reason.theme === "yellow"
                          ? "bg-[var(--secondary)] text-[var(--dark)]"
                          : "border border-[var(--border)] bg-white text-[var(--dark)]"
                  }`}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`font-[var(--font-display)] text-xs font-bold tracking-[0.08em] ${
                        reason.theme === "dark"
                          ? "text-white/35"
                          : reason.theme === "purple"
                            ? "text-white/50"
                            : "text-[var(--dark)]/30"
                      }`}
                    >
                      {reason.number}
                    </span>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                        reason.theme === "dark"
                          ? "bg-white/10 text-white"
                          : reason.theme === "purple"
                            ? "bg-white/15 text-white"
                            : reason.theme === "yellow"
                              ? "bg-[var(--dark)] text-white"
                              : "bg-[var(--light)] text-[var(--dark)]"
                      }`}
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <h3 className="max-w-xl font-[var(--font-display)] text-2xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-3xl">
                      {reason.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-xl font-[var(--font-body)] text-sm leading-6 ${
                        reason.theme === "dark"
                          ? "text-white/65"
                          : reason.theme === "purple"
                            ? "text-white/75"
                            : "text-[var(--text)]"
                      }`}
                    >
                      {reason.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`mt-8 flex items-center justify-between border-t pt-5 ${
                      reason.theme === "dark"
                        ? "border-white/10"
                        : reason.theme === "purple"
                          ? "border-white/15"
                          : "border-black/10"
                    }`}
                  >
                    <span
                      className={`font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] ${
                        reason.theme === "dark"
                          ? "text-white/40"
                          : reason.theme === "purple"
                            ? "text-white/50"
                            : "text-gray-400"
                      }`}
                    >
                      GoPurple approach
                    </span>

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-45 ${
                        reason.theme === "dark"
                          ? "bg-white/10 text-white group-hover:bg-white group-hover:text-[var(--dark)]"
                          : reason.theme === "purple"
                            ? "bg-white/15 text-white group-hover:bg-white group-hover:text-[var(--primary)]"
                            : reason.theme === "yellow"
                              ? "bg-[var(--dark)] text-white group-hover:bg-[var(--primary)]"
                              : "bg-[var(--dark)] text-white group-hover:bg-[var(--primary)]"
                      }`}
                    >
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  {/* Subtle hover accent */}
                  <span
                    className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                      reason.theme === "dark"
                        ? "bg-[var(--secondary)]"
                        : reason.theme === "purple"
                          ? "bg-[var(--secondary)]"
                          : "bg-[var(--primary)]"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingWhy;