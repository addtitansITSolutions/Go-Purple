import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ContactForm = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const company = form.company.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    const newErrors = {};

    // Name validation
    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s\-()]{7,20}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    // Service validation
    if (!service) {
      newErrors.service = "Please select a service.";
    }

    // Message validation
    if (!message) {
      newErrors.message = "Please tell us about your project.";
    } else if (message.length < 20) {
      newErrors.message =
        "Please provide a little more detail about your project.";
    }

    return {
      errors: newErrors,
      values: {
        name,
        email,
        phone,
        company,
        service,
        message,
      },
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const { errors: validationErrors, values } = validateForm(form);

    setErrors(validationErrors);

    // Stop if validation fails
    if (Object.keys(validationErrors).length > 0) {
      const firstError = Object.keys(validationErrors)[0];

      form.elements[firstError]?.focus();

      return;
    }

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = values;

    // Email subject
    const subject = `New ${service} Enquiry - GoPurple`;

    // Email body
    const body = `
Hello GoPurple Team,

I would like to get in touch regarding your services.

--------------------------------
CONTACT DETAILS
--------------------------------

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "Not provided"}

--------------------------------
SERVICE
--------------------------------

${service}

--------------------------------
PROJECT DETAILS
--------------------------------

${message}

--------------------------------
Sent from GoPurple website
--------------------------------
`;

    // Create mailto URL
    const mailtoUrl =
      `mailto:info@gopurple.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Open user's default email application
    window.location.href = mailtoUrl;
  };

  const getInputClass = (field) => {
    return `mt-3 w-full border-b bg-transparent px-0 py-4 font-[var(--font-body)] text-sm text-[var(--dark)] outline-none transition-colors duration-300 placeholder:text-gray-400 ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-[var(--border)] focus:border-[var(--primary)]"
    }`;
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full"
      >

        {/* =====================================================
            NAME
        ===================================================== */}
        <div>
          <label
            htmlFor="name"
            className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]"
          >
            Your Name{" "}
            <span className="text-[var(--primary)]">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            className={getInputClass("name")}
            onChange={() => clearError("name")}
          />

          {errors.name && (
            <p className="mt-2 font-[var(--font-body)] text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>


        {/* =====================================================
            EMAIL + PHONE
        ===================================================== */}
        <div className="mt-7 grid gap-7 sm:grid-cols-2">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]"
            >
              Email Address{" "}
              <span className="text-[var(--primary)]">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              autoComplete="email"
              className={getInputClass("email")}
              onChange={() => clearError("email")}
            />

            {errors.email && (
              <p className="mt-2 font-[var(--font-body)] text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>


          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]"
            >
              Phone Number{" "}
              <span className="text-[var(--primary)]">*</span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              className={getInputClass("phone")}
              onChange={() => clearError("phone")}
            />

            {errors.phone && (
              <p className="mt-2 font-[var(--font-body)] text-xs text-red-500">
                {errors.phone}
              </p>
            )}
          </div>

        </div>


        {/* =====================================================
            COMPANY
        ===================================================== */}
        <div className="mt-7">
          <label
            htmlFor="company"
            className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]"
          >
            Company

            <span className="ml-2 font-normal normal-case tracking-normal text-gray-400">
              Optional
            </span>
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
            autoComplete="organization"
            className={getInputClass("company")}
            onChange={() => clearError("company")}
          />
        </div>


        {/* =====================================================
            SERVICE
        ===================================================== */}
        <div className="mt-7">
          <label
            htmlFor="service"
            className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]"
          >
            What Can We Help With?{" "}
            <span className="text-[var(--primary)]">*</span>
          </label>

          <select
            id="service"
            name="service"
            defaultValue=""
            className={`${getInputClass("service")} cursor-pointer`}
            onChange={() => clearError("service")}
          >
            <option value="" disabled>
              Select a service
            </option>

            <option value="Digital Marketing">
              Digital Marketing
            </option>

            <option value="E-commerce">
              E-commerce
            </option>

            <option value="Creative & Design">
              Creative & Design
            </option>

            <option value="Not sure yet">
              Not sure yet
            </option>

            <option value="Other">
              Other
            </option>
          </select>

          {errors.service && (
            <p className="mt-2 font-[var(--font-body)] text-xs text-red-500">
              {errors.service}
            </p>
          )}
        </div>


        {/* =====================================================
            MESSAGE
        ===================================================== */}
        <div className="mt-7">

          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="message"
              className="font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]"
            >
              Tell Us About Your Project{" "}
              <span className="text-[var(--primary)]">*</span>
            </label>

            <span className="shrink-0 font-[var(--font-body)] text-[10px] text-gray-400">
              Max 1000
            </span>
          </div>

          <textarea
            id="message"
            name="message"
            rows="5"
            maxLength="1000"
            placeholder="Tell us about your goals, project or what you'd like to achieve..."
            className={`${getInputClass("message")} resize-none`}
            onChange={() => clearError("message")}
          />

          {errors.message && (
            <p className="mt-2 font-[var(--font-body)] text-xs text-red-500">
              {errors.message}
            </p>
          )}

        </div>


        {/* =====================================================
            SUBMIT
        ===================================================== */}
        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-[320px] font-[var(--font-body)] text-[10px] leading-[1.7] text-gray-400">
            Clicking send will open your default email application with
            your enquiry details ready to send.
          </p>

          <button
            type="submit"
            className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[var(--primary)] px-7 py-4 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[var(--dark)]"
          >
            Send Message

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

        </div>

      </form>
    </div>
  );
};

export default ContactForm;