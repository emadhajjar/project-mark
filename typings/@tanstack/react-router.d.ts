import { createRouter } from '@project-mark/web/src/router';

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
