import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    category: "E-commerce",
    title: "Digital experiences that convert.",
    description:
      "A commerce-focused digital experience designed around stronger storytelling, smoother journeys and better conversion.",
    tags: ["E-commerce", "UI / UX", "Strategy"],
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1800",
    size: "large",
  },
  {
    number: "02",
    category: "Creative & Branding",
    title: "Making a brand impossible to miss.",
    description:
      "A distinctive visual direction created to give a growing brand more personality across digital touchpoints.",
    tags: ["Branding", "Creative", "Digital"],
    image:
      "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1600",
    size: "small",
  },
  {
    number: "03",
    category: "Digital Marketing",
    title: "Turning attention into momentum.",
    description:
      "A performance-led digital campaign built around stronger creative, sharper targeting and measurable growth.",
    tags: ["Performance", "Social", "Growth"],
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    size: "small",
  },
];

const ease = [0.22, 1, 0.36, 1];

const SelectedWork = () => {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease }}
          className="mb-16 flex flex-col gap-8 sm:mb-20 lg:mb-24 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[var(--primary)]" /> */}

              <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                Selected Work
              </span>
            </div>

            <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--dark)] sm:text-5xl md:text-6xl lg:text-7xl">
              Ideas made
              <br />
              <span className="text-[var(--primary)]">
                real.
              </span>
            </h2>
          </div>

          <p className="max-w-sm font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
            A glimpse at the kind of digital experiences, creative work and
            growth-focused thinking we bring to ambitious brands.
          </p>
        </motion.div>


        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease }}
          className="group"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[var(--light)]">
            <div className="aspect-[16/9] overflow-hidden sm:aspect-[16/8.5]">
              <motion.img
                src={projects[0].image}
                alt={projects[0].title}
                loading="lazy"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.2, ease }}
                whileHover={{ scale: 1.04 }}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Project Number */}
            <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white font-[var(--font-display)] text-xs font-semibold text-[var(--dark)] sm:left-7 sm:top-7">
              {projects[0].number}
            </div>

            {/* Arrow */}
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-white sm:right-7 sm:top-7"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          {/* Information */}
          <div className="mt-7 grid gap-5 border-b border-[var(--border)] pb-12 sm:mt-8 lg:grid-cols-12">

            <div className="lg:col-span-7">
              <p className="mb-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-[var(--primary)]">
                {projects[0].category}
              </p>

              <h3 className="max-w-3xl font-[var(--font-display)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
                {projects[0].title}
              </h3>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-md font-[var(--font-body)] text-sm leading-7 text-[var(--text)]">
                {projects[0].description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>


        {/* =====================================================
            SECONDARY PROJECTS
        ===================================================== */}
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-12">

          {projects.slice(1).map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease,
              }}
              className="group"
            >

              {/* Image */}
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[var(--light)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 1.1,
                      ease,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white font-[var(--font-display)] text-xs font-semibold text-[var(--dark)]">
                  {project.number}
                </div>

                {/* Arrow */}
                <motion.div
                  whileHover={{
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark)] text-white"
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </div>


              {/* Content */}
              <div className="mt-6">

                <p className="mb-2 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-[var(--primary)]">
                  {project.category}
                </p>

                <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--dark)] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-lg font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--light)] px-3 py-1.5 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.article>
          ))}

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mt-16 flex flex-col gap-6 border-t border-[var(--border)] pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
            Want to see what we could create for your brand?
          </p>

          <Link
            to="/projects"
            className="group inline-flex w-fit items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-[var(--dark)]"
          >
            View all projects

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--primary)]">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SelectedWork;