import styled from "styled-components";

export const StyledBlog = styled.div`
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
`;
