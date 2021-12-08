import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    flex 
    flex-col-reverse 
    md:flex-row 
    w-full
    h-screen 
    overflow-auto 
  `}
`;

export const CapsuleWrapper = styled.div`
  ${tw`
    w-full 
    h-full 
    bg-red-500 
    absolute 
    top-0  
    left-0 
  `}

  z-index: -1;
`;

export const Capsule = styled.div`
  ${tw`
    w-full 
    h-full 
    relative 
    overflow-hidden
  `}
`;
