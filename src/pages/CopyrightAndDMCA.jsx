import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const CopyrightAndDMCA = () => {
    const sections = [
    {
        title: "Copyright And DMCA Policy",
        content: (
        <p>
            Go Purple Nut respects the intellectual property rights of others and
            expects the same respect for our content. This policy explains how we
            handle copyright and how you can report a concern.
        </p>
        ),
    },

    {
        title: "Ownership Of Content",
        content: (
        <>
            <p>
            All content on the Go Purple Nut website, including text, images,
            graphics, logos, and design elements, is owned by Go Purple Nut or
            used with permission from the rightful owner. This content is
            protected under United States and international copyright laws.
            </p>

            <p className="mt-4">
            You may not copy, reproduce, distribute, or use any content from our
            website for commercial purposes without our written permission.
            </p>
        </>
        ),
    },

    {
        title: "Reporting Copyright Infringement",
        content: (
        <>
            <p>
            If you believe that content on our website infringes your copyright,
            you may submit a notice under the Digital Millennium Copyright Act,
            known as the DMCA. Your notice should include:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
                A description of the copyrighted work you believe has been
                infringed.
            </li>
            <li>
                The location of the material on our website, such as the specific
                page or URL
            </li>
            <li>
                Your contact information, including name, address, phone number,
                and email address
            </li>
            <li>
                A statement that you have a good faith belief the use is not
                authorized by the copyright owner, its agent, or the law
            </li>
            <li>
                A statement, made under penalty of perjury, that the information in
                your notice is accurate and that you are authorized to act on
                behalf of the copyright owner
            </li>
            <li>Your physical or electronic signature</li>
            </ul>
        </>
        ),
    },

    {
        title: "How We Handle Notices",
        content: (
        <p>
            Once we receive a valid DMCA notice, we will review it and take
            appropriate action, which may include removing or disabling access to
            the material in question. We will make reasonable efforts to notify
            the party responsible for the content that a notice has been received.
        </p>
        ),
    },

    {
        title: "Counter Notices",
        content: (
        <>
            <p>
            If you believe your content was removed in error, you may submit a
            counter notice. Your counter notice should include:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
                Identification of the material that was removed and its previous
                location on our website
            </li>
            <li>
                A statement, made under penalty of perjury, that you believe the
                material was removed by mistake or misidentification
            </li>
            <li>Your name, address, and phone number</li>
            <li>
                A statement that you consent to the jurisdiction of the federal
                court in your district and that you will accept service of process
                from the person who filed the original notice
            </li>
            <li>Your physical or electronic signature</li>
            </ul>
        </>
        ),
    },

    {
        title: "Repeat Infringers",
        content: (
        <p>
            We reserve the right to remove content and restrict access for users or
            partners who repeatedly infringe on the copyrights of others.
        </p>
        ),
    },
    ];

  return (
    <>
        <SEO
        title="Copyright & DMCA Policy"
        description="Learn about Go Purple Nut's copyright policy and how to submit a DMCA notice or counter notice."
        path="/copyright-and-dmca"
        />
        <Navbar forceScrolled />
        <main className="bg-white text-[var(--dark)]">

      {/* Hero */}
      <section className="bg-[#100C1C] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
            Legal
          </p>

          <h1 className="max-w-[1100px] font-[var(--font-display)] text-[14vw] font-semibold leading-[0.85] tracking-[-0.07em] text-white sm:text-[11vw] lg:text-[8vw] xl:text-[110px]">
            Copyright &
            <br />
            <span className="text-[var(--primary)]">
              DMCA Policy
            </span>
          </h1>

          <p className="mt-10 max-w-[650px] font-[var(--font-body)] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            This policy explains how copyright and intellectual property
            concerns relating to content on the Go Purple Nut website are
            handled.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Copyright & DMCA
            </p>

            <div className="mt-5 h-px w-full bg-black/10" />

            <p className="mt-5 font-[var(--font-body)] text-sm leading-6 text-black/50">
              Information about copyright ownership, permitted use, and
              submitting copyright concerns.
            </p>

            <Link
              to="/terms-and-conditions"
              className="group mt-7 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)]"
            >
              Terms & Conditions

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </aside>

          {/* Sections */}
          <div className="max-w-[800px]">

            <div className="mb-12 border-b border-black/10 pb-8">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                Effective Date: September 2026
              </p>
            </div>

            <div className="space-y-0">
              {sections.map((section, index) => (
                <article
                  key={section.title}
                  className="border-b border-black/10 py-9 first:pt-0"
                >
                  <div className="flex gap-5">

                    <span className="hidden shrink-0 pt-1 font-[var(--font-body)] text-xs font-bold tracking-[0.12em] text-[var(--primary)] sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h2 className="font-[var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-black sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-5 font-[var(--font-body)] text-base leading-7 text-[var(--text)]">
                        {section.content}
                      </div>
                    </div>

                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 overflow-hidden rounded-3xl bg-[#100C1C] p-7 sm:p-10">
              <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-[var(--secondary)]">
                Copyright Questions?
              </p>

              <h2 className="mt-4 max-w-[600px] font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Have a copyright concern?
              </h2>

              <p className="mt-4 max-w-[550px] font-[var(--font-body)] text-sm leading-6 text-white/60">
                Contact our team if you believe that material on our website
                infringes your copyright or if you need clarification about
                this policy.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
              >
                Contact us

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-colors group-hover:bg-white/10">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

        </main>
        <Footer />
    </>
  );
};

export default CopyrightAndDMCA;