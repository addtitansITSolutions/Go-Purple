import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AboutStory = () => {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[var(--light)] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Top Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            {/* <span className="h-px w-10 bg-[var(--primary)]" /> */}

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text)]">
              Our Story
            </span>
          </motion.div>

          {/* Main Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl font-[var(--font-display)] text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-[var(--dark)] sm:text-4xl lg:text-5xl"
          >
            We started with a simple belief:{" "}
            <span className="text-[var(--primary)]">
              digital should do more than just look good.
            </span>
          </motion.h2>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
              <motion.img
                src="https://images.pexels.com/photos/6444904/pexels-photo-6444904.jpeg?cs=srgb&dl=pexels-rombo-1510555-6444904.jpg&fm=jpg"
                alt="Creative team collaborating on a project"
                className="h-full w-full object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <p className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                  The GoPurple Mindset
                </p>

                <p className="mt-1 font-[var(--font-display)] text-lg font-medium text-white sm:text-xl">
                  Think differently. Build boldly.
                </p>
              </div>
            </div>

            {/* Accent Block */}
            {/* <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-3 left-8 h-1 w-24 origin-left bg-[var(--secondary)] sm:left-12"
            /> */}
            </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              GoPurple was built around the idea that great digital work
              happens when strategy and creativity work side by side. Not as
              separate disciplines, but as one connected way of thinking.
            </p>

            <p className="mt-6 font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              From growing a brand online to creating better e-commerce
              experiences and memorable visual identities, we focus on work
              that has a clear purpose and a measurable impact.
            </p>

            <p className="mt-6 font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              We don't believe in creating digital noise. We believe in
              finding the right idea, giving it the right direction, and
              turning it into something people remember.
            </p>

            {/* Small Divider */}
            <div className="my-8 h-px w-full bg-[var(--border)]" />

            {/* Philosophy */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                  What we believe
                </span>

                <p className="mt-3 max-w-md font-[var(--font-display)] text-xl font-medium leading-snug tracking-[-0.02em] text-[var(--dark)] sm:text-2xl">
                  Good ideas get attention. Great execution makes them matter.
                </p>
              </div>

              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
                className="hidden shrink-0 sm:flex"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--dark)]/15 text-[var(--dark)]">
                  <ArrowUpRight size={18} strokeWidth={1.7} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-[var(--border)] pt-8 lg:mt-28"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
              Strategy × Creativity × Growth
            </span>

            <span className="font-[var(--font-display)] text-lg font-medium tracking-[-0.02em] text-[var(--dark)]">
              That's how we think.
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutStory;