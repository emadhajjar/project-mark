import { PropsWithChildren } from 'react';

export const Grid = ({ children }: PropsWithChildren) => {
  return (
    <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:mt-4 xl:grid-cols-3'>
      {children}
    </div>
  );
};
