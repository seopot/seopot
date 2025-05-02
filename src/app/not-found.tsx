import NotFoundWithIntl from '@/components/NotFoundWithIntl';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getLocale } from 'next-intl/server';

const NotFound = async ({ params }: { params?: { locale?: string } }) => {
  let locale;

  try {
    if (params?.locale) {
      locale = params.locale;
    } else {
      locale = await getLocale();
    }

    console.log('locale', locale);
    const messages = await getMessages({ locale });

    return (
      <div className="w-full h-screen flex justify-center items-center">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NotFoundWithIntl />
        </NextIntlClientProvider>
      </div>
    );
  } catch (error) {
    console.error('Error in NotFound page:', error);
    const fallbackLocale = 'ko';
    const fallbackMessages = await getMessages({ locale: fallbackLocale });

    return (
      <div className="w-full h-screen flex justify-center items-center">
        <NextIntlClientProvider locale={fallbackLocale} messages={fallbackMessages}>
          <NotFoundWithIntl />
        </NextIntlClientProvider>
      </div>
    );
  }
};

export default NotFound;
