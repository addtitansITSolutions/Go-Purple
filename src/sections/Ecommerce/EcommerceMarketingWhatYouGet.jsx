import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShoppingBag,
  LayoutDashboard,
  Megaphone,
  RefreshCw,
} from "lucide-react";

const deliverables = [
  {
    number: "01",
    title: "E-commerce Strategy",
    description:
      "A clear growth roadmap built around your products, audience, positioning and commercial goals.",
    icon: ShoppingBag,
  },
  {
    number: "02",
    title: "Store & Experience",
    description:
      "Customer-focused journeys, landing experiences and improvements that make discovering and buying easier.",
    icon: LayoutDashboard,
  },
  {
    number: "03",
    title: "Acquisition Campaigns",
    description:
      "Performance-led campaigns across paid, social, search and other channels to bring qualified traffic.",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Retention & Growth",
    description:
      "Remarketing and retention strategies designed to increase repeat purchases and long-term customer value.",
    icon: RefreshCw,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const EcommerceMarketingWhatYouGet = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
              What You Get
            </p>

            <h2 className="max-w-[520px] font-[var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl lg:text-6xl">
              Everything your store needs to{" "}
              <span className="text-[var(--primary)]">grow.</span>
            </h2>
          </div>

          <p className="max-w-[620px] text-base leading-7 text-[var(--text)] lg:ml-auto lg:text-lg">
            From strategy and acquisition to customer experience and
            retention, we bring the pieces together so your e-commerce
            operation can move with clarity and purpose.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">

          {/* Feature Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#171323] p-7 text-white sm:p-9 lg:min-h-[520px] lg:p-11"
          >
            {/* Decorative number */}
            <div className="absolute -right-5 -top-10 select-none font-[var(--font-display)] text-[180px] font-bold leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[220px]">
              04
            </div>

            <div className="relative z-10">
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--dark)]">
                <ShoppingBag size={21} strokeWidth={1.8} />
              </div>

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Built for commerce
              </p>

              <h3 className="max-w-[500px] font-[var(--font-display)] text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                A stronger store is more than a better-looking store.
              </h3>
            </div>

            <div className="relative z-10 mt-12">
              <div className="mb-5 h-px w-full bg-white/10" />

              <div className="flex items-end justify-between gap-6">
                <p className="max-w-[360px] text-sm leading-6 text-white/55">
                  We connect strategy, experience and performance to create
                  an e-commerce ecosystem that works as one.
                </p>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 sm:flex">
                  <ArrowUpRight size={19} strokeWidth={1.6} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid"
          >
            {deliverables.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={itemVariants}
                  className={`group relative flex min-h-[170px] flex-col justify-between border-t border-[var(--border)] py-7 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[185px] sm:py-8 ${
                    index === deliverables.length - 1
                      ? "border-b"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-5">
                      <span className="pt-1 font-[var(--font-display)] text-xs font-bold tracking-[0.12em] text-[var(--primary)]">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="font-[var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-[var(--dark)] sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-[560px] text-sm leading-6 text-[var(--text)] sm:text-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white sm:flex">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end">
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.6}
                      className="text-[var(--dark)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--primary)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-4 rounded-2xl border border-[var(--border)] bg-[var(--light)] p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8"
        >
          <div>
            <p className="font-[var(--font-display)] text-lg font-semibold tracking-[-0.025em] text-[var(--dark)]">
              Strategy × Experience × Performance
            </p>

            <p className="mt-1 text-sm text-[var(--text)]">
              Built around the numbers that matter to your business.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
            Commerce that keeps moving
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceMarketingWhatYouGet;