import Link from "next/link";
import { StyledMobileMenu } from "../styles/components/mobile-menu.style";

const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <ul className="mobile-menu-container">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/KisanKumavat8">
            <a>Twitter</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/kisan-kumavat-966186190/">
            <a>LinkedIn</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/kisankumavat85">
            <a>GitHub</a>
          </Link>
        </li>
      </ul>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
