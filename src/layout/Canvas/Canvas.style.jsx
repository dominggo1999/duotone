import tw, { styled, css } from 'twin.macro';

export const CanvasWrapper = styled.div`
  ${tw` 
    h-full
    w-full 
    bg-black 
    flex 
    items-center 
    justify-center 
    relative 
    overflow-hidden 
  `}
`;

export const ImageWrapper = styled.div`
  ${tw`
    relative 
    overflow-hidden
  `}
`;

export const Image = styled.img`
  ${tw`
    max-w-full 
    z-[1]
  `}
`;

export const Foreground = styled.div`
  ${tw`
    z-[2] 
    absolute 
    w-full 
    h-full 
    top-0 
    left-0
  `}
`;
