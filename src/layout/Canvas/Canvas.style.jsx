import tw, { styled, css } from 'twin.macro';

export const CanvasWrapper = styled.div`
  ${tw` 
    h-full
    w-full 
    bg-secondary 
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
  `}

  ${({ bg, scale, spacing }) => {
    return css`
      background-color: ${bg}; 
      transform :scale(${scale});
      padding : ${spacing}px;
    `;
  }}
`;

export const Image = styled.img`
  ${tw`
    max-w-full
  `}

  ${({
    blendMode, opacity, blur, brightness, contrast, spacing,
  }) => {
    return css`
      opacity: ${opacity};
      filter: grayscale(100%) contrast(${contrast}) blur(${blur}) brightness(${brightness});
      mix-blend-mode: ${blendMode};
      max-height: calc(50vh - calc(${spacing}px * 2)); 
      @media screen and (min-width:768px){
        max-height: calc(100vh - calc(${spacing}px * 2)); 
      }
    `;
  }}
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

  ${({ bg, blendMode }) => {
    return css`
      background-color: ${bg};
      mix-blend-mode: ${blendMode};
    `;
  }}
`;
