import tw, { styled } from 'twin.macro';

export const OutputWrapper = styled.div`
  ${tw` 
    w-full 
    h-[66%]
    w-[90%]
    md:w-[80%]  
    md:h-[80%] 
    overflow-hidden 
    absolute  
    z-[11111] 
    flex 
    flex-col
  `}

  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

export const CodeWrapper = styled.div`
  ${tw`
    w-full 
    h-full 
    text-sm
  `}

  background: #19193d;
  
  .code {
    ${tw`
      p-5
      block
    `}
  }
`;

export const OutputHeader = styled.div`
  ${tw`
    rounded-t-xl
    flex 
    justify-between 
    py-2 
    px-5 
    items-center 
    select-none 
  `}

  background: #47474c;
`;

export const Title = styled.div`
  ${tw`
    font-bold 
  `}
`;

export const Actions = styled.div`
  ${tw`
    flex 
    items-center
    gap-4
  `}
`;

export const ActionItem = styled.button`
  ${tw`
    font-bold
  `}

  svg{
    ${tw`
      text-2xl 
    `}
  }
`;

export const ActionText = styled(ActionItem)`
  ${tw`
    md:hover:transform 
    md:hover:-translate-y-1 
    h-full
  `}
  transition: transform ease-in-out 200ms;

  span{
    ${tw`
      text-accent
    `}
  }
`;

export const Icon = styled.div`
  ${tw`
    flex 
    items-center 
    justify-center 
    w-[30px] 
    h-[30px]
    rounded-full 
    hover:bg-accent 
    hover:text-black
  `}
`;
