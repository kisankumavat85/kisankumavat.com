import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

// Components
import withLayout from "../../components/HOC/withLayout";

// Styles
import StyledContact from "../../styles/pages/contact.style";

const Blogs = () => (
  <StyledContact>
    <div className="page-intro">
      <h1>Connect</h1>
      <p>Let&apos;s connect for anything!</p>
    </div>
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
      <div className="contact-item">
        <SiInstagram />
      </div>
    </div>
  </StyledContact>
);

export default withLayout(Blogs);
