import { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/common/Footer';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });

    // Refresh AOS on route change
    window.addEventListener('load', AOS.refresh);

    return () => {
      lenis.destroy();
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

