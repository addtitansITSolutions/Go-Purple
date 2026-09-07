import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CreativeDesignIntro = () => {
  const points = [
    {
      number: "01",
      title: "Make ideas clearer",
      description:
        "We turn complex ideas into visual systems that are easier to understand, navigate and remember.",
    },
    {
      number: "02",
      title: "Make brands recognizable",
      description:
        "From visual identity to digital touchpoints, we create consistency that helps your brand stand apart.",
    },
    {
      number: "03",
      title: "Make experiences matter",
      description:
        "Every interaction has a purpose. We design digital experiences that feel natural, useful and engaging.",
    },
  ];

  return (
    <section className="bg-[var(--light)]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">
        
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-20">
          
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Creative Thinking
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-5xl font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Good design gets attention.
              <span className="text-[var(--primary)]">
                {" "}
                Great design gives attention a reason to stay.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Intro Copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 grid gap-8 border-t border-[var(--border)] pt-10 sm:mt-20 sm:pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
        >
          <div>
            <p className="font-[var(--font-display)] text-xl font-semibold leading-tight text-[var(--dark)] sm:text-2xl">
              Creativity works best when it has a clear purpose.
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              We don't design for decoration. We design to communicate,
              connect and create a stronger relationship between your brand
              and the people experiencing it.
            </p>

            <p className="mt-5 font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              Whether we're shaping a brand, designing a digital product or
              creating a campaign, every creative decision starts with the
              same question: what should this make people feel, understand or
              do?
            </p>
          </div>
        </motion.div>

        {/* Principles */}
        <div className="mt-16 border-t border-[var(--border)] sm:mt-20">
          {points.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group grid gap-5 border-b border-[var(--border)] py-7 transition-all duration-300 sm:grid-cols-[80px_0.8fr_1.2fr_auto] sm:items-center sm:gap-8 sm:py-9"
            >
              {/* Number */}
              <span className="font-[var(--font-display)] text-sm font-semibold text-[var(--primary)]">
                {point.number}
              </span>

              {/* Title */}
              <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--dark)] sm:text-3xl">
                {point.title}
              </h3>

              {/* Description */}
              <p className="max-w-xl font-[var(--font-body)] text-sm leading-6 text-[var(--text)] sm:text-base sm:leading-7">
                {point.description}
              </p>

              {/* Arrow */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </div>
            </motion.div>
          ))}
        </div>
        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.035em] text-[var(--dark)] sm:text-3xl">
            Strategy × Creativity × Craft
          </p>

          <p className="font-[var(--font-body)] text-sm text-gray-500">
            Ideas made to have an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeDesignIntro;