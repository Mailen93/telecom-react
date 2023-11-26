import styled from "styled-components";
import theme from "../../utils/theme";

export const MainContainer = styled.header`
  width: 100%;
  background-color: ${theme.colors.primaryRed};
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
`;
export const LeftNavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 170px;
`;

export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const NavItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 24px;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background-color: white;
    margin-top: 4px;
    border-radius: 2px;
    transition: all 0.3s ease-out;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const RightNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const NavIcon = styled.img`
  width: 24px;
`;
