import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import Homepage from './Homepage';
import Projects from './Projects';
import Calculator from './Calculator';
import CalculatorAdvance from './calculator/Calculator';
import Todo from './todo-app/Todo';
import TypingApp from './typing-test/TypingTest';
import burgericon from '../assets/mobile-menu.svg';
import Contact from './Contact';
import Switch from '../Switch';
import { useTheme } from '../ThemeContext';
import { useSpinner } from './SpinnerContext';
import Weather from './weather-app/Weather';
import Tic from './tic-tac-toe/Tic';

const styles = {
  body: "min-h-screen bg-custom-back dark:bg-custom-gradient bg-no-repeat bg-cover bg-top px-4 md:px-[4.5rem]",
  header: "hidden md:flex justify-between border-b border-opacity-30",
  logo: "flex items-center",
  headerName: "font-['Brush_Script_MT',_cursive] font-medium text-3xl tracking-widest transition text-[#17172e] dark:text-white",
  nav: "flex justify-center p-4",
  navItem: "no-underline px-4 py-2 mx-2 my-2 md:my-0 rounded-lg self-center transition-colors duration-300 ease-in-out hover:bg-[#6265fb] font-semibold text-[#17172e] dark:text-white",
  activeNavItem: "bg-[#6265fb] text-white",
  mobileHeader: "flex md:hidden items-center justify-between border-b border-opacity-30",
  burgerButton: "border-0 bg-[#6265fb] border border-current px-4 rounded-2xl",
  navMenu2: "p-4 m-0  origin-left-center -translate-x-full transition-all duration-500 absolute top-[102px] left-0 w-full h-full z-50 bg-custom-back dark:bg-custom-gradient bg-no-repeat bg-cover",
  navMenu2Active: "visible translate-x-0",
  mobileNavList: "list-none",
  mobileNavItem: "py-5 px-6 flex flex-col",
  hr: "m-0 w-full",
  hiddenContent: "hidden",
  calculatorAdvanceBody: "min-h-screen bg-custom-calculator-back bg-no-repeat bg-cover bg-top flex justify-center items-center p-0 m-0",
  typingTestBody: "min-h-screen bg-[#4b4533] flex justify-center items-center p-0 m-0",
  todoListAppBody: "min-h-screen bg-[#1051000f] flex justify-center items-center m-0 p-0",
  weather: "min-h-screen bg-weather-back bg-no-repeat bg-cover flex justify-center items-center m-0 p-0",
  tic_tac: "flex flex-col gap-5 align-center justify-center items-center bg-[#efefef] min-h-screen",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { showSpinner, hideSpinner, loading } = useSpinner();

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

  const hideHeaderAndBackground = [
    'calculator-advance',
    'typing-test',
    'todo-list-app',
    'weather',
    'tic-tac-toe'
  ].includes(lastPart);

  const getBodyClass = () => {
    switch (lastPart) {
      case 'calculator-advance':
        return `${styles.calculatorAdvanceBody} ${theme}`;
      case 'typing-test':
        return `${styles.typingTestBody} ${theme}`;
        case 'weather':
          return `${styles.weather} ${theme}`;
      case 'todo-list-app':
        return `${styles.todoListAppBody} ${theme}`;
        case 'tic-tac-toe':
        return `${styles.tic_tac} ${theme}`;
      default:
        return `${styles.body} ${theme}`;
    }
  };
  const bodyClass = getBodyClass();
  const navMenuClass = `${styles.navMenu2} ${isMenuOpen ? styles.navMenu2Active : ''}`;

  return (
    <div className={bodyClass}>
      {!hideHeaderAndBackground && (
        <div className={`${loading ? styles.hiddenContent : ''}`}> {/* Hide content when loading */}
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={logo} className="App-logo cursor-pointer" alt="Logo" onClick={() => { handleClick('/') }} />
              <p className={styles.headerName}>Hamza</p>
              <Switch />
            </div>
            <nav className={styles.nav}>

              <span className={`${styles.navItem} ${location.pathname === '/' ? styles.activeNavItem : ''}`} onClick={() => handleClick('/')}>Home</span>
              <span className={`${styles.navItem} ${location.pathname === '/projects' || location.pathname === '/projects/calculator' ? styles.activeNavItem : ''}`} onClick={() => handleClick('/projects')}>Projects</span>
              <a href="https://github.com/hamzasyed2985" className={styles.navItem}>Github</a>
              <span className={`${styles.navItem} ${location.pathname === '/contact' ? styles.activeNavItem : ''}`} onClick={() => handleClick('/contact')}>Contact</span>

            </nav>
          </div>

          <div className={styles.mobileHeader}>
            <div className={styles.logo}>
              <span to="/"><img src={logo} className="App-logo" alt="Logoo" /></span>
              <p className={styles.headerName}>Hamza</p>
              <Switch />
            </div>
            <div className="burger-menu">
              <button id="burger-btn" className={styles.burgerButton} onClick={toggleMenu}>
                <img src={burgericon} alt="mobile-menu" />
              </button>
            </div>
            <ul className={navMenuClass}>
              <li className={styles.mobileNavItem}>
                <span className={`${styles.navItem} ${location.pathname === '/' ? styles.activeNavItem : ''}`} onClick={() => handleClick('/')}>HOME</span>
                <hr className={styles.hr} />
              </li>
              <li className={styles.mobileNavItem}>
                <span className={`${styles.navItem} ${location.pathname === '/projects' || location.pathname === '/projects/calculator' ? styles.activeNavItem : ''}`} onClick={() => handleClick('/projects')}>PROJECTS</span>
                <hr className={styles.hr} />
              </li>
              <li className={styles.mobileNavItem}>
                <a href="https://github.com/hamzasyed2985" className={styles.navItem} onClick={() => handleClick(location.pathname)}>GITHUB</a>
                <hr className={styles.hr} />
              </li>
              <li className={styles.mobileNavItem}>
                <span className={`${styles.navItem} ${location.pathname === '/contact' ? styles.activeNavItem : ''}`} onClick={() => handleClick('/contact')}>Contact</span>
                <hr className={styles.hr} />
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/calculator" element={<Calculator />} />
            <Route path="/projects/calculator-advance" element={<CalculatorAdvance />} />
            <Route path="/projects/todo-list-app" element={<Todo />} />
            <Route path="/projects/typing-test" element={<TypingApp />} />
            <Route path="/projects/weather" element={<Weather />} />
            <Route path="/projects/tic-tac-toe" element={<Tic />} />
          </Routes>
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
