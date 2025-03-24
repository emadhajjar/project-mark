import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface Properties {
  darkMode: boolean;
  icon: ReactNode;
  name: string;
  unit: string;
  value: number;
}

export const ExtraInfo = ({ darkMode, icon, name, unit, value }: Properties) => {
  return (
    <div className={clsx({ dark: darkMode })}>
      <div className='flex w-full flex-col items-center gap-1 rounded-xl bg-white px-3 py-2 text-neutral-700 shadow-lg dark:bg-zinc-400 dark:text-indigo-100'>
        <div>{icon}</div>
        <div className='flex flex-col items-center'>
          <span>{name}</span>
          <div className=''>{`${value} ${unit}`}</div>
        </div>
      </div>
    </div>
  );
};
