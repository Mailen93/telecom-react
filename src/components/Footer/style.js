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


