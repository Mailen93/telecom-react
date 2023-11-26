import styled from "styled-components";
import theme from "../../utils/theme";

export const MainContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 10px;
`

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: ${theme.colors.primaryGreen};
    border-radius: 10px;
`

export const Title = styled.h2`
    font-size: 32px;
    letter-spacing: 4px;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`
export const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;
    padding: 50px;
`