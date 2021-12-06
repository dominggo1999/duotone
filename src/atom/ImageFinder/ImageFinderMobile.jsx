import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  ImageListMobile, ImageWrapperMobile,
  LoadingWrapperMobile,
} from './ImageFinder.style';
import { Skeleton, Spinner } from '../../shared/Spinner';

import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageFinderMobile = (
  {
    pexelsImages,
    useImage,
    errorMsg,
    loading,
  },
) => {
  if(loading) {
    return (
      <LoadingWrapperMobile>
        <Spinner>
          <Skeleton />
        </Spinner>
      </LoadingWrapperMobile>
    );
  }

  return (
    <Scrollbars
      autoHide
      autoHideDuration={200}
      style={{
        height: 'calc(100% - 65px)',
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
                  draggable="false"
                />
              </ImageWrapperMobile>
            );
          })
        }

        {
          errorMsg && <p> {errorMsg}</p>
        }
      </ImageListMobile>
    </Scrollbars>
  );
};

export default ImageFinderMobile;
