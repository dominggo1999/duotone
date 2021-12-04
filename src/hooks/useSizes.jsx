import React from 'react';
import { useMediaQuery } from 'react-responsive';

const useSizes = () => {
  const isMedium = useMediaQuery({ query: '(min-width: 768px)' });

  return { isMedium };
};

export default useSizes;
