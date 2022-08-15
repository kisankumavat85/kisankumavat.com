import Head from "next/head";
import Image from "next/image";
import { FC, useState } from "react";
import { ImEarth, ImGithub } from "react-icons/im";
import ExternalLink from "../../components/elements/ExternalLink";

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
              <div className="project-image">
                <Image src={project.image} objectFit="cover" layout="fill" />
              </div>
              <div className="project-details">
                <div className="project-name">
                  <span>{project.name}</span>
                  <div className="project-name-icons">
                    <span>
                      <ExternalLink className="icon" href={project.githubLink}>
                        <ImGithub title="See GitHub Repo" />
                      </ExternalLink>
                      <ExternalLink className="icon" href={project.live}>
                        <ImEarth title="See Live App" />
                      </ExternalLink>
                    </span>
                  </div>
                </div>
                <div className="project-description">{project.description}</div>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <p key={t} className="tech-item">
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </StyledProjects>
    </>
  );
};

export default withLayout(Projects);
