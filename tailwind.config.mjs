/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Plum — primary brand color, sourced directly from the logo pixels (#512f7e).
        plum: {
          50: '#f6f2fb',
          100: '#ece3f7',
          200: '#d6c5ef',
          300: '#b89be0',
          400: '#9868cc',
          500: '#7a3fb6',
          600: '#62308d',
          700: '#512f7e', // primary brand
          800: '#421d74',
          900: '#371962',
          950: '#240c44'
        },
        // Sage — secondary brand, sampled from logo (#b2d143).
        sage: {
          50: '#f6faf0',
          100: '#ebf5d8',
          200: '#d8eba8',
          300: '#c4e07a',
          400: '#b2d143',
          500: '#9bb824',
          600: '#78911a',
          700: '#5d6f17',
          800: '#47531a',
          900: '#3a451b',
          950: '#1d260c'
        },
        // Warm gold — accent replacing the harsh lime (#CEFF1C) for CTAs.
        gold: {
          50: '#fdf8ec',
          100: '#faedca',
          200: '#f5d98e',
          300: '#efc257',
          400: '#eaae35',
          500: '#e89938',
          600: '#cd7c1f',
          700: '#a95d1a',
          800: '#87491c',
          900: '#6e3c1c'
        },
        // Soft tonal neutrals joining the lavender tints already in the brand.
        mist: {
          50: '#f9f7fb',
          100: '#f1ecf6',
          200: '#e3d8ee',
          300: '#cdbbe1',
          400: '#b696cf'
        },
        sand: {
          50: '#fbfaf6',
          100: '#f6f3ea',
          200: '#ece4cf',
          300: '#dccfa6'
        },
        ink: '#3a3142'
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif']
      },
      maxWidth: {
        prose: '68ch'
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(82, 47, 126, 0.18)',
        lift: '0 18px 40px -18px rgba(82, 47, 126, 0.32)',
        glow: '0 0 0 1px rgba(178,209,67,0.4), 0 8px 24px -6px rgba(178,209,67,0.4)'
      },
      backgroundImage: {
        'grain': "radial-gradient(circle at 1px 1px, rgba(82,47,126,0.05) 1px, transparent 0)",
        'mesh-plum': 'radial-gradient(at 12% 18%, rgba(178,209,67,0.18) 0px, transparent 50%), radial-gradient(at 88% 12%, rgba(98,48,141,0.20) 0px, transparent 50%), radial-gradient(at 70% 85%, rgba(66,29,116,0.16) 0px, transparent 50%), radial-gradient(at 18% 90%, rgba(178,209,67,0.14) 0px, transparent 50%)',
        'plum-fade': 'linear-gradient(135deg, #512f7e 0%, #62308d 50%, #421d74 100%)',
        'sage-fade': 'linear-gradient(135deg, #b2d143 0%, #9bb824 100%)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,97,46,0.45)' },
          '50%': { boxShadow: '0 0 0 8px rgba(212,97,46,0)' }
        },
        'wing-flutter': {
          '0%, 100%': { transform: 'rotate(-2deg) translateY(0)' },
          '50%': { transform: 'rotate(2deg) translateY(-4px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.21, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 16s ease infinite',
        'pulse-soft': 'pulse-soft 2.8s ease-in-out infinite',
        'wing-flutter': 'wing-flutter 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};