import React from 'react';
import { useMediaQuery } from 'react-responsive';

const useSize = () => {
  const isMedium = useMediaQuery({ query: '(min-width: 768px)' });

  return { isMedium };
};

export default useSize;
