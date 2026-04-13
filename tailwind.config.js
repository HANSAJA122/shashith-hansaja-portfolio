/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--color-white) / <alpha-value>)',
        slate: {
          100: 'rgb(var(--color-slate-100) / <alpha-value>)',
          300: 'rgb(var(--color-slate-300) / <alpha-value>)',
          900: 'rgb(var(--color-slate-900) / <alpha-value>)',
        },
        cyan: {
          100: 'rgb(var(--color-cyan-100) / <alpha-value>)',
          200: 'rgb(var(--color-cyan-200) / <alpha-value>)',
          300: 'rgb(var(--color-cyan-300) / <alpha-value>)',
          400: 'rgb(var(--color-cyan-400) / <alpha-value>)',
          500: 'rgb(var(--color-cyan-500) / <alpha-value>)',
        },
        cyber: {
          bg: 'rgb(var(--color-cyber-bg) / <alpha-value>)',
          panel: 'rgb(var(--color-cyber-panel) / <alpha-value>)',
          panelSoft: 'rgb(var(--color-cyber-panel-soft) / <alpha-value>)',
          text: 'rgb(var(--color-cyber-text) / <alpha-value>)',
          muted: 'rgb(var(--color-cyber-muted) / <alpha-value>)',
          neonBlue: 'rgb(var(--color-cyber-neon-blue) / <alpha-value>)',
          neonPurple: 'rgb(var(--color-cyber-neon-purple) / <alpha-value>)',
        },
      },
      boxShadow: {
        neon: '0 0 0 1px rgb(var(--color-cyber-neon-blue) / 0.2), 0 0 32px rgb(var(--color-cyber-neon-purple) / 0.25)',
      },
    },
  },
  plugins: [],
}

