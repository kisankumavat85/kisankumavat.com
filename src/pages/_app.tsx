import { useEffect, useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";

// Styles
import GlobalStyle, { themes } from "../styles/global.style";
import { getItem } from "../utils/storage";

// const getTheme = () => {
//   return getItem("theme") || "light";
// };

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
