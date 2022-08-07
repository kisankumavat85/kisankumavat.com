import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

import { setItem } from "../utils/storage";

// Styles
import StyledThemeToggler from "../styles/components/theme-toggler";

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme((state) => (state === "dark" ? "light" : "dark"));
    setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    <StyledThemeToggler title="Change theme">
      <button type="button" onClick={handleThemeChange}>
        {theme === "light" ? <IoMdMoon /> : <IoMdSunny />}
      </button>
    </StyledThemeToggler>
  );
}

export default ThemeToggler;
