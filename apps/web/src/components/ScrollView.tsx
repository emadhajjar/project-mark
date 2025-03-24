import { PropsWithChildren } from 'react';

export const ScrollView = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full rounded-xl bg-gray-50 p-5 shadow-lg md:col-span-2 xl:col-span-3 dark:bg-stone-600'>
      <div className='scrollbar scrollbar-padding-2 scrollbar-thumb-rounded-full scrollbar-thumb-gray-100 scrollbar-track-indigo-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-slate-500 flex items-center gap-2 overflow-x-scroll rounded-xl'>
        {children}
      </div>
    </div>
  );
};
