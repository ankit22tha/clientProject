/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson': { 
          50: '#fff1f1', 100: '#ffe0e0', 300: '#ff9999', 
          500: '#cc0000', 700: '#8B0000', 900: '#5c0000' 
        },
        'amber': { 
          50: '#fffbf0', 100: '#fff3d0', 300: '#ffcc66', 
          500: '#FF9933', 700: '#cc6600', 900: '#7a3d00' 
        },
        'espresso': { 
          50: '#fdf6f0', 100: '#f5e6d8', 300: '#c4956a', 
          500: '#6D4C41', 700: '#3E2723', 900: '#1a0f0a' 
        },
        'ivory': { 
          50: '#fffff8', 100: '#FFF5E1', 200: '#ffe8c4', 300: '#ffd599' 
        },
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.7s ease both',
        'slide-right': 'slideRight 0.6s ease both',
      },
      keyframes: {
        float: { 
          '0%,100%': { transform: 'translateY(0px)' }, 
          '50%': { transform: 'translateY(-18px)' } 
        },
        pulseGlow: { 
          '0%,100%': { boxShadow: '0 0 20px rgba(255,153,51,0.3)' }, 
          '50%': { boxShadow: '0 0 50px rgba(255,153,51,0.7)' } 
        },
        shimmer: { 
          '0%': { backgroundPosition: '-200% 0' }, 
          '100%': { backgroundPosition: '200% 0' } 
        },
        marquee: { 
          '0%': { transform: 'translateX(0)' }, 
          '100%': { transform: 'translateX(-50%)' } 
        },
        fadeUp: { 
          from: { opacity: '0', transform: 'translateY(30px)' }, 
          to: { opacity: '1', transform: 'translateY(0)' } 
        },
        slideRight: { 
          from: { opacity: '0', transform: 'translateX(-30px)' }, 
          to: { opacity: '1', transform: 'translateX(0)' } 
        },
      },
      boxShadow: {
        'warm-lg': '0 20px 60px rgba(139,0,0,0.2)',
        'amber-glow': '0 8px 32px rgba(255,153,51,0.4)',
        'deep': '0 40px 80px rgba(26,15,10,0.3)',
        'card': '0 4px 30px rgba(62,39,35,0.1)',
      }
    }
  },
  plugins: [],
}