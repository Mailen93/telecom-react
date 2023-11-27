import styled from "styled-components";
import theme from "../../utils/theme";

export const CheckoutSection = styled.section`
    display: flex;
    gap: 20px;
    margin: 40px 80px;
    width: 100%;
    height: calc(100vh - 100px);
`
export const ArticlesGroup = styled.div`
    width: 50%;
    height: 100%;
    max-height: 800px;
`

export const ArticlesCounter = styled.p`
    padding: 40px;
    font-size: 32px;
    background-color: ${theme.colors.primaryOrange};
    border-radius: 10px 10px 0 0;
    color: white;
    
`

export const ArticlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding-bottom: 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    height: 100%;
    max-height: 420px;
`

