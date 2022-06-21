import styled from "styled-components";

export const StyledSkillsSection = styled.section`
  margin-bottom: 3rem;

  .skills-heading {
    font-size: 2.3rem;
    color: ${(props) => props.theme.headingColor};
  }

  .skills-container {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;

    .skill-item {
      background-color: ${(props) => props.theme.backgroundColor1};
      border: 1px solid ${(props) => props.theme.borderColor};
      border-radius: 0.5rem;
      padding: 0.8rem;

      div {
        padding-left: 0.3rem;

        .skill-icon {
          font-size: 1.8rem;
          color: ${(props) => props.theme.paragraphColor1};
        }
      }

      p {
        color: ${(props) => props.theme.headingColor};
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 600px) {
    .skills-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .skills-heading {
      font-size: 1.8rem;
    }
  }
`;
