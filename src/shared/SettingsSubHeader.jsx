import tw, { styled } from 'twin.macro';

export const Info = styled.div`
  ${tw`
    flex 
    items-center 
    justify-between 
    mb-2
  `}
`;

export const LabelName = styled.p`
  ${tw` 
    font-semibold
    text-[1.15rem]
  `} 
`;

export const Value = styled.p`
  ${tw`
    text-accent  
  `}
`;
