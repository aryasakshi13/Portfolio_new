import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  isDark: true,
  changeTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("isDark");
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    } catch (e) {
      console.error(e);
    }

    if (isDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      document.documentElement.style.colorScheme = "light";
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      <div className={isDark ? "dark-mode" : "light-mode"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
