// React
import React from 'react'

// Styles
import * as Styled from './style'

const ProductsContainer = ({title}) => {
  return (
    <Styled.MainContainer><Styled.TitleWrapper><Styled.Title>{title}</Styled.Title></Styled.TitleWrapper></Styled.MainContainer>
  )
}

export default ProductsContainer