// React
import React from "react";

// Styles
import * as Styled from "./style";

// Components
import UploadForm from "./components/UploadForm";
import ProductsList from "./components/ProductsList/ProductsList";

const UploadProducts = () => {
  return (
    <Styled.UploadSection>
      <UploadForm />
      <ProductsList />
    </Styled.UploadSection>
  );
};

export default UploadProducts;
