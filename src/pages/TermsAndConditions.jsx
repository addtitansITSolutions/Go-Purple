import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const TermsAndConditions = () => {
    const sections = [
    {
        title: "Terms And Conditions",
        content: (
        <p>
            These Terms and Conditions govern your use of the Go Purple Nut
            website and services. By accessing our website or using our services,
            you agree to these terms. If you do not agree, please do not use our
            website or services.
        </p>
        ),
    },

    {
        title: "Use Of Our Website",
        content: (
        <>
            <p>You may use our website for lawful purposes only. You agree not to:</p>

            <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
                Use our website in any way that could damage, disable, or interfere
                with its operation
            </li>
            <li>
                Attempt to gain unauthorized access to our systems or data
            </li>
            <li>
                Use automated tools to collect data from our website without
                permission
            </li>
            <li>
                Post or share content through our website that is unlawful, harmful,
                or misleading
            </li>
            </ul>
        </>
        ),
    },

    {
        title: "Our Services",
        content: (
        <p>
            Go Purple Nut provides marketing services, including affiliate
            marketing, performance marketing, digital marketing, e-commerce
            marketing, influencer marketing, and creative design. The exact scope
            of services we provide will be outlined in a separate agreement or
            proposal between you and Go Purple Nut.
            <br />
            <br />
            We aim to deliver services with care and professionalism, but we do not
            guarantee specific results, since marketing performance depends on many
            factors outside our control.
        </p>
        ),
    },

    {
        title: "Client Responsibilities",
        content: (
        <>
            <p>If you engage us for services, you agree to:</p>

            <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
                Provide accurate and timely information needed to carry out the work
            </li>
            <li>
                Respond to requests for approvals or feedback in a reasonable
                timeframe
            </li>
            <li>
                Make payments according to the terms agreed in your service
                agreement
            </li>
            </ul>
        </>
        ),
    },

    {
        title: "Intellectual Property",
        content: (
        <p>
            All content on our website, including text, graphics, logos, and design
            elements, is owned by Go Purple Nut or our licensors and is protected
            by copyright and other intellectual property laws. You may not copy,
            reproduce, or distribute this content without our written permission.
            <br />
            <br />
            Any materials we create for you as part of a paid service will be
            governed by the ownership terms outlined in your service agreement.
        </p>
        ),
    },

    {
        title: "Payment Terms",
        content: (
        <p>
            Payment terms like &apos;pricing&apos;, &apos;billing schedules&apos;,
            and &apos;accepted payment methods&apos; will be outlined in your
            service agreement. Late payments may pause or delay delivery of
            services.
        </p>
        ),
    },

    {
        title: "Limitation Of Liability",
        content: (
        <p>
            Go Purple Nut will not be liable for any indirect, incidental, or
            consequential damages arising from your use of our website or
            services. Our total liability for any claim related to our services
            will not exceed the amount you paid us for the services in question.
        </p>
        ),
    },

    {
        title: "Termination",
        content: (
        <p>
            We reserve the right to suspend or terminate your access to our
            website or services if you violate these terms. If you have an active
            service agreement with us, termination terms will be outlined in that
            agreement.
        </p>
        ),
    },

    {
        title: "Third Party Links",
        content: (
        <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content, privacy practices, or accuracy of
            information on those websites. Visiting third-party sites is at your
            own risk.
        </p>
        ),
    },

    {
        title: "Changes To These Terms",
        content: (
        <p>
            We may update these Terms and Conditions from time to time. We will
            post any changes on this page with an updated effective date. Continued
            use of our website after changes are posted means you accept the
            updated terms.
        </p>
        ),
    },

    {
        title: "Governing Law",
        content: (
        <p>
            These terms are governed by the laws of the United States, without
            regard to conflict of law principles. Any disputes arising from these
            terms will be handled in a court of competent jurisdiction.
        </p>
        ),
    },
    ];

  return (
    <>
        <SEO
        title="Terms & Conditions"
        description="Review the Terms and Conditions governing your use of the Go Purple Nut website and services."
        path="/terms-and-conditions"
        />
      <Navbar forceScrolled />
      <main className="bg-white text-[var(--dark)]">

      {/* Hero */}
      <section className="bg-[#100C1C] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">
            Legal
          </p>

          <h1 className="max-w-[1000px] font-[var(--font-display)] text-[15vw] font-semibold leading-[0.85] tracking-[-0.07em] text-white sm:text-[12vw] lg:text-[9vw] xl:text-[120px]">
            Terms &
            <br />
            <span className="text-[var(--primary)]">
              Conditions
            </span>
          </h1>

          <p className="mt-10 max-w-[650px] font-[var(--font-body)] text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            Please read these Terms and Conditions carefully before using the
            GoPurpleNut website or engaging with our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Terms & Conditions
            </p>

            <div className="mt-5 h-px w-full bg-black/10" />

            <p className="mt-5 font-[var(--font-body)] text-sm leading-6 text-black/50">
              These terms explain the rules and conditions that apply when
              using our website and services.
            </p>

            <Link
              to="/privacy-policy"
              className="group mt-7 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)]"
            >
              Privacy Policy

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
                Questions?
              </p>

              <h2 className="mt-4 max-w-[600px] font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Need clarification about our terms?
              </h2>

              <p className="mt-4 max-w-[550px] font-[var(--font-body)] text-sm leading-6 text-white/60">
                If you have any questions about these Terms and Conditions,
                our team is happy to help.
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

export default TermsAndConditions;