import {clsx} from "clsx";
import {useMemo} from "react";
import {FaTemperatureEmpty} from 'react-icons/fa6';

import {MainEnum} from '../utils/interfaces/openWeather';

interface Properties {
  darkMode: boolean;
  feelsLike: any;
  icon: string;
  main: MainEnum;
  maxTemperature: number;
  minTemperature: number;
  temperature: number;
  unit: string;
}

export const WeatherCard = ({
  darkMode,
  feelsLike,
  icon,
  main,
  maxTemperature,
  minTemperature,
  temperature,
  unit,
}: Properties) => {
  const temperatureColor = useMemo(() => {
    if (unit !== 'C') {
      return 'text-black/70 dark:text-white';
    }

    if (temperature <= 5) {
      return 'text-blue-600';
    }

    if (temperature >=25) {
      return 'text-red-600';
    }
    
    return 'text-orange-600';
  }, [temperature, unit]);

  return (
    <div className='flex h-52 w-full flex-col justify-between overflow-hidden rounded-xl bg-gray-50 p-5 shadow-lg sm:h-64 dark:bg-stone-600'>
      <div className='flex w-full items-end justify-between'>
        <div className={clsx('flex h-full items-center text-2xl font-bold sm:text-4xl', temperatureColor)}>
          <FaTemperatureEmpty />
          {`${temperature} \u00B0${unit}`}
        </div>
        <div className='flex flex-col items-start justify-center'>
          <div>
            <span className='text-sm text-black/60 dark:text-white/60'>Low </span>
            <span className='font-bold text-black/70 dark:text-white'>{`${minTemperature} \u00B0${unit}`}</span>
          </div>
          <div>
            <span className='text-sm text-black/60 dark:text-white/60'>High </span>
            <span className='font-bold text-black/70 dark:text-white'>{`${maxTemperature} \u00B0${unit}`}</span>
          </div>
        </div>
      </div>
      <div className='relative flex w-full items-end justify-between'>
        <div className='flex flex-col items-start justify-center'>
          {main && <div>{main}</div>}
          <div className=''>
            <span className='text-sm text-black/50 dark:text-white/50'>Feels Like </span>
            <span className='text-black dark:text-white'>{`${feelsLike} \u00B0${unit}`}</span>
          </div>
        </div>
        {icon && (
          <img
            alt=''
            className={`absolute right-[-20px] bottom-[-10px] md:right-[-10px] ${darkMode || icon === '01d' ? 'brightness-125' : 'brightness-90'} h-28 w-36 object-none object-center`}
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          />
        )}
      </div>
    </div>
  );
};
