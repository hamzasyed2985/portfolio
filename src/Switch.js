import { useTheme } from './ThemeContext';
import './components/Switch.css';

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};


export default Switch;