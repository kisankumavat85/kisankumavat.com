import styled from "styled-components";

const StyledFeaturedPosts = styled.section`
  margin-bottom: 3rem;

  .featured-posts-heading {
    font-size: 2.3rem;
    color: ${(props) => props.theme.headingColor};
    margin-bottom: 1rem;
  }

  .featured-posts-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.8rem;
    background-color: ${(props) => props.theme.backgroundColor1};
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 0.5rem;
    cursor: pointer;

    .card-title {
      color: ${(props) => props.theme.headingColor};
      margin-bottom: 1rem;
      font-size: 1.125rem;
    }

    .card-date {
      color: ${(props) => props.theme.paragraphColor3};
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    .featured-posts-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .featured-posts-heading {
      font-size: 1.8rem;
    }

    /* .featured-posts-container {
      grid-template-columns: 1fr 1fr;
    } */
  }
`;

export default StyledFeaturedPosts;
