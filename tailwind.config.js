/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'sans-serif',
          {
            fontFeatureSettings: '"tnum", "cv11", "ss01"',
          },
        ],
      },
    },
  },
};
