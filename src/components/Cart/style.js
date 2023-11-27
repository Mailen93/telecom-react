import styled from "styled-components";
import theme from "../../utils/theme";

export const CartIconWrapper = styled.div`
  position: fixed;
  top: 37px;
  right: 23px;
`;

export const CartIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const CartBody = styled.div`
  width: 300px;
  background-color: white;
  height: 300px;
  position: fixed;
  top: 110px;
  right: 10px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  -webkit-box-shadow: 21px 20px 64px 2px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 21px 20px 64px 2px rgba(0, 0, 0, 0.78);
  box-shadow: 21px 20px 64px 2px rgba(0, 0, 0, 0.78);
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const CartTitle = styled.h3`
  font-size: 32px;
  color: ${theme.colors.primaryGreen};
  margin-top: 10px;
`;

export const CloseIconWrapper = styled.div`
  padding: 4px;
  border-radius: 4px;
  background-color: ${theme.colors.primaryRed};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  overflow-y: scroll;
  padding-right: 6px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primaryRed};
    border-radius: 8px;
  }
`;

export const EmptyCart = styled.p`
  padding: 10px;
  background-color: ${theme.colors.primaryRed};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 25% 0;
`;

export const Total = styled.p`
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  background-color: ${theme.colors.primaryRed};
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const TotalNumber = styled.span`
  font-weight: 800;
`;

export const CheckOutButton = styled.a`
  text-decoration: none;
  color: white;
  width: 100%;
  background-color: ${theme.colors.primaryOrange};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  cursor: pointer;
`;
