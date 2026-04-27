/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f4',
        cream2: '#f3efe8',
        cream3: '#ede8de',

        ink: '#0d1117',
        ink2: '#2c3340',
        ink3: '#5a6272',
        ink4: '#9aa0ad',

        accent: '#102C57',
        accent2: '#1d4ed8',
        'accent-light': '#dbeafe',
        'accent-pale': '#eff6ff',

        gold: '#c8960c',

        border: '#e4ddd0',
        border2: '#cfc8b8',
      },

      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },

      boxShadow: {
        soft: '0 8px 24px rgba(29, 78, 216, 0.25)',
        subtle: '0 4px 12px rgba(13, 17, 23, 0.08)',
      },

      borderRadius: {
        md: '10px', // matches your buttons/cards
      },

      spacing: {
        // only adding what appears in your CSS
        13: '3.25rem', // for padding like 13px equivalent if needed
      },

      keyframes: {
  fadeUp: { /* ...existing... */ },
  marquee: {
    '0%':   { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
},
animation: {
  'fade-up': 'fadeUp 0.6s ease forwards',
  marquee: 'marquee 28s linear infinite',
},
    },
    screens: {
      'xxs': '350px',
      // => @media (min-width: 350px) { ... }

      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1380px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}