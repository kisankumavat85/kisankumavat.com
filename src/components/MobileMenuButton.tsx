import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { StyledMobileMenuButton } from "../styles/components/mobile-menu-button.style";
import MobileMenu from "./MobileMenu";

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

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <StyledMobileMenuButton onClick={handleMenuClick}>
        <button>{isMenuOpen ? <IoMdClose /> : <IoMdMenu />}</button>
      </StyledMobileMenuButton>
      {isMenuOpen && <MobileMenu />}
    </>
  );
};

export default MobileMenuButton;
