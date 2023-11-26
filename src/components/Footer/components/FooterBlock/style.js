import styled from "styled-components";

export const FooterBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 300px;
    min-height: 200px;
`
export const BlockTitle = styled.h2`
    font-size: 24px;
    text-transform: uppercase;
`
export const BlockDivider = styled.div`
    height: 2px;
    width: 100%;
    background-color: white;
`
export const BlockContent = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
`

export const BlockText = styled.p`
    margin-bottom: 10px;
`