import { createContext, useState } from "react";

export const UtilityContext = createContext({
  theme: "light",
  handleThemeMode: (mode) => {},
  color: "red",
  handleThemeColor: (color) => {},
});

export default function Provider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("red");

  const handleThemeMode = (mode) => {
    setTheme(mode);
  };

  const handleThemeColor = (color) => {
    setColor(color);
  };

  return (
    <UtilityContext.Provider
      value={{
        theme,
        handleThemeMode,
        color,
        handleThemeColor,
      }}
    >
      {children}
    </UtilityContext.Provider>
  );
}
