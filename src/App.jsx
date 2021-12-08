import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import CanvasProvider from './context/Canvas.context';
import Fallback from './pages/Fallback';
import NotFoundPage from './pages/NotFoundPage';

const Main = lazy(() => import('./pages/Main'));

const App = () => {
  useEffect(() => {
    const getVH = () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    getVH();

    window.addEventListener('resize', getVH);

    return () => {
      window.removeEventListener('resize', getVH);
    };
  }, []);

  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route
          exact
          path="/"
        >
          <CanvasProvider>
            <Main />
          </CanvasProvider>
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
