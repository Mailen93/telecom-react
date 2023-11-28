// React
import React, { useContext, useEffect, useRef, useState } from "react";

// Styles
import * as Styled from "./style";
import { uploadInputs } from "../../../../utils/constants";

// Utils
import { NewGame } from "../../../../assets/ProductsImages/index";

// UUID
import { v4 as uuidv4 } from "uuid";

// Contexts
import ProductsContext from "../../../../contexts/ProductsContext";

const UploadForm = () => {
  const { createProduct } = useContext(ProductsContext);
  const [form, setForm] = useState({ id: uuidv4(), image: NewGame });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createProduct(form);
    setForm({ id: uuidv4(), image: NewGame });
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    const newItem = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newItem);
  };

  return (
    <Styled.FormBody>
      <Styled.FormTitle>Upload a Game</Styled.FormTitle>
      {uploadInputs.map((input) => (
        <Styled.InputWrapper key={input.id}>
          <Styled.FormLabel>{input.label}: </Styled.FormLabel>
          <Styled.FormInput
            onChange={handleChange}
            name={input.id}
            type={input.id === "price" ? "number" : "text"}
            value={form[input.id] || ""}
          />
        </Styled.InputWrapper>
      ))}
      <Styled.UploadButton onClick={handleSubmit}>Upload</Styled.UploadButton>
    </Styled.FormBody>
  );
};

export default UploadForm;
