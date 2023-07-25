// PageWithoutHeader.js
import React, { useEffect } from 'react';
import { useAppContext } from '../../context/ContextHeaderFooter';

const PageWithoutHeader = () => {
  const { setShowHeader } = useAppContext();

  useEffect(() => {
    setShowHeader(false); // عدم نمایش هدر در این صفحه
    return () => setShowHeader(true); // نمایش هدر در صفحات دیگر
  }, [setShowHeader]);

  return <div>Page without header</div>;
};

export default PageWithoutHeader;
