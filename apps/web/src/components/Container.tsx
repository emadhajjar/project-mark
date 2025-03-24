import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='min-h-screen min-w-full bg-gray-50 px-6 py-2 text-black transition-all duration-300 sm:px-10 sm:py-4 md:px-14 md:py-6 lg:px-20 lg:py-9 xl:px-24 xl:py-11 dark:bg-neutral-900 dark:text-white'>
      {children}
    </div>
  );
};
