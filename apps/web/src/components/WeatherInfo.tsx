import { AiFillEyeInvisible } from 'react-icons/ai';
import { FaCloud, FaWind } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { FiBarChart2 } from 'react-icons/fi';

import { ExtraInfo } from './ExtraInfo';

interface Properties {
  cloudiness: number;
  darkMode: boolean;
  humidity: number;
  pressure: number;
  visibility: number;
  windSpeed: number;
}

export const WeatherInfo = ({
  cloudiness,
  darkMode,
  humidity,
  pressure,
  visibility,
  windSpeed,
}: Properties) => {
  return (
    <div className='grid h-64 w-full grid-cols-3 content-center gap-2 rounded-xl bg-gray-50 p-3 text-sm shadow-lg sm:p-5 dark:bg-stone-600'>
      <div className='col-span-2'>
        <ExtraInfo
          darkMode={darkMode}
          icon={<FaDroplet size={25} />}
          name='Humidity'
          unit='%'
          value={humidity}
        />
      </div>
      <ExtraInfo
        darkMode={darkMode}
        icon={<FaCloud size={25} />}
        name='Clouds'
        unit='%'
        value={cloudiness}
      />
      <ExtraInfo
        darkMode={darkMode}
        icon={<FiBarChart2 size={25} />}
        name='Pressure'
        unit='hPa'
        value={pressure}
      />
      <ExtraInfo
        darkMode={darkMode}
        icon={<AiFillEyeInvisible size={25} />}
        name='Visibility'
        unit='m'
        value={visibility}
      />
      <ExtraInfo
        darkMode={darkMode}
        icon={<FaWind size={25} />}
        name='Wind'
        unit='m/s'
        value={windSpeed}
      />
    </div>
  );
};
