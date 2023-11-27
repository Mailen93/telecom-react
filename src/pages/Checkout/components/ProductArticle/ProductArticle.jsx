// React
import React, { useContext } from "react";

// Styles
import * as Styled from "./style";
import { addRemoveButtons } from "../../../../utils/constants";
import CartContext from "../../../../contexts/CartContext";

const ProductArticle = ({ article }) => {
  const { addToCartContext, deleteProductCartContext, deleteProductByQuantity } =
    useContext(CartContext);
  const handleAddArticle = (article) => {
    addToCartContext(article);
  };
  const handleRemoveByOneArticle = (articleId) => {
    deleteProductByQuantity(articleId)
  }
  return (
    <Styled.ArticleBody>
      <Styled.ArticleInfoContainer>
        <Styled.ArticleImage src={article.image} />
        <Styled.ArticleDetailWrapper>
          <Styled.ArticleDetailTitle>{article.name}</Styled.ArticleDetailTitle>
          <Styled.ArticleDetail>{article.description}</Styled.ArticleDetail>
          <Styled.ArticlePrice>AR$ {article.price}</Styled.ArticlePrice>
        </Styled.ArticleDetailWrapper>
      </Styled.ArticleInfoContainer>
      <Styled.ActionButtonsContainer>
        <Styled.DeleteArticle onClick={() => {deleteProductCartContext(article.id)}}>
          Eliminar
        </Styled.DeleteArticle>
        <Styled.ArticleQuantityWrapper>
          Cantidad: {article.quantity}
          {addRemoveButtons.map((button) => (
            <Styled.AddAndDeleteButton
              onClick={
                button.id === "add"
                  ? () => {
                      handleAddArticle(article);
                    }
                  : () => {handleRemoveByOneArticle(article.id)}
              }
              key={button.id}
            >
              {button.label}
            </Styled.AddAndDeleteButton>
          ))}
        </Styled.ArticleQuantityWrapper>
      </Styled.ActionButtonsContainer>
      <Styled.Divider />
    </Styled.ArticleBody>
  );
};

export default ProductArticle;
