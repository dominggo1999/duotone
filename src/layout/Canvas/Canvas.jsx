import React, { useContext } from 'react';
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

  return (
    <CanvasWrapper>
      <ImageWrapper {...wrapper}>
        <Image
          spacing={wrapper.spacing}
          src={image.src}
          {...image}
        />
        <Foreground {...foreground} />
      </ImageWrapper>
    </CanvasWrapper>
  );
};

export default Canvas;
