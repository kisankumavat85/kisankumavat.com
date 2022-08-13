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

  .img-div {
    position: relative;
    width: 8rem;
    height: 8rem;
    margin-bottom: 1.5rem;
  }

  .img-div img {
    border-radius: 50%;
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
      font-size: 1.1rem;
      color: ${(props) => props.theme.paragraphColor1};
    }

    .resume-div {
      display: flex;
      gap: 5px;
      margin-top: 2rem;

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
      margin-top: 2rem;
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

  @media (max-width: 768px) {
    .container {
      height: calc(100vh - 96px);
    }

    .img-div {
      margin-bottom: 1.5rem;
      width: 8.5rem;
      height: 8.5rem;
    }

    .greetings {
      font-size: 1.8rem;
      margin-bottom: 2rem;

      .developer {
        font-size: 2.8rem;
      }
    }

    .about-div {
      .about {
        font-size: 1.2rem;
      }
    }
  }
`;

export default StyledAbout;
