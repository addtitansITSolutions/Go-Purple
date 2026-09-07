import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Get discovered",
    description:
      "Put your products in front of the right shoppers through search, social, content and performance-driven campaigns.",
  },
  {
    number: "02",
    title: "Create confidence",
    description:
      "Strong creative, clear messaging and a frictionless experience help customers understand why your product is worth choosing.",
  },
  {
    number: "03",
    title: "Make buying easy",
    description:
      "Every part of the journey should remove hesitation — from product discovery and landing pages to checkout.",
  },
  {
    number: "04",
    title: "Keep them coming back",
    description:
      "Turn one-time purchases into lasting customer value through retention, remarketing and meaningful engagement.",
  },
];

const EcommerceMarketingIntro = () => {
  return (
    <section
      id="ecommerce-intro"
      className="overflow-hidden bg-[var(--light)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Intro heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div>
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              E-commerce Marketing
            </span>

            <h2 className="mt-5 max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--dark)] sm:text-5xl lg:text-7xl">
              Great stores don't just{" "}
              <span className="text-[var(--primary)]">
                sell products.
              </span>
              <br />
              They create reasons to buy.
            </h2>
          </div>

          <p className="max-w-lg font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8 lg:pb-1">
            From the first impression to the final checkout, we look at the
            entire customer journey and find the opportunities that can turn
            more visitors into customers — and more customers into repeat
            buyers.
          </p>
        </motion.div>

        {/* Journey */}
        <div className="mt-12 border-t border-[var(--border)] lg:mt-16">
          {journey.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-5 border-b border-[var(--border)] py-7 sm:grid-cols-[70px_0.8fr_1.2fr_auto] sm:items-center sm:gap-6 sm:py-8"
            >
              {/* Number */}
              <span className="font-[var(--font-display)] text-xs font-bold tracking-[0.1em] text-[var(--primary)]">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.035em] text-[var(--dark)] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="max-w-xl font-[var(--font-body)] text-sm leading-6 text-[var(--text)] sm:text-base sm:leading-7">
                {item.description}
              </p>

              {/* Arrow */}
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white sm:flex">
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
            Discovery × Experience × Conversion
          </span>

          <span className="font-[var(--font-body)] text-sm text-[var(--text)]">
            Every step is an opportunity to grow.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceMarketingIntro;