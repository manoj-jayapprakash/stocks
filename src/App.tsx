import { Suspense, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Middleware } from './middleware/auth';
import { AppRoutes } from './routes';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    // <ErroBoundary FallbackComponent={ErrorPage}>
    <Middleware>
      <BrowserRouter>
        <Suspense fallback={null}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </Middleware>
    // </ErroBoundary>
  );
}

export default App;
