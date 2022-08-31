import { createContext, useState } from "react";
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState("#ff0000");
  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
