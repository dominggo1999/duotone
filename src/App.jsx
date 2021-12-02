import React from 'react';
import Main from './pages/Main';
import CanvasProvider from './context/Canvas.context';

const App = () => {
  return (
    <>
      <CanvasProvider>
        <Main />
      </CanvasProvider>
    </>
  );
};

export default App;
