import { ArrowUpRight, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export const serviceItems = [
  {
    number: "01",
    name: "Digital Marketing",
    path: "/services/digital-marketing",
    description:
      "Build visibility, engagement and meaningful growth.",
  },
  {
    number: "02",
    name: "Performance Marketing",
    path: "/services/performance-marketing",
    description:
      "Turn paid media into measurable business results.",
  },
  {
    number: "03",
    name: "SEO",
    path: "/services/seo",
    description:
      "Get discovered by the people actively looking for you.",
  },
  {
    number: "04",
    name: "E-commerce",
    path: "/services/e-commerce",
    description:
      "Create digital shopping experiences that convert.",
  },
  {
    number: "05",
    name: "Creative & Design",
    path: "/services/creative-design",
    description:
      "Give your brand a visual identity people remember.",
  },
  {
    number: "06",
    name: "Social Media Marketing",
    path: "/services/social-media-marketing",
    description:
      "Create social content that starts conversations.",
  },
  
];

/* =====================================================
   DESKTOP SERVICES MENU
===================================================== */

export const DesktopServicesMenu = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`absolute left-1/2 top-[70px] w-[720px] -translate-x-1/2 pt-3 transition-all duration-300 ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <div className="overflow-hidden border border-[var(--border)] bg-white shadow-[0_25px_70px_rgba(17,24,39,0.12)]">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-[var(--border)] px-7 py-6">
          <div>
            <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              What We Do
            </span>

            <h3 className="mt-2 font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--dark)]">
              Everything your brand needs.
            </h3>
          </div>

          <NavLink
            to="/services"
            onClick={onClose}
            className="group hidden items-center gap-2 font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--text)] sm:flex"
          >
            View all services

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2">
          {serviceItems.map((service) => (
            <NavLink
              key={service.name}
              to={service.path}
              onClick={onClose}
              className="group border-b border-r border-[var(--border)] px-7 py-6 transition-colors duration-300 hover:bg-[var(--light)]"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="font-[var(--font-body)] text-[9px] font-bold tracking-[0.1em] text-[var(--primary)]">
                  {service.number}
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="text-[var(--dark)] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </div>

              <h4 className="mt-4 font-[var(--font-display)] text-base font-semibold tracking-[-0.02em] text-[var(--dark)]">
                {service.name}
              </h4>

              <p className="mt-2 max-w-[260px] font-[var(--font-body)] text-xs leading-5 text-[var(--text)]">
                {service.description}
              </p>
            </NavLink>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="flex items-center justify-between bg-[var(--dark)] px-7 py-4">
          <span className="font-[var(--font-body)] text-[9px] uppercase tracking-[0.18em] text-white/40">
            Digital · E-commerce · Creative
          </span>

          <NavLink
            to="/contact"
            onClick={onClose}
            className="group flex items-center gap-2 font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.15em] text-white"
          >
            Start a project

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>
        </div>

      </div>
    </div>
  );
};

/* =====================================================
   MOBILE SERVICES MENU
===================================================== */

export const MobileServicesMenu = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`grid transition-all duration-500 ${
        isOpen
          ? "mt-5 grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="ml-8 border-l border-white/10 pl-5">

          {serviceItems.map((service) => (
            <NavLink
              key={service.name}
              to={service.path}
              onClick={onClose}
              className="group flex items-start gap-4 border-b border-white/5 py-4 last:border-b-0"
            >
              {/* Number */}
              <span className="mt-1 font-[var(--font-body)] text-[9px] text-[var(--primary)]">
                {service.number}
              </span>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-[var(--font-display)] text-lg font-medium text-white transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {service.name}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  />
                </div>

                <p className="mt-1 max-w-xs font-[var(--font-body)] text-[10px] leading-5 text-white/30">
                  {service.description}
                </p>
              </div>
            </NavLink>
          ))}

        </div>
      </div>
    </div>
  );
};

/* =====================================================
   MOBILE SERVICES TOGGLE
===================================================== */

export const MobileServicesToggle = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      type="button"
      aria-label="Toggle services"
      aria-expanded={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
        isOpen
          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
          : "border-white/20 text-white"
      }`}
    >
      <ChevronDown
        size={18}
        strokeWidth={1.7}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};