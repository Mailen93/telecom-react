import styled from "styled-components";
import theme from '../../utils/theme'

export const MainContainer = styled.div`
    width: 100%;
    background-color: ${theme.colors.primaryRed};
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
`
export const LeftNavContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const Logo = styled.img`
    width: 170px;
`

export const NavItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
export const NavItem = styled.a`
    text-decoration: none;
    color: white;
`

export const RightNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const NavIcon = styled.img`
    width: 24px;
`