import styled from "styled-components";
import { DARK_SHADE_V12, DARK_SHADE_V9 } from "../colors.style";

const StyledThemeToggler = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.backgroundColor2};
    font-size: 1.2rem;
    color: ${(props) => props.theme.headingColor};

    :hover {
      border: 2px solid ${(props) => props.theme.linkColor1};
    }
  }
`;

export default StyledThemeToggler;
