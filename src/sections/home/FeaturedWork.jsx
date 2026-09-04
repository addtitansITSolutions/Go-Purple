import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    category: "Banking & Fintech",
    title: "NovaPay",
    subtitle: "A smarter digital lending experience.",
    description:
      "A modern fintech experience built around digital lending, seamless payments and a simpler customer journey across financial services.",
    tags: ["Digital Lending", "UPI", "Fintech"],
    image:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "02",
    category: "Betting & iGaming",
    title: "PlayArena",
    subtitle: "A more engaging way to play.",
    description:
      "A high-energy digital platform experience designed for fantasy sports, eSports and virtual sports audiences.",
    tags: ["Fantasy Sports", "eSports", "iGaming"],
    image:
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "03",
    category: "Utilities",
    title: "Shield",
    subtitle: "Privacy and productivity, simplified.",
    description:
      "A clean digital product experience focused on VPN, security and everyday utility tools for modern users.",
    tags: ["VPN", "Security", "Productivity"],
    image:
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  // {
  //   number: "04",
  //   category: "Health & Fitness",
  //   title: "Vita",
  //   subtitle: "Building healthier digital habits.",
  //   description:
  //     "A wellness-focused experience bringing fitness tracking, nutrition, personal training and lifestyle tools together.",
  //   tags: ["Fitness", "Nutrition", "Wellness"],
  //   image:
  //     "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1400",
  // },
  // {
  //   number: "05",
  //   category: "E-commerce",
  //   title: "Maison",
  //   subtitle: "A better way to discover and shop.",
  //   description:
  //     "A commerce experience designed for modern shopping across home, furniture, beauty, fashion and everyday essentials.",
  //   tags: ["Fashion", "Home & Furniture", "Shopping"],
  //   image:
  //     "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1400",
  // },
  // {
  //   number: "06",
  //   category: "Education",
  //   title: "Learnly",
  //   subtitle: "Learning that moves at your pace.",
  //   description:
  //     "An intuitive learning platform bringing coding, technology, languages and AI-powered tutoring into one experience.",
  //   tags: ["Coding", "Online Learning", "AI Tutor"],
  //   image:
  //     "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1400",
  // },
];

const ease = [0.22, 1, 0.36, 1];

const FeaturedProject = () => {
  return (
    <section
      id="featured-projects"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 flex items-end justify-between border-b border-[var(--border)] pb-5 sm:mb-12"
        >
          <div>
            <div className="flex items-center gap-3">
              {/* <span className="h-px w-8 bg-[var(--primary)]" /> */}

              <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Featured Projects
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl font-[var(--font-display)] text-3xl font-semibold tracking-[-0.05em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
              Work designed to move brands forward.
            </h2>
          </div>

          <span className="hidden font-[var(--font-display)] text-xs font-semibold text-gray-300 sm:block">
            PROJECTS
          </span>
        </motion.div>

        {/* =====================================================
            PROJECT LIST
        ===================================================== */}
        <div className="space-y-5 sm:space-y-6">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              className="group overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--light)] transition-all duration-500 hover:border-gray-300 sm:rounded-[30px]"
            >
              <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.58fr)]">

                {/* =================================================
                    PROJECT CONTENT
                ================================================= */}
                <div className="flex min-h-[390px] flex-col justify-between p-7 sm:p-9 md:p-10 lg:min-h-[360px] lg:p-11 xl:p-12">

                  <div>

                    {/* Number + Category */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-[var(--font-display)] text-xs font-bold text-[var(--primary)]">
                          {project.number}
                        </span>

                        <span className="h-px w-6 bg-gray-300" />

                        <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500">
                          {project.category}
                        </span>
                      </div>

                      {/* Desktop small number */}
                      <span className="font-[var(--font-display)] text-[10px] font-semibold text-gray-300">
                        PROJECT / {project.number}
                      </span>
                    </div>

                    {/* Project Name */}
                    <h3 className="mt-8 font-[var(--font-display)] text-5xl font-semibold leading-[0.88] tracking-[-0.065em] text-[var(--dark)] sm:text-6xl lg:mt-7 lg:text-6xl xl:text-7xl">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-5 max-w-xl font-[var(--font-display)] text-lg font-medium leading-[1.2] tracking-[-0.025em] text-[var(--dark)] sm:text-xl">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-4 max-w-lg font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 bg-white px-3 py-1.5 font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.1em] text-gray-500 transition-colors duration-300 group-hover:border-[var(--primary)] group-hover:text-[var(--primary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                        GoPurple
                      </span>

                      <p className="mt-1 font-[var(--font-display)] text-xs font-semibold tracking-[-0.01em] text-[var(--dark)]">
                        Strategy × Creativity × Execution
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="group/link inline-flex w-fit items-center gap-3 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--dark)] transition-colors duration-300 hover:text-[var(--primary)]"
                    >
                      View project

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-all duration-300 group-hover/link:rotate-45 group-hover/link:bg-[var(--primary)]">
                        <ArrowUpRight size={15} />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* =================================================
                    COMPACT IMAGE
                ================================================= */}
                <div className="flex items-center justify-center bg-[#e9e4ed] p-6 sm:p-8 lg:p-8 xl:p-10">

                  <motion.div
                    className="w-full max-w-[500px]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <div className="group/image relative aspect-[4/3] overflow-hidden rounded-[20px] bg-white shadow-[0_18px_45px_rgba(17,24,39,0.10)] sm:rounded-[22px]">

                      <motion.img
                        src={project.image}
                        alt={project.subtitle}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.04]"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover/image:opacity-0" />

                      {/* Number */}
                      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white font-[var(--font-display)] text-[10px] font-bold text-[var(--dark)] shadow-sm">
                        {project.number}
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-all duration-300 group-hover/image:rotate-45 group-hover/image:bg-[var(--primary)]">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-4 flex items-center justify-between px-1">
                      <span className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.14em] text-gray-500">
                        {project.category}
                      </span>

                      <span className="h-px w-7 bg-gray-300" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-10 flex flex-col gap-5 border-b border-[var(--border)] pb-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl font-[var(--font-display)] text-lg font-medium leading-[1.3] tracking-[-0.03em] text-[var(--dark)] sm:text-xl">
            Different challenges. Different industries.{" "}
            <span className="text-[var(--primary)]">
              One focus — meaningful digital growth.
            </span>
          </p>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--dark)] hover:text-[var(--primary)]"
          >
            Start a project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;