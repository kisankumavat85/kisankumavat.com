import Link from "next/link";
import { StyledMobileMenu } from "../styles/components/mobile-menu.style";

const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <ul className="mobile-menu-container">
        <li>
          <Link href="/">
            <a href="/#">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a href="/#">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a href="/#">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/space">
            <a href="/#">Space</a>
          </Link>
        </li>
      </ul>
    </StyledMobileMenu>
  );
};
export default MobileMenu;
