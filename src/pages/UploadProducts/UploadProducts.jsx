// React
import React from "react";

// Styles
import * as Styled from "./style";

// Components
import UploadForm from "./components/UploadForm";

const UploadProducts = () => {
  return <Styled.UploadSection>

        <UploadForm />
  </Styled.UploadSection>;
};

export default UploadProducts;
