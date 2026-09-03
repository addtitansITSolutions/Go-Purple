import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../sections/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar forceScrolled />

      <main className="overflow-hidden bg-white">

        {/* =========================================================
            CONTACT HERO
        ========================================================= */}
        <section className="relative bg-[var(--dark)] text-white">
          
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/20 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-[450px] w-[450px] rounded-full bg-[var(--secondary)]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-32 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16 lg:pb-28 lg:pt-44 xl:px-20">

            <div className="grid items-end gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">

              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[800px]"
              >
                {/* Eyebrow */}
                <div className="mb-7 flex items-center gap-3">
                  {/* <span className="h-[2px] w-9 bg-[var(--secondary)]" /> */}

                  <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 sm:text-[11px]">
                    Contact GoPurple
                  </span>
                </div>

                {/* Heading */}
                <h1 className="font-[var(--font-display)] text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[88px]">
                  Let’s make
                  <br />
                  something{" "}
                  <span className="text-[var(--primary)]">
                    happen.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-[600px] font-[var(--font-body)] text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                  Have a project in mind, a business you want to grow, or
                  simply an idea you want to explore? Tell us about it.
                </p>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-12 hidden items-center gap-3 text-white/40 lg:flex"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                    <ArrowDownRight size={16} />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    Start below
                  </span>
                </motion.div>
              </motion.div>

              {/* Right Contact Intro */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="lg:pb-2"
              >
                <div className="border-l border-white/10 pl-6 sm:pl-8">

                  <p className="font-[var(--font-display)] text-xl font-medium leading-7 text-white sm:text-2xl sm:leading-8">
                    Strategy, creativity and digital growth —{" "}
                    <span className="text-[var(--secondary)]">
                      all in one conversation.
                    </span>
                  </p>

                  <p className="mt-6 max-w-[420px] text-sm leading-6 text-white/45">
                    Whether you are launching something new or looking to
                    improve what already exists, we would love to hear what
                    you're working on.
                  </p>

                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* =========================================================
            CONTACT AREA
        ========================================================= */}
        <section className="relative bg-[var(--light)] py-16 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 xl:gap-28">

              {/* ===================================================
                  CONTACT INFORMATION
              =================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="lg:pt-8"
              >

                {/* Label */}
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[var(--primary)]" />

                  <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
                    Get in touch
                  </span>
                </div>

                <h2 className="mt-6 max-w-[500px] font-[var(--font-display)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
                  Tell us what you’re{" "}
                  <span className="text-[var(--primary)]">
                    building.
                  </span>
                </h2>

                <p className="mt-6 max-w-[460px] text-sm leading-7 text-[var(--text)] sm:text-base">
                  Give us a little context about your project and what you
                  are looking to achieve. The more we know, the better we can
                  help.
                </p>


                {/* Contact Details */}
                <div className="mt-10 space-y-4">

                  {/* Email */}
                  <motion.a
                    href="mailto:info@gopurple.com"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 transition-shadow duration-300 hover:shadow-lg sm:p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Mail size={19} />
                    </span>

                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
                        Email
                      </span>

                      <span className="mt-1 block text-sm font-semibold text-[var(--dark)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                        info@gopurple.com
                      </span>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="ml-auto text-[var(--text)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                    />
                  </motion.a>


                  {/* Location */}
                  <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--secondary)]/30 text-[var(--dark)]">
                      <MapPin size={19} />
                    </span>

                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
                        Location
                      </span>

                      <span className="mt-1 block text-sm font-semibold text-[var(--dark)]">
                        India
                      </span>
                    </div>
                  </div>


                  {/* Response */}
                  <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                      <MessageCircle size={19} />
                    </span>

                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
                        Let's talk
                      </span>

                      <span className="mt-1 block text-sm font-semibold text-[var(--dark)]">
                        Start with an idea
                      </span>
                    </div>
                  </div>

                </div>


                {/* Small Statement */}
                <div className="mt-10 border-t border-[var(--border)] pt-6">
                  <p className="font-[var(--font-display)] text-sm font-medium leading-6 text-[var(--text)]">
                    No complicated process.
                    <br />
                    <span className="text-[var(--dark)]">
                      Just a good conversation.
                    </span>
                  </p>
                </div>

              </motion.div>


              {/* ===================================================
                  FORM
              =================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >

                {/* Yellow Accent */}
                <div className="absolute -right-2 -top-2 z-0 h-24 w-24 rounded-full bg-[var(--secondary)]/40 blur-2xl" />

                {/* Form Card */}
                <div className="relative z-10 rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_25px_80px_rgba(17,24,39,0.08)] sm:p-8 lg:p-10 xl:p-12">

                  {/* Form Header */}
                  <div className="mb-8 flex items-start justify-between gap-6 border-b border-[var(--border)] pb-7">

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                        Project enquiry
                      </span>

                      <h3 className="mt-2 font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--dark)] sm:text-3xl">
                        Let’s start here.
                      </h3>
                    </div>

                    <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-[var(--dark)] text-white sm:flex">
                      <ArrowUpRight size={18} />
                    </div>

                  </div>

                  {/* Existing Form */}
                  <ContactForm />

                </div>

              </motion.div>

            </div>

          </div>
        </section>


        {/* =========================================================
            FINAL CONTACT STATEMENT
        ========================================================= */}
        <section className="relative overflow-hidden bg-[var(--primary)] py-20 sm:py-24 lg:py-28">

          {/* Background Accent */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"
            >

              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Have an idea?
                </span>

                <h2 className="mt-4 max-w-[850px] font-[var(--font-display)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Great things start with a{" "}
                  <span className="text-[var(--secondary)]">
                    simple conversation.
                  </span>
                </h2>
              </div>

              <a
                href="mailto:info@gopurple.com"
                className="group inline-flex shrink-0 items-center gap-3 font-[var(--font-body)] text-sm font-bold uppercase tracking-[0.15em] text-white"
              >
                Email us

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--dark)] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>

            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Contact;