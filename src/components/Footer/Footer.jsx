import React from 'react';
import { ContextHeaderFooter } from '../../context/ContextHeaderFooter';

const Footer = () => {
  return (
    <ContextHeaderFooter.Consumer>
        {({footerContent}) => (
            <div>
                
            </div>
        )}
    </ContextHeaderFooter.Consumer>
  )
}

export default Footer