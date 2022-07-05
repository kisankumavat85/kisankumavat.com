import styled from "styled-components";

export const StyledSpace = styled.div`
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
  }

  .space-section {
    margin-bottom: 3rem;

    .project {
      margin-bottom: 1.5rem;
    }

    .project-name {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
      color: ${(props) => props.theme.headingColor};
    }

    .project-name-arrow {
      position: relative;
      bottom: -3px;
      font-size: 1.3rem;
      margin-left: 0.3rem;
    }

    .project-description {
      margin-left: 1.5rem;
      margin-bottom: 0.5rem;
      font-weight: 300;
      color: ${(props) => props.theme.paragraphColor1};
    }

    .project-tech {
      margin-left: 1.5rem;

      span {
        font-size: 0.8rem;
        padding: 3px 5px;
        margin-right: 5px;
        font-weight: 500;
        border-radius: 3px;
        border: 1px solid ${(props) => props.theme.borderColor};
        color: ${(props) => props.theme.paragraphColor1};
      }
    }
  }
`;
