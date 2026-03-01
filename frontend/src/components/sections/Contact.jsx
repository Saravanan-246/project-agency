import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { submitContactForm } from "../../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const maxLength = 150;

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "message" && value.length > maxLength) return;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await submitContactForm(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800"
    >
      <Container>
        <SectionTitle
          title="Let’s Build Your"
          highlight="Next System"
          subtitle="Share your idea and receive a structured technical response within 24 hours."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Engineering Designed for Scale
            </h3>

            <p className="text-slate-400 leading-relaxed">
              We architect secure backend systems, intelligent automation workflows,
              and cloud-ready applications built for performance, reliability,
              and long-term growth.
            </p>

            <div className="space-y-2 text-sm text-slate-400">
              <div>Architecture Planning & System Design</div>
              <div>Secure Backend Development</div>
              <div>AI & Automation Integration</div>
              <div>Cloud Infrastructure Deployment</div>
            </div>

            <div className="pt-4 text-sm text-slate-500">
              Direct response guaranteed within 24 hours.
            </div>

            <div>
              <a
                href="mailto:saro200621@gmail.com"
                className="text-indigo-400 font-medium hover:underline transition"
              >
                saro200621@gmail.com
              </a>
            </div>
          </div>

          {/* FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 tracking-wide uppercase">
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  />
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 tracking-wide uppercase">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  />
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 tracking-wide uppercase">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none transition"
                  />
                  <div className="text-right text-xs text-slate-500">
                    {form.message.length}/{maxLength}
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Send Inquiry"}
                </Button>

                {error && (
                  <p className="text-sm text-red-400 text-center">
                    Submission failed. Please try again.
                  </p>
                )}
              </form>
            ) : (
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-white">
                  Inquiry Submitted
                </h4>
                <p className="text-slate-400 text-sm">
                  Thank you for reaching out. We’ll review your request
                  and continue the discussion via email shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-400 text-sm hover:underline transition"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;