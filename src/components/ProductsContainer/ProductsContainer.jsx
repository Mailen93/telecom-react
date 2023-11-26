// React
import React from 'react'

// Styles
import * as Styled from './style'
import { products } from '../../utils/constants'
import ProductCard from '../ProductCard/ProductCard'

const ProductsContainer = ({title}) => {
  return (
    <Styled.MainContainer><Styled.TitleWrapper><Styled.Title>{title}</Styled.Title></Styled.TitleWrapper>
    <Styled.ProductsContainer>
      {products.map(product  => <ProductCard key={product.id} image={product.image} title={product.name} players={product.players} playersAge={product.age} detail={product.description} price={product.price} />)}
    </Styled.ProductsContainer>
    </Styled.MainContainer>
  )
}

export default ProductsContainer