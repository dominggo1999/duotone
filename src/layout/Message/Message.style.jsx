import tw, { styled } from 'twin.macro';

export const MessageWrapper = styled.div`
  ${tw`
    pt-5 
  `}

  p{
    ${tw`mb-2`}    
  }

  a{
    ${tw` 
      inline-flex 
      items-center
      underline
      text-accent
      font-semibold
    `}

    svg{
      ${tw`
        text-xl 
        mr-2
      `}
    }
  }
`;
