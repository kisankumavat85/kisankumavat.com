import styled from "styled-components";

export const StyledSlug = styled.div`
  margin-bottom: 2rem;

  .page-intro {
    margin-bottom: 2rem;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      margin: 1rem 0;
      color: ${(props) => props.theme.headingColor};
    }

    .author-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      color: ${(props) => props.theme.paragraphColor2};
    }
  }

  .post-body {
    font-size: 1.1rem;
    position: relative;

    .image-wrapper {
      position: relative;
      width: 100%;
      height: 22rem;
      margin-bottom: 1rem;
    }

    img {
      border-radius: 10px;
    }

    p {
      color: ${(props) => props.theme.paragraphColor1};
      margin-bottom: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.headingColor};
    }

    ul,
    ol {
      margin: 1rem;
      padding-left: 2rem;
      color: ${(props) => props.theme.paragraphColor1};
    }

    li {
      padding-bottom: 0.2rem;
    }

    a {
      color: ${(props) => props.theme.headingColor};
      text-decoration: underline;
    }

    pre {
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    code {
      border-radius: 7px;
    }
  }

  @media (max-width: 768px) {
    .page-intro {
      h1 {
        font-size: 1.9rem;
      }
    }

    .post-body {
      .image-wrapper {
        height: 19rem;
      }
    }
  }

  @media (max-width: 600px) {
    .post-body {
      .image-wrapper {
        height: 13rem;
      }
    }
  }
`;
