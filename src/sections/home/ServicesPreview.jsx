import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  ShoppingBag,
  Share2,
  TrendingUp,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Affiliate Marketing",
    description:
      "Reward-based partnerships built to drive real growth. We build and manage affiliate networks with no wasted spend.",
    tags: ["Partnerships", "Affiliates", "ROI"],
    icon: Share2,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "02",
    title: "Performance Marketing",
    description:
      "Cross-channel campaigns built around a clear business goal and refined continually to protect your return.",
    tags: ["Paid Ads", "Optimization", "Conversion"],
    icon: TrendingUp,
    image:
      "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Search, paid advertising, content, and analytics working together to attract the right audience and turn them into customers.",
    tags: ["SEO", "Content", "Analytics"],
    icon: BarChart3,
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "04",
    title: "Ecommerce Marketing",
    description:
      "Full support for online brands, from the moment someone discovers your store to the day they become a repeat customer.",
    tags: ["Storefronts", "Retention", "Growth"],
    icon: ShoppingBag,
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "05",
    title: "Mobile Performance Marketing",
    description:
      "Mobile campaigns built around installs, signups, and in-app actions you can track and improve.",
    tags: ["App Growth", "Installs", "In-App Actions"],
    icon: Smartphone,
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const ease = [0.22, 1, 0.36, 1];

const ServicesPreview = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * 5 cards
   * Card height: 430px
   * Gap: 24px
   *
   * Total card stack:
   * (430 × 5) + (24 × 4) = 2246px
   *
   * Visible viewport:
   * 430px
   *
   * Required movement:
   * 2246 - 430 = 1816px
   *
   * We use a pixel-based transform so the final card
   * reaches the viewport completely before the section releases.
   */
  const cardsY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "-1816px"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--dark)] text-white"
    >
      {/* =====================================================
          DESKTOP PINNED EXPERIENCE
      ===================================================== */}
      <div className="hidden lg:block">
        <div className="relative h-[2700px]">

          {/* Sticky viewport */}
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">

            <div className="mx-auto w-full max-w-7xl px-10">

              {/* =============================================
                  HEADER
              ============================================= */}
              <div className="grid grid-cols-12 items-end gap-8">

                <div className="col-span-4 self-start pt-4">
                  <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
                    Our Capabilities
                  </span>

                  <p className="mt-6 max-w-xs font-[var(--font-body)] text-sm leading-6 text-white/40">
                    A focused set of services designed to help brands attract
                    attention, create demand and turn digital activity into
                    meaningful growth.
                  </p>
                </div>

                <div className="col-span-8">
                  <h2 className="font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
                    Everything your brand
                    <br />
                    needs to{" "}
                    <span className="text-[var(--primary)]">
                      move forward.
                    </span>
                  </h2>
                </div>
              </div>

              {/* =============================================
                  CARD VIEWPORT
              ============================================= */}
              <div className="relative mt-12 h-[430px] overflow-hidden rounded-[28px]">

                <motion.div
                  style={{ y: cardsY }}
                  className="absolute left-0 top-0 w-full"
                >
                  <div className="space-y-6">

                    {services.map((service) => {
                      const Icon = service.icon;

                      return (
                        <div
                          key={service.number}
                          className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#171323]"
                        >
                          <div className="grid h-[430px] grid-cols-12">

                            {/* =================================
                                CONTENT
                            ================================= */}
                            <div className="col-span-7 flex flex-col justify-between p-10 xl:p-12">

                              <div className="flex items-center justify-between">

                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)]">
                                  <Icon
                                    size={20}
                                    strokeWidth={1.6}
                                  />
                                </div>

                                <span className="font-[var(--font-display)] text-sm font-semibold text-white/25">
                                  {service.number}
                                </span>
                              </div>

                              <div>

                                <h3 className="max-w-2xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] xl:text-6xl">
                                  {service.title}
                                </h3>

                                <p className="mt-5 max-w-xl font-[var(--font-body)] text-sm leading-7 text-white/50">
                                  {service.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                  {service.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-full border border-white/10 px-3 py-1.5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <Link
                                to="/services"
                                className="group/link flex w-fit items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-white"
                              >
                                Explore service

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--dark)] transition-all duration-300 group-hover/link:rotate-45 group-hover/link:bg-[var(--secondary)]">
                                  <ArrowUpRight size={16} />
                                </span>
                              </Link>

                            </div>

                            {/* =================================
                                IMAGE
                            ================================= */}
                            <div className="relative col-span-5 overflow-hidden">

                              <motion.img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />

                              <div className="absolute inset-0 bg-gradient-to-r from-[#171323] via-transparent to-transparent opacity-90" />

                              <div className="absolute bottom-8 right-8">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--dark)] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--secondary)]">
                                  <ArrowUpRight size={18} />
                                </div>
                              </div>

                            </div>

                          </div>
                        </div>
                      );
                    })}

                  </div>
                </motion.div>

              </div>

              {/* =============================================
                  SCROLL INDICATOR
              ============================================= */}
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">

                <p className="font-[var(--font-body)] text-xs text-white/35">
                  Scroll to explore our capabilities
                </p>

                <div className="flex items-center gap-2">
                  {services.map((service) => (
                    <span
                      key={service.number}
                      className="font-[var(--font-display)] text-[10px] font-semibold text-white/25"
                    >
                      {service.number}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TABLET / MOBILE
      ===================================================== */}
      <div className="block py-20 sm:py-24 lg:hidden">

        <div className="mx-auto max-w-3xl px-5 sm:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="mb-12"
          >
            <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
              Our Capabilities
            </span>

            <h2 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
              Everything your brand
              <br />
              needs to{" "}
              <span className="text-[var(--primary)]">
                move forward.
              </span>
            </h2>

            <p className="mt-6 max-w-xl font-[var(--font-body)] text-sm leading-6 text-white/45">
              A focused set of services designed to help brands attract
              attention, create demand and grow.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="space-y-5">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                    ease,
                  }}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-[#171323]"
                >

                  <div className="relative h-[250px] overflow-hidden sm:h-[300px]">

                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171323] via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--primary)]">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <span className="absolute right-5 top-5 font-[var(--font-display)] text-xs font-semibold text-white/50">
                      {service.number}
                    </span>

                  </div>

                  <div className="p-6 sm:p-8">

                    <h3 className="font-[var(--font-display)] text-3xl font-semibold leading-none tracking-[-0.045em]">
                      {service.title}
                    </h3>

                    <p className="mt-4 font-[var(--font-body)] text-sm leading-6 text-white/50">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.1em] text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/services"
                      className="mt-7 flex w-fit items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em]"
                    >
                      Explore service

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--dark)]">
                        <ArrowUpRight size={15} />
                      </span>
                    </Link>

                  </div>
                </motion.article>
              );
            })}

          </div>

          {/* CTA */}
          <div className="mt-10 border-t border-white/10 pt-7">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em]"
            >
              View all services

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;