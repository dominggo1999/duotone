import tw, { styled } from 'twin.macro';

export const ImageFinderWrapper = styled.div`
  ${tw`
    inline-block
    md:block 
    w-full 
    h-full 
    md:pr-3 
    relative
  `}

  .custom-scrollbar-horizontal{
    ${tw`
      rounded-[3px]
      bg-accent 
      h-[0.4rem] 
      z-[9999] 
      cursor-pointer 
    `}
  }
`;

export const SearchBar = styled.form`
  ${tw` 
    max-h-[35%]
    h-[65px]
    sticky 
    top-0  
    left-0
    flex  
    gap-2
    bg-primary 
    py-2 
    z-[9999] 
  `}

  input {
    ${tw`
      bg-transparent 
      border-2 
      border-white 
      py-2 
      px-5 
      rounded-xl
      text-white  
      outline-none 
      focus:(border-accent) 
    `}
  }

  button{
    ${tw`
      bg-accent 
      px-5
      rounded-xl 
      text-black
    `}
  }
`;

export const ImageList = styled.div`
  ${tw`
    py-5
  `}


    /* https://www.npmjs.com/package/react-masonry-css */
    .my-masonry-grid {
    display: flex;
    margin-left: -10px; /* gutter size offset */
  }

    .my-masonry-grid_column {
      padding-left: 10px; /* gutter size */
      background-clip: padding-box;
    }
`;

export const ImageWrapper = styled.div`
  ${tw`
    w-full 
    h-auto 
    mb-4 
    cursor-pointer
  `} 
  aspect-ratio: ${({ w, h }) => `${w}/${h}`};


  span {
    ${tw`
      w-full 
      h-full
    `}
  }

  img{
    ${tw`
      w-full
      object-cover  
    `}
  }
`;

export const ImageListMobile = styled.div`
  ${tw` 
    h-full
    flex   
    gap-2
  `} 
`;

export const ImageWrapperMobile = styled.div`
  ${tw`
    h-full 
  `}
  aspect-ratio: ${({ w, h }) => `${w}/${h}`};


  span {
    ${tw`
      w-full 
      h-full 
      cursor-pointer
    `}
  }

  img{
    ${tw`
      w-full
      object-cover  
    `}
  }
`;
