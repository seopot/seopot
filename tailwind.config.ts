import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        beige: '#FFF0E6',
        darkBeige: '#E1E1D6',
        lightBeige: '#FFFEFD',
        navy: '#122844',
        lightNavy: '#183056',
        lighterNavy: '#536992',
        navyWhite: '#F8FCFF',
        darkerBrown: '#605245',
        darkBrown: '#6D5D4F',
        brown: '#7A6A5B',
        lightBrown: '#CAB9A7',
        lighterBrown: '#FFFCF6',
        red: '#BC2422',
        orange: '#F8621C',
        yellow: '#F89A25',
        green: '#1A9895',
        blue: '#5B9AD6',
      },
      fontFamily: {
        gBold: ['gmarketBold'],
        gMedium: ['gmarketMedium'],
        gLight: ['gmarketLight'],
      },
    },
  },
  plugins: [],
};

export default config;
