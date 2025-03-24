import { createFileRoute, Link } from '@tanstack/react-router';
import { Suspense } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { Container } from '../components/Container';
import { Routes } from '../constants/routes';

const RouteComponent = () => {
  return (
    <Suspense fallback='Loading...'>
      <MainComponent />
    </Suspense>
  );
};

export const Route = createFileRoute(Routes.INDEX)({
  component: RouteComponent,
});

const MainComponent = () => {
  const cities = ['Joinville / SC (Brazil)', 'San Francisco / CA (USA)', 'Urubici / SC (Brazil)'];
  return (
    <Container>
      {cities.map((city) => (
        <Link
          className='flex flex-wrap items-center gap-2 p-2'
          key={city}
          params={{ text: city }}
          to={Routes.WEATHER}
        >
          <HiOutlineLocationMarker />
          {city}
        </Link>
      ))}
    </Container>
  );
};
