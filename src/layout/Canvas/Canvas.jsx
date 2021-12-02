import React, { useContext } from 'react';
import {
  CanvasWrapper,
  ImageWrapper,
  Foreground,
  Image,
} from './Canvas.style';
import { CanvasContext } from '../../context/Canvas.context';

const Canvas = () => {
  const {
    wrapper, image, foreground, updateValue,
  } = useContext(CanvasContext) || {};

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
