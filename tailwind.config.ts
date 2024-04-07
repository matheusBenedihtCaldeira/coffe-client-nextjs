import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        orbitron: ['Orbitron'],
        montserrat: ['Montserrat'],
      },
    },
    colors: {
      'brown-dark': '#27170F',
      'brown-button': '#814710',
      'brown-medium': '#5A3723',
      'brown-light': '#814710',
      'gray-300': '#cbd5e1',
      'slate-100': '#f1f5f9',
      white: '#ffffff',
    },
  },
  plugins: [],
}
export default config
