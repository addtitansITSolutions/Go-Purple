import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck , ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p>
            When you interact with GoPurple, we may collect information that
            you voluntarily provide to us, as well as certain information
            automatically collected when you use our website.
          </p>

          <h3>Information you provide</h3>

          <p>
            This may include your name, email address, phone number, company
            information, project details, and any other information you choose
            to provide when contacting us or requesting our services.
          </p>

          <h3>Information collected automatically</h3>

          <p>
            When you visit our website, certain technical information may be
            collected automatically, including your IP address, browser type,
            device information, pages visited, referring pages, and general
            usage information.
          </p>
        </>
      ),
    },

    {
      title: "2. How We Use Your Information",
      content: (
        <p>
          We may use the information we collect to respond to inquiries,
          provide and improve our services, communicate with you about
          projects or services, understand how visitors use our website,
          maintain website security, and comply with applicable legal
          obligations.
        </p>
      ),
    },

    {
      title: "3. Cookies and Similar Technologies",
      content: (
        <p>
          Our website may use cookies and similar technologies to improve
          functionality, understand website usage, remember preferences, and
          analyze traffic. You may be able to control or disable cookies
          through your browser settings. Disabling certain cookies may affect
          some website functionality.
        </p>
      ),
    },

    {
      title: "4. Analytics and Third-Party Services",
      content: (
        <p>
          We may use third-party analytics, hosting, advertising, or technology
          providers to help operate and improve our website and services.
          These providers may process certain information in accordance with
          their own privacy policies and applicable laws.
        </p>
      ),
    },

    {
      title: "5. How We Protect Your Information",
      content: (
        <p>
          We take reasonable administrative, technical, and organizational
          measures designed to protect the information we collect from
          unauthorized access, alteration, disclosure, or destruction.
          However, no method of transmitting or storing information online can
          be guaranteed to be completely secure.
        </p>
      ),
    },

    {
      title: "6. Information Sharing",
      content: (
        <p>
          We do not sell your personal information. We may share information
          with trusted service providers who assist us with website
          operations, communications, analytics, hosting, or other business
          functions. We may also disclose information when required by law or
          when reasonably necessary to protect our rights, users, or business.
        </p>
      ),
    },

    {
      title: "7. Data Retention",
      content: (
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this Privacy Policy,
          including providing services, maintaining business records,
          resolving disputes, enforcing agreements, and meeting legal or
          regulatory requirements.
        </p>
      ),
    },

    {
      title: "8. Your Privacy Rights",
      content: (
        <p>
          Depending on where you live, you may have certain rights regarding
          your personal information, including the right to request access,
          correction, deletion, restriction, or other forms of control over
          your information. To make a privacy-related request, please contact
          us using the details provided below.
        </p>
      ),
    },

    {
      title: "9. Third-Party Links",
      content: (
        <p>
          Our website may contain links to third-party websites or services.
          We are not responsible for the privacy practices, content, or
          security of those third-party websites. We encourage you to review
          their privacy policies before providing personal information.
        </p>
      ),
    },

    {
      title: "10. Children's Privacy",
      content: (
        <p>
          Our website and services are not intended for children. We do not
          knowingly collect personal information from children where
          prohibited by applicable law.
        </p>
      ),
    },

    {
      title: "11. Changes to This Privacy Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes to our practices, services, or applicable legal requirements.
          Any updated version will be posted on this page with a revised
          effective date.
        </p>
      ),
    },

    {
      title: "12. Contact Us",
      content: (
        <>
          <p>
            If you have questions about this Privacy Policy or would like to
            make a privacy-related request, please contact us.
          </p>

          <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.025] p-6">
            <p className="!mb-1 font-semibold text-black">
              GoPurple
            </p>

            <p className="!mb-1">
              Email: hello@gopurple.com
            </p>

            <p className="!mb-0">
              Website: gopurple.com
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
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
                    We respect your privacy and are committed to being transparent
                    about how information is collected, used, and protected.
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

            <motion.div
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
            </motion.div>

            {/* Policy Sections */}
            <div className="border-t border-black/10">
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
                className="mt-12 flex items-center justify-between border-t border-black/10 pt-6"
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