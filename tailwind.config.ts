import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        dirk: ['"Rubik Dirt"']
      }
    },
  },
  plugins: [],
  darkMode: false
}

export default config;

