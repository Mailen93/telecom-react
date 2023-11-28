// React
import React, { useContext } from "react";

// Styles
import * as Styled from "./style";
import { prodcuctsListButtons } from "../../../../utils/constants";
import ProductsContext from "../../../../contexts/ProductsContext";

const ProductItem = ({ product }) => {
  const productKeys = Object.keys(product).filter(
    (key) => key !== "image" && key !== "id"
  );
  const { deleteProduct } = useContext(ProductsContext);
  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

  return (
    <Styled.ProductItemBody>
      <Styled.ProductDetailContainer>
        {productKeys?.map((key) => (
          <Styled.ProductDetailWrapper key={key}>
            <Styled.ProductDetailLabel>{key}</Styled.ProductDetailLabel>
            <Styled.ProductDetail>{product[key]}</Styled.ProductDetail>
          </Styled.ProductDetailWrapper>
        ))}
      </Styled.ProductDetailContainer>

      <Styled.ButtonsWrapper>
        {prodcuctsListButtons.map((button) => (
          <Styled.Button
            key={button.id}
            $type={button.id}
            onClick={
              button.id === "delete"
                ? () => handleDeleteProduct(product.id)
                : null
            }
          >
            {button.label}
          </Styled.Button>
        ))}
      </Styled.ButtonsWrapper>
    </Styled.ProductItemBody>
  );
};

export default ProductItem;
