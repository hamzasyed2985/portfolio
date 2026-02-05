
import './App.css';
import { ThemeProvider } from "./ThemeContext.js";
import Header from './components/Header';
import { SpinnerProvider } from './components/SpinnerContext.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return (
    <ThemeProvider>
      <SpinnerProvider>
        <Header />
      </SpinnerProvider>
    </ThemeProvider>
  );
}

export default App;
