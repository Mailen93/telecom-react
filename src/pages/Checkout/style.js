import styled from "styled-components";
import theme from "../../utils/theme";

export const CheckoutSection = styled.section`
    display: flex;
    gap: 20px;
    padding: 40px 80px;
    width: 100%;
    height: calc(100vh - 100px);
    justify-content: space-evenly;
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
    border-radius: 0 0 10px 10px;
`

export const NoArticlesAvailable = styled.p`
    font-size: 45px;
    color: ${theme.colors.primaryOrange};
    text-align: center;
    width: 80%;
    margin: auto;
`

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 40px;
    position: relative;
    height: fit-content;
    width: 400px;
`

export const SummaryTitle = styled.p`
    width: 100%;
    font-size: 32px;
    font-weight: 600;
    background-color: ${theme.colors.primaryOrange};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px 10px 0 0;
    padding: 10px;
    color: white;
`
export const SumaryDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 0;
  gap: 10px;

  & > p:last-of-type {
    border-top: 1px solid gray;
    padding-top: 20px;
  }
`;


export const SummaryItemLabel = styled.p`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`
export const SummaryItemTotal = styled.span`
    font-weight: 600;
`


export const PayButton = styled.button``
