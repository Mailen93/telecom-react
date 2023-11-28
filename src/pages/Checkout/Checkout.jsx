// React
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import * as Styled from "./style";

// Contexts
import CartContext from "../../contexts/CartContext";
import ProductArticle from "./components/ProductArticle/ProductArticle";
import { summaryItems } from "../../utils/constants";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const quantityProducts = cart.reduce((acc, item) => {
    const totalQuantity = acc + item.quantity;
    return totalQuantity;
  }, 0);

  const calculateSummaryTotals = (id) => {
    switch (id) {
      case "products":
        return (
          <Styled.SummaryItemTotal>
            AR${" "}
            {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)}
          </Styled.SummaryItemTotal>
        );
      case "shipping":
        return <Styled.SummaryItemTotal>Gratis</Styled.SummaryItemTotal>;
      case "taxes":
        return (
          <Styled.SummaryItemTotal>
            AR${" "}
            {cart.reduce(
              (acc, item) => acc + item.quantity * item.price * 0.21,
              0
            )}
          </Styled.SummaryItemTotal>
        );
      default:
        return (
          <Styled.SummaryItemTotal>
            AR${" "}
            {cart.reduce(
              (acc, item) => acc + item.quantity * item.price * 1.21,
              0
            )}
          </Styled.SummaryItemTotal>
        );
    }
  };

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
      <Styled.Summary>
        <Styled.SummaryTitle>Resumen Carrito:</Styled.SummaryTitle>
        <Styled.SumaryDetailContainer>
          {summaryItems.map((item) => (
            <Styled.SummaryItemLabel key={item.id}>
              {item.label}
              {calculateSummaryTotals(item.id)}
            </Styled.SummaryItemLabel>
          ))}
        </Styled.SumaryDetailContainer>
      </Styled.Summary>
    </Styled.CheckoutSection>
  );
};

export default Checkout;
