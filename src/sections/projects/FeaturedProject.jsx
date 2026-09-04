import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <section
      id="featured-project"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 flex items-center justify-between border-b border-[var(--border)] pb-5 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--primary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Featured Project
            </span>
          </div>

          <span className="font-[var(--font-display)] text-xs font-semibold text-gray-300">
            01
          </span>
        </motion.div>

        {/* Main Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Category */}
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
              E-commerce · Digital Experience
            </span>

            {/* Title */}
            <h2 className="mt-5 max-w-xl font-[var(--font-display)] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[var(--dark)] sm:text-6xl lg:text-7xl">
              Nova
            </h2>

            <p className="mt-7 max-w-md font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              A digital experience designed to make a growing brand easier to
              discover, explore and buy from.
            </p>

            {/* Services */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Strategy", "UX", "Design", "E-commerce"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] px-3.5 py-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--dark)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="#"
              className="group mt-10 inline-flex items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--dark)] transition-colors duration-300 hover:text-[var(--primary)]"
            >
              View project

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--primary)]">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            <div className="relative mx-auto max-w-[620px]">

              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-[24px] bg-[#eeeaf1] p-3 sm:rounded-[30px] sm:p-4">

                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] sm:rounded-[22px]">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Creative team working on a digital project"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                {/* Image Number */}
                <div className="absolute left-7 top-7 flex h-9 w-9 items-center justify-center rounded-full bg-white font-[var(--font-display)] text-xs font-bold text-[var(--dark)] shadow-sm sm:left-8 sm:top-8">
                  01
                </div>
              </div>

              {/* Image Caption */}
              <div className="mt-4 flex items-center justify-between px-1">
                <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                  Nova / Digital Experience
                </span>

                <span className="h-px w-10 bg-[var(--border)]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Project Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-14 border-t border-[var(--border)] pt-6 sm:mt-20"
        >
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                The Challenge
              </span>

              <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                Create a digital experience that reflects the brand and makes
                the customer journey simpler.
              </p>
            </div>

            <div>
              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                Our Approach
              </span>

              <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                Strategy, user experience and creative execution brought
                together around one clear goal.
              </p>
            </div>

            <div>
              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                Focus
              </span>

              <p className="mt-2 font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                Digital experience · E-commerce · Creative
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;