import Head from "next/head";
import { FC, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import withLayout from "../../components/HOC/withLayout";
import SearchInput from "../../components/SearchInput";
import projects from "../../data/projects";

import { StyledSpace } from "../../styles/pages/space.style";

const Space: FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Head>
        <title>Kisan Kumavat | Space</title>
      </Head>

      <StyledSpace>
        <div className="page-intro">
          <h1>Space</h1>
          <p>
            Here are some of my Projects with Tech-Stack. Use search to filter
            Project by name or Tech-Stack.
          </p>
          {/* <SearchInput setQuery={setQuery} placeholder="Search project" /> */}
        </div>

        <section className="space-section">{/*  */}</section>
      </StyledSpace>
    </>
  );
};

export default withLayout(Space);
