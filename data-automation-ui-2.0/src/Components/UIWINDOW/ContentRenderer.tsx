import { GetContainers } from '../../Global/GetContainers';
import {
  ContentRendererProps,
  GenericComponentType
} from '../../Global/gobalTypes';
import { Suspense, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ContentRenderer = (props: ContentRendererProps) => {
  const { currentScreen } = props;
  console.log('ContentRenderer', props);

  const GenericComponent = useMemo(
    () => GetContainers(currentScreen as keyof GenericComponentType),
    [currentScreen]
  );

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
          <GenericComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ContentRenderer;
