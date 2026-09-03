import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "GoPurple helped us bring clarity to our digital strategy and turn our ideas into a brand experience that actually connects with our audience.",
    name: "Alex Morgan",
    role: "Founder",
    company: "Brand Studio",
    initials: "AM",
  },
  {
    quote:
      "From strategy to execution, the process felt simple, focused, and incredibly well thought out. The final experience was better than we imagined.",
    name: "Sarah Williams",
    role: "Marketing Director",
    company: "Growth Co.",
    initials: "SW",
  },
  {
    quote:
      "What stood out most was the combination of creative thinking and performance mindset. Everything had a clear purpose behind it.",
    name: "Daniel Carter",
    role: "E-commerce Manager",
    company: "Modern Retail",
    initials: "DC",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--light)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 max-w-3xl lg:mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 flex items-center gap-3"
          >
            {/* <span className="h-px w-8 bg-[var(--primary)]" /> */}

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
              Client Feedback
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-[var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-[var(--dark)] sm:text-5xl lg:text-6xl"
          >
            Good work
            <br />
            <span className="text-[var(--primary)]">gets noticed.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-7 text-[var(--text)] sm:text-lg"
          >
            We believe the best partnerships are built on trust, clear
            communication, and work that delivers. Here is what our clients
            have to say.
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-6 lg:grid-cols-12"
        >
          {/* Featured Testimonial */}
          <motion.article
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[2rem] bg-[var(--dark)] p-8 text-white sm:p-10 lg:col-span-7 lg:p-12"
          >
            {/* Accent */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--primary)]/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                {/* Quote Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                  <Quote size={21} strokeWidth={2.5} />
                </div>

                {/* Stars */}
                <div className="mb-7 flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                      className="text-[var(--secondary)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="max-w-2xl font-[var(--font-display)] text-2xl font-medium leading-[1.35] tracking-tight sm:text-3xl lg:text-[2rem]">
                  “{testimonials[0].quote}”
                </blockquote>
              </div>

              {/* Client */}
              <div className="mt-12 flex items-center justify-between gap-5 border-t border-white/10 pt-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                    {testimonials[0].initials}
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      {testimonials[0].name}
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      {testimonials[0].role} · {testimonials[0].company}
                    </p>
                  </div>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] sm:flex">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>
              </div>
            </div>
          </motion.article>

          {/* Smaller Testimonials */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white p-7 sm:p-8"
              >
                {/* Top */}
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          fill="currentColor"
                          className="text-[var(--secondary)]"
                        />
                      ))}
                    </div>

                    <Quote
                      size={22}
                      className="text-[var(--primary)]/30 transition-colors duration-300 group-hover:text-[var(--primary)]"
                    />
                  </div>

                  <blockquote className="text-lg font-medium leading-7 text-[var(--dark)]">
                    “{testimonial.quote}”
                  </blockquote>
                </div>

                {/* Client */}
                <div className="mt-8 flex items-center gap-4 border-t border-[var(--border)] pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-xs font-bold text-[var(--primary)]">
                    {testimonial.initials}
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[var(--dark)]">
                      {testimonial.name}
                    </p>

                    <p className="mt-0.5 text-xs text-[var(--text)]">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-7 right-7 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-[var(--light)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight
                    size={15}
                    className="text-[var(--dark)] transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl font-[var(--font-display)] text-xl font-semibold tracking-tight text-[var(--dark)] sm:text-2xl">
            Real partnerships.{" "}
            <span className="text-[var(--primary)]">
              Remarkable results.
            </span>
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-[var(--dark)]"
          >
            Start a conversation

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;