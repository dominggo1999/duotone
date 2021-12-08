import React, { useContext } from 'react';
import'twin.macro';
import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';
import { Wrapper } from './Editor.style';
import { CanvasContext } from '../../context/Canvas.context';

const Editor = () => {
  const state = useContext(CanvasContext);

  // For Debugging only
  const showState = () => {
    const{ useTemplate, updateValue, ...rest } = state;
  };

  return (
    <Wrapper>
      <Sidebar />
      <Canvas />
    </Wrapper>
  );
};

export default Editor;
