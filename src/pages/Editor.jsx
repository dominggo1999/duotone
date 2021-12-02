import React from 'react';
import Sidebar from '../layout/Sidebar/Sidebar';
import Canvas from '../layout/Canvas/Canvas';
import { Wrapper } from '../layout/Editor.style';

const Editor = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Canvas />
    </Wrapper>
  );
};

export default Editor;
