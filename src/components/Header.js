import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BrandMark from './BrandMark';
import Homepage from './Homepage';
import Projects from './Projects';
import Calculator from './Calculator';
import CalculatorAdvance from './calculator/Calculator';
import Todo from './todo-app/Todo';
import TypingApp from './typing-test/TypingTest';
import Contact from './Contact';
import Switch from '../Switch';
import { useTheme } from '../ThemeContext';
import { useSpinner } from './SpinnerContext';
import Weather from './weather-app/Weather';
import Tic from './tic-tac-toe/Tic';
import ProjectDetail from './ProjectDetail';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { showSpinner, hideSpinner, loading } = useSpinner();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (path) => {
    setIsMenuOpen(false);
    showSpinner();
    setTimeout(() => {
      navigate(path);
      hideSpinner();
    }, 600);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathParts = location.pathname.split('/');
  const lastPart = pathParts[pathParts.length - 1];
  const isDetailPage = pathParts.includes('details');

  const hideHeaderAndBackground = !isDetailPage && [
    'calculator-advance',
    'typing-test',
    'todo-list-app',
    'weather',
    'tic-tac-toe'
  ].includes(lastPart);

  const getBodyClass = () => {
    if (isDetailPage) {
      return `min-h-screen bg-[#F4F6F8] dark:bg-[#0B0F14] transition-colors duration-500 ${theme}`;
    }
    switch (lastPart) {
      case 'calculator-advance':
        return `min-h-screen bg-custom-calculator-back bg-no-repeat bg-cover bg-top flex justify-center items-center p-0 m-0 ${theme}`;
      case 'typing-test':
        return `min-h-screen bg-[#4b4533] flex justify-center items-center p-0 m-0 ${theme}`;
      case 'weather':
        return `min-h-screen bg-weather-back bg-no-repeat bg-cover flex justify-center items-center m-0 p-0 ${theme}`;
      case 'todo-list-app':
        return `min-h-screen bg-[#1051000f] flex justify-center items-center m-0 p-0 ${theme}`;
      case 'tic-tac-toe':
        return `flex flex-col gap-5 align-center justify-center items-center bg-[#efefef] min-h-screen ${theme}`;
      default:
        return `min-h-screen bg-[#F4F6F8] dark:bg-[#0B0F14] transition-colors duration-500 ${theme}`;
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { href: 'https://github.com/hamzasyed2985', label: 'Github', external: true },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (item) => {
    if (item.path === '/') return location.pathname === '/';
    if (item.path === '/projects') return location.pathname.startsWith('/projects') && !hideHeaderAndBackground;
    return location.pathname === item.path;
  };

  return (
    <div className={getBodyClass()}>
      {!hideHeaderAndBackground && (
        <div className={loading ? 'hidden' : ''}>
          {/* Desktop Header */}
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              scrolled
                ? 'border-b border-[#0B0F14]/10 bg-[#F4F6F8]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0B0F14]/90'
                : 'border-b border-transparent bg-transparent'
            }`}
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <motion.div
                className="flex items-center gap-3 cursor-pointer text-[#0B0F14] dark:text-[#F4F6F8]"
                onClick={() => handleClick('/')}
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.98 }}
              >
                <BrandMark className="h-11 w-11" />
                <span className="font-display text-2xl font-bold tracking-tight">
                  Hamza
                </span>
              </motion.div>

              <nav className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path || item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-4 py-2 text-sm font-medium text-[#3d4654] transition-colors duration-300 hover:text-teal-700 dark:text-[#c5ccd6] dark:hover:text-teal-300 group"
                      >
                        {item.label}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleClick(item.path)}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                          isActive(item)
                            ? 'text-teal-700 dark:text-teal-300'
                            : 'text-[#3d4654] hover:text-teal-700 dark:text-[#c5ccd6] dark:hover:text-teal-300'
                        }`}
                      >
                        {item.label}
                        {isActive(item) && (
                          <motion.span
                            className="absolute bottom-0 left-0 h-0.5 w-full bg-teal-500"
                            layoutId="activeTab"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-300 group-hover:w-full" />
                      </button>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className="ml-3"
                >
                  <Switch />
                </motion.div>
              </nav>
            </div>
          </motion.header>

          {/* Mobile Header */}
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              scrolled
                ? 'border-b border-[#0B0F14]/10 bg-[#F4F6F8]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0B0F14]/90'
                : 'border-b border-transparent bg-transparent'
            }`}
          >
            <div className="px-4 py-3 flex items-center justify-between">
              <motion.div
                className="flex items-center gap-3 cursor-pointer text-[#0B0F14] dark:text-[#F4F6F8]"
                onClick={() => handleClick('/')}
                whileTap={{ scale: 0.98 }}
              >
                <BrandMark className="h-9 w-9" />
                <span className="font-display text-xl font-bold tracking-tight">
                  Hamza
                </span>
              </motion.div>
              <div className="flex items-center gap-3">
                <Switch />
                <motion.button
                  onClick={toggleMenu}
                  className="border border-[#0B0F14]/12 p-2 text-[#0B0F14] transition hover:border-teal-500 hover:text-teal-700 dark:border-white/15 dark:text-[#F4F6F8] dark:hover:border-teal-400 dark:hover:text-teal-300"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.header>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 md:hidden bg-black/60"
                onClick={toggleMenu}
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="h-full w-80 border-r border-[#0B0F14]/10 bg-[#F4F6F8] dark:border-white/10 dark:bg-[#0B0F14]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-1 p-6 pt-20">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path || item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block border-l-2 px-4 py-3 text-base font-medium transition-colors ${
                              isActive(item)
                                ? 'border-teal-500 bg-teal-500/10 text-teal-700 dark:text-teal-300'
                                : 'border-transparent text-[#3d4654] hover:border-teal-500/50 hover:bg-[#0B0F14]/5 dark:text-[#c5ccd6] dark:hover:bg-white/5'
                            }`}
                            onClick={toggleMenu}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <button
                            onClick={() => {
                              handleClick(item.path);
                              toggleMenu();
                            }}
                            className={`w-full border-l-2 px-4 py-3 text-left text-base font-medium transition-colors ${
                              isActive(item)
                                ? 'border-teal-500 bg-teal-500/10 text-teal-700 dark:text-teal-300'
                                : 'border-transparent text-[#3d4654] hover:border-teal-500/50 hover:bg-[#0B0F14]/5 dark:text-[#c5ccd6] dark:hover:bg-white/5'
                            }`}
                          >
                            {item.label}
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-20 md:pt-24">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/details/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/calculator" element={<Calculator />} />
              <Route path="/projects/calculator-advance" element={<CalculatorAdvance />} />
              <Route path="/projects/todo-list-app" element={<Todo />} />
              <Route path="/projects/typing-test" element={<TypingApp />} />
              <Route path="/projects/weather" element={<Weather />} />
              <Route path="/projects/tic-tac-toe" element={<Tic />} />
            </Routes>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/projects/calculator-advance" element={<CalculatorAdvance />} />
        <Route path="/projects/todo-list-app" element={<Todo />} />
        <Route path="/projects/typing-test" element={<TypingApp />} />
        <Route path="/projects/weather" element={<Weather />} />
        <Route path="/projects/tic-tac-toe" element={<Tic />} />
      </Routes>
    </div>
  );
}

export default Header;
