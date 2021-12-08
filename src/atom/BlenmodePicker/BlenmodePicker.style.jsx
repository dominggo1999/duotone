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
    background: #10153a;
  }

  .react-select__control{
    ${tw`
      bg-transparent 
      font-primary   
      border
    `}
  }

  .react-select__control--is-focused,
  .react-select__control--menu-is-open{
    ${tw`
      border
      border-accent 
      hover:border-accent
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

  .react-select__menu-list {
    padding: 0;
  }

  .react-select__menu{
    ${tw`
      text-black 
      font-primary        
    `}
  }

  .react-select__option {
    cursor: pointer; 
    background: #10153a;
    ${tw`
      text-white 
      font-medium
    `}
  }

  .react-select__option:hover{
    background:  #71c2c5;
    ${tw`text-black`}
  }
  .react-select__option--is-focused{
    background:  #71c2c5;
    ${tw`text-black`}
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
