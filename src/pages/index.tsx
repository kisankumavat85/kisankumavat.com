import { FC } from "react";
import Image from "next/image";
import Head from "next/head";
import { MdDownload, MdKeyboardArrowDown } from "react-icons/md";

// Components
import FeaturedPosts from "../components/FeaturedPosts";
import SkillsSection from "../components/SkillsSection";
import withLayout from "../components/HOC/withLayout";
import { getFeaturedPosts } from "../apis";

// Styles
import StyledAbout from "../styles/pages/index.style";

// Assets
import pofileImage from "../../public/images/profile_img.jpg";

// Types
import { HomePageProps } from "../types";

const Home: FC<HomePageProps> = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Kisan Kumavat | Web Developer</title>
      </Head>
      <StyledAbout>
        <div className="container">
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
            <div className="resume-div">
              <span className="resume">Resume </span>
              <div className="resume-icon">
                <MdDownload />
              </div>
            </div>
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
