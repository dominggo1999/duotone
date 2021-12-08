import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import CanvasProvider from './context/Canvas.context';
import Fallback from './pages/Fallback';
import NotFoundPage from './pages/NotFoundPage';

const Main = lazy(() => import('./pages/Main'));

const App = () => {
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
