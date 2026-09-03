import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ forceScrolled = false }) => {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(forceScrolled || window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [forceScrolled]);

  /* --------------------------------
     Lock page when mobile menu opens
  -------------------------------- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  /* --------------------------------
     Close mobile menu on resize
  -------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* --------------------------------
          Navbar
      -------------------------------- */}
      <div className="relative mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-10 xl:px-12">

        {/* --------------------------------
            GoPurple Logo
        -------------------------------- */}
        <NavLink
          to="/"
          onClick={() => setMobileOpen(false)}
          className="relative z-[110] flex items-center gap-3"
        >
          {/* Purple Brand Mark */}
          <div className="relative flex h-11 w-11 items-center justify-center">
            <div className="absolute left-0 top-0 h-7 w-7 rounded-sm bg-[var(--primary)]" />

            <div className="absolute bottom-0 right-0 h-7 w-7 rounded-sm bg-[var(--secondary)]" />

            <span className="relative z-10 font-[var(--font-display)] text-sm font-bold text-white">
              GP
            </span>
          </div>

          {/* Brand Name */}
          <div className="hidden leading-none sm:block">
            <span
              className={`block font-[var(--font-display)] text-[17px] font-bold tracking-[0.08em] transition-colors duration-500 ${
                scrolled
                  ? "text-[var(--dark)]"
                  : "text-white"
              }`}
            >
              GO<span className="text-[var(--primary)]">PURPLE</span>
            </span>

            <span
              className={`mt-1 block text-[8px] font-semibold tracking-[0.3em] transition-colors duration-500 ${
                scrolled
                  ? "text-[var(--secondary)]"
                  : "text-white/70"
              }`}
            >
              DIGITAL • ECOMMERCE • CREATIVE
            </span>
          </div>
        </NavLink>

        {/* --------------------------------
            Desktop Navigation
        -------------------------------- */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={{
                color: scrolled ? "var(--dark)" : "#ffffff",
              }}
              className="group relative py-2 font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300"
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[var(--primary)] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* --------------------------------
            Desktop CTA
        -------------------------------- */}
        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            style={{
              color: scrolled ? "var(--dark)" : "#ffffff",
              borderColor: scrolled
                ? "var(--primary)"
                : "rgba(255, 255, 255, 0.6)",
            }}
            className={`group flex items-center gap-2 border px-5 py-3 font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
              scrolled
                ? "hover:bg-[var(--primary)] hover:text-white"
                : "hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
            }`}
          >
            Let's Talk

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

        {/* --------------------------------
            Mobile Menu Button
        -------------------------------- */}
        <button
          type="button"
          aria-label={
            mobileOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`relative z-[110] flex h-11 w-11 items-center justify-center transition-colors duration-300 lg:hidden ${
            mobileOpen
              ? "text-white"
              : scrolled
                ? "text-[var(--dark)]"
                : "text-white"
          }`}
        >
          {mobileOpen ? (
            <X size={25} strokeWidth={1.8} />
          ) : (
            <Menu size={25} strokeWidth={1.8} />
          )}
        </button>

        {/* --------------------------------
            Mobile Menu
        -------------------------------- */}
        <div
          className={`absolute inset-x-0 top-0 h-screen bg-[var(--dark)] transition-all duration-500 lg:hidden ${
            mobileOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 pointer-events-none opacity-0"
          }`}
        >
          <div className="flex h-full flex-col justify-center px-8 sm:px-12">

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-5">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 font-[var(--font-display)] text-4xl font-light transition-colors duration-300 sm:text-5xl ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-white hover:text-[var(--primary)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`text-xs transition-colors duration-300 ${
                          isActive
                            ? "text-[var(--primary)]"
                            : "text-white/30"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      {item.name}

                      <ArrowUpRight
                        size={20}
                        className="ml-1 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Contact */}
            <div className="mt-14 border-t border-white/10 pt-6">
              <p className="font-[var(--font-body)] text-xs uppercase tracking-[0.2em] text-white/40">
                Start a conversation
              </p>

              <a
                href="mailto:info@gopurple.com"
                className="mt-2 inline-block font-[var(--font-body)] text-lg text-white transition-colors duration-300 hover:text-[var(--primary)]"
              >
                info@gopurple.com
              </a>
            </div>

            {/* Mobile Services Tagline */}
            <p className="mt-8 max-w-sm font-[var(--font-body)] text-xs leading-relaxed text-white/30">
              Digital Marketing · E-commerce · Creative Design
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;