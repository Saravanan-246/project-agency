import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Process from "../components/sections/Process";
import Contact from "../components/sections/Contact";

import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;