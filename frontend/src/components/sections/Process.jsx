import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We evaluate objectives, define scope, and map technical constraints before designing the system.",
  },
  {
    title: "Architecture & Planning",
    description:
      "Database schema design, API structure, and scalable technology stack planning.",
  },
  {
    title: "Development & Integration",
    description:
      "Modular implementation with authentication layers, structured backend logic, and optimized frontend architecture.",
  },
  {
    title: "Testing & Deployment",
    description:
      "System validation, performance optimization, and production-ready cloud deployment.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="section-padding bg-slate-950 border-t border-slate-800"
    >
      <Container>
        <SectionTitle
          title="Engineering"
          highlight="Workflow"
          subtitle="A structured development lifecycle aligned with modern software standards."
        />

        <div className="relative mt-20">

          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-800" />

          <div className="space-y-20">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Card */}
                  <div className="hidden md:block md:w-1/2 bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-15px_rgba(99,102,241,0.3)]">
                    <h3 className="text-lg font-semibold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Desktop Step Circle */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Process;