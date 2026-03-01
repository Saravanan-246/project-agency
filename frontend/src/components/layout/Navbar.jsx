import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Container from "../ui/Container";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ---------------- Scroll Background ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Lock Body Scroll ---------------- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  /* ---------------- FIX: Close On Resize ---------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Project", id: "portfolio" },
    { name: "Process", id: "process" },
    { name: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center py-5">

            {/* Logo */}
            <h1
              onClick={() => handleScrollTo("home")}
              className="cursor-pointer text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            >
              ProjectForge
            </h1>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 text-slate-300">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.id)}
                  className="relative group text-sm font-medium hover:text-white transition"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="text-slate-300 hover:text-white transition"
              >
                {open ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
              </button>
            </div>

          </div>
        </Container>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-slate-950 border-l border-slate-800 z-50 p-8 flex flex-col"
            >
              <div className="mt-12 flex flex-col gap-6 text-base font-medium">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleScrollTo(link.id)}
                    className="text-slate-300 hover:text-white transition text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;