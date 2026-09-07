import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ProjectHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f1eb]">

      <div className="mx-auto max-w-[1440px] px-4 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]"
        >
          <div className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:min-h-[780px]">

            {/* Image */}
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2200"
              alt="Creative team collaborating on a digital project"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
            />

            {/* Overall image darkening */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Main Black Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />

            {/* Extra side gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

            {/* Top Meta */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-xs">
                  Projects
                </span>
              </div>

              <span className="font-[var(--font-body)] text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-xs">
                2026
              </span>
            </motion.div>

            {/* Main Content */}
            <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 sm:pb-12 lg:px-14 lg:pb-14">

              <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">

                {/* Huge Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h1 className="max-w-5xl font-[var(--font-display)] text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.76] tracking-[-0.075em] text-white">
                    Where
                    <br />
                    ideas
                    <br />
                    <span className="text-[var(--primary)]">
                      become impact.
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-md lg:mb-2"
                >
                  <p className="font-[var(--font-body)] text-sm leading-[1.7] text-white/70 sm:text-base">
                    Digital products, campaigns, and experiences built to
                    turn ambitious ideas into meaningful growth.
                  </p>

                  <div className="mt-7 flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                      <ArrowDown size={17} strokeWidth={1.5} />
                    </div>

                    <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      Scroll to explore
                    </span>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Floating Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="absolute right-6 top-20 sm:right-10 sm:top-24"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#17151a] shadow-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--primary)] group-hover:text-white sm:h-16 sm:w-16">
                <ArrowUpRight
                  size={21}
                  strokeWidth={1.5}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Bottom Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex items-center justify-between py-5"
        >
          <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-black/40">
            01
          </span>

          <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-black/40">
            Digital · Creative · Performance
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectHero;