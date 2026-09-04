import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#100C1C] text-white">

      {/* ============================================
          BACKGROUND
      ============================================ */}

      {/* Main purple gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 75% 55%,
              rgba(149, 100, 221, 0.32) 0%,
              rgba(149, 100, 221, 0.18) 22%,
              rgba(149, 100, 221, 0.06) 42%,
              transparent 65%
            )
          `,
        }}
      />

      {/* Secondary purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[600px] w-[600px] rounded-full bg-[var(--primary)]/20 blur-[160px]"
      />

      {/* Yellow accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-200px] h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/10 blur-[150px]"
      />

      {/* Subtle top gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/20 to-transparent"
      />

      {/* ============================================
          DECORATIVE GRID
      ============================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ============================================
          DECORATIVE CURVE
      ============================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15%] -top-[25%] h-[900px] w-[900px] rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[12%] -top-[20%] h-[820px] w-[820px] rounded-full border border-white/5"
      />

      {/* ============================================
          HERO CONTENT
      ============================================ */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-6 pt-[88px] sm:px-8 lg:px-12 xl:px-16">

        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-4">

          {/* ==========================================
              LEFT CONTENT
          ========================================== */}

          <div className="relative z-20 max-w-[680px] py-16 lg:py-20">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">

              <span className="h-[7px] w-[7px] rounded-full bg-[var(--secondary)] shadow-[0_0_12px_rgba(228,218,114,0.7)]" />

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 sm:text-xs">
                Digital • E-commerce • Creative
              </span>

            </div>

            {/* Heading */}
            <h1 className="font-[var(--font-display)] text-[clamp(3.2rem,6vw,6.2rem)] font-semibold leading-[0.96] tracking-[-0.055em]">

              Marketing 
              {/* <br /> */}
              {" "}with{" "}
              <span className="relative inline-block text-[var(--primary)]">

                Measurable
                <span className="text-white"> Impact.</span>

              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[560px] font-[var(--font-body)] text-base leading-7 text-white/55 sm:text-lg">
              Getting noticed is only step one. What happens after that is what actually grows a business, and that is where we put our focus.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              <Link
                to="/services"
                style={{ color: "#111827" }}
                className="group inline-flex items-center gap-3 bg-white px-6 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
              >
                Explore Services

                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3.5 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
              >
                Our Work
                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* Small service indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6">

              <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-white/35">
                Digital Marketing
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-white/35">
                E-commerce
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-white/35">
                Creative Design
              </span>

            </div>

          </div>

          {/* ==========================================
              RIGHT VISUAL / PNG PLACEHOLDER
          ========================================== */}

          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[700px] hidden lg:block">

            {/* Glow behind image */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/30 blur-[100px] sm:h-[480px] sm:w-[480px]"
            />

            {/* Yellow accent glow */}
            <div
              aria-hidden="true"
              className="absolute bottom-[10%] left-[35%] h-[180px] w-[180px] rounded-full bg-[var(--secondary)]/20 blur-[90px]"
            />

            {/* ========================================
                FUTURE PNG GOES HERE
            ======================================== */}

            <div className="relative z-10 flex h-full w-full items-center justify-center">

              <img
                src="/HeroBg/heroleftimg.jpg"
                alt="GoPurple digital creative"
                className="w-[75%] max-w-[620px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
              />

            </div>

          </div>

        </div>
      </div>

      {/* ============================================
          BOTTOM SCROLL INDICATOR
      ============================================ */}

      <div className="absolute bottom-7 left-6 z-20 hidden items-center gap-3 lg:flex lg:left-12">

        <span className="h-8 w-px bg-white/20" />

        <span className="font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
          Scroll to explore
        </span>

      </div>

    </section>
  );
};

export default Hero;