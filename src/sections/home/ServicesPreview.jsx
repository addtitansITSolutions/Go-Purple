import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Palette,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Build visibility, attract the right audience and turn digital attention into meaningful business growth.",
    tags: ["Social Media", "Performance", "SEO"],
    icon: BarChart3,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Create seamless shopping experiences that connect your products with the people most likely to buy them.",
    tags: ["Storefronts", "Conversion", "Growth"],
    icon: ShoppingBag,
    image:
      "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "03",
    title: "Creative & Design",
    description:
      "Give your brand a distinctive visual language through thoughtful design, content and digital experiences.",
    tags: ["Branding", "UI / UX", "Creative"],
    icon: Palette,
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

const ServicesPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] py-24 text-white sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-12 lg:items-end"
        >
          <motion.div
            variants={fadeUp}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[var(--secondary)]" /> */}

              <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
                Our Capabilities
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="lg:col-span-8"
          >
            <h2 className="max-w-5xl font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Everything your brand
              <br />
              needs to{" "}
              <span className="text-[var(--primary)]">
                move forward.
              </span>
            </h2>
          </motion.div>
        </motion.div>


        {/* =====================================================
            SERVICES
        ===================================================== */}
        <div className="space-y-5 lg:space-y-7">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]"
              >
                <div className="grid lg:grid-cols-12">

                  {/* -----------------------------------------
                      SERVICE INFORMATION
                  ----------------------------------------- */}
                  <div className="relative z-10 flex flex-col justify-between p-7 sm:p-9 lg:col-span-7 lg:min-h-[460px] lg:p-12">

                    <div className="flex items-center justify-between">

                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)]"
                      >
                        <Icon size={21} strokeWidth={1.6} />
                      </motion.div>

                      <span className="font-[var(--font-display)] text-sm font-semibold text-white/30">
                        {service.number}
                      </span>

                    </div>


                    <div className="mt-16 lg:mt-0">

                      <h3 className="font-[var(--font-display)] text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                        {service.title}
                      </h3>

                      <p className="mt-6 max-w-lg font-[var(--font-body)] text-sm leading-7 text-white/55 sm:text-base">
                        {service.description}
                      </p>


                      {/* Tags */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1.5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>


                    {/* Explore */}
                    <Link
                      to="/services"
                      className="mt-10 flex w-fit items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-white"
                    >
                      Explore service

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--dark)] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--secondary)]">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>

                  </div>


                  {/* -----------------------------------------
                      SERVICE IMAGE
                  ----------------------------------------- */}
                  <div className="relative min-h-[300px] overflow-hidden lg:col-span-5 lg:min-h-[460px]">

                    <motion.img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{
                        scale: 1.12,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-transparent to-transparent opacity-70 lg:opacity-90" />

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-[var(--primary)]/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-16"
        >
          <p className="max-w-xl font-[var(--font-body)] text-sm leading-6 text-white/45">
            Need something more specific? We can build a strategy around
            your exact business goals.
          </p>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-white"
          >
            View all services

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--dark)] transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPreview;