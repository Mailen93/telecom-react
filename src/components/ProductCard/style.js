import styled from "styled-components"
import theme from '../../utils/theme'

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const CardImage = styled.img`
    width: 100%;
    object-fit: contain;
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
    align-items: center;
`
export const PlayersDetail = styled.div`
    display: flex;
    gap: 10px;
`

export const PlayerIcon = styled.img`
    width: 20px;
`

export const Players = styled.p``

export const PlayersAge  = styled.span``

export const Detail = styled.p``

export const Price = styled.p``

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const Button = styled.button`
    padding: 20px 10px;
    border-radius: 8px;
    color: white;
    background-color: black;
`
