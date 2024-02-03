/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ContentRendererStyles } from './styles';

const ContentRenderer = () => {
  const classes = ContentRendererStyles();

  const fallbackRender = ({
    error,
    resetErrorBoundary
  }: {
    error: any;
    resetErrorBoundary: any;
  }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red', whiteSpace: 'inherit' }}>
          {error.message}
        </pre>
        <button onClick={() => resetErrorBoundary()}>Retry</button>
      </div>
    );
  };

  return (
    <div className={classes.root} id="content-render">
      <ErrorBoundary FallbackComponent={fallbackRender}>
        <Suspense fallback={<center>Loading...</center>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ContentRenderer;
