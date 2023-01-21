import { FC, useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import { MdDownload, MdKeyboardArrowDown } from "react-icons/md";

import { ThemeContext } from "styled-components";

// Components
import FeaturedPosts from "../components/FeaturedPosts";
import SkillsSection from "../components/SkillsSection";
import withLayout from "../components/HOC/withLayout";
import { getFeaturedPosts } from "../apis";

// Styles
import StyledAbout from "../styles/pages/index.style";

// Types
import { HomePageProps } from "../types";

// Assets
import profileImage1 from "../../public/images/avatar.png";
import profileImage2 from "../../public/images/avatar2.png";
// import ResumeFile from "../../public/files/resume_v7.pdf";

const Home: FC<HomePageProps> = (props) => {
  const { posts } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Kisan Kumavat | Web Developer</title>
      </Head>
      <StyledAbout>
        <div className="container">
          <div className="img-div">
            <Image
              src={theme === "light" ? profileImage1 : profileImage2}
              alt="Kisan Kumavat"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="greetings">
            Hi, I&apos;m <span className="kisan">Kisan</span>
            <br />
            <span className="developer">Web Developer</span>
          </h1>
          <div className="about-div">
            <p className="about">
              <span>&quot;</span>I love to code in JavaScript. I use tools like
              React, Next.js and TypeScript to build modern Web Apps. Currently
              working as Jr. Software Engineer.<span>&quot;</span>
            </p>
            <a
              className="resume-div"
              href="/files/resume_v7.pdf"
              download="Resume-Kisan Kumavat"
            >
              <span className="resume">Resume </span>
              <div className="resume-icon">
                <MdDownload />
              </div>
            </a>
            <div className="see-more-arrow">
              <span>See Work</span>
              <MdKeyboardArrowDown className="arrow" />
            </div>
          </div>
        </div>

        <SkillsSection />
        <FeaturedPosts posts={posts} />
      </StyledAbout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getFeaturedPosts();
  return {
    props: {
      posts,
    },
  };
};

export default withLayout(Home);
