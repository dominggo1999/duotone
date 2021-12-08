import tw, { styled } from 'twin.macro';
import { HexColorPicker as UnstyledPicker, HexColorInput as UnstyledInput } from 'react-colorful';

export const ColorPickerWrapper = styled.div`
  ${tw`
    relative  
    flex 
    mb-6 
    h-[40px]   
  `}

  .react-colorful{
    ${tw`
      absolute 
      z-50 
      top-full 
      mt-2  
    `}
  }

  input {
    ${tw`
      h-full   
      bg-transparent 
      px-2 
      py-2 
      border 
      border-white 
      rounded-xl 
      w-5/12
      md:w-full 
      px-8  
      focus:border-accent 
      outline-none 
      text-accent
    `}
  }

`;

export const Symbol = styled.span`
  ${tw`
    absolute 
    left-[60px]
    text-2xl  
    text-accent 
    select-none
  `}

  top: 50%; 
  transform: translateY(-50%);
`;

export const TogglePickerButton = styled.button`
  ${tw`
    min-w-[40px]
    h-full  
    rounded-full 
    mr-2 
    border-2 
    border-white
  `}
`;

export const Title = styled.div`
  ${tw`
    text-2xl  
    mb-2
  `}
`;

export const MobilePicker = styled.div`
  .react-colorful {
    ${tw`
      absolute 
      z-[9999]
    `}

    bottom: 22%;
    right: 0;
  }
`;
