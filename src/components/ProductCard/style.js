import styled from "styled-components"
import theme from '../../utils/theme'

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid ${theme.colors.primaryRed};
    padding: 20px;
    justify-content: space-between;
    height: 520px;
    border-radius: 8px;
    max-width: 400px;
    box-shadow: 14px 16px 44px 1px rgba(0,0,0,0.48);
-webkit-box-shadow: 14px 16px 44px 1px rgba(0,0,0,0.48);
-moz-box-shadow: 14px 16px 44px 1px rgba(0,0,0,0.48);
`
export const CardImageWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const CardImage = styled.img`
width: 200px;
height: 200px;
object-fit: contain;
margin: 0 auto;
`

export const CardTitle  = styled.h2`
    font-size: 24px;
    color: ${theme.colors.primaryRed};
`

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: gray;
`

export const CardDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    justify-content: space-between;
`
export const PlayersDetail = styled.div`
    display: flex;
    gap: 10px;
    font-size: 18px;
    align-items: center;
    text-overflow: ellipsis;
`

export const PlayerIcon = styled.img`
    width: 20px;
`

export const Players = styled.p`
    font-weight: 600;
`

export const PlayersAge  = styled.span`
    font-weight: 500;
    margin-left: 10px;
`

export const Detail = styled.p`
    font-size: 18px;
`

export const Price = styled.p`
    font-size: 20px;
    font-weight: 600;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
`

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 4px;
    color: white;
    background-color: ${({$type}) => $type === 'comprar' ? theme.colors.primaryRed : 'black'};
    border: none;
    font-weight: 600;
    font-size: 18px;
`