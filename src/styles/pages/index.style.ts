import styled from "styled-components";

import { BLUE_SHADE_V1 } from "../colors.style";

const StyledAbout = styled.div`
  .container {
    height: calc(100vh - 96px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .greetings {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 3rem;
    color: ${(props) => props.theme.headingColor};

    .kisan {
      color: ${BLUE_SHADE_V1};
    }

    .developer {
      font-size: 6rem;
    }
  }

  .about-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .about {
      width: 90%;
      text-align: center;
      margin: 1rem 0 2rem 0;
      font-size: 1.1rem;
      color: ${(props) => props.theme.paragraphColor1};
    }

    .resume-div {
      display: flex;
      gap: 5px;

      .resume,
      .resume-icon {
        color: ${(props) => props.theme.paragraphColor1};
        background-color: ${(props) => props.theme.backgroundColor1};
      }

      .resume-icon {
        font-size: 1.3rem;
      }
    }
    .see-more-arrow {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 6rem;
      color: ${(props) => props.theme.paragraphColor1};

      .arrow {
        font-size: 2rem;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      span {
        font-size: 1rem;
      }
    }
  }

  /* @media (max-width: 600px) {
    .greetings-container {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  } */

  @media (max-width: 768px) {
    .container {
      height: calc(100vh - 96px);
    }
    .greetings {
      font-size: 1.8rem;

      .developer {
        font-size: 2.5rem;
      }
    }

    .about-div {
      .about {
        font-size: 1rem;
      }
    }
  }
`;

export default StyledAbout;
