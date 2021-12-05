import tw, { styled } from 'twin.macro';

export const FilePickerWrapper = styled.div`
  ${tw`
    w-full
  `}
`;

export const PickerBox = styled.div`
  ${tw`
    border
    border-accent 
    p-5 
    rounded-2xl 
    cursor-pointer
    border-dashed
  `}
`;

export const DnDMessage = styled.p`
  ${tw`
    text-accent 
    text-lg 
    mb-2
  `}
`;

export const AcceptedFileMessage = styled.em`
  ${tw`
    text-sm
  `}
`;

export const AccentColor = styled.span`
  ${tw`
    text-accent 
    font-medium
  `}
`;

export const FileName = styled.p`
  ${tw`
    mt-2 
    underline
  `}
`;

export const ErrorMessage = styled.p`
  ${tw`
    text-red-500 
    mt-2 
    italic 
    text-sm
  `}
`;
