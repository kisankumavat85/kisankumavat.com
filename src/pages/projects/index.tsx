import Head from "next/head";
import Link from "next/link";
import { FC, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { ImEarth, ImGithub } from "react-icons/im";

import withLayout from "../../components/HOC/withLayout";
import SearchInput from "../../components/SearchInput";
import projects from "../../data/projects";

import StyledProjects from "../../styles/pages/projects.style";

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
            <div key={project.name} className="project">
              <div className="project-name">
                <span>{project.name}</span>
                <div className="project-name-icons">
                  <span>
                    <span className="icon">
                      <Link href={project.githubLink}>
                        <ImGithub />
                      </Link>
                    </span>
                    <span className="icon">
                      <Link href={project.live}>
                        <ImEarth />
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
              <div className="project-description">{project.description}</div>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-item">
                    {t}
                  </span>
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
