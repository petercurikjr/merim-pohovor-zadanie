/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,html}', './libs/ui/src/**/*.{ts,html}'],
  theme: {
    fontSize: {
      h1: ['5rem', '7rem'],
      h2: ['2.5rem', '2.75rem'],
      h3: ['1.75rem', '2rem'],
      h4: ['1.25rem', '1.5rem'],
      h5: ['0.85rem', '1rem'],
      h6: ['0.6875rem', '0.875rem'],
    },
    fontFamily: {
      sans: 'Quicksand, sans-serif',
    },
    colors: {
      primary: {
        white: '#fff',
        black: '#000000',
      },
      secondary: {
        lightGrey: '#f3f3f3',
        darkGrey: '#282828',
      },
    },
  },
  plugins: [],
};
