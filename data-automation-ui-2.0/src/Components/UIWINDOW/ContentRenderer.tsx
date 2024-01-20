import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ContentRenderer = () => {
  const fallbackRender = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red', whiteSpace: 'inherit' }}>
          {error.message}
        </pre>
        <button onClick={() => resetErrorBoundary}>Retry</button>
      </div>
    );
  };

  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        left: '60px',
        height: 'calc(100% - 80px)',
        top: '60px',
        width: 'calc(100% - 80px)',
        overflowY: 'scroll',
        overflowX: 'hidden'
      }}
    >
      <ErrorBoundary FallbackComponent={fallbackRender}>
        <Suspense fallback={<center>Loading...</center>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ContentRenderer;
