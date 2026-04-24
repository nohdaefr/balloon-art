/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:    '#E8057A',
        'primary-dk':'#C0045F',
        'primary-lt':'#FF5BA8',
        'primary-bg':'#FFF0F8',
        surface:    '#FFFFFF',
        'surface-alt':'#FDF5FF',
        ink:        '#1A0A2E',
        'ink-md':   '#5A4468',
        'ink-lt':   '#9B8FAE',
        accent:     '#7C3AED',
        'accent-lt':'#A78BFA',
        gold:       '#D4AF6A',
        footer:     '#120820',
        'footer-lt':'#1E1035',
      },
      fontFamily: {
        sans:    ['Heebo', 'system-ui', 'sans-serif'],
        display: ['"Frank Ruhl Libre"', 'Georgia', 'serif'],
      },
      animation: {
        'float-a':  'float 7s ease-in-out infinite',
        'float-b':  'float 5.5s ease-in-out 1.2s infinite',
        'float-c':  'float 4.5s ease-in-out 0.6s infinite',
        'fadeDown': 'fadeDown 180ms ease-out both',
        shimmer:    'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-600px 0' },
          '100%': { backgroundPosition: '600px 0' },
        },
      },
      boxShadow: {
        'card':    '0 2px 16px rgba(26,10,46,0.08)',
        'card-hover': '0 8px 40px rgba(232,5,122,0.18)',
        'primary': '0 4px 24px rgba(232,5,122,0.35)',
      },
    },
  },
  plugins: [],
}
