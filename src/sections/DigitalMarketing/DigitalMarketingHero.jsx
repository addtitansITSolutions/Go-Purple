import { color, motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketingHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-18 sm:px-10 sm:pt-32 lg:px-16 lg:pt-16">

        {/* Top bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-[var(--border)] pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--dark)]">
              Digital Marketing
            </span>
          </div>

          <span className="hidden font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:block">
            GoPurple / Services / 01
          </span>
        </motion.div> */}

        {/* Main heading */}
        <div className="relative pt-12 sm:pt-16 lg:pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-w-[1100px] font-[var(--font-display)] text-[17vw] font-semibold leading-[0.82] tracking-[-0.075em] text-[var(--dark)] sm:text-[13vw] lg:text-[110px]"
          >
            DIGITAL
            <br />
            <span className="relative">
              MARKETING
              {/* <span className="absolute -bottom-2 left-0 h-[4px] w-16 bg-[var(--primary)] sm:-bottom-3 sm:h-[5px] sm:w-24 lg:w-32" /> */}
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
            className="group relative z-20 mt-8 ml-auto w-full max-w-[740px] cursor-pointer sm:-mt-4 lg:-mt-10"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1800"
                alt="Digital marketing team working together"
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/70 transition-colors duration-500 group-hover:bg-black/10" />

              {/* Image label */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 sm:p-7">
                <div>
                  <p className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                    Strategy / Creative / Performance
                  </p>

                  <p className="mt-1 font-[var(--font-display)] text-lg font-semibold text-white sm:text-xl">
                    Built to create momentum.
                  </p>
                </div>

                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--dark)]"
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
              className="absolute -right-3 bottom-0 w-[3px] bg-[var(--primary)] sm:-right-4"
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
            className="relative z-30 mt-10 max-w-[520px] sm:mt-12 lg:-mt-45 lg:ml-8"
          >
            <p className="font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              Digital marketing should do more than generate attention.
              We build strategies that connect your brand with the right
              people and turn that attention into meaningful growth.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                style={{ color: "var(--white)" }}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--dark)] px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary)] sm:w-auto"
                >
                Let's talk

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </span>
               </Link>

              {/* <a
                href="#what-we-do"
                className="group inline-flex items-center gap-2 px-2 py-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--dark)]"
              >
                Explore

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a> */}
            </div>
          </motion.div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 grid border-t border-[var(--border)] bg-[var(--secondary)] px-6 py-6 sm:mt-20 sm:grid-cols-3 rounded-2xl sm:border sm:px-10 sm:py-8 lg:px-10"
        >
          <div className="border-b border-[var(--border)] pb-5 sm:border-b-0 sm:border-r sm:pb-0">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
              What we do
            </span>

            <p className="mt-2 font-[var(--font-display)] text-sm font-semibold text-[var(--dark)]">
              Build digital momentum
            </p>
          </div>

          <div className="border-b border-[var(--border)] py-5 sm:border-b-0 sm:px-8 sm:py-0 sm:border-r">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
              Approach
            </span>

            <p className="mt-2 font-[var(--font-display)] text-sm font-semibold text-[var(--dark)]">
              Strategy × Creativity × Performance
            </p>
          </div>

          <div className="pt-5 sm:pl-8 sm:pt-0">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
              Result
            </span>

            <p className="mt-2 font-[var(--font-display)] text-sm font-semibold text-[var(--dark)]">
              Growth that keeps moving
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingHero;