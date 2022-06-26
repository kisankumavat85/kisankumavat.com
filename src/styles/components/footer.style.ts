import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  .divider {
    width: 100%;
    border-top: 2px solid ${(props) => props.theme.backgroundColor2};
  }

  .links-social-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    height: 4rem;
    margin: 2rem 0 2rem 0;

    .links-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      a {
        margin-bottom: 1rem;
        width: 33.33%;
        font-size: 1rem;
        color: ${(props) => props.theme.linkColor1};
      }
    }

    .social-container {
      .lets-connect {
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme.paragraphColor3};
      }

      a {
        font-size: 1.5rem;
        margin-right: 1rem;
        color: ${(props) => props.theme.paragraphColor1};
      }
    }
  }

  @media (max-width: 768px) {
    .links-social-container {
      grid-template-columns: 1fr;
    }
  }
`;
