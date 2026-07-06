/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon:    '#00D4FF',
        navy:    { 900:'#050A14', 800:'#07101E', 700:'#0D1526', 600:'#111D30', 500:'#142038', 400:'#1E3050' },
        primary: '#00D4FF',
        danger:  '#EF4444',
        success: '#22C55E',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        neon:   '0 0 20px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.15)',
        'neon-sm':'0 0 12px rgba(0,212,255,0.35)',
        card:   '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover':'0 8px 48px rgba(0,0,0,0.5)',
      },
      animation: {
        'fade-in':     'fadeIn 0.3s ease-out both',
        'slide-up':    'slideUp 0.35s ease-out both',
        'slide-in':    'slideIn 0.35s ease-out both',
        'scale-in':    'scaleIn 0.2s ease-out both',
        'pulse-neon':  'pulseNeon 2.5s ease-in-out infinite',
        'float':       'float 3s ease-in-out infinite',
        'spin-slow':   'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn:    { from:{ opacity:'0' }, to:{ opacity:'1' } },
        slideUp:   { from:{ opacity:'0', transform:'translateY(16px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        slideIn:   { from:{ opacity:'0', transform:'translateX(-12px)' }, to:{ opacity:'1', transform:'translateX(0)' } },
        scaleIn:   { from:{ opacity:'0', transform:'scale(0.94)' }, to:{ opacity:'1', transform:'scale(1)' } },
        pulseNeon: { '0%,100%':{ boxShadow:'0 0 12px rgba(0,212,255,0.3)' }, '50%':{ boxShadow:'0 0 28px rgba(0,212,255,0.6)' } },
        float:     { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-6px)' } },
      },
      backdropBlur: { '3xl': '48px' },
    },
  },
  plugins: [],
};
