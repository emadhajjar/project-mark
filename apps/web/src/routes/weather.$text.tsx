import {queryOptions, useSuspenseQuery} from '@tanstack/react-query';
import {createFileRoute} from '@tanstack/react-router';
import {Suspense} from 'react';

import {Card} from '../components/Card';
import {Container} from '../components/Container';
import {ForecastCard} from '../components/ForecastCard';
import {Grid} from '../components/Grid';
import {PageTitle} from '../components/PageTitle';
import {ScrollView} from '../components/ScrollView';
import {WeatherCard} from '../components/WeatherCard';
import {WeatherInfo} from '../components/WeatherInfo';
import {QueryKeys} from '../constants/queryKeys';
import {Routes} from '../constants/routes';
import {ClientApi} from '../utils/api';
import {useDarkMode} from '../utils/hooks';
import {Unit} from '../utils/interfaces/common';

const UNIT: 'C' | 'F' = 'C';

const setupQueryOptions = (text: string) =>
  queryOptions({
    queryFn: ({ signal }) =>
      ClientApi.getWeather({ text, units: UNIT === 'C' ? Unit.METRIC : Unit.IMPERIAL }, signal),
    queryKey: [QueryKeys.WEATHER, text],
    refetchInterval: 10 * 60 * 1000,
    staleTime: Infinity,
  });

const RouteComponent = () => {
  return (
    <Suspense fallback='Loading...'>
      <MainComponent />
    </Suspense>
  );
};

export const Route = createFileRoute(Routes.WEATHER)({
  component: RouteComponent,
  head: ({ params }) => ({
    meta: [{ title: params.text }],
  }),
  loader: async ({ context, params }) => {
    await context.queryClient.ensureQueryData(setupQueryOptions(params.text));
  },
});

const MainComponent = () => {
  const { text } = Route.useParams();
  const { data } = useSuspenseQuery(setupQueryOptions(text));

  const isDarkMode = useDarkMode();

  return (
    <Container className='my-14 flex flex-col gap-10'>
      <PageTitle primary title={text} />

      <Card isDarkMode={isDarkMode}>
        <Grid>
          <WeatherCard
            darkMode={isDarkMode}
            feelsLike={data.weather.main.feels_like}
            icon={data.weather.weather[0]?.icon}
            main={data.weather.weather[0]?.main}
            maxTemperature={data.weather.main.temp_max}
            minTemperature={data.weather.main.temp_min}
            temperature={data.weather.main.temp}
            unit={UNIT}
          />

          <WeatherInfo
            cloudiness={data.weather.clouds.all}
            darkMode={isDarkMode}
            humidity={data.weather.main.humidity}
            pressure={data.weather.main.pressure}
            visibility={data.weather.visibility}
            windSpeed={data.weather.wind.speed}
          />

          <ScrollView>
            {data.forecast.list?.map((item) => (
              <ForecastCard
                darkMode={isDarkMode}
                date={item?.dt}
                icon={item?.weather[0]?.icon}
                key={item?.dt}
                maxTemperature={item?.main?.temp_max}
                minTemperature={item?.main?.temp_min}
                unit={UNIT}
              />
            ))}
          </ScrollView>
        </Grid>
      </Card>
    </Container>
  );
};
