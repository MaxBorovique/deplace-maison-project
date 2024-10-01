import { useState } from "react";
import "./App.scss";
import './styles/theme.scss';
import { Header } from "./components/Header/Header";

export function App() {
  const [theme, setTheme] = useState<string>('light');

  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={theme}>
      <Header toggleThemeHandler={toggleThemeHandler} />
    </div>
    
  )
}
