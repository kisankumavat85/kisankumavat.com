import styled from "styled-components";

const StyledMobileMenuButton = styled.div`
  display: none;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.backgroundColor1};
    font-size: 1.2rem;
    color: ${(props) => props.theme.headingColor};

    :hover {
      border: 2px solid ${(props) => props.theme.linkColor1};
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export default StyledMobileMenuButton;
