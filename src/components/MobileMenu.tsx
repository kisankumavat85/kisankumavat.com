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
          <Link href="/space">
            <a>Space</a>
          </Link>
        </li>
      </ul>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
