import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased font-primary text-text`}
  }

  .custom-scrollbar-vertical {
    ${tw`
      rounded-[3px]
      bg-accent 
      w-[0.4rem] 
      z-[9999] 
      cursor-pointer 
    `}
  }

  .custom-scrollbar-horizontal{
    ${tw`
      rounded-[3px]
      bg-accent 
      h-[0.4rem] 
      z-[9999] 
      cursor-pointer 
    `}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
