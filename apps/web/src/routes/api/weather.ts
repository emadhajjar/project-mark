import { json } from '@tanstack/react-start';
import { createAPIFileRoute } from '@tanstack/react-start/api';
import { URL } from 'node:url';

import { ServerApi } from '../../utils/api';
import { Unit } from '../../utils/interfaces/common';

export const APIRoute = createAPIFileRoute('/api/weather')({
  GET: async ({ request }) => {
    try {
      const { searchParams } = new URL(request.url);

      const coordinate = await ServerApi.getCoordinate(
        searchParams.get('text') ?? '',
        request.signal,
      );

      const [forecast, weather] = await Promise.all([
        ServerApi.getForecast(
          {
            ...coordinate,
            units: (searchParams.get('units') as Unit) ?? undefined,
          },
          request.signal,
        ),
        ServerApi.getWeather(
          {
            ...coordinate,
            units: (searchParams.get('units') as Unit) ?? undefined,
          },
          request.signal,
        ),
      ]);

      return json({ forecast, weather });
    } catch (error) {
      return json({ error }, { status: 404 });
    }
  },
});
