import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const viewNightSpots = (await import(`../../messages/nightViewSpot/${locale}.json`)).default;
  const historicSites = (await import(`../../messages/historicSite/${locale}.json`)).default;
  const market = (await import(`../../messages/market/${locale}.json`)).default;
  const common = (await import(`../../messages/common/${locale}.json`)).default;
  const map = (await import(`../../messages/map/${locale}.json`)).default;

  const messages = {
    view: viewNightSpots,
    historic: historicSites,
    market: market,
    common: common,
    map: map,
  };

  return {
    locale,
    messages,
  };
});
