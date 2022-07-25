import { AppProps } from "next/app";
import { useEffect, useMemo, useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";

// Styles
import GlobalStyle, { themes } from "../styles/global.style";
import { getItem } from "../utils/storage";

// const getTheme = () => {
//   return getItem("theme") || "light";
// };

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  console.log("pageProps", pageProps);

  useEffect(() => {
    const storedTheme = getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);

  const themeProviderValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
