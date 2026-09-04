import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#100C1C] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-[var(--primary)]/20 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--secondary)]/10 blur-[120px]" />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-28 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              {/* <span className="h-px w-9 bg-[var(--secondary)]" /> */}

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                About GoPurple
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[64px]">
              Built To Deliver Results{" "}
              <span className="text-[var(--primary)]">
                That Hold Up
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl font-[var(--font-body)] text-sm leading-7 text-white/60 sm:text-base sm:leading-7">
             The digital world is an ever-evolving landscape. What customers expect keeps changing. Platforms
             keep updating. Competing brands keep sharpening their approach.
            </p>

            {/* CTA */}
            <motion.a
              href="#our-story"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 inline-flex items-center gap-3 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-white"
            >
              Discover our story

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[var(--secondary)] group-hover:bg-[var(--secondary)] group-hover:text-[var(--dark)]">
                <ArrowDownRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                />
              </span>
            </motion.a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative ml-auto w-full max-w-[600px]">
              
              {/* Purple Accent */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "42%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="absolute -left-3 top-6 z-10 w-1 bg-[var(--primary)]"
              />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                <motion.img
                  src="/Aboutus/aboutus.jpg"
                  alt="Creative team working together"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100C1C]/60 via-transparent to-transparent" />

                {/* Image Label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-[var(--font-body)] text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">
                      GoPurple
                    </p>

                    <p className="mt-1 font-[var(--font-display)] text-base font-medium text-white sm:text-lg">
                      Ideas × Execution
                    </p>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--dark)]">
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </span>
                </div>
              </div>

              {/* Floating Number */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                }}
                className="absolute -bottom-4 -left-4 hidden bg-[var(--secondary)] px-5 py-4 text-[var(--dark)] sm:block"
              >
                <span className="block font-[var(--font-display)] text-2xl font-bold leading-none">
                  01
                </span>

                <span className="mt-1.5 block font-[var(--font-body)] text-[8px] font-bold uppercase tracking-[0.16em]">
                  Our story
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;