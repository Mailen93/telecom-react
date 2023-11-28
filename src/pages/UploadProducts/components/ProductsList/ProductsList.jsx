// React
import React, { useContext } from "react";

// Styles
import * as Styled from "./style";

// Context
import ProductsContext from "../../../../contexts/ProductsContext";
import ProductItem from "../ProductItem/ProductItem";

const ProductsList = ({ setSelectedProduct }) => {
  const { products } = useContext(ProductsContext);
  return (
    <Styled.ListBody>
      {products?.map((product, index) => (
        <ProductItem
          key={`${product.id}-${index}`}
          product={product}
          setSelectedProduct={setSelectedProduct}
        />
      ))}
    </Styled.ListBody>
  );
};

export default ProductsList;
