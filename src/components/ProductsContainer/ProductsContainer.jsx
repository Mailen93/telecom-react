// React
import React, { useContext } from "react";

// Styles
import * as Styled from "./style";

// Components
import ProductCard from "../ProductCard/ProductCard";

// Context
import ProductsContext from "../../contexts/ProductsContext";

const ProductsContainer = ({ title }) => {
  const { products } = useContext(ProductsContext)

  return (
    <Styled.MainContainer>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
      </Styled.TitleWrapper>
      <Styled.ProductsContainer>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.name}
            players={product.players}
            playersAge={product.age}
            detail={product.description}
            price={product.price}
          />
        ))}
      </Styled.ProductsContainer>
    </Styled.MainContainer>
  );
};

export default ProductsContainer;
