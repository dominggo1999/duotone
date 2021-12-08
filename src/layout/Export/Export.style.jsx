import tw, { styled } from 'twin.macro';
import { keyframes } from 'styled-components';

const dualRingSpinner = keyframes`
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const ExportSection = styled.div`
  ${tw`
    py-2 
    flex  
    flex-col  
    items-center
    gap-y-2
  `}
`;

export const Spinner = styled.div`
  ${tw` 
    h-full 
  `}
  aspect-ratio: 1/1;

  &::after {
    opacity: 80%;
    content: " ";
    display: inline-block;
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 4px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${dualRingSpinner} 1.2s linear infinite;
  }
`;

export const ExportButton = styled.button`
  ${tw`
    text-black 
    bg-accent 
    px-3 
    py-2 
    rounded-xl 
    h-full  
    flex 
    justify-center 
    items-center   
    w-1/2 
    min-w-[180px]
    font-medium
  `}

  &:hover{
    background: #92e4d9;
  }

`;

export const Backdrop = styled.div`
  ${tw`
    absolute 
    top-0 
    left-0 
    z-[10000] 
    flex 
    items-center 
    justify-center 
    items-center 
    w-full 
    h-screen
  `}

  background-color: #00000057;
`;
