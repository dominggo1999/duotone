import tw, { styled, css } from 'twin.macro';
import { keyframes } from 'styled-components';

export const TemplateWrapper = styled.div`
  ${tw`
    flex   
    flex-wrap 
    gap-y-6 
    justify-between 
    py-5 
  `}
`;

export const TemplateName = styled.div`
  ${tw`
    font-primary 
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

const animation = ({
  scaleTime, rotateTime,
}) => css`
  ${morph} 10s linear infinite,
  ${blobScale} ${`${scaleTime}s`} linear infinite,
  ${rotate} ${`${rotateTime}s`} linear infinite;
`;

export const Blob = styled.div`
  animation: ${animation};
  ${tw`
    w-full
    h-full 
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

  transition: transform 400ms ease-in-out;


  @media screen and (min-width:768px){
    &:hover  {
      transform: translateY(-10px) scale(1.1);
    }
  }
`;
