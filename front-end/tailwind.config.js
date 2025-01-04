/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        portfolio: {
          'cyan-glow-sm': '0 0 0.5rem rgba(28,224,224,0.25)',
          'cyan-glow-lg': '0 0 4rem rgba(28,224,224,0.25)',
          'yellow-glow-sm': '0 0 0.5rem rgba(224,224,28,0.25)',
          'yellow-glow-lg': '0 0 4rem rgba(224,224,28,0.25)',
          'magenta-glow-sm': '0 0 0.5rem rgba(224,28,224,0.25)',
          'magenta-glow-lg': '0 0 4rem rgba(224,28,224,0.25)',
          'white-glow-sm': '0 0 0.5rem rgba(248,248,248,0.25)',
          'white-glow-lg': '0 0 4rem rgba(248,248,248,0.25)'
        }
      },
      colors: {
        portfolio: {
          cyan: {
            1: 'rgb(18,96,96)', // #126060
            2: 'rgb(24,192,192)', // #18C0C0
            3: 'rgb(28,224,224)' // #1CE0E0
          },
          yellow: {
            1: 'rgb(96,96,18)', // #606012
            2: 'rgb(192,192,24)', // #C0C018
            3: 'rgb(224,224,28)' // #E0E01C
          },
          magenta: {
            1: 'rgb(96,18,96)', // #601260
            2: 'rgb(192,24,192)', // #C018C0
            3: 'rgb(224,28,224)' // #E01CE0
          },
          neutral: {
            1: 'rgb(24,24,24)', // #181818
            2: 'rgb(64,64,64)', // #404040
            3: 'rgb(160,160,160)', // #A0A0A0
            4: 'rgb(232,232,232)', // #E8E8E8
            5: 'rgb(248,248,248)' // #F8F8F8
          }
        }
      },
      dropShadow: {
        portfolio: {
          'cyan-glow-sm': '0 0 0.5rem rgba(28,224,224,0.25)',
          'cyan-glow-lg': '0 0 4rem rgba(28,224,224,0.25)',
          'yellow-glow-sm': '0 0 0.5rem rgba(224,224,28,0.25)',
          'yellow-glow-lg': '0 0 4rem rgba(224,224,28,0.25)',
          'magenta-glow-sm': '0 0 0.5rem rgba(224,28,224,0.25)',
          'magenta-glow-lg': '0 0 4rem rgba(224,28,224,0.25)',
          'white-glow-sm': '0 0 0.5rem rgba(248,248,248,0.25)',
          'white-glow-lg': '0 0 4rem rgba(248,248,248,0.25)'
        }
      },
      screens: {
        '2xs': '360px',
        'xs': '425px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
