import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Our Commitment",
    content: (
      <p>
        GoPurple respects the privacy and data protection rights of individuals
        and is committed to handling personal information responsibly. This
        page explains how we approach the requirements and principles of the
        General Data Protection Regulation (GDPR) where applicable.
      </p>
    ),
  },
  {
    title: "2. What Is GDPR?",
    content: (
      <p>
        The General Data Protection Regulation is a European Union data
        protection framework designed to strengthen individuals' rights and
        establish requirements for organizations that process personal data.
        Depending on your location and our activities, certain GDPR
        requirements may apply to the processing of your personal information.
      </p>
    ),
  },
  {
    title: "3. Personal Data We May Process",
    content: (
      <>
        <p>
          Depending on how you interact with our website or services, we may
          process information such as:
        </p>

        <ul>
          <li>Name and contact information</li>
          <li>Company or business information</li>
          <li>Project or service-related information</li>
          <li>Information submitted through contact forms</li>
          <li>Website usage and interaction information</li>
          <li>Technical information such as browser or device details</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. How We Use Personal Data",
    content: (
      <p>
        We may process personal information to respond to inquiries, provide
        requested services, communicate about projects, improve our website
        and services, understand website usage, maintain security, prevent
        misuse, and meet applicable legal or regulatory obligations.
      </p>
    ),
  },
  {
    title: "5. Lawful Basis for Processing",
    content: (
      <>
        <p>
          Where GDPR applies, we seek to process personal data on an
          appropriate lawful basis. Depending on the circumstances, this may
          include:
        </p>

        <ul>
          <li>Your consent</li>
          <li>Performance of a contract or steps taken before entering one</li>
          <li>Our legitimate business interests</li>
          <li>Compliance with a legal obligation</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Your GDPR Rights",
    content: (
      <>
        <p>
          Where applicable, you may have rights concerning your personal data,
          including the right to:
        </p>

        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate or incomplete information</li>
          <li>Request deletion of your personal data</li>
          <li>Request restriction of certain processing</li>
          <li>Object to certain types of processing</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Request portability of certain information</li>
        </ul>

        <p>
          These rights may be subject to limitations and conditions under
          applicable law.
        </p>
      </>
    ),
  },
  {
    title: "7. Consent and Withdrawal",
    content: (
      <p>
        Where we rely on your consent to process personal information, you may
        withdraw that consent at any time. Withdrawing consent does not affect
        the lawfulness of processing that occurred before the withdrawal.
      </p>
    ),
  },
  {
    title: "8. Cookies and Tracking",
    content: (
      <p>
        Our website may use cookies and similar technologies for functionality,
        analytics, security, and other legitimate purposes. Where consent is
        required, appropriate consent mechanisms may be used. You can also
        manage certain cookie preferences through your browser settings.
      </p>
    ),
  },
  {
    title: "9. Data Retention",
    content: (
      <p>
        We retain personal data only for as long as reasonably necessary for
        the purposes for which it was collected, including business,
        contractual, security, dispute-resolution, and legal requirements.
        Retention periods may vary depending on the type and purpose of the
        information.
      </p>
    ),
  },
  {
    title: "10. Data Security",
    content: (
      <p>
        We use reasonable technical and organizational measures intended to
        protect personal information against unauthorized access, loss,
        misuse, alteration, or disclosure. However, no online transmission or
        storage system can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    title: "11. Third-Party Service Providers",
    content: (
      <p>
        We may work with third-party providers that support website hosting,
        analytics, communications, security, advertising, or other business
        operations. Where appropriate, we seek to ensure that personal data
        processed by such providers is handled in accordance with applicable
        privacy and data protection requirements.
      </p>
    ),
  },
  {
    title: "12. International Data Transfers",
    content: (
      <p>
        Some service providers or business partners may process information in
        countries outside the European Economic Area. Where GDPR applies, we
        seek to use appropriate safeguards for international transfers as
        required by applicable data protection law.
      </p>
    ),
  },
  {
    title: "13. Data Protection Requests",
    content: (
      <p>
        If you would like to exercise an applicable privacy right or ask a
        question about how we process your personal data, you can contact us
        using the details below. We may need to verify your request before
        completing it in order to protect your information.
      </p>
    ),
  },
  {
    title: "14. Complaints",
    content: (
      <p>
        If you believe that your personal data has not been handled in
        accordance with applicable data protection law, you may have the right
        to raise a complaint with the relevant data protection authority in
        your country or region.
      </p>
    ),
  },
  {
    title: "15. Updates to This Page",
    content: (
      <p>
        We may update this GDPR Compliance page when our privacy practices,
        services, or applicable legal requirements change. Any updated version
        will be published on this page together with a revised effective date.
      </p>
    ),
  },
  {
    title: "16. Contact Us",
    content: (
      <>
        <p>
          For questions about GDPR, privacy, or requests concerning your
          personal information, please contact us.
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

const GDPRCompliance = () => {
  return (
    <>
        <Navbar forceScrolled />
        <main className="min-h-screen bg-[#f4f1eb] text-[#17151a]">

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-black/10">
            <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-28 lg:pt-36">

            {/* Top Meta */}
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
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:-translate-x-1 group-hover:border-black/25">
                    <ArrowLeft size={15} strokeWidth={1.5} />
                </span>

                Back to home
                </Link>

                <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-black/35 sm:text-xs">
                GoPurple
                </span>
            </motion.div>

            {/* Hero Content */}
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">

                {/* Heading */}
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
                    Data Protection
                    </span>
                </div>

                <h1 className="max-w-5xl font-[var(--font-display)] text-[clamp(3.5rem,8.5vw,8rem)] font-semibold leading-[0.8] tracking-[-0.075em]">
                    GDPR
                    <br />
                    <span className="text-[var(--primary)]">
                    Compliance.
                    </span>
                </h1>
                </motion.div>

                {/* Intro */}
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
                    <LockKeyhole
                    size={20}
                    strokeWidth={1.5}
                    />
                </div>

                <p className="font-[var(--font-body)] text-base leading-[1.7] text-black/55 sm:text-lg">
                    A straightforward overview of how we approach personal data,
                    privacy rights, and GDPR requirements where applicable.
                </p>

                <p className="mt-5 font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-black/35">
                    Effective date: September 7, 2026
                </p>
                </motion.div>

            </div>
            </div>
        </section>

        {/* Content */}
        <section>
            <div className="mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">

            {/* Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="mb-16 max-w-3xl sm:mb-20"
            >
                <p className="font-[var(--font-body)] text-base leading-[1.8] text-black/60 sm:text-lg">
                This page provides information about our approach to data
                protection and the rights that may be available to individuals
                under the General Data Protection Regulation.
                </p>
            </motion.div>

            {/* Sections */}
            <div className="border-t border-black/10">
                {sections.map((section, index) => (
                <motion.article
                    key={section.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                    duration: 0.6,
                    delay: index * 0.025,
                    }}
                    className="grid gap-6 border-b border-black/10 py-10 sm:py-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16"
                >
                    <h2 className="font-[var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                    {section.title}
                    </h2>

                    <div className="gdpr-content font-[var(--font-body)] text-sm leading-[1.8] text-black/55 sm:text-base">
                    {section.content}
                    </div>
                </motion.article>
                ))}
            </div>

            {/* Bottom Navigation */}
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
                to="/privacy-policy"
                className="group inline-flex items-center gap-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45 transition-colors hover:text-black"
                >
                Privacy Policy

                <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                </Link>
            </motion.div>

            </div>
        </section>

        {/* Scoped styles */}
        <style>{`
            .gdpr-content p {
            margin-bottom: 1.25rem;
            }

            .gdpr-content p:last-child {
            margin-bottom: 0;
            }

            .gdpr-content ul {
            margin: 1.25rem 0;
            padding-left: 1.25rem;
            list-style-type: disc;
            }

            .gdpr-content li {
            margin-bottom: 0.65rem;
            padding-left: 0.35rem;
            }
        `}</style>

        </main>
        <Footer />
    </>
  );
};

export default GDPRCompliance;