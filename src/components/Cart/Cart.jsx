// React
import React, { useState } from "react";

// Styles
import * as Styled from "./style";

// Assets
import { Close, CartIcon } from "../../assets/icons";


const Cart = () => {
  const [cart, setCart] = useState(false);
  return (
    <>
      {cart ? (
        <Styled.CartBody>
          <Styled.CloseIconWrapper>
            <Styled.CloseIcon src={Close} onClick={() => setCart(!cart)} />
          </Styled.CloseIconWrapper>
          <Styled.CartTitle>Your Cart</Styled.CartTitle>
        </Styled.CartBody>
      ) : <Styled.CartIconWrapper onClick={() => setCart(!cart)}>
          <Styled.CartIcon src={CartIcon} />
        </Styled.CartIconWrapper>}
    </>
  );
};

export default Cart;
