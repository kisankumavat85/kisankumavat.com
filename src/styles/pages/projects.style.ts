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
      display: flex;
      gap: 1rem;

      .project-image {
        position: relative;
        max-width: 40%;
        min-width: 40%;
        height: 11rem;
        border: 2px solid ${(props) => props.theme.borderColor};
        border-radius: 5px;

        img {
          border-radius: 5px;
        }
      }

      .project-details {
        /* max-width: 180%; */
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
        color: ${(props) => props.theme.headingColor};
        margin-left: 0.5rem;
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
          font-weight: 500;
          border-radius: 3px;
          border: 1px solid ${(props) => props.theme.borderColor};
          color: ${(props) => props.theme.paragraphColor1};
        }
      }
    }
  }

  @media (max-width: 768px) {
    .projects-section {
      .project {
        flex-direction: column;
        align-items: center;

        .project-image {
          min-width: 70%;
          max-width: 70%;
          height: 13rem;
        }

        .project-description {
          margin-left: 0;
        }

        .project-tech {
          margin-left: 0;

          p {
            margin: 0;
          }
        }
      }
    }
  }

  @media (max-width: 550px) {
    .projects-section {
      .project {
        .project-image {
          min-width: 85%;
          max-width: 85%;
        }
      }
    }
  }
`;

export default StyledProjects;
