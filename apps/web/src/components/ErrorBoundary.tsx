import type { ErrorComponentProps } from '@tanstack/react-router';

import { ErrorComponent, Link, rootRouteId, useMatch, useRouter } from '@tanstack/react-router';

export const ErrorBoundary = ({ error }: ErrorComponentProps) => {
  const router = useRouter();
  const isRoot = useMatch({
    select: (state) => state.id === rootRouteId,
    strict: false,
  });

  console.error(error);

  return (
    <div className='flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4'>
      <ErrorComponent error={error} />
      <div className='flex flex-wrap items-center gap-2'>
        <button
          className={`rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-zinc-400`}
          onClick={() => {
            router.invalidate();
          }}
        >
          Try Again
        </button>
        {isRoot ?
          <Link
            className={`rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-zinc-400`}
            to='/'
          >
            Home
          </Link>
        : <Link
            className={`rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-zinc-400`}
            onClick={(e) => {
              e.preventDefault();
              globalThis.history.back();
            }}
            to='/'
          >
            Go Back
          </Link>
        }
      </div>
    </div>
  );
};
