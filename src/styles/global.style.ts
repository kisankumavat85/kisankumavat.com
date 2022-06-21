import { createGlobalStyle } from "styled-components";
import { GlobalStyleProps } from "../types/style";
import {
  DARK_SHADE_V1,
  DARK_SHADE_V10,
  DARK_SHADE_V11,
  DARK_SHADE_V12,
  DARK_SHADE_V13,
  DARK_SHADE_V14,
  DARK_SHADE_V2,
  DARK_SHADE_V3,
  DARK_SHADE_V4,
  DARK_SHADE_V5,
  DARK_SHADE_V6,
  DARK_SHADE_V7,
  DARK_SHADE_V8,
  DARK_SHADE_V9,
  LIGHT_SHADE_V1,
} from "./colors.style";

const lightTheme = {
  backgroundColor1: LIGHT_SHADE_V1,
  backgroundColor2: DARK_SHADE_V12,
  backgroundColor3: DARK_SHADE_V14,
  headingColor: DARK_SHADE_V1,
  paragraphColor1: DARK_SHADE_V2,
  paragraphColor2: DARK_SHADE_V4,
  paragraphColor3: DARK_SHADE_V6,
  color3: DARK_SHADE_V1,
  borderColor: DARK_SHADE_V10,
  linkColor1: DARK_SHADE_V6,
  linkColor2: DARK_SHADE_V3,
};

const darkTheme = {
  backgroundColor1: DARK_SHADE_V1,
  backgroundColor2: DARK_SHADE_V3,
  backgroundColor3: DARK_SHADE_V2,
  headingColor: LIGHT_SHADE_V1,
  paragraphColor1: DARK_SHADE_V12,
  paragraphColor2: DARK_SHADE_V10,
  paragraphColor3: DARK_SHADE_V8,
  color3: DARK_SHADE_V1,
  borderColor: DARK_SHADE_V3,
  linkColor1: DARK_SHADE_V7,
  linkColor2: DARK_SHADE_V10,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme.backgroundColor1};
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }  
`;

export default GlobalStyle;
