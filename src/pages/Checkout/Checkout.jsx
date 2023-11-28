// React
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import * as Styled from "./style";

// Contexts
import CartContext from "../../contexts/CartContext";

// Components
import ProductArticle from "./components/ProductArticle/ProductArticle";
import Summary from "./components/Summary/Summary";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const quantityProducts = cart.reduce((acc, item) => {
    const totalQuantity = acc + item.quantity;
    return totalQuantity;
  }, 0);

  useEffect(() => {
    if (!cart.length) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [cart]);
  return (
    <Styled.CheckoutSection>
      <Styled.ArticlesGroup>
        <Styled.ArticlesCounter>
          Cantidad de Artículos: {quantityProducts}
        </Styled.ArticlesCounter>
        <Styled.ArticlesWrapper>
          {!!cart.length ? (
            cart.map((article) => (
              <ProductArticle key={article.id} article={article} />
            ))
          ) : (
            <Styled.NoArticlesAvailable>
              Oops! Te quedaste sin artículos. Volvamos al Inicio :D
            </Styled.NoArticlesAvailable>
          )}
        </Styled.ArticlesWrapper>
      </Styled.ArticlesGroup>
      <Summary cart={cart} />
    </Styled.CheckoutSection>
  );
};

export default Checkout;
