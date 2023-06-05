import { createContext, useState, useEffect } from "react";

export const UtilityContext = createContext({
  theme: "light",
  handleThemeMode: (mode) => {},
  color: "red",
  handleThemeColor: (color) => {},
  search: "",
  handleSearch: () => {},
  changeMode: {},
  changeColor: {},
});

export default function Provider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("red");
  const [search, setSearch] = useState("");

  const handleThemeMode = (mode) => {
    setTheme(mode);
  };

  const handleThemeColor = (color) => {
    setColor(color);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [changeMode, setChangeMode] = useState({});
  const [changeColor, setChangeColor] = useState({});

  useEffect(() => {
    if (theme == "dark") {
      setChangeMode({
        color1: "var(--white-color)",
        color2: "var(--white2-color)",
        gray: "var(--gray-color)",
        background: "var(--dark-bg)",
        background2: "var(--dark2-bg)",
        transition: "all .3s",
      });
    }
    if (theme == "light") {
      setChangeMode({
        color1: "var(--black-color)",
        color2: "var(--black2-color)",
        color3: "var(--black3-color)",
        gray: "var(--gray3-color)",
        background: "var(--light-bg)",
        background2: "var(--light2-bg)",
        transition: "all .3s",
      });
    }
  }, [theme]);

  useEffect(() => {
    if (color == "blue") {
      setChangeColor({
        color: "var(--blue-color)",
        darkcolor: "var(--dark-blue-color)",
        transition: "all .3s",
      });
    }
    if (color == "red") {
      setChangeColor({
        color: "var(--red-color)",
        darkcolor: "var(--dark-red-color)",
        transition: "all .3s",
      });
    }
    if (color == "yellow") {
      setChangeColor({
        color: "var(--yellow-color)",
        darkcolor: "var(--dark-yellow-color)",
        transition: "all .3s",
      });
    }
    if (color == "orange") {
      setChangeColor({
        color: "var(--orange-color)",
        darkcolor: "var(--dark-orange-color)",
        transition: "all .3s",
      });
    }
    if (color == "pink") {
      setChangeColor({
        color: "var(--pink-color)",
        darkcolor: "var(--dark-pink-color)",
        transition: "all .3s",
      });
    }
    if (color == "purple") {
      setChangeColor({
        color: "var(--purple-color)",
        darkcolor: "var(--dark-purple-color)",
        transition: "all .3s",
      });
    }
    if (color == "green") {
      setChangeColor({
        color: "var(--green-color)",
        darkcolor: "var(--dark-green-color)",
        transition: "all .3s",
      });
    }
  }, [color]);

  return (
    <UtilityContext.Provider
      value={{
        theme,
        handleThemeMode,
        color,
        handleThemeColor,
        search,
        handleSearch,
        changeMode,
        changeColor,
      }}
    >
      {children}
    </UtilityContext.Provider>
  );
}
