import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Home } from "lucide-react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for could not be found on the Go Purple Nut website."
        path="/404"
        noIndex
      />
      <Navbar forceScrolled/> 
      <main className="min-h-screen bg-[#100C1C] text-white">
        {/* Main 404 */}
        <section className="relative flex min-h-screen items-center overflow-hidden">
          {/* Background accents */}
          <div className="pointer-events-none absolute left-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/10 blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-15%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/10 blur-[140px]" />

          <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.7fr]">
              {/* Left */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-7 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.22em] text-white/50"
                >
                  Error / 404
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-[var(--font-display)] text-[24vw] font-semibold leading-[0.75] tracking-[-0.09em] text-white sm:text-[20vw] md:text-[17vw] lg:text-[13vw] xl:text-[190px]"
                >
                  404
                </motion.h1>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="mt-8 h-[2px] max-w-[520px] bg-white/10"
                />

                <motion.h2
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.7 }}
                  className="mt-8 max-w-[700px] font-[var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl"
                >
                  Looks like this page took a wrong turn.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="mt-6 max-w-[560px] font-[var(--font-body)] text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
                >
                  The page you're looking for doesn't exist, may have moved,
                  or the URL might be incorrect. Let's get you back to
                  something useful.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.7 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <Link
                    to="/"
                    style={{color : "black"}}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white sm:w-auto"
                  >
                    <Home size={16} />

                    Back to Home

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition-colors group-hover:bg-white/10">
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>

                  <Link
                    to="/services"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 font-[var(--font-body)] text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)] sm:w-auto"
                  >
                    Explore Services

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Right editorial block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto w-full max-w-[420px]"
              >
                <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
                  {/* Grid */}
                  <div className="absolute inset-0 opacity-[0.08]">
                    <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
                    <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
                  </div>

                  {/* Purple circle */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]"
                  />

                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[var(--font-display)] text-[7rem] font-semibold leading-none tracking-[-0.08em] text-white/90 sm:text-[8rem]">
                      ?
                    </span>
                  </div>

                  {/* Corner labels */}
                  <span className="absolute left-5 top-5 font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Lost
                  </span>

                  <span className="absolute bottom-5 right-5 font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Found
                  </span>

                  {/* Accent */}
                  <div className="absolute right-0 top-1/2 h-24 w-1 -translate-y-1/2 bg-[var(--secondary)]" />
                </div>
              </motion.div>
            </div>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="font-[var(--font-body)] text-xs uppercase tracking-[0.16em] text-white/35">
                Go Purple Nut
              </p>

              <p className="font-[var(--font-body)] text-xs text-white/35">
                Strategy × Creativity × Growth
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;