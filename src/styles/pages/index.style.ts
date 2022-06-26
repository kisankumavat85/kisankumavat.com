import styled from "styled-components";

import { BLUE_SHADE_V1, DARK_SHADE_V5, LIGHT_SHADE_V1 } from "../colors.style";

export const About = styled.div`
  .greetings-container {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .greetings {
    font-weight: 700;
    font-size: 4rem;
    color: ${(props) => props.theme.headingColor};

    span {
      color: ${BLUE_SHADE_V1};
    }
  }

  .img-div {
    position: relative;
    width: 9rem;
    height: 9rem;
  }

  .img-div img {
    border-radius: 50%;
  }

  .about {
    margin: 1rem 0 3rem 0;
    color: ${(props) => props.theme.paragraphColor1};
  }

  .contact-cv-container {
    display: flex;
    margin-bottom: 2rem;

    .contact-conatiner {
      display: flex;

      .contact-item {
        cursor: pointer;
        margin-right: 1rem;
        font-size: 1.5rem;
        color: ${(props) => props.theme.paragraphColor1};
      }
    }
    .cv-container {
      /* border: 1px solid ${DARK_SHADE_V5}; */
    }
  }

  @media (max-width: 600px) {
    .greetings-container {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  @media (max-width: 768px) {
    .greetings {
      margin-top: 1rem;
      font-size: 2.5rem;
    }

    .img-div {
      height: 8rem;
      width: 8rem;
    }

    .about {
      font-size: 1.1rem;
    }
  }
`;
