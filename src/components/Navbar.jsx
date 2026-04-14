import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCodeSSlashLine, RiMenuLine, RiCloseLine } from "react-icons/ri";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-800/90 backdrop-blur-xl border-b border-dark-600/50 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#hero")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 font-display font-bold text-xl group"
          whileHover={{ scale: 1.02 }}
        >
          <span className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/30 transition-colors">
            <RiCodeSSlashLine size={16} />
          </span>
          <span className="text-gradient">Umer.dev</span>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`min-w-sm:mx-2px relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === link.href
                    ? "text-brand-400 bg-brand-500/10"
                    : "text-slate-400 hover:text-slate-100 hover:bg-dark-700/50"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-brand-500/10 border border-brand-500/30"
                  />
                )}
              </button>
            </li>
          ))}
          <li>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNav("#contact")}
              className="ml-3 px-5 py-2 bg-brand-500 hover:bg-brand-600 text-dark-900 font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-brand-500/25"
            >
              Hire Me
            </motion.button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className=" bg-dark-800/95 backdrop-blur-xl border-b border-dark-600/50"
          >
            <ul className="px-6 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 text-slate-300 hover:text-brand-400 hover:bg-dark-700 rounded-lg transition-all text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full px-4 py-3 bg-brand-500 text-dark-900 font-semibold rounded-lg text-sm mt-2"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
