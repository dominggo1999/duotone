import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  CanvasWrapper,
  ImageWrapper,
  Foreground,
  Image,
} from './Canvas.style';
import { CanvasContext } from '../../context/Canvas.context';

const Canvas = () => {
  // VITE BUG, need to do this to prevent error on development
  if(!CanvasContext) {
    return null;
  }
  const {
    wrapper, image, foreground, updateValue,
  } = useContext(CanvasContext) || {};

  // VITE BUG, need to do this to prevent error on development
  if(!CanvasContext) {
    return null;
  }

  const imageWrapperStyle = {
    position: 'relative',
    backgroundColor: wrapper.bg,
    transform: `scale(${wrapper.scale})`,
    padding: `${wrapper.spacing}px`,
  };

  const isMedium = useMediaQuery({ query: '(min-width: 768px)' });
  const imageStyle = {
    opacity: `${image.opacity}%`,
    filter: `grayscale(100%) contrast(${image.contrast}) blur(${image.blur}px) brightness(${image.brightness})`,
    mixBlendMode: `${image.blendMode}`,
    maxHeight: isMedium ? `calc(100vh - 30px - calc(${wrapper.spacing}px * 2))` : `calc(50vh - 30px - calc(${wrapper.spacing}px * 2))`,
  };

  const foregroundStyle = {
    backgroundColor: `${foreground.bg}`,
    mixBlendMode: `${foreground.blendMode}`,
  };

  return (
    <CanvasWrapper>
      <ImageWrapper style={imageWrapperStyle}>
        <Image
          src={image.src}
          style={imageStyle}
        />
        <Foreground style={foregroundStyle} />
      </ImageWrapper>
    </CanvasWrapper>
  );
};

export default Canvas;
