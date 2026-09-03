import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  DesktopServicesMenu,
  MobileServicesMenu,
  MobileServicesToggle,
} from "./ServicesMenu";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* --------------------------------
     Scroll Detection
  -------------------------------- */
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
     Lock Page When Mobile Menu Opens
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
     Close Mobile Menu On Resize
  -------------------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* --------------------------------
     Close Mobile Menu
  -------------------------------- */
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-10 xl:px-12">

        {/* =========================================
            LOGO
        ========================================= */}
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="relative z-[110] flex items-center"
        >
          <img
            src="/logo/Logo_GPN.png"
            alt="GoPurple"
            className="h-auto w-[150px] object-contain transition-all duration-500 sm:w-[165px]"
          />
        </NavLink>

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) => {
            /* ---------------------------------------
               SERVICES
            --------------------------------------- */
            if (item.name === "Services") {
              return (
                <div
                  key={item.name}
                  className="relative flex h-[88px] items-center"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    style={{ color: scrolled ? "var(--dark)" : "#ffffff" }}
                    className="group relative flex items-center gap-1.5 py-2 font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300"
                  >
                    {({ isActive }) => (
                      <>
                        <span>Services</span>

                        <ChevronDown
                          size={13}
                          strokeWidth={2}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />

                        <span
                          className={`absolute bottom-0 left-0 h-[1px] bg-[var(--primary)] transition-all duration-300 ${
                            isActive || servicesOpen
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>

                  <DesktopServicesMenu
                    isOpen={servicesOpen}
                    onClose={() => setServicesOpen(false)}
                  />
                </div>
              );
            }

            /* ---------------------------------------
               NORMAL DESKTOP NAV ITEMS
            --------------------------------------- */
            return (
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
            );
          })}
        </nav>

        {/* =========================================
            DESKTOP CTA
        ========================================= */}
        <div className="hidden lg:block">
          <NavLink
            to="/contact"
            style={{
              color: scrolled ? "var(--dark)" : "#ffffff",
              borderColor: scrolled
                ? "var(--primary)"
                : "rgba(255,255,255,0.6)",
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

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================= */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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

        {/* =========================================
            MOBILE MENU
        ========================================= */}
        <div
          className={`absolute inset-x-0 top-0 h-screen overflow-y-auto bg-[var(--dark)] transition-all duration-500 lg:hidden ${
            mobileOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <div className="flex min-h-full flex-col justify-center px-8 py-28 sm:px-12">

            {/* ---------------------------------------
                MOBILE NAVIGATION
            --------------------------------------- */}
            <nav className="flex flex-col gap-5">
              {navItems.map((item, index) => {
                /* -------------------------------------
                   MOBILE SERVICES
                ------------------------------------- */
                if (item.name === "Services") {
                  return (
                    <div key={item.name}>
                      <div className="flex items-center gap-4">

                        {/* Services Link */}
                        <NavLink
                          to={item.path}
                          onClick={closeMobileMenu}
                          className={({ isActive }) =>
                            `group flex flex-1 items-center gap-4 font-[var(--font-display)] text-4xl font-light transition-colors duration-300 sm:text-5xl ${
                              isActive
                                ? "text-[var(--primary)]"
                                : "text-white hover:text-[var(--primary)]"
                            }`
                          }
                        >
                          <span
                            className={`text-xs ${
                              mobileServicesOpen
                                ? "text-[var(--primary)]"
                                : "text-white/30"
                            }`}
                          >
                            0{index + 1}
                          </span>

                          Services
                        </NavLink>

                        {/* Services Toggle */}
                        <MobileServicesToggle
                          isOpen={mobileServicesOpen}
                          setIsOpen={setMobileServicesOpen}
                        />
                      </div>

                      {/* Services Dropdown */}
                      <MobileServicesMenu
                        isOpen={mobileServicesOpen}
                        onClose={closeMobileMenu}
                      />
                    </div>
                  );
                }

                /* -------------------------------------
                   NORMAL MOBILE ITEMS
                ------------------------------------- */
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={closeMobileMenu}
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
                );
              })}
            </nav>

            {/* ---------------------------------------
                MOBILE CONTACT
            --------------------------------------- */}
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

            {/* ---------------------------------------
                MOBILE TAGLINE
            --------------------------------------- */}
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