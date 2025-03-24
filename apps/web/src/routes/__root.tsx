import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import { ErrorBoundary } from '../components/ErrorBoundary';
import { NotFound } from '../components/NotFound';
import { RootDocument } from '../components/RootDocument';
import styleCss from '../style.css?url';
import { seo } from '../utils/seo';

interface Context {
  queryClient: QueryClient;
}

const RootComponent = () => {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
};

export const Route = createRootRouteWithContext<Context>()({
  component: RootComponent,
  errorComponent: (properties) => (
    <RootDocument>
      <ErrorBoundary {...properties} />
    </RootDocument>
  ),
  head: () => ({
    links: [{ href: styleCss, rel: 'stylesheet' }],
    meta: [
      {
        charSet: 'utf8',
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
      },
      ...seo({
        description: `Project Mark...`,
        title: 'Project Mark',
      }),
    ],
  }),
  notFoundComponent: () => <NotFound />,
});
