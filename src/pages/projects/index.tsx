import Head from "next/head";
import { FC, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import withLayout from "../../components/HOC/withLayout";
import SearchInput from "../../components/SearchInput";
import projects from "../../data/projects";

import { StyledProjects } from "../../styles/pages/projects.style";

const Projects: FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Head>
        <title>Kisan Kumavat | Projects</title>
      </Head>

      <StyledProjects>
        <div className="page-intro">
          <h1>Projects</h1>
          <p>
            Here are some of my Projects with Tech-Stack. Use search to filter
            Project by name or Tech-Stack.
          </p>
          <SearchInput setQuery={setQuery} placeholder="Search project" />
        </div>

        <section className="projects-section">
          {projects.map((project) => (
            <div className="project">
              <h4 className="project-name">
                <span>{project.name}</span>
                <span className="project-name-arrow">
                  <BsArrowRight />
                </span>
              </h4>
              <div className="project-description">{project.description}</div>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="tech-item">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </StyledProjects>
    </>
  );
};

export default withLayout(Projects);
