// React
import React, { useContext, useEffect, useState } from "react";

// Styles
import * as Styled from "./style";

// Assets
import { Close, CartIcon } from "../../assets/icons";

// Components
import CartItem from "./components/CartItem/CartItem";

// Contexts
import CartContext from "../../contexts/CartContext";

const Cart = () => {
  const [cartModal, setCartModal] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log("SOY EL CART", cart);
  }, [cart]);

  return (
    <>
      {cartModal ? (
        <Styled.CartBody>
          <Styled.CloseIconWrapper>
            <Styled.CloseIcon
              src={Close}
              onClick={() => setCartModal(!cartModal)}
            />
          </Styled.CloseIconWrapper>
          <Styled.CartTitle>Your Cart</Styled.CartTitle>
          {!!cart.length ? (
            <Styled.ItemsWrapper>
              {cart.map((item) => (
                <CartItem key={item.id} game={item} />
              ))}
            </Styled.ItemsWrapper>
          ) : (
            <Styled.EmptyCart>{`No games added :(`}</Styled.EmptyCart>
          )}
        </Styled.CartBody>
      ) : (
        <Styled.CartIconWrapper onClick={() => setCartModal(!cartModal)}>
          <Styled.CartIcon src={CartIcon} />
        </Styled.CartIconWrapper>
      )}
    </>
  );
};

export default Cart;
