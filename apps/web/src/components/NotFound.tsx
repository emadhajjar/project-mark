import { Link } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';

export const NotFound = ({ children }: PropsWithChildren) => {
  return (
    <div className='space-y-2 p-2'>
      <div className='text-gray-600 dark:text-gray-400'>
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className='flex flex-wrap items-center gap-2'>
        <button
          className='rounded bg-emerald-500 px-2 py-1 text-sm font-black text-white uppercase'
          onClick={() => globalThis.history.back()}
        >
          Go back
        </button>
        <Link
          className='rounded bg-cyan-600 px-2 py-1 text-sm font-black text-white uppercase'
          to='/'
        >
          Start Over
        </Link>
      </p>
    </div>
  );
};
