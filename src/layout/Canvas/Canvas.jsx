import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  CanvasWrapper,
  ImageWrapper,
  Foreground,
  Image,
  LoadingIndicator,
} from './Canvas.style';
import { CanvasContext } from '../../context/Canvas.context';
import useSizes from '../../hooks/useSizes';
import { Spinner, Skeleton } from '../../shared/Spinner';

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

const Canvas = () => {
  // VITE BUG, need to do this to prevent error on development
  if(!CanvasContext) {
    return null;
  }
  const {
    wrapper, image, foreground,
  } = useContext(CanvasContext) || {};
  const { isMedium } = useSizes();
  const [loading, setLoading] = useState(true);
  const count = useRef(0);

  // VITE BUG, need to do this to prevent error on development
  if(!CanvasContext) {
    return null;
  }

  const imageWrapperStyle = {
    position: 'relative',
    backgroundColor: wrapper.bg,

    // 0.97 is to give a little bif of padding on first load
    transform: `scale(${wrapper.scale * 0.97})`,
    padding: `${wrapper.spacing}px`,
  };

  const imageStyle = {
    opacity: `${image.opacity}%`,
    filter: `grayscale(100%) contrast(${image.contrast}) blur(${image.blur}px) brightness(${image.brightness})`,
    mixBlendMode: `${image.blendMode}`,
    maxHeight: isMedium
      ? `calc((100 * var(--vh))  - calc(${wrapper.spacing}px * 2))`
      : `calc((50 * var(--vh)) - calc(${wrapper.spacing}px * 2))`,
  };

  const foregroundStyle = {
    backgroundColor: `${foreground.bg}`,
    mixBlendMode: `${foreground.blendMode}`,
  };

  useEffect(() => {
    if(!count.current) {
      //  Show loading indicator when component fist mount
      setLoading(true);
    }
  }, []);

  return (
    <CanvasWrapper>
      {loading && (
      <LoadingIndicator>
        <Spinner>
          <Skeleton />
        </Spinner>
      </LoadingIndicator>
      )}

      <ImageWrapper
        id="final-image"
        style={imageWrapperStyle}
        loading={loading ? 'hidden' : null}
      >
        <Image
          src={image.src}
          style={imageStyle}
          draggable="false"
          onLoad={() => setLoading(false)}
        />
        <Foreground style={foregroundStyle} />
      </ImageWrapper>

    </CanvasWrapper>
  );
};

export default Canvas;
