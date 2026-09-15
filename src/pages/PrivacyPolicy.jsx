import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck , ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  const sections = [
  {
    title: "Personal Information We Collect",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Full Name</li>
        <li>Company Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Job Title</li>
        <li>Business Information</li>
        <li>Any information submitted through contact forms or inquiries</li>
      </ul>
    ),
  },

  {
    title: "Technical Information We Collect",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>IP Address</li>
        <li>Browser Type</li>
        <li>Device Information</li>
        <li>Operating System</li>
        <li>Pages Visited</li>
        <li>Time Spent on Pages</li>
        <li>Referral Sources</li>
        <li>Cookies</li>
      </ul>
    ),
  },

  {
    title: "How We Use Your Information",
    content: (
      <>
        <p>Your information may be used to:</p>

        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Respond to your inquiries</li>
          <li>Provide our services</li>
          <li>Improve our website and your experience on it</li>
          <li>Develop marketing strategies</li>
          <li>Send necessary account or service updates</li>
          <li>Send newsletters or other promotional materials</li>
        </ul>
      </>
    ),
  },

  {
    title: "Cookies",
    content: (
      <p>
        Our website may use cookies and similar technologies to analyze and
        improve site performance, as well as to understand how visitors use
        our pages. You can disable cookies in your browser settings, but it
        may affect your browsing experience.
      </p>
    ),
  },

  {
    title: "How We Share Information",
    content: (
      <>
        <p>We do not sell your information. We may share it with:</p>

        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Trusted technology partners</li>
          <li>Analytics providers</li>
          <li>Marketing platforms</li>
          <li>Legal authorities, where required</li>
          <li>Service providers who support our website operations</li>
        </ul>
      </>
    ),
  },

  {
    title: "Data Security",
    content: (
      <p>
        We use reasonable administrative, technical, and organizational
        safeguards to protect your personal information against unauthorized
        access, disclosure, alteration, or loss.
      </p>
    ),
  },

  {
    title: "Third Party Websites",
    content: (
      <p>
        Our website may include links to external sites. We are not responsible
        for the privacy practices of those sites, and we encourage you to
        review their policies directly.
      </p>
    ),
  },

  {
    title: "Changes To This Policy",
    content: (
      <p>
        We may update this policy from time to time. We will post any changes
        on this page, along with an updated effective date. Where appropriate,
        we may also notify you by email before a change takes effect.
      </p>
    ),
  },
];

  return (
    <>
        <SEO
          title="Privacy Policy"
          description="Read Go Purple Nut's privacy policy to understand how we collect, use, protect, and handle personal information."
          path="/privacy-policy"
        />
        <Navbar forceScrolled/>
        <main className="min-h-screen bg-[#f4f1eb] text-[#17151a]">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-black/10">
            <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-28 lg:pt-36">

            {/* Top Navigation */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 flex items-center justify-between sm:mb-24"
            >
                <Link
                to="/"
                className="group inline-flex items-center gap-3 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50 transition-colors hover:text-black sm:text-xs"
                >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-black/25 group-hover:-translate-x-1">
                    <ArrowLeft size={15} strokeWidth={1.5} />
                </span>

                Back to home
                </Link>

                <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-black/35 sm:text-xs">
                GoPurple
                </span>
            </motion.div>

            {/* Heading */}
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                >
                <div className="mb-6 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />

                    <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45 sm:text-xs">
                    Legal
                    </span>
                </div>

                <h1 className="max-w-5xl font-[var(--font-display)] text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.8] tracking-[-0.075em]">
                    Privacy
                    <br />
                    <span className="text-[var(--primary)]">
                    Policy.
                    </span>
                </h1>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-md lg:mb-2"
                >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-black/10">
                    <ShieldCheck
                    size={20}
                    strokeWidth={1.5}
                    />
                </div>

                <p className="font-[var(--font-body)] text-base leading-[1.7] text-black/55 sm:text-lg">
                    By using our website, you agree to the practices described in this policy.
                </p>

                <p className="mt-5 font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-black/35">
                    Effective date: September 7, 2026
                </p>
                </motion.div>

            </div>
            </div>
        </section>

        {/* Policy Content */}
        <section>
            <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">

            {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="mb-16 max-w-3xl sm:mb-20"
            >
                <p className="font-[var(--font-body)] text-base leading-[1.8] text-black/60 sm:text-lg">
                This Privacy Policy explains how GoPurple collects, uses,
                protects, and handles information when you visit or interact
                with our website and services.
                </p>
            </motion.div> */}

            {/* Policy Sections */}
            <div className="">
                {sections.map((section, index) => (
                <motion.article
                    key={section.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                    duration: 0.6,
                    delay: index * 0.03,
                    }}
                    className="grid gap-6 border-b border-black/10 py-10 sm:py-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16"
                >
                    <h2 className="font-[var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                    {section.title}
                    </h2>

                    <div className="privacy-content font-[var(--font-body)] text-sm leading-[1.8] text-black/55 sm:text-base">
                    {section.content}
                    </div>
                </motion.article>
                ))}
            </div>

            {/* Bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-12 flex items-center justify-between pt-6"
            >
                <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-black/30">
                GoPurple
                </span>

                <Link
                to="/"
                className="group inline-flex items-center gap-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45 transition-colors hover:text-black"
                >
                Return home

                <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                </Link>
            </motion.div>

            </div>
        </section>

        {/* Small scoped styles */}
        <style>{`
            .privacy-content p {
            margin-bottom: 1.25rem;
            }

            .privacy-content h3 {
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            color: #17151a;
            font-family: var(--font-display);
            font-size: 1.05rem;
            font-weight: 600;
            letter-spacing: -0.025em;
            }

            .privacy-content p:last-child {
            margin-bottom: 0;
            }
        `}</style>
        </main>
        <Footer />
    </>
  );
};

export default PrivacyPolicy;