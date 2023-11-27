// React
import React, { useContext } from "react";

// Styles
import * as Styled from "./style";

// Contexts
import CartContext from "../../contexts/CartContext";
import ProductArticle from "./components/ProductArticle/ProductArticle";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const quantityProducts = cart.reduce((acc, item) => {
    const totalQuantity = acc + item.quantity
    return totalQuantity
  }, 0)
  return (
    <Styled.CheckoutSection>
      <Styled.ArticlesGroup>
      <Styled.ArticlesCounter>Cantidad de Artículos: {quantityProducts}</Styled.ArticlesCounter>
      <Styled.ArticlesWrapper>
        
        {cart.map(article => <ProductArticle key={article.id} article={article} />)}
      </Styled.ArticlesWrapper>
      </Styled.ArticlesGroup>
    </Styled.CheckoutSection>
  );
};

export default Checkout;
