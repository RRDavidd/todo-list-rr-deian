import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4CDD4',
        'secondary': '#BB1E10',
        'tertiary': '#861A22',
        'quaternary': '#F7F2EA',
      }
    },
  },
  plugins: [
    function ({ addBase, theme }: any) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl'), lineHeight: theme('lineHeight.none') },
        'h2': { fontSize: theme('fontSize.3xl') },
        'h3': { fontSize: theme('fontSize.2xl') },
        'h4': { fontSize: theme('fontSize.xl') },
        'h5': { fontSize: theme('fontSize.lg') },
        'h6': { fontSize: theme('fontSize.base') },
      })
    }
  ],
}
export default config
