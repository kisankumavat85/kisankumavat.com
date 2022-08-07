import styled from "styled-components";

const StyledPosts = styled.section`
  margin-bottom: 3rem;

  .featured-posts-heading {
    margin-bottom: 1rem;
    font-size: 2.3rem;
    color: ${(props) => props.theme.headingColor};
  }

  .card {
    margin-bottom: 2rem;
    cursor: pointer;
    border-radius: 0.5rem;

    .card-title-date {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .card-title {
        color: ${(props) => props.theme.headingColor};
        font-size: 1.2rem;
      }

      .card-date {
        font-size: 0.9rem;
        font-style: italic;
        text-align: right;
        width: 20%;
        color: ${(props) => props.theme.paragraphColor3};
      }
    }

    .card-info {
      font-size: 1rem;
      padding-top: 0.5rem;
      font-weight: 300;
      color: ${(props) => props.theme.paragraphColor2};
    }
  }

  .no-posts-found {
    color: ${(props) => props.theme.paragraphColor3};
  }

  @media (max-width: 768px) {
    .card {
      .card-title-date {
        flex-direction: column;

        .card-date {
          width: 100%;
          text-align: start;
        }
      }
    }
  }
`;

export default StyledPosts;
