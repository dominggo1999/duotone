import React, { useContext } from 'react';
import'twin.macro';
import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';
import { Wrapper } from './Editor.style';
import { CanvasContext } from '../../context/Canvas.context';

const Editor = () => {
  const state = useContext(CanvasContext);

  const showState = () => {
    const{ useTemplate, updateValue, ...rest } = state;

    navigator.clipboard.writeText(JSON.stringify(rest));
  };

  return (
    <Wrapper>
      <button
        onClick={showState}
        tw="absolute right-0 top-0 bg-red-500 text-white z-[9999]"
      >
        show state
      </button>
      <Sidebar />
      <Canvas />
    </Wrapper>
  );
};

export default Editor;
