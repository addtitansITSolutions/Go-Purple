import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Digital Marketing", href: "/services" },
    { label: "Performance Marketing", href: "/services" },
    { label: "SEO", href: "/services" },
    { label: "E-commerce", href: "/services" },
    { label: "Creative & Design", href: "/services" },
    { label: "Social Media Marketing", href: "/services" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--dark)] text-white">

      {/* --------------------------------
          Decorative Purple Glow
      -------------------------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[400px] w-[400px] rounded-full bg-[var(--secondary)]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* --------------------------------
            Main CTA
        -------------------------------- */}
        <div className="border-b border-white/10 py-16 sm:py-20 lg:py-24">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Label */}
            <div className="shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Have a project in mind?
                </span>
              </div>
            </div>

            {/* CTA Content */}
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-12 lg:gap-16">

              {/* Heading */}
              <h2 className="font-[var(--font-display)] text-3xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Let's create
                <br />
                something{" "}
                <span className="text-[var(--primary)]">
                  remarkable.
                </span>
              </h2>

              {/* CTA Button */}
              <a
                href="/contact"
                className="group inline-flex w-fit shrink-0 items-center gap-4 font-[var(--font-body)] text-sm font-bold tracking-wide text-white"
              >
                <span className="relative">
                  Let's Talk

                  <span className="absolute -bottom-1 left-0 h-px w-full bg-[var(--primary)] transition-transform duration-300 group-hover:origin-right group-hover:scale-x-0" />
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[var(--dark)]">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={2}
                  />
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* --------------------------------
            Footer Links
        -------------------------------- */}
        <div className="grid grid-cols-1 gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-20">

          {/* --------------------------------
              Brand
          -------------------------------- */}
          <div>
            <a
              href="/"
              className="inline-flex items-center"
            >
              <img
                src="/logo/Logo_GPN.png"
                alt="Smartek Digital"
                className="h-auto w-[150px] object-contain sm:w-[165px]"
              />
            </a>

            <p className="mt-5 max-w-xs font-[var(--font-body)] text-sm leading-6 text-white/50">
              GoPurple brings together digital marketing,
              e-commerce and creative design to help brands
              build stronger identities, reach the right
              audiences and create meaningful growth.
            </p>
          </div>

          {/* --------------------------------
              Explore
          -------------------------------- */}
          <div>
            <h3 className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h3>

            <ul className="mt-6 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 font-[var(--font-body)] text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --------------------------------
              Services
          -------------------------------- */}
          <div>
            <h3 className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Services
            </h3>

            <ul className="mt-6 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 font-[var(--font-body)] text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --------------------------------
              Contact
          -------------------------------- */}
          <div>
            <h3 className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Email */}
              <a
                href="mailto:info@gopurple.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[var(--primary)]"
                />

                <span className="font-[var(--font-body)] text-sm text-white/70 transition-colors duration-300 group-hover:text-white">
                  info@gopurple.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[var(--primary)]"
                />

                <span className="font-[var(--font-body)] text-sm leading-6 text-white/70">
                  Your office address goes here.
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* --------------------------------
            Bottom Bar
        -------------------------------- */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-[var(--font-body)] text-xs text-white/40">
            © {new Date().getFullYear()} GoPurple. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="/privacy-policy"
              className="font-[var(--font-body)] text-xs text-white/40 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="font-[var(--font-body)] text-xs text-white/40 transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
