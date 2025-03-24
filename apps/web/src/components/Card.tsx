import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';

interface Properties {
  isDarkMode: boolean;
}

export const Card = ({ children, isDarkMode }: PropsWithChildren<Properties>) => {
  return (
    <div className={clsx({ dark: isDarkMode })}>
      <div className='min-h-96 w-full rounded-2xl bg-white p-4 shadow-lg xl:p-8 dark:bg-gradient-to-b dark:from-neutral-600 dark:to-neutral-700 dark:shadow-2xl'>
        {children}
      </div>
    </div>
  );
};
