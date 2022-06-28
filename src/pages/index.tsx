import Image from "next/image";
import Head from "next/head";

// Components
import FeaturedPosts from "../components/FeaturedPosts";
import SkillsSection from "../components/SkillsSection";
import withLayout from "../components/HOC/withLayout";
import { getFeaturedPosts } from "../apis";

// Styles
import { About } from "../styles/pages/index.style";

// Assets
import Pofile_Image from "../../public/images/profile_img.jpg";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const Home = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Kisan Kumavat | Web Developer</title>
      </Head>
      <About>
        <div className="greetings-container">
          <h1 className="greetings">
            Hi,
            <br />
            I&apos;m <span>Kisan</span>
            <br />
            Web Developer
          </h1>
          <div className="img-div">
            <Image
              src={Pofile_Image}
              alt="Kisan Kumavat"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p className="about">
          I love to code in JavaScript. I use React / Next.js to build modern
          Web apps. Currently working as Junior Software Engineer at Green Apex
          Technolabs, India.
        </p>
        {/* <div className="contact-cv-container">
          <div className="contact-conatiner">
            <div className="contact-item">
              <SiTwitter />
            </div>
            <div className="contact-item">
              <SiLinkedin />
            </div>
            <div className="contact-item">
              <SiGithub />
            </div>
          </div>
          <div className="cv-container">
            <a href="#">Download CV</a>
          </div>
        </div> */}
        <SkillsSection />
        <FeaturedPosts posts={posts} />
      </About>
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
