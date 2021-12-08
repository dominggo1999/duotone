import tw, { styled } from 'twin.macro';

// Fix Overflow Error
// https://github.com/tajo/react-range/issues/122
// https://codesandbox.io/s/react-range-forked-55ocg?file=/src/Basic.js:1144-1403

export const SliderBar = styled.div`
  ${tw`
    mb-5
  `}

  --thumb-size: 18px;
  .wrapper {
    display: flex;
    width: 100%;
    height: 30px;
  }

  .track {
    position: relative;
    display: flex;
    align-self: center;
    margin-left: calc(var(--thumb-size) / 2);
    width: calc(100% - var(--thumb-size));
    height: 5px; 
  }

  .track::before {
    content: "";
    position: absolute;
    margin-left: calc(var(--thumb-size) / -2);
    width: calc(100% + var(--thumb-size));
    height: 100%;
    border-radius: 5px;
    background: inherit;
  }

  .thumb {
    height: var(--thumb-size);
    width: var(--thumb-size);
    

    ${tw`
      bg-accent 
      rounded-full 
      focus:outline-none  
    `}
  }
`;

export const Info = styled.div`
  ${tw`
    flex 
    items-center 
    justify-between
  `}
`;

export const LabelName = styled.p`
  ${tw`
    text-xl
  `}
`;

export const Value = styled.p`
  ${tw`
    text-xl 
    text-accent 
  `}
`;
