import Link from "next/link";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import Container from "../styles/common.style";
import StyledFooter from "../styles/components/footer.style";
import ExternalLink from "./elements/ExternalLink";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="divider" />
        <div className="links-social-container">
          <div className="links-container">
            <Link href="/">
              <a href="/#" className="nav-link">
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a href="/#" className="nav-link">
                Blog
              </a>
            </Link>
            <Link href="/projects">
              <a href="/#" className="nav-link">
                Projects
              </a>
            </Link>
            <Link href="/space">
              <a href="/#" className="nav-link">
                Space
              </a>
            </Link>
          </div>
          <div className="social-container">
            <p className="lets-connect">Find me on</p>
            <ExternalLink
              className="nav-link"
              href="https://twitter.com/KisanKumavat8"
            >
              <SiTwitter title="Twitter" />
            </ExternalLink>
            <ExternalLink
              className="nav-link"
              href="https://www.linkedin.com/in/kisan-kumavat-966186190/"
            >
              <SiLinkedin title="LinkedIn" />
            </ExternalLink>
            <ExternalLink
              className="nav-link"
              href="https://github.com/kisankumavat85"
            >
              <SiGithub title="GitHub" />
            </ExternalLink>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
