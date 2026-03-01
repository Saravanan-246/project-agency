import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  {
    title: "AI-Powered Resume Intelligence Platform",
    category: "Artificial Intelligence",
    complexity: "Advanced",
    description:
      "Transformer-based resume intelligence engine leveraging contextual embeddings for skill extraction, semantic ranking, and recruiter analytics with role-fit scoring algorithms.",
    impact:
      "Reduced recruiter screening time by 68% and improved candidate shortlisting precision by 41%.",
    tech: ["Python", "HuggingFace Transformers", "FastAPI", "MongoDB", "Docker"],
  },
  {
    title: "Urban Crowd Density Forecasting Engine",
    category: "Predictive Analytics",
    complexity: "Advanced",
    description:
      "Time-series forecasting system integrating live IoT inputs, historical trend modeling, and probabilistic density prediction with interactive geospatial dashboards.",
    impact:
      "Enhanced crowd distribution planning accuracy by 45% using predictive modeling.",
    tech: ["Time-Series ML", "AWS Lambda", "Stream Processing", "D3.js"],
  },
  {
    title: "Enterprise Academic ERP Ecosystem",
    category: "Full-Stack Architecture",
    complexity: "Production-Level",
    description:
      "Scalable role-based ERP ecosystem with JWT authentication, audit logging, modular service layers, and optimized database indexing for high-concurrency operations.",
    impact:
      "Successfully managed 15,000+ academic records with secure concurrent access handling.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Redis"],
  },
  {
    title: "AI-Based Cyber Threat Intelligence Console",
    category: "Cybersecurity",
    complexity: "Advanced",
    description:
      "Behavioral anomaly detection platform combining log aggregation, encrypted access control, and heuristic-based threat pattern recognition algorithms.",
    impact:
      "Detected abnormal system behaviors with 93% anomaly classification accuracy.",
    tech: ["SIEM Concepts", "Encryption Protocols", "Node.js", "Monitoring APIs"],
  },
  {
    title: "Cloud-Native CI/CD Observability System",
    category: "Cloud & DevOps",
    complexity: "Professional",
    description:
      "Deployment observability dashboard visualizing CI/CD pipeline metrics, environment configurations, automated rollback triggers, and performance diagnostics.",
    impact:
      "Reduced deployment failure rate by 38% via automated pipeline validation.",
    tech: ["CI/CD", "AWS EC2", "Docker", "GitHub Actions", "Prometheus"],
  },
  {
    title: "Academic Data Intelligence & Reporting Hub",
    category: "Data Engineering",
    complexity: "Production-Level",
    description:
      "Centralized academic data lake integrating structured data aggregation, performance analytics pipelines, and automated reporting dashboards with predictive insights.",
    impact:
      "Enabled real-time academic performance forecasting across multi-department datasets.",
    tech: ["Data Modeling", "ETL Pipelines", "Visualization", "REST APIs"],
  },
];


function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  // Prevent background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

return (
  <section
    id="portfolio"
    className="section-padding bg-gradient-to-b from-slate-950 to-slate-900 relative"
  >
    <Container>
      <SectionTitle
        title="Advanced"
        highlight="Project Showcase"
        subtitle="Production-grade academic systems engineered with scalable architecture, security-first design, and measurable impact."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: false, amount: 0.25 }}
            className="group"
          >
            <div className="relative h-full bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_25px_60px_-20px_rgba(99,102,241,0.35)]">

              {/* Category + Complexity */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] uppercase tracking-wider text-indigo-400">
                  {project.category}
                </span>
                <span className="text-[11px] px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400">
                  {project.complexity}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setActiveProject(project)}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-all duration-300 hover:text-cyan-400"
              >
                Explore System
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </Container>

    {/* ================= MODAL ================= */}
    <AnimatePresence>
      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase text-indigo-400 tracking-wide">
                {activeProject.category}
              </span>
              <h3 className="text-2xl font-semibold mt-2">
                {activeProject.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {activeProject.description}
            </p>

            {/* Impact (if exists) */}
            {activeProject.impact && (
              <div className="mb-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <p className="text-xs uppercase text-indigo-400 mb-2 tracking-wide">
                  Project Impact
                </p>
                <p className="text-sm text-slate-300">
                  {activeProject.impact}
                </p>
              </div>
            )}

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={() => setActiveProject(null)}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 hover:opacity-90 transition text-white text-sm"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
);
}

export default Portfolio;