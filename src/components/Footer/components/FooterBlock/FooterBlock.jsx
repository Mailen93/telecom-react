// React
import React from "react";

// Styles
import * as Styled from "./style";

const renderContent = (content) => {
  if (Array.isArray(content)) {
    return content.map((item) => {
      return <Styled.BlockText key={item.id}>{item.label}</Styled.BlockText>;
    });
  } else if (typeof content === "string") {
    return <Styled.BlockText>{content}</Styled.BlockText>;
  }
};

const FooterBlock = ({ title, content }) => {
  return (
    <Styled.FooterBlock>
      <Styled.BlockTitle>{title}</Styled.BlockTitle>
      <Styled.BlockDivider />
      <Styled.BlockContent>{renderContent(content)}</Styled.BlockContent>
    </Styled.FooterBlock>
  );
};

export default FooterBlock;
