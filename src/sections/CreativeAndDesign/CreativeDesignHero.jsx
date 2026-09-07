import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CreativeDesignHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32 xl:px-16">

        {/* Top Label */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 sm:mb-10"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

          <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-sm">
            Creative & Design
          </span>
        </motion.div> */}

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[var(--font-display)] text-[17vw] font-semibold leading-[0.82] tracking-[-0.075em] text-[var(--dark)] sm:text-[13vw] lg:text-[110px]"
        >
          CREATIVE
          <br />
          <span className="ml-[8vw] sm:ml-[7vw] lg:ml-[100px]">
            & DESIGN
          </span>
        </motion.h1>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mt-10 w-full sm:mt-12 lg:ml-auto lg:mt-[-10px] lg:max-w-[740px]"
        >
          <div className="group relative aspect-[16/9] overflow-hidden rounded-3xl">
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Creative design workspace"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/35" />

            {/* Image Content */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7 lg:p-8">
              <div>
                <p className="mb-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                  Brand / Digital / Experience
                </p>

                <p className="max-w-xs font-[var(--font-display)] text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
                  Design that gives ideas a presence.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[var(--dark)] sm:h-14 sm:w-14">
                <ArrowUpRight size={22} strokeWidth={1.8} />
              </div>
            </div>
          </div>

          {/* Right Accent */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "55%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -right-3 top-10 hidden w-[3px] bg-[var(--primary)] sm:block lg:-right-5"
          />
        </motion.div>

        {/* Supporting Content */}

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
              Great creative doesn't just make a brand look better. It makes
              ideas easier to understand, brands easier to remember and digital
              experiences easier to connect with.
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
            </div>
          </motion.div>

        {/* Bottom Information Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-black/10 bg-[var(--secondary)] sm:mt-16 sm:grid-cols-3"
        >
          {/* Item 1 */}
          <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r lg:p-8">
            <p className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">
              What we do
            </p>

            <p className="mt-3 font-[var(--font-display)] text-lg font-semibold leading-tight text-[var(--dark)] lg:text-xl">
              Shape ideas into experiences
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r lg:p-8">
            <p className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">
              Approach
            </p>

            <p className="mt-3 font-[var(--font-display)] text-lg font-semibold leading-tight text-[var(--dark)] lg:text-xl">
              Strategy × Creativity × Craft
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-6 lg:p-8">
            <p className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">
              Result
            </p>

            <p className="mt-3 font-[var(--font-display)] text-lg font-semibold leading-tight text-[var(--dark)] lg:text-xl">
              Brands people remember
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeDesignHero;