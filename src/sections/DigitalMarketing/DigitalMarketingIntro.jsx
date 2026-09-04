import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Find the right audience",
    description:
      "We identify where your audience spends their attention and build a strategy around reaching them there.",
  },
  {
    number: "02",
    title: "Create meaningful attention",
    description:
      "From messaging to creative, we create campaigns that give people a reason to stop, notice and engage.",
  },
  {
    number: "03",
    title: "Turn attention into growth",
    description:
      "Every activity is connected to a bigger goal — generating quality traffic, leads, customers and long-term growth.",
  },
];

const DigitalMarketingIntro = () => {
  return (
    <section
      id="what-we-do"
      className="overflow-hidden bg-[var(--light)] py-16 sm:py-20 lg:py-24 mt-10"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* INTRO */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              {/* <span className="h-px w-8 bg-[var(--primary)]" /> */}

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Our Approach
              </span>
            </div>

            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Digital marketing,{" "}
              <span className="text-[var(--primary)]">
                with a reason.
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-8"
          >
            <p className="max-w-lg font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              We don't believe in marketing for the sake of being visible.
              Every campaign, channel and creative decision should have a
              clear purpose — helping your brand reach the right people and
              move them closer to action.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                Strategy before execution
              </span>
            </div>
          </motion.div>
        </div>

        {/* PRINCIPLES */}
        <div className="mt-14 border-t border-[var(--border)] sm:mt-16">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
              }}
              className="group grid cursor-default gap-4 border-b border-[var(--border)] py-5 sm:grid-cols-[70px_1fr_300px_42px] sm:items-center sm:gap-6 sm:py-6 lg:grid-cols-[80px_1fr_390px_48px]"
            >
              {/* Number */}
              <span className="font-[var(--font-display)] text-xs font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[var(--primary)]">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-[var(--font-display)] text-xl font-semibold tracking-[-0.04em] text-[var(--dark)] transition-transform duration-300 group-hover:translate-x-1.5 sm:text-2xl lg:text-3xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                {item.description}
              </p>

              {/* Arrow */}
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white sm:flex"
              >
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.span>

              {/* Mobile arrow */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white sm:hidden">
                <ArrowUpRight size={15} />
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingIntro;