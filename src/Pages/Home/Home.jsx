import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Component/Navbar";
import HeroSection from "../../Component/HeroSection";
import Footer from "../../Component/Footer";
import Experience from "../../Component/Experience";

const Home = () => {
  return (
    <div id="top" className="min-h-screen bg-cream-200">
      <Navbar />
      

      <div className="h-16" />


      <HeroSection />


      <section className="py-20 px-6 md:px-12 lg:px-16 bg-cream-100">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gallery-dark mb-3">
              The Exhibition
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-gallery-muted text-sm uppercase tracking-[0.2em] mt-4 mb-8">
              Discover who I am, my tech stack, and what I build
            </p>
            <Link
              to="/porto/exhibition"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gallery-dark text-cream-200 rounded hover:bg-vermillion transition-colors duration-300 font-medium text-sm uppercase tracking-wider group"
            >
              Enter Exhibition
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>


      <Experience />


      <Footer />
    </div>
  );
};

export default Home;
