// React
import React from 'react'

// Styles 
import * as Styled from './style'

// Utils
import { footerContent } from '../../utils/constants'
import FooterBlock from './components/FooterBlock/FooterBlock'

const renderFooterBlocks = () => {
   return footerContent.map(item => (
    <FooterBlock key={item.id} title={item.title} content={item.content} />
   ))
}


const Footer = () => {
  return (
    <Styled.FooterBody>
        <Styled.FooterInfoContainer>
           {renderFooterBlocks()}
        </Styled.FooterInfoContainer>
    </Styled.FooterBody>
  )
}

export default Footer