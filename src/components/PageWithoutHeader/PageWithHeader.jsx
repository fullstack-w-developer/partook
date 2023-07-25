// PageWithHeader.js
import React, { useEffect } from 'react';
import { useAppContext } from '../../context/ContextHeaderFooter';

const PageWithHeader = () => {
  const { setShowHeader } = useAppContext();

  useEffect(() => {
    setShowHeader(true); // نمایش هدر در این صفحه
    return () => setShowHeader(true); // نمایش هدر در صفحات دیگر نیز
  }, [setShowHeader]);

  return <div>Page with header</div>;
};

export default PageWithHeader;
