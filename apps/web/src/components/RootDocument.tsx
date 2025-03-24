import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HeadContent, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { PropsWithChildren } from 'react';

export const RootDocument = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <ReactQueryDevtools buttonPosition='bottom-left' />
        <TanStackRouterDevtools position='bottom-right' />
        <Scripts />
      </body>
    </html>
  );
};
