import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  position: absolute;
  width: 100%;
  top: 6rem;
  left: 0;
  height: calc(100vh - 6rem);
  background-color: ${(props) => props.theme.backgroundColor1};
  z-index: 9;
  transition: 2s linear 1s;

  .mobile-menu-container {
    list-style: none;
    margin: 2rem;

    li {
      padding: 0.5rem 1rem;
      margin: 0.5rem 0 0 0;
      border-bottom: 1px solid ${(props) => props.theme.borderColor};

      a {
        color: ${(props) => props.theme.linkColor1};
      }
    }
  }

  @media (max-width: 768px) {
  }
`;
