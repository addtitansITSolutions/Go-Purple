import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../sections/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar forceScrolled />

      <main>
        {/* Contact Intro */}
        <section className="bg-white pt-28 sm:pt-32 lg:pt-36">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              
              {/* Left Content */}
              <div className="max-w-[560px]">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[var(--primary)]" />

                  <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)] sm:text-[11px]">
                    Contact Us
                  </span>
                </div>

                <h1 className="mt-7 font-[var(--font-display)] text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-[var(--dark)] sm:text-6xl lg:text-7xl">
                  Let's talk about
                  <br />
                  <span className="text-[var(--primary)]">
                    what's next.
                  </span>
                </h1>

                <p className="mt-8 max-w-[500px] font-[var(--font-body)] text-[14px] leading-[1.85] text-[var(--text)] sm:text-[15px]">
                  Have a project, idea or question? Tell us a little about
                  what you're working on and we'll get back to you.
                </p>

                {/* Contact Details */}
                <div className="mt-12 border-t border-[var(--border)] pt-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    
                    <div>
                      <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
                        Email
                      </span>

                      <a
                        href="mailto:info@smartekdigital.com"
                        className="mt-2 block font-[var(--font-body)] text-sm font-semibold text-[var(--dark)] transition-colors duration-300 hover:text-[var(--primary)]"
                      >
                        info@smartekdigital.com
                      </a>
                    </div>

                    <div>
                      <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
                        Location
                      </span>

                      <p className="mt-2 font-[var(--font-body)] text-sm font-semibold text-[var(--dark)]">
                        India
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Form */}
              <ContactForm />

            </div>
          </div>
        </section>

        {/* Bottom Statement */}
        <section className="bg-[var(--light)] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-8 lg:grid-cols-[0.5fr_1.5fr] lg:gap-24">
              
              <div className="flex items-start gap-3">
                <span className="mt-2 h-[2px] w-8 bg-[var(--secondary)]" />

                <span className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text)]">
                  Start a conversation
                </span>
              </div>

              <h2 className="max-w-[900px] font-[var(--font-display)] text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-[var(--dark)] sm:text-4xl lg:text-5xl">
                Good things often start with a{" "}
                <span className="text-[var(--primary)]">
                  simple conversation.
                </span>
              </h2>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;