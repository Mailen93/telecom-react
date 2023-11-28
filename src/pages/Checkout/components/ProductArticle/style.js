import styled from "styled-components";

export const ArticleBody = styled.div`
  padding: 20px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ArticleInfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ArticleImage = styled.img`
  width: 300px;
  object-fit: contain;
`;

export const ArticleDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 20px;
  max-width: 300px;
`;

export const ArticleDetailTitle = styled.h3``;

export const ArticleDetail = styled.p``;

export const ArticlePrice = styled.p`
  font-size: 30px;
`;

export const ArticleQuantityWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddAndDeleteButton = styled.button``;

export const DeleteArticle = styled.button``;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: gray;
`;

export const ActionButtonsContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 20px;
  display: flex;
  gap: 20px;
`;
