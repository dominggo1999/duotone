import tw, { styled } from 'twin.macro';

export const ImageFinderWrapper = styled.div`
  ${tw`
    flex 
    w-full 
    h-full 
    relative 
    flex-col 
    md:pr-3
  `}
`;

export const SearchBar = styled.form`
  ${tw`
    sticky 
    top-0  
    flex  
    gap-2
    bg-black 
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
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
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
