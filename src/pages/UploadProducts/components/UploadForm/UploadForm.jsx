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

const UploadForm = ({ selectedProduct, setSelectedProduct }) => {
  const { createProduct, updateProduct } = useContext(ProductsContext);
  const [form, setForm] = useState({ id: uuidv4(), image: NewGame });
  const [formIsValid, setFormIsValid] = useState(false);

  // const validateForm = () => {
  //   const isValid = uploadInputs.every((input) => {
  //     const inputValue = form[input.id];
  //     return inputValue !== undefined && inputValue !== "";
  //   });
  //   setFormIsValid(isValid);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!formIsValid) {
    //   alert("All fields are required!!");
    //   return;
    // }
    if (selectedProduct) {
      await updateProduct(form.id, form);
      setSelectedProduct(null);
    } else {
      await createProduct(form);
    }

    setForm({ id: uuidv4(), image: NewGame });
    //setFormIsValid(false);
  };

  const handleChange = (event) => {
    //validateForm();
    const newItem = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newItem);
  };

  useEffect(() => {
    if (selectedProduct) {
      setForm(selectedProduct);
    } else {
      setForm({ id: uuidv4(), image: NewGame });
    }
  }, [selectedProduct]);

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
