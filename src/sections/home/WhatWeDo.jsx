import {
  ArrowUpRight,
  BarChart3,
  Palette,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--light)] py-24 sm:py-28 lg:py-36">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            INTRO
        ===================================================== */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.8fr_1.8fr] lg:items-end lg:mb-24">
          <div>
            <div className="mb-5 flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[var(--primary)]" /> */}
              <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Why Choose Us
              </span>
            </div>

            <p className="max-w-xs font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
              We bring these core services together so they work as one connected engine, not five separate efforts.
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--dark)] sm:text-5xl md:text-6xl lg:text-7xl">
             A Holistic partner that{" "}
              <span className="text-[var(--primary)]">moves your marketing needle.</span>
            </h2>
          </div>
        </div>


        {/* =====================================================
            CREATIVE SERVICE GRID
        ===================================================== */}
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">

          {/* -------------------------------------------------
              DIGITAL MARKETING
          ------------------------------------------------- */}
          <Link
            to="/services"
            className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[var(--dark)] p-7 text-white transition-all duration-500 hover:-translate-y-2 sm:p-9 lg:col-span-7"
          >
            {/* Decorative Circle */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

            <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--dark)] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--primary)] group-hover:text-white">
              <ArrowUpRight size={20} />
            </div>

            {/* Icon */}
            <div className="mb-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/20 text-[var(--primary)]">
              <BarChart3 size={25} strokeWidth={1.7} />
            </div>

            <div className="relative z-10 text-white">
              <p className="mb-3 font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                Growth / Performance
              </p>

              <h3 className="max-w-lg font-[var(--font-display)] text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-5xl">
                Affiliate
                <br />
                Marketing
              </h3>

              <p className="mt-6 max-w-md font-[var(--font-body)] text-sm leading-6 text-white/55">
                Reward-based partnerships built to drive real growth. We build and manage affiliate networks with no wasted spend.
              </p>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--primary)] transition-all duration-700 group-hover:w-full" />
          </Link>


          {/* -------------------------------------------------
              E-COMMERCE
          ------------------------------------------------- */}
          <Link
            to="/services"
            className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[var(--primary)] p-7 text-white transition-all duration-500 hover:-translate-y-2 sm:p-9 lg:col-span-5"
          >
            {/* Giant decorative text */}
            <span className="pointer-events-none absolute -bottom-8 -right-4 font-[var(--font-display)] text-[9rem] font-bold leading-none tracking-[-0.08em] text-white/10">
              E
            </span>

            <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--dark)] transition-all duration-500 group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </div>

            <div className="mb-24 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <ShoppingBag size={25} strokeWidth={1.7} />
            </div>

            <div className="relative z-10">
              <p className="mb-3 font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Commerce / Experience
              </p>

              <h3 className="font-[var(--font-display)] text-4xl font-semibold leading-[1] tracking-[-0.04em] text-white">
                E-commerce
              </h3>

              <p className="mt-6 max-w-sm font-[var(--font-body)] text-sm leading-6 text-white/70">
                From storefronts to conversion journeys, we create digital
                commerce experiences built to sell.
              </p>
            </div>
          </Link>


          {/* -------------------------------------------------
              CREATIVE & DESIGN
          ------------------------------------------------- */}
          <Link
            to="/services"
            className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white p-7 transition-all duration-500 hover:-translate-y-2 sm:p-9 lg:col-span-5"
          >
            {/* Floating visual */}
            <div className="absolute right-8 top-8 h-28 w-28 rotate-12 rounded-[2rem] bg-[var(--secondary)] transition-all duration-700 group-hover:rotate-45 group-hover:scale-110">
              <div className="flex h-full w-full items-center justify-center text-[var(--dark)]">
                <Palette size={34} strokeWidth={1.5} />
              </div>
            </div>

            <div className="mb-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--light)] text-[var(--primary)]">
              <Sparkles size={25} strokeWidth={1.7} />
            </div>

            <div className="relative z-10">
              <p className="mb-3 font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)]/50">
                Identity / Creative
              </p>

              <h3 className="max-w-sm font-[var(--font-display)] text-4xl font-semibold leading-[1] tracking-[-0.04em] text-[var(--dark)] sm:text-5xl">
                Creative
                <br />
                & Design
              </h3>

              <p className="mt-6 max-w-md font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                Visual identities, campaigns and digital experiences that
                give your brand a personality people remember.
              </p>
            </div>

            <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--dark)] group-hover:text-white">
              <ArrowUpRight size={17} />
            </div>
          </Link>


          {/* -------------------------------------------------
              STRATEGY / EXTRA CARD
          ------------------------------------------------- */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[var(--secondary)] p-7 sm:p-9 lg:col-span-7">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute right-10 top-10 h-32 w-32 rounded-full border border-[var(--dark)]" />
              <div className="absolute right-20 top-20 h-20 w-20 rounded-full border border-[var(--dark)]" />
              <div className="absolute right-[7.5rem] top-[7.5rem] h-8 w-8 rounded-full bg-[var(--dark)]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">
              
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--dark)] text-[var(--secondary)]">
                  <Zap size={25} strokeWidth={1.7} />
                </div>

                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-[var(--dark)]/50">
                  And beyond
                </span>
              </div>

              <div className="mt-20 lg:mt-24">
                <h3 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-[1] tracking-[-0.04em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
                  Ideas are only powerful when they{" "}
                  <span className="text-[var(--primary)]">
                    move.
                  </span>
                </h3>

                <p className="mt-6 max-w-xl font-[var(--font-body)] text-sm leading-6 text-[var(--dark)]/65">
                  We bring the right mix of strategy, technology and creative
                  thinking to turn ambitious ideas into measurable digital
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <div className="mt-14 flex flex-col gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          
          <p className="max-w-lg font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
            Don't see exactly what you need? That's okay. We build
            custom digital solutions around ambitious ideas.
          </p>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-[var(--dark)]"
          >
            Explore everything we do

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--primary)]">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;