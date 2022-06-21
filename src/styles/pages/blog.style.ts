import styled from "styled-components";
import { DARK_SHADE_V3, DARK_SHADE_V4 } from "../colors.style";

export const StyledBlog = styled.div`
  .page-intro {
    margin-bottom: 3rem;

    h1 {
      font-size: 3rem;
      margin: 1rem 0;
      color: ${(props) => props.theme.headingColor};
    }

    p {
      color: ${(props) => props.theme.paragraphColor1};
    }

    .search-container {
      width: 100%;
      padding: 1rem 0 0 0;
      position: relative;

      span {
        position: absolute;
        right: 0.8rem;
        top: 1.6rem;
        font-size: 20px;
        color: ${(props) => props.theme.paragraphColor1};
      }

      .search-input {
        width: 100%;
        height: 40px;
        padding: 0.5rem 1rem;
        border: 2px solid ${(props) => props.theme.borderColor};
        background-color: ${(props) => props.theme.backgroundColor2};
        border-radius: 0.5rem;
        font-size: 1rem;
        color: ${(props) => props.theme.paragraphColor1};
      }
    }
  }
`;
