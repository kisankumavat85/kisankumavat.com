import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import MobileMenu from "./MobileMenu";
import { StyledMobileMenuButton } from "../styles/components/mobile-menu-button.style";

const MobileMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  function cleanup() {
    document.body.style.overflow = "";
  }

  useEffect(() => cleanup, []);

  return (
    <>
      <StyledMobileMenuButton onClick={handleMenuClick}>
        <button type="button">
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </StyledMobileMenuButton>
      {isMenuOpen && <MobileMenu />}
    </>
  );
};

export default MobileMenuButton;
