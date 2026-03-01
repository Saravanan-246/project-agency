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
    if (e.target.id === "message" && e.target.value.length > maxLength) return;
    setForm({ ...form, [e.target.id]: e.target.value });
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
          title="let’s build your"
          highlight="project"
          subtitle="share your idea and we’ll reply with a clear technical direction via email."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              scalable engineering solutions
            </h3>

            <p className="text-slate-400 leading-relaxed">
              we design secure backend systems, ai-driven workflows,
              and cloud-ready applications built for performance and growth.
            </p>

            <div className="space-y-2 text-sm text-slate-400">
              <div>• architecture planning</div>
              <div>• secure backend development</div>
              <div>• ai & automation systems</div>
              <div>• cloud infrastructure setup</div>
            </div>

            <div className="pt-4 text-sm text-slate-400">
              we will respond directly to your email within 24 hours.
            </div>

            <div>
              <a
                href="mailto:saro200621@gmail.com"
                className="text-indigo-400 font-medium hover:underline"
              >
                saro200621@gmail.com
              </a>
            </div>
          </div>

          {/* FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 tracking-wide">
                    full name
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
                  <label className="text-xs text-slate-400 tracking-wide">
                    email
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
                  <label className="text-xs text-slate-400 tracking-wide">
                    project details (max 150 characters)
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
                  {loading ? "submitting..." : "send inquiry"}
                </Button>

                {error && (
                  <p className="text-sm text-red-400 text-center">
                    submission failed. please try again.
                  </p>
                )}
              </form>
            ) : (
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-white">
                  inquiry submitted successfully
                </h4>
                <p className="text-slate-400 text-sm">
                  thank you for reaching out. we’ll review your request and
                  continue the discussion via email shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-400 text-sm hover:underline"
                >
                  submit another request
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