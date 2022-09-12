import styled from "styled-components";

const StyledSpace = styled.div`
  .page-intro {
    margin-bottom: 3rem;

    h1 {
      font-size: 3rem;
      margin: 1rem 0;
      color: ${(props) => props.theme.headingColor};
    }

    p {
      color: ${(props) => props.theme.paragraphColor1};
      margin-bottom: 2rem;
    }
  }

  .space-section {
    margin-bottom: 3rem;
    .books-section {
      margin-bottom: 2rem;
      .books {
        margin: 0 0 0 1rem;

        li {
          font-size: 1.1rem;
          font-weight: 700;
          color: ${(props) => props.theme.paragraphColor1};
          margin-bottom: 1rem;

          .authore {
            font-weight: normal;
            font-style: italic;
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;

export default StyledSpace;
