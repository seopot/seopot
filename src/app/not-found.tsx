import Header from '@/components/common/Header';
import NotFoundWithIntl from '@/components/NotFoundWithIntl';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const generateStaticParams = async () => {
  return ['en', 'ko', 'zh'].map(locale => ({ locale }));
};

const NotFound = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <NotFoundWithIntl />
    </NextIntlClientProvider>
  );
};

export default NotFound;
