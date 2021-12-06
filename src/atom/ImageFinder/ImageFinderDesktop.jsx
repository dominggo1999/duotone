import React from 'react';
import Masonry from 'react-masonry-css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  ImageList, ImageWrapper,
} from './ImageFinder.style';

import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageFinderDesktop = (
  {
    pexelsImages,
    useImage,
    errorMsg,
    loading,
  },
) => {
  const breakpointColumns = {
    default: 2,
    768: 3,
  };

  if(loading) return <p>loading...</p>;

  return (
    <ImageList>
      <Masonry
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        breakpointCols={breakpointColumns}
      >
        {
          pexelsImages?.length > 0 && pexelsImages.map((image) => {
            return (
              <ImageWrapper
                onClick={() => useImage(image.src.large)}
                key={image.id}
                w={image.width}
                h={image.height}
              >
                <LazyLoadImage
                  src={image.src.large}
                  effect="blur"
                  alt={image.photographer}
                />
              </ImageWrapper>
            );
          })
        }

        {
          errorMsg && <p> {errorMsg}</p>
        }
      </Masonry>
    </ImageList>
  );
};

export default ImageFinderDesktop;
