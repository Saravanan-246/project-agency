import Container from "../ui/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="py-12 grid gap-10 md:grid-cols-3">

          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              ProjectForge
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Engineering scalable academic software systems with
              production-level architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white mb-3 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white mb-3 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>support@projectforge.dev</li>
              <li>Academic Software Engineering</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-5 text-center text-slate-500 text-xs md:text-sm">
          © {currentYear} ProjectForge. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;