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
            product={product}
          />
        ))}
      </Styled.ProductsContainer>
    </Styled.MainContainer>
  );
};

export default ProductsContainer;
