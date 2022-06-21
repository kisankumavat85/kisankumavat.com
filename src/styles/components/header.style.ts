import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;

  .nav-container {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name-link {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${(props) => props.theme.headingColor};
  }

  .links-theme {
    display: flex;
    align-items: center;
  }

  nav {
    width: 7rem;
    margin-right: 1rem;
    display: flex;
    justify-content: space-around;
  }

  .nav-link {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.linkColor1};
  }

  .active {
    color: ${(props) => props.theme.linkColor2};
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
`;
