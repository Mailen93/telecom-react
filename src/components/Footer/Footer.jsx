// React
import React from "react";

// Styles
import * as Styled from "./style";

// Utils
import { footerContent, footerIcons } from "../../utils/constants";

// Components
import FooterBlock from "./components/FooterBlock/FooterBlock";

const renderFooterBlocks = () => {
  return footerContent.map((item) => (
    <FooterBlock key={item.id} title={item.title} content={item.content} />
  ));
};

const renderIcons = () => {
  return footerIcons.map((icon) => (
    <Styled.SocialMediaLinks href={icon.link} target="_blank">
      <Styled.FooterIcon key={icon.id} src={icon.icon} />
    </Styled.SocialMediaLinks>
  ));
};

const Footer = () => {
  return (
    <Styled.FooterBody>
      <Styled.FooterInfoContainer>
        {renderFooterBlocks()}
      </Styled.FooterInfoContainer>
      <Styled.FooterMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.006816295196!2d-58.405711024442276!3d-34.80577036819679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd36dad3b5fe7%3A0x8cc70b8426da1e6d!2sSamuel%20Miguel%20Spiro%2065%2C%20B1846DUB%20Adrogu%C3%A9%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1701027340790!5m2!1ses!2sar" />
      <Styled.FooterEnd>
        2023 - Todos los derechos reservados
        <Styled.Developer>Mailen Alvarez</Styled.Developer>
      </Styled.FooterEnd>
      <Styled.IconsWrapper>
        {renderIcons()}
      </Styled.IconsWrapper>
    </Styled.FooterBody>
  );
};

export default Footer;
