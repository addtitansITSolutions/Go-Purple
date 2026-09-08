import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Brush,
  Globe2,
  LineChart,
  Megaphone,
  Search,
  ShoppingBag,
  Smartphone,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
    {
    number: "01",
    title: "E-commerce Marketing",
    description:
      "Build better shopping journeys that help customers discover, trust, buy and come back for more.",
    icon: ShoppingBag,
    href: "/services/e-commerce",
    category: "Commerce",
  },
  {
    number: "02",
    title: "Performance Marketing",
    description:
      "Combine data, creative and continuous optimization to make every marketing investment work harder and drive measurable growth.",
    icon: LineChart,
    href: "/services/performance-marketing",
    category: "Growth",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Create meaningful visibility across the digital channels that matter, connecting strategy, creativity and performance.",
    icon: Megaphone,
    href: "/services/digital-marketing",
    category: "Digital",
  },
  {
    number: "04",
    title: "Affiliate Marketing",
    description:
      "Build valuable partnerships with publishers, creators and communities that turn trusted recommendations into measurable revenue.",
    icon: Users,
    href: "/services/affiliate-marketing",
    category: "Partnerships",
  },
  {
    number: "05",
    title: "Creative & Design",
    description:
      "Create brands, campaigns and digital experiences that communicate clearly, feel distinctive and stay memorable.",
    icon: Brush,
    href: "/services/creative-design",
    category: "Creative",
  },
  {
    number: "06",
    title: "Influencer Marketing",
    description:
      "Build social presence through thoughtful strategy, relevant content and creative that gives people a reason to engage.",
    icon: Globe2,
    href: "/services/influencer-marketing",
    category: "Influencer",
  },
];

const Services = () => {
  return (
    <>
        <Navbar forceScrolled/>
        <main className="overflow-hidden bg-white">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative bg-[#100C1C] text-white">
            <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-36 xl:px-16">

            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">

                {/* Heading */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                <div className="mb-8 flex items-center gap-3">
                    {/* <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" /> */}

                    {/* <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    What We Do
                    </span> */}
                </div>

                <h1 className="max-w-5xl font-[var(--font-display)] text-[17vw] font-semibold leading-[0.82] tracking-[-0.075em] sm:text-[13vw] lg:text-[110px]">
                    SERVICES
                </h1>

                <p className="mt-8 max-w-2xl font-[var(--font-body)] text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                    Strategy, creativity and performance working together to
                    create digital growth that actually moves your business
                    forward.
                </p>
                </motion.div>

                {/* Right Side */}
                <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:pb-2"
                >
                <div className="border-t border-white/10 pt-6">
                    <p className="font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-white/40">
                    One connected approach
                    </p>

                    <p className="mt-4 font-[var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                    Different services.
                    <br />
                    <span className="text-[var(--primary)]">
                        One growth system.
                    </span>
                    </p>
                </div>
                </motion.div>
            </div>

            {/* Hero Bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
            >
                <p className="font-[var(--font-body)] text-sm text-white/40">
                Explore our capabilities
                </p>

                <a
                href="#all-services"
                className="group flex items-center gap-3 font-[var(--font-body)] text-sm font-semibold text-white"
                >
                Explore services

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[var(--secondary)] group-hover:bg-[var(--secondary)] group-hover:text-[var(--dark)]">
                    <ArrowDown size={17} />
                </span>
                </a>
            </motion.div>
            </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================= */}
        <section className="bg-[var(--light)]">
            <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">

            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                >
                <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

                    <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Our Capabilities
                    </span>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                <h2 className="max-w-5xl font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl xl:text-7xl">
                    Growth doesn't happen in
                    <span className="text-[var(--primary)]"> isolation.</span>
                </h2>

                <p className="mt-8 max-w-3xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
                    The strongest digital growth comes from connected thinking.
                    That's why our services are designed to work together —
                    combining acquisition, creative, technology and optimization
                    around the same business goals.
                </p>
                </motion.div>
            </div>
            </div>
        </section>

        {/* =========================================================
            ALL SERVICES
        ========================================================= */}
        <section id="all-services" className="bg-white">
            <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">

            {/* Section Heading */}
            <div className="mb-14 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                >
                <p className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    08 capabilities
                </p>

                <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
                    What we can
                    <span className="text-[var(--primary)]"> do.</span>
                </h2>
                </motion.div>

                <p className="max-w-md font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                Explore the capabilities behind our approach. Each service can
                stand alone or become part of a broader growth strategy.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                {services.map((service, index) => {
                const Icon = service.icon;

                return (
                    <motion.div
                    key={service.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.06,
                    }}
                    className={`group ${
                        index === 0 || index === 5
                        ? "lg:col-span-2"
                        : "lg:col-span-1"
                    }`}
                    >
                    <Link
                        to={service.href}
                        className="relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_20px_50px_rgba(17,24,39,0.08)] sm:p-7 lg:min-h-[390px]"
                    >

                        {/* Top */}
                        <div className="flex items-start justify-between">
                        <span className="font-[var(--font-display)] text-sm font-semibold text-[var(--primary)]">
                            {service.number}
                        </span>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--light)] text-[var(--dark)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                            <Icon size={20} strokeWidth={1.6} />
                        </span>
                        </div>

                        {/* Main */}
                        <div className="mt-10">
                        <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                            {service.category}
                        </span>

                        <h3 className="mt-3 max-w-md font-[var(--font-display)] text-2xl font-semibold leading-[1] tracking-[-0.04em] text-[var(--dark)] sm:text-3xl">
                            {service.title}
                        </h3>

                        <p className="mt-5 max-w-lg font-[var(--font-body)] text-sm leading-6 text-[var(--text)] sm:text-base sm:leading-7">
                            {service.description}
                        </p>
                        </div>

                        {/* Bottom */}
                        <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
                        <span className="font-[var(--font-body)] text-xs font-semibold text-gray-400 transition-colors duration-300 group-hover:text-[var(--dark)]">
                            Explore service
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--dark)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                            <ArrowUpRight size={17} />
                        </span>
                        </div>

                    </Link>
                    </motion.div>
                );
                })}
            </div>
            </div>
        </section>

        {/* =========================================================
            CONNECTED APPROACH
        ========================================================= */}
        <section className="bg-[var(--light)]">
            <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">

                {/* Left */}
                <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />

                    <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    One Connected System
                    </span>
                </div>

                <h2 className="mt-7 max-w-xl font-[var(--font-display)] text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
                    Your growth shouldn't live in separate
                    <span className="text-[var(--primary)]"> boxes.</span>
                </h2>
                </motion.div>

                {/* Right */}
                <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-end"
                >
                <p className="max-w-xl font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
                    A performance campaign can inform creative. Search data can
                    influence content. E-commerce insights can improve acquisition.
                    Our services are stronger because they connect.
                </p>

                <div className="mt-10 grid grid-cols-2 border-t border-[var(--border)] sm:grid-cols-4">
                    {[
                    "Strategy",
                    "Creative",
                    "Performance",
                    "Growth",
                    ].map((item, index) => (
                    <div
                        key={item}
                        className={`py-5 ${
                        index > 0 ? "border-l border-[var(--border)] pl-4 sm:pl-6" : ""
                        }`}
                    >
                        <span className="font-[var(--font-display)] text-sm font-semibold text-[var(--dark)] sm:text-base">
                        {item}
                        </span>
                    </div>
                    ))}
                </div>
                </motion.div>
            </div>
            </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="bg-white">
            <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[32px] bg-[#100C1C] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20"
            >
                {/* Decorative shapes */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

                <div className="absolute -bottom-24 right-20 h-48 w-48 rounded-full bg-[var(--primary)]/20" />

                <div className="relative z-10 max-w-4xl">
                <p className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    Let's build something better
                </p>

                <h2 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                    Not sure which service
                    <span className="text-[var(--secondary)]">
                    {" "}
                    you need?
                    </span>
                </h2>

                <p className="mt-7 max-w-2xl font-[var(--font-body)] text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                    Tell us what you're trying to achieve. We'll help you figure
                    out where to start and which capabilities can move the needle.
                </p>

                <Link
                    to="/contact"
                    style={{color : "black"}}
                    className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-[var(--font-display)] text-sm font-semibold text-[var(--dark)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white sm:w-auto"
                >
                    Start a conversation
                    <ArrowUpRight size={18} />
                </Link>
                </div>
            </motion.div>
            </div>
        </section>

        </main>
        <Footer />
    </>
  );
};

export default Services;