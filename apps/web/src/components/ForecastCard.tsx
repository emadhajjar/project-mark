import {clsx} from 'clsx';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

interface Properties {
  darkMode: boolean;
  date: number;
  icon: string;
  maxTemperature: number;
  minTemperature: number;
  unit: string;
}

export const ForecastCard = ({
  darkMode,
  date,
  icon,
  maxTemperature,
  minTemperature,
  unit,
}: Properties) => {
  const timeZone = dayjs.tz.guess();

  return (
    <div className={clsx({ dark: darkMode })}>
      <div className='flex h-full w-44 flex-col items-center gap-3 rounded-xl bg-white p-3 shadow-lg dark:bg-zinc-400'>
        <div className='text-sm'>{dayjs.unix(date).tz(timeZone).format('MMM DD, hh:mm a')}</div>
        <img
          alt=''
          className={`${darkMode || icon === '01d' ? 'brightness-125' : 'brightness-90'} h-28 w-36 object-none object-center`}
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        />
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-black/50 dark:text-white/50'>min</span>
            <span>{`${minTemperature} \u00B0${unit}`}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-black/50 dark:text-white/50'>max</span>
            <span>{`${maxTemperature} \u00B0${unit}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
