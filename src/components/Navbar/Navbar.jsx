// React
import React from "react";

// Styles
import * as Styled from "./style";

// Assets
import Logo from "../../assets/Logo.png";

// Utils
import { navIcons, navigationitems } from "../../utils/constants";

const renderNavItems = () => {
  return navigationitems.map((item) => (
    <Styled.NavItem key={item.id} href={item.route}>
      {item.label}
    </Styled.NavItem>
  ));
};
const renderNavIcons = () => {
  return navIcons.map((icon) => (
    <Styled.NavIcon key={icon.id} src={icon.icon} alt={`${icon.id}-icon`} />
  ));
};

const Navbar = () => {
  return (
    <Styled.MainContainer>
      <Styled.LeftNavContainer>
        <Styled.Logo src={Logo} alt="Logo" />
        <Styled.NavItemsContainer>{renderNavItems()}</Styled.NavItemsContainer>
      </Styled.LeftNavContainer>
      <Styled.RightNavContainer>{renderNavIcons()}</Styled.RightNavContainer>
    </Styled.MainContainer>
  );
};

export default Navbar;
