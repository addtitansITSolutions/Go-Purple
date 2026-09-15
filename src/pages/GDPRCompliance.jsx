import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const sections = [
  {
    title: "GDPR Compliance",
    content: (
      <>
        <p>
          Go Purple Nut works with clients, partners, and affiliates across
          the country and, in some cases, around the world. The European Union
          is not our primary market, but whenever we handle data of someone
          based in the EU or UK, we hold ourselves to the standard set by the
          General Data Protection Regulation (GDPR). This page explains what
          that means in practice.
        </p>

        <p className="mt-4">
          If you are an EU or UK resident, the GDPR gives you real,
          enforceable control over your personal data. We collect only what we
          need, explain why we are collecting it, and give you a clear way to
          access, correct, or delete it whenever you ask.
        </p>
      </>
    ),
  },

  {
    title: "Two Roles We Play",
    content: (
      <>
        <p>
          Because of how performance marketing works, we handle data in two
          different capacities.
        </p>

        <h3 className="mt-6 font-semibold text-black">
          Direct Interaction with Visitors
        </h3>

        <p className="mt-3">
          When someone fills out a form on our website, we decide how that data
          will be utilized. Under the GDPR, this makes us the controller.
        </p>

        <h3 className="mt-6 font-semibold text-black">
          Running A Campaign for A Client
        </h3>

        <p className="mt-3">
          For any campaign that touches a client&apos;s personal data, we act
          on that client&apos;s instructions. Under the GDPR, this makes us the
          processor, and a signed data processing agreement governs exactly
          what we can and cannot do with that data.
        </p>

        <p className="mt-4">
          If you are a client and need a data processing agreement in place,
          reach out to (email), and we will prepare one.
        </p>
      </>
    ),
  },

  {
    title: "Data We Collect And Why",
    content: (
      <>
        <p>
          Depending on how you interact with us, this may include your name,
          email address, phone number, and company details. If you are engaging
          with us as an affiliate or campaign partner, we also collect click,
          conversion, and commission data to evaluate performance.
        </p>

        <p className="mt-4">
          We only process this information on one of the following grounds, as
          the GDPR requires:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>You have given us consent.</li>
          <li>It is necessary to deliver a service you have asked for</li>
          <li>
            We have a legitimate business reason, such as measuring a campaign
            or preventing fraud, that does not override your own rights.
          </li>
          <li>We are legally required to</li>
        </ul>
      </>
    ),
  },

  {
    title: "Your Rights, Plainly Stated",
    content: (
      <>
        <p>
          As an EU or UK resident, you can ask us to:
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-black/10">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/10 bg-black/[0.025]">
                <th className="px-5 py-4 font-[var(--font-display)] text-sm font-semibold text-black">
                  Right
                </th>
                <th className="px-5 py-4 font-[var(--font-display)] text-sm font-semibold text-black">
                  What It Means
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-black/10">
                <td className="px-5 py-4 font-semibold text-black">Access</td>
                <td className="px-5 py-4">
                  Show me what data you hold on me
                </td>
              </tr>

              <tr className="border-b border-black/10">
                <td className="px-5 py-4 font-semibold text-black">Correct</td>
                <td className="px-5 py-4">
                  Fix something that is wrong
                </td>
              </tr>

              <tr className="border-b border-black/10">
                <td className="px-5 py-4 font-semibold text-black">Delete</td>
                <td className="px-5 py-4">
                  Remove my data, where there is no legal reason to keep it
                </td>
              </tr>

              <tr className="border-b border-black/10">
                <td className="px-5 py-4 font-semibold text-black">
                  Restrict
                </td>
                <td className="px-5 py-4">
                  Pause how you are using my data
                </td>
              </tr>

              <tr className="border-b border-black/10">
                <td className="px-5 py-4 font-semibold text-black">Object</td>
                <td className="px-5 py-4">
                  Stop using my data for a specific purpose
                </td>
              </tr>

              <tr className="border-b border-black/10">
                <td className="px-5 py-4 font-semibold text-black">
                  Transfer
                </td>
                <td className="px-5 py-4">
                  Give me my data in a format I can take elsewhere
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 font-semibold text-black">
                  Withdraw Consent
                </td>
                <td className="px-5 py-4">
                  Undo an earlier opt-in at any time
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6">
          We respond to any of these requests within one month, as required by
          law. Send requests to (email). Feel free to raise a concern directly
          with your national data protection authority.
        </p>
      </>
    ),
  },

  {
    title: "Moving Data Across Borders",
    content: (
      <p>
        Serving clients in multiple countries means data from the EU or UK is
        often processed outside those regions. When that happens, we rely on
        recognized safeguards, primarily the European Commission&apos;s
        Standard Contractual Clauses, to keep protection levels consistent.
      </p>
    ),
  },

  {
    title: "If Something Goes Wrong",
    content: (
      <p>
        In the event of a data breach, we notify the relevant supervisory
        authority within 72 hours of identifying it, and we inform affected
        individuals as required by law.
      </p>
    ),
  },

  {
    title: "A Note on Younger Users",
    content: (
      <p>
        Our services are not built for anyone under the age of 16, and we do
        not knowingly collect data from users below that age. If we learn that
        we have done so, we will delete it promptly.
      </p>
    ),
  },
];

const GDPRCompliance = () => {
  return (
    <>
        <SEO
          title="GDPR Compliance"
          description="Learn how Go Purple Nut handles personal data and supports GDPR rights for individuals in the EU and UK."
          path="/gdpr-compliance"
        />
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

                {/* <p className="font-[var(--font-body)] text-base leading-[1.7] text-black/55 sm:text-lg">
                    A straightforward overview of how we approach personal data,
                    privacy rights, and GDPR requirements where applicable.
                </p> */}

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
            {/* <motion.div
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
            </motion.div> */}

            {/* Sections */}
            <div className="">
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
                className="mt-12 flex items-center justify-between pt-6"
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