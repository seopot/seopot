import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import LightBackground from '@/components/mode/LightBackground';

export const viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: '서팟 | Seopot',
  description: '서울의 야경, 유적지, 전통시장을 한눈에! 여행자를 위한 서울 명소 안내 서비스',
  manifest: '/manifest.json',
  // icons: {
  //   icon: '/images/seopot_logo.png',
  // },
  openGraph: {
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: '서팟 이미지',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-gMedium min-h-screen bg-beige dark:bg-navy text-navy dark:text-lightBeige overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LightBackground />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
