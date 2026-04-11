import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiSendPlaneLine,
  RiLoader4Line,
  RiCheckLine,
  RiErrorWarningLine,
  RiMailLine,
  RiMapPinLine,
  RiTimeLine,
} from "react-icons/ri";
import { submitContactForm } from "../services/contactService";

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim() || name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email.";
  if (!message.trim() || message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

const info = [
  { icon: <RiMailLine />, label: "Email", value: "muhammadumer11.2003@gmail.com" },
  { icon: <RiMapPinLine />, label: "Location", value: "Hyderabad, Pakistan" },
  { icon: <RiTimeLine />, label: "Response Time", value: "Within 24 hours" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      const errs = validate({ ...form, [name]: value });
      setErrors((er) => ({ ...er, [name]: errs[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const errs = validate(form);
    setErrors((er) => ({ ...er, [name]: errs[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    const { success, error } = await submitContactForm(form);
    if (success) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      console.error(error);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass = (field) =>
    `w-full bg-dark-700/60 border ${
      errors[field]
        ? "border-red-500/60 focus:border-red-500"
        : "border-dark-500/60 focus:border-brand-500/60"
    } text-slate-200 placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:bg-dark-700 focus:ring-1 ${
      errors[field] ? "focus:ring-red-500/20" : "focus:ring-brand-500/20"
    }`;

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div data-aos="fade-down" className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-4xl font-bold text-white">
            Contact
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-brand-500/30 to-transparent" />
        </div>

        <p data-aos="fade-up" className="text-slate-400 mb-16 max-w-xl">
          Have a project in mind? I'd love to hear about it. Let's build
          something great together.
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left info */}
          <div data-aos="fade-right" className="md:col-span-2 space-y-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono mb-1">
                    {item.label}
                  </p>
                  <p className="text-slate-200 text-sm font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-8">
              <p className="text-slate-500 text-xs font-mono mb-4">
                // find me on
              </p>
              <div className="flex gap-3">
                {[
                  { label: "GitHub", url: "https://github.com/" },
                  {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/muhammad-umer-soomro/",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-dark-700 border border-dark-500/60 text-slate-400 hover:text-brand-400 hover:border-brand-500/40 text-xs font-mono rounded-lg transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div data-aos="fade-left" className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-glass rounded-2xl p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="text-slate-400 text-xs font-mono mb-2 block">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="muhammad umer"
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 font-mono">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-slate-400 text-xs font-mono mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="umer@example.com"
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 font-mono">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-slate-400 text-xs font-mono mb-2 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 font-mono">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  status === "success"
                    ? "bg-brand-500/20 border border-brand-500/40 text-brand-400 cursor-default"
                    : status === "error"
                    ? "bg-red-500/20 border border-red-500/40 text-red-400 cursor-default"
                    : "bg-brand-500 hover:bg-brand-600 text-dark-900 shadow-lg shadow-brand-500/25"
                }`}
              >
                {status === "loading" && (
                  <>
                    <RiLoader4Line className="animate-spin" /> Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <RiCheckLine /> Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <RiErrorWarningLine /> Failed – Try Again
                  </>
                )}
                {status === "idle" && (
                  <>
                    <RiSendPlaneLine /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
