import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "Banking & Fintech",
    title: "NovaPay",
    description:
      "Digital lending and payment experiences built around simpler financial journeys.",
    tags: ["Digital Lending", "UPI"],
    image:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "02",
    category: "Betting & iGaming",
    title: "PlayArena",
    description:
      "Engaging digital experiences for fantasy sports, eSports and virtual sports.",
    tags: ["Fantasy Sports", "eSports"],
    image:
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "03",
    category: "Utilities",
    title: "Shield",
    description:
      "Simple and intuitive experiences for security, VPN and productivity products.",
    tags: ["VPN", "Security"],
    image:
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "04",
    category: "Health & Fitness",
    title: "Vita",
    description:
      "Digital wellness experiences connecting fitness, nutrition and healthy lifestyles.",
    tags: ["Fitness", "Wellness"],
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "05",
    category: "E-commerce",
    title: "Maison",
    description:
      "Commerce experiences designed for fashion, beauty, home and everyday shopping.",
    tags: ["Fashion", "Shopping"],
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "06",
    category: "Education",
    title: "Learnly",
    description:
      "Learning experiences across coding, technology, languages and AI tutoring.",
    tags: ["Coding", "AI Tutor"],
    image:
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

const FeaturedProject = () => {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <section
      id="featured-project"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between border-b border-[var(--border)] pb-5"
        >
          <div className="flex items-center gap-3">
            {/* <span className="h-px w-8 bg-[var(--primary)]" /> */}

            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Featured Products
            </span>
          </div>

          <span className="font-[var(--font-display)] text-xs font-semibold text-gray-300">
            {project.number} / 06
          </span>
        </motion.div>

        {/* Main */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Product List */}
          <div>
            {projects.map((item, index) => {
              const isActive = activeProject === index;

              return (
                <motion.button
                  key={item.number}
                  onMouseEnter={() => setActiveProject(index)}
                  onClick={() => setActiveProject(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group flex w-full items-center gap-5 border-b border-[var(--border)] py-5 text-left sm:py-6"
                >
                  {/* Number */}
                  <span
                    className={`font-[var(--font-display)] text-xs transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-gray-300"
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Title */}
                  <div className="flex-1">
                    <h3
                      className={`font-[var(--font-display)] text-2xl font-semibold tracking-[-0.04em] transition-all duration-300 sm:text-3xl ${
                        isActive
                          ? "translate-x-1 text-[var(--dark)]"
                          : "text-gray-400 group-hover:text-[var(--dark)]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <span
                      className={`mt-1 block font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.14em] transition-opacity duration-300 ${
                        isActive
                          ? "opacity-100 text-[var(--primary)]"
                          : "opacity-0"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{
                      x: isActive ? 0 : -5,
                      opacity: isActive ? 1 : 0,
                    }}
                    className="text-[var(--primary)]"
                  >
                    <ArrowUpRight size={18} />
                  </motion.span>
                </motion.button>
              );
            })}
          </div>

          {/* Preview */}
          <div className="relative">

            <AnimatePresence mode="wait">
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#eeeaf1] p-3 sm:rounded-[30px] sm:p-4">
                  <div className="relative h-full overflow-hidden rounded-[18px] sm:rounded-[22px]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white font-[var(--font-display)] text-xs font-bold text-[var(--dark)]">
                      {project.number}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-md">
                    <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                      {project.category}
                    </span>

                    <h3 className="mt-2 font-[var(--font-display)] text-3xl font-semibold tracking-[-0.05em] text-[var(--dark)]">
                      {project.title}
                    </h3>

                    <p className="mt-3 font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:max-w-[220px] sm:justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.08em] text-[var(--dark)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;