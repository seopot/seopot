import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error: experimental config not in official type
    missingSuspenseWithCSRBailout: false,
  },
};

const withNextIntl = createNextIntlPlugin();

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default withNextIntl(pwaConfig(nextConfig));
