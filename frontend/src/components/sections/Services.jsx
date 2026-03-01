import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const services = [
  {
    icon: HiOutlineCode,
    title: "Full-Stack Web Architecture",
    description:
      "End-to-end academic platforms designed with modular frontend systems and scalable backend infrastructure.",
    level: 100,
    points: [
      "JWT / Role-Based Authentication",
      "RESTful API Architecture",
      "Database Schema Design",
      "Admin & Monitoring Dashboards",
    ],
  },
  {
    icon: HiOutlineChip,
    title: "Artificial Intelligence & ML Systems",
    description:
      "Intelligent academic systems powered by predictive modeling, automation pipelines, and applied machine learning workflows.",
    level: 95,
    points: [
      "Supervised & Unsupervised Models",
      "Model Training & Evaluation",
      "Data Processing Pipelines",
      "AI API Integration",
    ],
  },
  {
    icon: HiOutlineDeviceMobile,
    title: "Cross-Platform Mobile Engineering",
    description:
      "Performance-optimized mobile applications structured with scalable architecture and secure backend connectivity.",
    level: 90,
    points: [
      "React Native Architecture",
      "Realtime Data Sync",
      "Secure API Communication",
      "Performance Optimization",
    ],
  },
  {
    icon: HiOutlineCode,
    title: "Cybersecurity & Secure Systems",
    description:
      "Security-first academic platforms built with encryption standards, validation layers, and vulnerability-aware design.",
    level: 92,
    points: [
      "Authentication Hardening",
      "Data Encryption Techniques",
      "Input Validation & Sanitization",
      "Basic Threat Modeling",
    ],
  },
  {
    icon: HiOutlineChip,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Deployment-ready academic systems configured with CI/CD pipelines and production-grade cloud environments.",
    level: 93,
    points: [
      "CI/CD Pipeline Setup",
      "Cloud Deployment (AWS / Render)",
      "Environment Configuration",
      "Performance Monitoring",
    ],
  },
  {
    icon: HiOutlineDeviceMobile,
    title: "Data Analytics & Visualization",
    description:
      "Insight-driven dashboards and reporting systems engineered with structured data aggregation and visualization logic.",
    level: 94,
    points: [
      "Data Modeling",
      "Dashboard Visualization",
      "Reporting Automation",
      "Insight Generation Logic",
    ],
  },
];


function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-slate-900/40 border-y border-slate-800"
    >
      <Container>
        <SectionTitle
          title="Our"
          highlight="Capabilities"
          subtitle="Engineered academic software solutions built with scalable architecture and modern development practices."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: false, amount: 0.25 }}
                className="h-full"
              >
                <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]">

                  {/* Icon */}
                  <div className="mb-6">
                    <Icon
                      size={34}
                      className="text-indigo-400 transition-all duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2 text-xs text-slate-500">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export default Services;