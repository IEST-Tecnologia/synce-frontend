/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': ['3rem', 1],
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        synce: {
          primary: {
            DEFAULT: '#EB0B00',
            dark: '#d10c02',
            light: '#f54a42',
          },
          secondary: {
            DEFAULT: '#5B00A2',
            dark: '#490082',
          },
        },
      },
    },
  },
  plugins: [],
}
