import Header from '@/components/common/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// export async function generateStaticParams() {
//   return ['en', 'ko', 'zh'].map(locale => ({ locale }));
// }

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // const resolvedParams = await params;
  const locale = params.locale;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
    </NextIntlClientProvider>
  );
}
