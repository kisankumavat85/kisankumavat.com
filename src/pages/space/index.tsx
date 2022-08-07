import Head from "next/head";
import { FC, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import withLayout from "../../components/HOC/withLayout";
import SearchInput from "../../components/SearchInput";
import projects from "../../data/projects";

import StyledSpace from "../../styles/pages/space.style";

const Space: FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Head>
        <title>Kisan Kumavat | Space</title>
      </Head>

      <StyledSpace>
        <div className="page-intro">
          <h1>Page under Construction...</h1>
          {/* <p>
            This is my space where I share things that I like do, Like listing
            Books and Movies.
          </p> */}
          {/* <SearchInput setQuery={setQuery} placeholder="Search project" /> */}
        </div>

        {/* <section className="space-section">
          <h2 className="heading2">Kisan</h2>
        </section> */}
      </StyledSpace>
    </>
  );
};

export default withLayout(Space);
