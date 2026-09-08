import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceMarketingHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-18 sm:px-10 sm:pt-32 lg:px-16 lg:pt-16">

        {/* Main heading */}
        <div className="relative pt-12 sm:pt-16 lg:pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              max-w-[1200px]
              font-[var(--font-display)]
              text-[16vw]
              font-semibold
              leading-[0.82]
              tracking-[-0.075em]
              text-[var(--dark)]
              sm:text-[12vw]
              md:text-[10vw]
              lg:text-[9vw]
              xl:text-[110px]
            "
          >
            E-COMMERCE
            <br />

            <span className="relative">
              MARKETING
            </span>
          </motion.h1>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.025,
              transition: {
                duration: 0.45,
                ease: "easeOut",
              },
            }}
            className="
              group
              relative
              z-20
              mt-8
              ml-auto
              w-full
              max-w-[740px]
              cursor-pointer
              sm:mt-10
              xl:-mt-10
            "
          >
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src="/services/ecommerce.jpg"
                alt="E-commerce shopping experience"
                className="
                  aspect-[16/9]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.06]
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/70 transition-colors duration-500 group-hover:bg-black/10" />

              {/* Image label */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                <div>
                  <p className="font-[var(--font-body)] text-[9px] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-[10px]">
                    Strategy / Commerce / Conversion
                  </p>

                  <p className="mt-1 max-w-[420px] font-[var(--font-display)] text-lg font-semibold leading-tight text-white sm:text-xl">
                    Built to turn browsing into buying.
                  </p>
                </div>

                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[var(--dark)]
                  "
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>
            </div>

            {/* Purple side accent */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "55%" }}
              transition={{
                delay: 0.8,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                absolute
                -right-3
                bottom-0
                hidden
                w-[3px]
                bg-[var(--primary)]
                sm:block
                sm:-right-4
              "
            />
          </motion.div>

          {/* Supporting copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.7,
            }}
            className="
              relative
              z-30
              mt-8
              w-full
              max-w-[560px]
              sm:mt-10
              md:max-w-[620px]
              lg:max-w-[620px]
              xl:-mt-45
              xl:ml-8
              xl:max-w-[520px]
            "
          >
            <p className="font-[var(--font-body)] text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
              E-commerce growth is about more than getting people to your
              store. We create strategies and experiences that make it easier
              to discover, trust, buy and come back for more.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                style={{ color: "var(--white)" }}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[var(--dark)]
                  px-6
                  py-3.5
                  font-[var(--font-body)]
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[var(--primary)]
                  sm:w-auto
                "
              >
                Let's talk

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 mb-10 grid rounded-2xl border border-[var(--border)] bg-[var(--secondary)] px-6 py-6 sm:mt-20 sm:grid-cols-3 sm:px-10 sm:py-8 lg:px-10"
        >
          {/* Item 1 */}
          <div className="border-b border-[var(--border)] pb-5 sm:border-b-0 sm:border-r sm:pb-0">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
              What we do
            </span>

            <p className="mt-2 font-[var(--font-display)] text-sm font-semibold text-[var(--dark)]">
              Build better shopping journeys
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-[var(--border)] py-5 sm:border-b-0 sm:border-r sm:px-8 sm:py-0">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
              Approach
            </span>

            <p className="mt-2 font-[var(--font-display)] text-sm font-semibold text-[var(--dark)]">
              Discovery × Experience × Conversion
            </p>
          </div>

          {/* Item 3 */}
          <div className="pt-5 sm:pl-8 sm:pt-0">
            <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
              Result
            </span>

            <p className="mt-2 font-[var(--font-display)] text-sm font-semibold text-[var(--dark)]">
              More customers. More value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceMarketingHero;