import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Palette,
  MonitorSmartphone,
  Megaphone,
  Sparkles,
} from "lucide-react";

const CreativeDesignWhatWeCreate = () => {
  const items = [
    {
      number: "01",
      title: (
        <>
          Branding
          <br />
          & Identity
        </>
      ),
      description:
        "Visual identities that make your brand recognizable and consistent across every touchpoint.",
      icon: Palette,
      type: "dark",
    },
    {
      number: "02",
      title: (
        <>
          UI / UX
          <br />
          Design
        </>
      ),
      description:
        "Interfaces and digital journeys designed around people, purpose and effortless interaction.",
      icon: MonitorSmartphone,
      type: "light",
    },
    {
      number: "03",
      title: (
        <>
          Campaign
          <br />
          Creative
        </>
      ),
      description:
        "Creative concepts built to capture attention, communicate clearly and move people toward action.",
      icon: Megaphone,
      type: "yellow",
    },
    {
      number: "04",
      title: (
        <>
          Digital
          <br />
          Experiences
        </>
      ),
      description:
        "Websites and digital experiences where brand, content and interaction work together.",
      icon: Sparkles,
      type: "dark",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#100C1C] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">

        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />

              <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                What We Create
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm font-[var(--font-body)] text-sm leading-6 text-white/50 lg:text-right"
          >
            Creative systems built to make brands clearer, experiences better
            and ideas harder to ignore.
          </motion.p>
        </div>

        {/* Creative Layout */}
        <div className="mt-14 grid gap-5 sm:mt-16 lg:mt-20 lg:grid-cols-[1fr_1.4fr_1fr] lg:items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            <CreativeCard item={items[0]} delay={0.1} />

            <CreativeCard item={items[2]} delay={0.25} />
          </div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[32px] bg-[var(--primary)] px-7 py-14 text-center sm:min-h-[500px] sm:px-12 lg:min-h-full"
          >
            {/* Decorative elements */}
            <div className="absolute left-7 top-7 h-3 w-3 rounded-full bg-white/40" />

            <div className="absolute right-7 top-7 h-16 w-16 rounded-full border border-white/15 sm:h-20 sm:w-20" />

            <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full border border-white/10" />

            <div className="absolute bottom-10 right-10 h-2 w-2 rounded-full bg-[var(--secondary)]" />

            {/* Main content */}
            <div className="relative z-10">
              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:text-xs">
                Creative Direction
              </span>

              <h2 className="mt-5 font-[var(--font-display)] text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-[64px] xl:text-[72px]">
                Make the
                <br />
                <span className="text-[var(--secondary)]">
                  idea impossible
                </span>
                <br />
                to miss.
              </h2>

              <div className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--dark)]">
                <ArrowUpRight size={20} strokeWidth={1.8} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            <CreativeCard item={items[1]} delay={0.15} />

            <CreativeCard item={items[3]} delay={0.3} />
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl font-[var(--font-display)] text-xl font-semibold leading-tight tracking-[-0.03em] sm:text-2xl">
            One creative vision.
            <span className="text-white/40">
              {" "}
              Many ways to bring it to life.
            </span>
          </p>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[var(--dark)]">
            <ArrowUpRight size={20} strokeWidth={1.8} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* --------------------------------------------------
   Creative Card
-------------------------------------------------- */

const CreativeCard = ({ item, delay }) => {
  const Icon = item.icon;

  const styles = {
    dark: "bg-white/[0.05] border-white/10 text-white",
    light: "bg-white text-[var(--dark)] border-white",
    yellow: "bg-[var(--secondary)] text-[var(--dark)] border-[var(--secondary)]",
  };

  const mutedText = {
    dark: "text-white/50",
    light: "text-[var(--text)]",
    yellow: "text-black/60",
  };

  const numberColor = {
    dark: "text-[var(--secondary)]",
    light: "text-[var(--primary)]",
    yellow: "text-black/50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={`group flex min-h-[330px] flex-col justify-between rounded-[28px] border p-6 transition-transform duration-500 hover:-translate-y-1 sm:min-h-[360px] sm:p-7 lg:min-h-[320px] ${styles[item.type]}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`font-[var(--font-display)] text-sm font-semibold ${numberColor[item.type]}`}
        >
          {item.number}
        </span>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${
            item.type === "light"
              ? "bg-[var(--light)]"
              : item.type === "yellow"
              ? "bg-black/10"
              : "bg-white/10"
          }`}
        >
          <Icon
            size={20}
            strokeWidth={1.5}
            className={
              item.type === "dark"
                ? "text-white/60"
                : item.type === "light"
                ? "text-[var(--primary)]"
                : "text-black/60"
            }
          />
        </div>
      </div>

      <div>
        <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-3xl">
          {item.title}
        </h3>

        <p
          className={`mt-4 max-w-sm font-[var(--font-body)] text-sm leading-6 ${mutedText[item.type]}`}
        >
          {item.description}
        </p>
      </div>

      <div
        className={`mt-7 flex items-center justify-between border-t pt-4 ${
          item.type === "dark"
            ? "border-white/10"
            : item.type === "yellow"
            ? "border-black/10"
            : "border-[var(--border)]"
        }`}
      >
        <span
          className={`font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.16em] ${mutedText[item.type]}`}
        >
          Creative discipline
        </span>

        <ArrowUpRight
          size={17}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.div>
  );
};

export default CreativeDesignWhatWeCreate;