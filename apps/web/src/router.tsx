import { QueryClient } from '@tanstack/react-query';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routerWithQueryClient } from '@tanstack/react-router-with-query';

import { ErrorBoundary } from './components/ErrorBoundary';
import { NotFound } from './components/NotFound';
import { routeTree } from './routeTree.gen';

export function createRouter() {
  const queryClient = new QueryClient();

  return routerWithQueryClient(
    createTanStackRouter({
      context: { queryClient },
      defaultErrorComponent: ErrorBoundary,
      defaultNotFoundComponent: () => <NotFound />,
      defaultPreload: 'intent',
      routeTree,
    }),
    queryClient,
  );
}
