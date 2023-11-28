// React
import React, { useEffect, useState } from "react";

// Styles
import * as Styled from "./style";

// Components
import UploadForm from "./components/UploadForm";
import ProductsList from "./components/ProductsList/ProductsList";

const UploadProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    document.title = "En un cumple! - Alta";
  }, []);

  console.log(selectedProduct);
  return (
    <Styled.UploadSection>
      <UploadForm
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <ProductsList setSelectedProduct={setSelectedProduct} />
    </Styled.UploadSection>
  );
};

export default UploadProducts;
