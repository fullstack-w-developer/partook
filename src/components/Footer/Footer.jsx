import React from 'react';
import { ContextHeaderFooter } from '../../context/ContextHeaderFooter';

const Footer = () => {
  return (
    <ContextHeaderFooter.Consumer>
        {({footerContent}) => (
            <div>
                footer
            </div>
        )}
    </ContextHeaderFooter.Consumer>
  )
}

export default Footer