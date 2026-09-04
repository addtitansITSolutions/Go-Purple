import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectHero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-32 lg:px-16 lg:pb-20 lg:pt-36">
        {/* Top Meta */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex items-center justify-between border-b border-white/10 pb-5 sm:mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--secondary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
              Selected Work
            </span>
          </div>

          <span className="hidden font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:block">
            GoPurple / Projects
          </span>
        </motion.div> */}

        {/* Main Heading */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className="max-w-6xl font-[var(--font-display)] text-[clamp(3.8rem,10vw,9.5rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
              Ideas
              <br />
              <span className="text-[var(--primary)]">made real.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md lg:pb-2"
          >
            <p className="font-[var(--font-body)] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              A selection of digital experiences, campaigns and creative work
              built to solve real business challenges and move brands forward.
            </p>

            <Link
              to="#selected-work"
              className="group mt-7 inline-flex items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:text-[var(--secondary)]"
            >
              Explore our work

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[var(--secondary)] group-hover:bg-[var(--secondary)] group-hover:text-[var(--dark)]">
                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-12 overflow-hidden sm:mt-16 lg:mt-20"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-[#1a1525] sm:aspect-[2.15/1] rounded-[8px] lg:rounded-[20px]">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000"
              alt="Creative team working together"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black/55 transition-colors duration-700 group-hover:bg-black/10" />

            {/* Featured Label */}
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
                <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  Digital · E-commerce · Creative
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute right-5 top-5 sm:right-8 sm:top-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--dark)] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--primary)] group-hover:text-white sm:h-14 sm:w-14">
                <ArrowUpRight size={19} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          className="mt-6 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-3"
        >
          <div>
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
              What we create
            </span>
            <p className="mt-1 font-[var(--font-display)] text-sm font-semibold text-white/80">
              Digital experiences
            </p>
          </div>

          <div>
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
              How we work
            </span>
            <p className="mt-1 font-[var(--font-display)] text-sm font-semibold text-white/80">
              Strategy × Creativity
            </p>
          </div>

          <div className="sm:text-right">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
              The goal
            </span>
            <p className="mt-1 font-[var(--font-display)] text-sm font-semibold text-white/80">
              Work that moves brands forward.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;