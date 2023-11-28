// React
import React from "react";

// Styles
import * as Styled from "./style";
import { uploadInputs } from "../../../../utils/constants";

const handleSubmit = (event) => {
  event.preventDefault();
};

const UploadForm = () => {
  return (
    <Styled.FormBody>
      <Styled.FormTitle>Upload a Game</Styled.FormTitle>
      {uploadInputs.map((input) => (
        <Styled.InputWrapper key={input.id}>
          <Styled.FormLabel>{input.label}: </Styled.FormLabel>
          <Styled.FormInput />
        </Styled.InputWrapper>
      ))}
      <Styled.UploadButton onClick={handleSubmit}>Upload</Styled.UploadButton>
    </Styled.FormBody>
  );
};

export default UploadForm;
