import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Landmark,
  House,
  Sun,
  ShieldCheck,
  HeartPulse,
  ShoppingBag,
  WalletCards,
  BadgeCheck,
  Trophy,
  Pill
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const industries = [
  {
    number: "01",
    title: "Home Improvement",
    description:
      "Digital growth solutions for brands helping customers improve, renovate and maintain their homes.",
    services: [
      "Home Renovation",
      "Remodeling",
      "Home Services",
      "Roofing",
      "Contractors",
    ],
    icon: House,
  },
  {
    number: "02",
    title: "Insurance",
    description:
      "Digital experiences and growth strategies designed for modern insurance products and customer journeys.",
    services: [
      "Auto Insurance",
      "Home Insurance",
      "Life Insurance",
      "Health Insurance",
      "Insurance Services",
    ],
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Lending",
    description:
      "Performance-focused digital solutions that connect lending products with high-intent audiences.",
    services: [
      "Personal Loans",
      "Business Loans",
      "Digital Lending",
      "Consumer Finance",
      "Credit",
    ],
    icon: Landmark,
  },
  {
    number: "04",
    title: "Debt Services",
    description:
      "Digital acquisition strategies for businesses helping customers manage, reduce and resolve debt.",
    services: [
      "Debt Relief",
      "Debt Consolidation",
      "Credit Services",
      "Financial Solutions",
    ],
    icon: WalletCards,
  },
  {
    number: "05",
    title: "Solar",
    description:
      "Growth campaigns that connect solar brands with homeowners interested in smarter energy solutions.",
    services: [
      "Solar Installation",
      "Residential Solar",
      "Solar Financing",
      "Energy Solutions",
    ],
    icon: Sun,
  },
  {
    number: "06",
    title: "Warranty Services",
    description:
      "Digital growth solutions for warranty providers protecting the products, vehicles and services customers rely on.",
    services: [
      "Vehicle Warranty",
      "Home Warranty",
      "Product Warranty",
      "Protection Plans",
    ],
    icon: BadgeCheck,
  },
  {
    number: "07",
    title: "Health And Wellness",
    description:
      "Digital strategies designed to connect health and wellness brands with audiences looking for better everyday solutions.",
    services: [
      "Fitness",
      "Wellness",
      "Nutrition",
      "Lifestyle",
      "Health Services",
    ],
    icon: HeartPulse,
  },
  {
    number: "08",
    title: "Sweepstakes",
    description:
      "Engaging acquisition strategies designed to attract audiences and drive participation through compelling campaigns.",
    services: [
      "Giveaways",
      "Contests",
      "Promotions",
      "Lead Generation",
    ],
    icon: Trophy,
  },
  {
    number: "09",
    title: "Nutraceuticals",
    description:
      "Digital growth strategies for brands offering supplements and wellness-focused nutritional products.",
    services: [
      "Dietary Supplements",
      "Vitamins",
      "Sports Nutrition",
      "Wellness Products",
    ],
    icon: Pill,
  },
  {
    number: "10",
    title: "E-Commerce",
    description:
      "Commerce growth solutions that help brands attract customers, increase conversions and build lasting relationships.",
    services: [
      "Fashion & Apparel",
      "Beauty & Wellness",
      "Home & Furniture",
      "Grocery",
      "Consumer Products",
    ],
    icon: ShoppingBag,
  },
];

const IndustriesWeServe = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[var(--light)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
              Industries We Serve
            </p>

            <h2 className="max-w-[600px] font-[var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              We build marketing plans{" "}
              <span className="text-[var(--primary)]">suited to businesses in:</span>
            </h2>
          </div>

          {/* <p className="max-w-[620px] text-base leading-7 text-[var(--text)] lg:ml-auto lg:text-lg">
            We work across high-growth digital categories, combining strategy,
            creativity and performance to build experiences that connect with
            the people who matter.
          </p> */}
        </motion.div>

        {/* Industry Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 sm:p-8"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-[var(--font-display)] text-xs font-bold tracking-[0.16em] text-[var(--primary)]">
                    {industry.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Main Content */}
                <div className="mt-12">
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-[var(--dark)] sm:text-[28px]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 max-w-[400px] text-sm leading-6 text-[var(--text)]">
                    {industry.description}
                  </p>
                </div>

                {/* Services */}
                <div className="mt-auto pt-10">
                  <div className="mb-4 h-px w-full bg-[var(--border)]" />

                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[11px] font-medium text-[var(--text)] transition-colors duration-300 group-hover:border-[var(--primary)]/30"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <Link 
                to="/projects"
                className="absolute bottom-7 right-7 flex h-9 w-9 translate-x-2 translate-y-2 items-center justify-center rounded-full bg-[var(--secondary)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 cursor-pointer">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                    className="text-[var(--dark)]"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:px-8"
        >
          <p className="max-w-[700px] font-[var(--font-display)] text-lg font-semibold leading-tight tracking-[-0.025em] text-[var(--dark)] sm:text-xl">
            Different industries. Different challenges.{" "}
            <span className="text-[var(--primary)]">
              One growth-focused approach.
            </span>
          </p>

          <div className="flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text)]">
            <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
            Strategy × Creativity × Performance
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default IndustriesWeServe;