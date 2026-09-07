import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  MousePointerClick,
  ShoppingBag,
  Repeat2,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Discover",
    label: "Get attention",
    description:
      "We help the right customers discover your products through search, social, content and performance-led campaigns.",
    icon: Search,
  },
  {
    number: "02",
    title: "Consider",
    label: "Build confidence",
    description:
      "We strengthen product storytelling, creative and landing experiences so shoppers have more reasons to choose you.",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Convert",
    label: "Make buying easier",
    description:
      "We remove friction from the shopping journey and optimize the moments that influence purchase decisions.",
    icon: ShoppingBag,
  },
  {
    number: "04",
    title: "Retain",
    label: "Increase customer value",
    description:
      "We create opportunities to bring customers back through remarketing, retention and ongoing engagement.",
    icon: Repeat2,
  },
];

const EcommerceMarketingApproach = () => {
  return (
    <section
      id="ecommerce-approach"
      className="overflow-hidden bg-[var(--dark)] py-16 text-white sm:py-20 lg:py-24"
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
          className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div>
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
              Our E-commerce Approach
            </span>

            <h2 className="mt-5 max-w-5xl font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              We build the journey{" "}
              <span className="text-[var(--secondary)]">
                around the customer.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-[var(--font-body)] text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Every interaction matters. Our approach connects acquisition,
            experience and retention into one continuous path toward growth.
          </p>
        </motion.div>

        {/* Approach timeline */}
        <div className="mt-12 border-t border-white/10 lg:mt-16">
          {stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.number}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid gap-6 border-b border-white/10 py-8 sm:grid-cols-[80px_0.8fr_1.2fr_55px] sm:items-center sm:gap-8 lg:py-10"
              >
                {/* Number */}
                <div>
                  <span className="font-[var(--font-display)] text-sm font-semibold tracking-[0.08em] text-white/30 transition-colors duration-300 group-hover:text-[var(--secondary)]">
                    {stage.number}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <span className="mb-2 block font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    {stage.label}
                  </span>

                  <h3 className="font-[var(--font-display)] text-3xl font-semibold leading-none tracking-[-0.04em] text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl lg:text-5xl">
                    {stage.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xl font-[var(--font-body)] text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                  {stage.description}
                </p>

                {/* Icon */}
                <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-500 group-hover:rotate-6 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white sm:flex">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                {/* Hover line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--secondary)] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 overflow-hidden rounded-[28px] bg-[var(--primary)] p-7 sm:p-9 lg:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                One connected journey
              </span>

              <h3 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Don't optimize one step.
                <br />
                Optimize the whole experience.
              </h3>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <span className="hidden font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.15em] text-white/60 sm:block">
                GoPurple Commerce
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--dark)]">
                <ArrowUpRight size={19} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom meta */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Discover × Consider × Convert × Retain
          </span>

          <span className="font-[var(--font-body)] text-sm text-white/45">
            Every stage works together.
          </span>
        </div>
      </div>
    </section>
  );
};

export default EcommerceMarketingApproach;