import { ArrowUpRight, Check } from "lucide-react";

const principles = [
  {
    title: "Assess",
    description:
      "We take a close look at your current numbers and find exactly where your customer costs are running higher than they should.",
  },
  {
    title: "Plan",
    description:
      "We build a campaign plan shaped around your specific business, not a copy-paste playbook.",
  },
  {
    title: "Run and Adjust",
    description:
      "We manage your affiliate, performance, and online store campaigns in real time, adjusting as new data comes in.",
  },
  {
    title: "Update",
    description:
      "You receive weekly updates, including a clear breakdown of what your spend produced and what it cost to get there.",
  },
];

const GoPurpleDifference = () => {
  return (
    <section className="bg-[var(--white)] py-24 sm:py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Intro */}
        <div className="mb-10 lg:mb-5">
          <div className="mb-5 flex items-center gap-3">
            {/* <span className="h-px w-10 bg-[var(--primary)]" /> */}

            <span className="font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              How We Operate
            </span>
          </div>

          <h2 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--dark)] sm:text-5xl md:text-6xl">
            <span className="text-[var(--primary)]">Ownership </span>,{" "}
            from the very First step.
          </h2>
        </div>


        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <div>

            {/* <p className="max-w-xl font-[var(--font-body)] text-lg leading-8 text-[var(--text)] sm:text-xl">
              Digital shouldn't just look impressive. It should have a
              reason to exist.
            </p>

            <p className="mt-5 max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--text)]/75">
              At GoPurple, we combine business thinking with creative
              execution to help ambitious brands build stronger digital
              experiences and achieve meaningful growth.
            </p> */}


            {/* Principles */}
            <div className="mt-0 border-t border-[var(--border)]">

              {principles.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex gap-5 border-b border-[var(--border)] py-6"
                >
                  {/* Check */}
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Check size={14} strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold tracking-[-0.025em] text-[var(--dark)]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-lg font-[var(--font-body)] text-sm leading-6 text-[var(--text)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>


            {/* CTA */}
            <div className="mt-9">
              <a
                href="/about"
                className="group inline-flex items-center gap-3 font-[var(--font-body)] text-xs font-bold uppercase tracking-[0.15em] text-[var(--dark)]"
              >
                See What We Offer
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark)] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--primary)]">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </div>


          {/* Right Image */}
          <div className="relative">

            <div className="group relative overflow-hidden rounded-[1.75rem] bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7438096/pexels-photo-7438096.jpeg?cs=srgb&dl=pexels-cottonbro-7438096.jpg&fm=jpg"
                  alt="Creative team collaborating in a modern workspace"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Small Image Caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-white/95 px-4 py-3 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6">
                <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--dark)]">
                  Strategy × Creativity
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>

          </div>
        </div>


        {/* Bottom Statement */}
        {/* <div className="mt-20 border-t border-[var(--border)] pt-8 lg:mt-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <p className="max-w-3xl font-[var(--font-display)] text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-[var(--dark)] sm:text-3xl lg:text-4xl">
              Different thinking.
              <span className="text-[var(--primary)]">
                {" "}Better digital.
              </span>
            </p>

            <span className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text)]/40">
              GoPurple
            </span>

          </div>
        </div> */}

      </div>
    </section>
  );
};

export default GoPurpleDifference;