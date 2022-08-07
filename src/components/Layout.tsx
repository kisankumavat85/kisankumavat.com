import { FC } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Container from "../styles/common.style";
import StyledMain from "../styles/components/layout.style";

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = (props) => {
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
