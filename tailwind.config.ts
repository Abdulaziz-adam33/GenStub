import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          light: '#142d52',
          lighter: '#1e3d6e',
        },
        teal: {
          brand: '#0CC8A8',
          dark: '#0AA88C',
          light: '#E6FAF7',
        },
        cream: {
          DEFAULT: '#F9F7F4',
          dark: '#EFECE8',
          darker: '#E3DED7',
        },
        charcoal: '#1C2B3A',
        mist: '#8FA3B1',
        gold: '#D4A017',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        dm: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-2deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'doc': '0 20px 60px rgba(11, 31, 58, 0.25), 0 8px 24px rgba(11, 31, 58, 0.15)',
        'doc-hover': '0 30px 80px rgba(11, 31, 58, 0.35), 0 12px 32px rgba(11, 31, 58, 0.2)',
        'card': '0 2px 12px rgba(11, 31, 58, 0.08)',
        'card-hover': '0 8px 32px rgba(11, 31, 58, 0.14)',
      },
    },
  },
  plugins: [],
}

export default config
