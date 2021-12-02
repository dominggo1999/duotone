import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';
import { Wrapper } from './Editor.style';

const Editor = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Canvas />
    </Wrapper>
  );
};

export default Editor;
