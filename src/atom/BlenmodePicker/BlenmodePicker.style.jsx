import tw, { styled } from 'twin.macro';

export const BlenmodePickerWrapper = styled.div`
  ${tw`
    mb-6
  `} 

  .react-select-container{
    ${tw`
      w-full 
      md:max-w-xs
    `}
  }
  .react-select__control{
    ${tw`
      bg-transparent 
      font-primary 
    `}
  }
  .react-select__indicator-separator{
    display: none;
  }
  .react-select__indicators{
    svg{
      fill: white;
    }
  }
  .react-select__input-container, 
  .react-select__placeholder,
  .react-select__single-value{
    ${tw`
      text-white 
    `}
  }
  .react-select__input{
    ${tw`
      focus:border-2 
      focus:border-white
    `}
  }
  .react-select__menu{
    ${tw`
      text-black 
      font-primary 
    `}
  }

  .react-select__option {
    cursor: pointer;
  }

  .react-select__option:hover{
    background:  #71c2c5;
  }
  .react-select__option--is-focused{
    background:  #71c2c5;
  }
  .react-select__option--is-selected{
    color:black;
    font-weight: bold;
    padding-left: 30px;
    background: #6bffff;
  }
`;

export const Title = styled.div`
  ${tw`
    text-2xl 
    mb-2
  `}
`;
