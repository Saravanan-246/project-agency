import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative section-padding overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content Layer */}
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block px-4 py-2 rounded-full border border-slate-800 bg-slate-900/60 backdrop-blur text-sm text-slate-400 tracking-wide"
            >
              Full-Stack Academic Engineering
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              Build Academic Projects With{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Production-Level Architecture
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Structured systems. Secure backend. Scalable database.
              Built using modern engineering practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (!el) return;
                  el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start a Project
              </Button>

              <button
                onClick={() => {
                  const el = document.getElementById("portfolio");
                  if (!el) return;
                  el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-xl border border-slate-800 text-slate-300 hover:bg-slate-900 transition-all duration-300"
              >
                View Work
              </button>
            </motion.div>
          </div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="glass-card p-8 space-y-6">
              <div className="flex justify-between text-sm text-slate-400">
                <span>System Architecture</span>
                <span className="text-indigo-400">Production Stack</span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Frontend</span>
                  <span className="text-slate-300 font-medium">React · Vite</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Backend</span>
                  <span className="text-slate-300 font-medium">Node · Express</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Database</span>
                  <span className="text-slate-300 font-medium">MongoDB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Deployment</span>
                  <span className="text-slate-300 font-medium">Cloud Ready</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;