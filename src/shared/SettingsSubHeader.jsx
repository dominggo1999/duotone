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
    text-xl 
  `}
`;

export const Value = styled.p`
  ${tw`
    text-xl 
    text-accent 
  `}
`;
