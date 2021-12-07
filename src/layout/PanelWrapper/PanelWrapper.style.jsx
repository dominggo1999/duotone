import tw, { styled } from 'twin.macro';

export const Panel = styled.div`
  ${tw`
    h-full    
  `}

  /* Hide default scrollbar and use plugin */
  scrollbar-width: none; /* Firefox 64 */
  -ms-overflow-style: none; /* IE 11 */
  ::-webkit-scrollbar{
    display: none;
  }
`;
