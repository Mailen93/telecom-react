// React
import React, { useContext, useState } from "react";

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

  const renderTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return total;
  };

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
          {!!cart.length && (
            <>
              <Styled.Total>
                Total:
                <Styled.TotalNumber>AR$ {renderTotal()}</Styled.TotalNumber>
              </Styled.Total>
              <Styled.CheckOutButton href="/checkout">
                Check Out
              </Styled.CheckOutButton>
            </>
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
