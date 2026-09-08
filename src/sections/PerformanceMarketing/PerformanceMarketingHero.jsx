import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PerformanceMarketingHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-18 sm:px-10 sm:pt-32 lg:px-16 lg:pt-16">

        {/* Main heading */}
<div className="relative pt-12 sm:pt-16 lg:pt-20">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      relative
      z-10
      max-w-[1200px]
      font-[var(--font-display)]
      text-[16vw]
      font-semibold
      leading-[0.82]
      tracking-[-0.075em]
      text-[var(--dark)]
      sm:text-[12vw]
      md:text-[10vw]
      lg:text-[9vw]
      xl:text-[110px]
    "
  >
    PERFORMANCE
    <br />

    <span className="relative">
      MARKETING
    </span>
  </motion.h1>

  {/* Image */}
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.92,
      y: 50,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{
      scale: 1.025,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    }}
    className="
      group
      relative
      z-20
      mt-8
      ml-auto
      w-full
      max-w-[740px]
      cursor-pointer
      sm:mt-10
      xl:-mt-10
    "
  >
    <div className="relative overflow-hidden rounded-3xl">
      <motion.img
        src="/services/performance.jpg"
        alt="Performance marketing strategy"
        className="
          aspect-[16/9]
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.06]
        "
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-black/70 transition-colors duration-500 group-hover:bg-black/10" />

      {/* Image label */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-7">
        <div>
          <p className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-[10px]">
            Data / Creative / Performance
          </p>

          <p className="mt-1 max-w-[420px] font-[var(--font-display)] text-lg font-semibold leading-tight text-white sm:text-xl">
            Marketing built around measurable growth.
          </p>
        </div>

        <motion.div
          whileHover={{ rotate: 45 }}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            text-[var(--dark)]
          "
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>
    </div>

    {/* Purple side accent */}
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "55%" }}
      transition={{
        delay: 0.8,
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        absolute
        -right-3
        bottom-0
        hidden
        w-[3px]
        bg-[var(--primary)]
        sm:block
        sm:-right-4
      "
    />
  </motion.div>

  {/* Supporting copy */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.65,
      duration: 0.7,
    }}
    className="
      relative
      z-30
      mt-8
      w-full
      max-w-[560px]
      sm:mt-10
      md:max-w-[620px]
      lg:max-w-[620px]
      xl:-mt-45
      xl:ml-8
      xl:max-w-[520px]
    "
  >
    <p className="font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
      Performance marketing should make every marketing dollar work
      harder. We combine data, creative and continuous optimization to
      reach the right audience, improve efficiency and turn campaigns
      into measurable business growth.
    </p>

    {/* CTA */}
    <div className="mt-7 flex flex-wrap items-center gap-4">
      <Link
        to="/contact"
        style={{ color: "var(--white)" }}
        className="
          group
          inline-flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[var(--dark)]
          px-6
          py-3.5
          font-[var(--font-body)]
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-[var(--primary)]
          sm:w-auto
        "
      >
        Let's talk

        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
          <ArrowUpRight
            size={14}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </span>
      </Link>
    </div>
  </motion.div>
</div>

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