import styled from "styled-components";
import theme from "../../utils/theme";

export const FooterBody = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.colors.primaryRed};
` 
export const FooterInfoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    margin-top: 40px;
`

export const FooterMap = styled.iframe`
    width: 80%;
    height: 300px;
    margin: 40px 0;
`
export const FooterEnd = styled.p`
    color: white;
    font-size: 24px;
`

export const Developer = styled.span`
    font-weight: 600;
`

export const IconsWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 20px 0;
`
export const SocialMediaLinks = styled.a`
    text-decoration: none;
`

export const FooterIcon = styled.img`
    width: 24px;
`



