import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImageListMobile, ImageWrapperMobile } from './ImageFinder.style';

import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageFinderMobile = (
  {
    pexelsImages,
    useImage,
    errorMsg,
  },
) => {
  return (
    <Scrollbars
      autoHide={200}
      autoHideDuration={200}
      style={{
        height: '65%',
      }}
      renderThumbHorizontal={(props) => (
        <div
          {...props}
          className="custom-scrollbar-horizontal"
        />
      )}
    >
      <ImageListMobile>
        {
          pexelsImages?.length > 0 && pexelsImages.map((image) => {
            return (
              <ImageWrapperMobile
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
              </ImageWrapperMobile>
            );
          })
        }
      </ImageListMobile>
    </Scrollbars>
  );
};

export default ImageFinderMobile;
