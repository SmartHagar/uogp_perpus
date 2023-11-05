/** @format */
"use client";
import SkeletonDefault from "@/components/skeleton/SkeletonDefault";
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type ContextProps = {
  temaDefault: string;
  setTemaDefault: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ContextProps>({
  temaDefault: "",
  setTemaDefault: (): string => "",
});

const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [temaDefault, setTemaDefault] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // cek theme pada local storage
    const theme = localStorage.getItem("theme-fst-lab");
    // jika theme ada dalam local storage, set themeDefault dengan theme yang ada
    if (theme) {
      setTemaDefault(theme);
    } else {
      // jika tidak ada, set temaDefault dengan tema default
      const theTheme = mediaQuery.matches ? "dark" : "light";
      setTemaDefault(theTheme);
      // set theme local storage
      localStorage.setItem("theme-fst-lab", theTheme);
    }

    return () => {};
  }, []);

  // jika themeDefault berubah
  useEffect(() => {
    if (temaDefault === "light") {
      document.documentElement.setAttribute("data-theme", "cupcake");
      localStorage.setItem("theme-fst-lab", "light");
      document.documentElement.classList.remove("dark");
    }
    if (temaDefault === "dark") {
      document.documentElement.setAttribute("data-theme", "synthwave");
      localStorage.setItem("theme-fst-lab", "dark");
      document.documentElement.classList.add("dark");
    }
  }, [temaDefault]);

  return (
    <ThemeContext.Provider value={{ temaDefault, setTemaDefault }}>
      {temaDefault ? children : <SkeletonDefault />}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => useContext(ThemeContext);
