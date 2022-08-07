import styled from "styled-components";

const StyledProjects = styled.div`
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

  .projects-section {
    margin-bottom: 3rem;

    .project {
      margin-bottom: 1.5rem;
    }

    .project-name {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.headingColor};
      font-size: 1.2rem;
      font-weight: 600;
    }

    .icon {
      margin-left: 1rem;
      cursor: pointer;
      font-size: 1.3rem;
    }

    .project-description {
      margin-left: 1.5rem;
      margin-bottom: 0.5rem;
      font-weight: 300;
      color: ${(props) => props.theme.paragraphColor1};
    }

    .project-tech {
      margin-left: 1.5rem;

      p {
        display: inline-block;
        font-size: 0.8rem;
        padding: 3px 5px;
        margin: 3px;
        font-weight: 500;
        border-radius: 3px;
        border: 1px solid ${(props) => props.theme.borderColor};
        color: ${(props) => props.theme.paragraphColor1};
      }
    }
  }
`;

export default StyledProjects;
