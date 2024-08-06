
import './App.css';
import { ThemeProvider } from "./ThemeContext.js";
import Header from './components/Header';
import { SpinnerProvider } from './components/SpinnerContext.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <ThemeProvider>
      <SpinnerProvider>
        <Header />
      </SpinnerProvider>
    </ThemeProvider>
  );
}

export default App;
