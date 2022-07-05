import Link from "next/link";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { Container } from "../styles/common.style";
import { StyledFooter } from "../styles/components/footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="divider"></div>
        <div className="links-social-container">
          <div className="links-container">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
            <Link href="/projects">
              <a className="nav-link">Projects</a>
            </Link>
            <Link href="/space">
              <a className="nav-link">Space</a>
            </Link>
          </div>
          <div className="social-container">
            <p className="lets-connect">Find me on</p>
            <Link href="https://twitter.com/KisanKumavat8">
              <a className="nav-link">
                <SiTwitter />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/kisan-kumavat-966186190/">
              <a className="nav-link">
                <SiLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/kisankumavat85">
              <a className="nav-link">
                <SiGithub />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
