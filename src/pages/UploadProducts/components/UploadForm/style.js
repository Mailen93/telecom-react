import styled from "styled-components";
import theme from "../../../../utils/theme";

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 15px;
  width: 40%;
  background-color: ${theme.colors.primaryOrange};
  height: fit-content;
  border-radius: 10px;
`;

export const FormTitle = styled.label`
  font-size: 30px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  &:focus {
    outline: 3px solid ${theme.colors.primaryGreen};
  }
  border: none;
`;

export const UploadButton = styled.button`
  padding: 15px;
  width: 50%;
  margin: 0 auto;
  border: none;
  background-color: ${theme.colors.primaryGreen};
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 5px 5px 1px black;
  transition: all ease 0.3s;
  &:active,
  &:focus {
    box-shadow: none;
  }
`;
