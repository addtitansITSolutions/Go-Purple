import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const clients = [
  {
    name: "NOVA",
    category: "E-commerce",
    description:
      "A modern retail brand focused on creating better digital shopping experiences.",
    logo: "/partners/angelone.png",
  },
  {
    name: "LUMEN",
    category: "Lifestyle",
    description:
      "A lifestyle brand building a stronger digital presence through creative storytelling.",
    logo: "/partners/hdfcsky.png",
  },
  {
    name: "VERTEX",
    category: "Technology",
    description:
      "A growing technology brand looking to turn digital attention into meaningful growth.",
    logo: "/partners/meeti.png",
  },
  {
    name: "MOTION",
    category: "Consumer Brand",
    description:
      "A consumer-focused brand combining bold creative with performance-led marketing.",
    logo: "/partners/parimatch.png",
  },
  {
    name: "ARCO",
    category: "Creative",
    description:
      "A creative-led business redefining its visual identity and digital experience.",
    logo: "/partners/smartcoin.png",
  },
  {
    name: "NEXA",
    category: "Digital",
    description:
      "A digital-first brand focused on building a more memorable online presence.",
    logo: "/partners/unacademy.png",
  },
];

// const duplicatedClients = [...clients, ...clients];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ClientsCarousel = () => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction) => {
    if (!trackRef.current) return;

    const amount = window.innerWidth >= 1024 ? 440 : 320;

    trackRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!trackRef.current || isPaused) return;

      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        trackRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        trackRef.current.scrollBy({
          left: window.innerWidth >= 1024 ? 440 : 320,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden bg-[var(--white)] py-4 sm:py-8 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <motion.span
              variants={cardVariants}
              className="mb-5 inline-flex items-center gap-3 font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]"
            >
              {/* <span className="h-px w-8 bg-[var(--primary)]" /> */}
              Our Clients
            </motion.span>

            <motion.h2
              variants={cardVariants}
              className="font-[var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--dark)] sm:text-5xl lg:text-6xl"
            >
              Brands that chose to{" "}
              <span className="text-[var(--primary)]">
                move forward.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={cardVariants}
            className="max-w-md font-[var(--font-body)] text-base leading-7 text-[var(--text)]"
          >
            From growing businesses to ambitious brands, we partner with
            teams that believe better digital can create better growth.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-20 bg-gradient-to-r from-[var(--white)] to-transparent lg:block" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-20 bg-gradient-to-l from-[var(--white)] to-transparent lg:block" />

          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-5 scrollbar-hide snap-x snap-mandatory"
          >
            {clients.map((client, index) => (
              <motion.article
                key={`${client.name}-${index}`}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: (index % clients.length) * 0.06,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-w-[300px] snap-start overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-7 transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(17,24,39,0.10)] sm:min-w-[360px] lg:min-w-[400px]"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-18 w-24 items-center justify-center rounded-2xl bg-[var(--dark)] p-3 transition-all duration-500 group-hover:bg-[var(--primary)]">
                    <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-full w-full object-contain"
                    />
                   </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* Brand */}
                <div className="mt-10">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="font-[var(--font-display)] text-2xl font-bold tracking-[-0.03em] text-[var(--dark)]">
                      {client.name}
                    </h3>

                    <span className="rounded-full bg-[var(--secondary)] px-3 py-1 font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--dark)]">
                      {client.category}
                    </span>
                  </div>

                  <p className="max-w-[330px] font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                    {client.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="mt-10 flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--primary)] transition-all duration-500 group-hover:w-14" />

                  <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    GoPurple Partner
                  </span>
                </div>

                {/* Decorative number */}
                <span className="pointer-events-none absolute -bottom-7 -right-2 font-[var(--font-display)] text-[110px] font-bold leading-none text-gray-50 transition-colors duration-500 group-hover:text-purple-50">
                  0{(index % clients.length) + 1}
                </span>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />

            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
              Scroll to explore
            </span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Previous clients"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--dark)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next clients"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--dark)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-[var(--border)] pt-8"
        >
          <p className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.03em] text-[var(--dark)] sm:text-3xl">
            Different brands.{" "}
            <span className="text-[var(--primary)]">
              One ambition — growth.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;