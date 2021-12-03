import tw, { styled, css } from 'twin.macro';
import { keyframes } from 'styled-components';

export const TemplateWrapper = styled.div`
  ${tw`
    flex   
    flex-wrap 
    gap-y-6 
    justify-between 
    py-5 
    pr-[8px]
  `}
`;

export const TemplateItem = styled.div`
  ${tw`
    w-1/3
    cursor-pointer 
    flex 
    flex-col
    items-center 
    justify-center
  `}
`;

export const TemplateName = styled.div`
  ${tw`
    font-primary 
    text-xl 
    text-center 
    font-semibold
  `}
`;

export const ColorPreview = styled.div`
  ${tw`
    w-[80%]  
    flex  
    items-center 
    justify-center 
    mb-2
  `}

  aspect-ratio: 1/1;
`;

const morph = ({ frames }) => keyframes`
  0%{
    border-radius: ${frames[0]};
  }

  20%{
    border-radius: ${frames[1]}
  }

  40%{
    border-radius: ${frames[2]}
  }

  60%{
    border-radius: ${frames[3]}
  }

  80%{
    border-radius: ${frames[4]}
  }

  100%{
    border-radius: ${frames[0]};
  }
`;

const blobScale = keyframes`
  0% {
    transform: scaleX(.9) scaleY(1);
  }
  25% {
    transform: scaleX(.9) scaleY(.9);
  }
  50% {
    transform: scaleX(1) scaleY(.9);
  }
  75% {
    transform: scaleX(.9) scaleY(.9);
  }
  100% {
    transform: scaleX(.9) scaleY(1);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(0);
  }
`;

export const Blob = styled.div`
  ${tw`
    w-full 
    h-full 
  `}

  ${({
    c1, c2, scaleTime, rotateTime,
  }) => {
    return css`
      background-image: linear-gradient(${c1},${c2});
      animation: ${morph} 20s linear infinite,${blobScale} ${scaleTime}s linear infinite,
      ${rotate} ${rotateTime}s linear infinite  ;
    `;
  }}

 
`;
