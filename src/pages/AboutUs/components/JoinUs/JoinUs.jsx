// React
import React from "react";

// Styles
import * as Styled from "./style";
import { values } from "../../../../utils/constants";
import ValueCard from "../ValueCard/ValueCard";

const JoinUs = () => {
  return (
    <Styled.JoinsUsSection>
      <Styled.TitlesWrapper>
        <Styled.JoinUsTitle>
          Unite a nuestra hermosa comunidad
        </Styled.JoinUsTitle>
        <Styled.JoinUsSubtitle>Conocé nuestros valores</Styled.JoinUsSubtitle>
      </Styled.TitlesWrapper>
      <Styled.ValuesContainer>
        {values.map((value) => (
          <ValueCard value={value} key={value.id} />
        ))}
      </Styled.ValuesContainer>
    </Styled.JoinsUsSection>
  );
};

export default JoinUs;
