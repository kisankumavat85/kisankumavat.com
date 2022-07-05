import Link from "next/link";
import { useRouter } from "next/router";

// Components
import ThemeToggler from "./ThemeToggler";
import MobileMenuButton from "./MobileMenuButton";

// Styles
import { Container } from "../styles/common.style";
import { StyledHeader } from "../styles/components/header.style";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <>
      <StyledHeader>
        <Container>
          <div className="nav-container">
            <MobileMenuButton />
            <Link href="/">
              <a className="name-link">Kisan Kumavat</a>
            </Link>
            <div className="links-theme">
              <nav className="nav-links">
                <Link href="/">
                  <a className={`nav-link ${pathname === "/" && "active"}`}>
                    Home
                  </a>
                </Link>
                <Link href="/blog">
                  <a className={`nav-link ${pathname === "/blog" && "active"}`}>
                    Blog
                  </a>
                </Link>
                <Link href="/projects">
                  <a
                    className={`nav-link ${
                      pathname === "/projects" && "active"
                    }`}
                  >
                    Projects
                  </a>
                </Link>
                <Link href="/space">
                  <a
                    className={`nav-link ${
                      pathname === "/dashboard" && "active"
                    }`}
                  >
                    Space
                  </a>
                </Link>
              </nav>
              <ThemeToggler />
            </div>
          </div>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
