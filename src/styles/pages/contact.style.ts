import styled from "styled-components";
import { DARK_SHADE_V5, LIGHT_SHADE_V1 } from "../colors.style";

const StyledContact = styled.div`
  .page-intro {
    h1 {
      font-size: 3rem;
      margin: 1rem 0;
    }
  }

  .contact-conatiner {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 22rem;
    font-size: 3rem;

    .contact-item {
      border: 2px solid ${DARK_SHADE_V5};
      border-radius: 0.5rem;
      background-color: ${LIGHT_SHADE_V1};
      padding: 2.5rem 2.5rem 1.8rem 2.5rem;
      cursor: pointer;
    }
  }
`;

export default StyledContact;
