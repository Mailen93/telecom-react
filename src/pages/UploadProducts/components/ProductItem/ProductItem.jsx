// React
import React from "react";

// Styles
import * as Styled from "./style";

const ProductItem = ({ product }) => {
  const productKeys = Object.keys(product).filter(
    (key) => key !== "units" && key !== "image"
  );

  return (
    <Styled.ProductItemBody>
      {productKeys?.map((key) => (
        <Styled.ProductDetailWrapper key={key}>
          <Styled.ProductDetailLabel>{key}</Styled.ProductDetailLabel>
          <Styled.ProductDetail>{product[key]}</Styled.ProductDetail>
        </Styled.ProductDetailWrapper>
      ))}
    </Styled.ProductItemBody>
  );
};

export default ProductItem;
