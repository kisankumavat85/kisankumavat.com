import { Container } from "../styles/common.style";
import { StyledMain } from "../styles/components/layout.style";
import Footer from "./Footer";

import Header from "./Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <StyledMain>
        <Container>{children}</Container>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
