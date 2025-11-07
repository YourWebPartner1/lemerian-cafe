/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🌈 Your brand palette (unchanged)
        primary: '#FF8A00',        // Warm orange (icons, buttons)
        secondary: '#FF5E8E',      // Vibrant pink (gradients)
        accent: '#FFD9C0',         // Soft beige accent
        light: '#FFF7F0',          // Light background tint
        dark: '#1E1E1E',           // Text & icons

        // 🎉 Events section palette
        'event-red': '#f44545',    // For gradients
        'event-blue': '#265999',
        'event-accent': '#fafafa',

        // === Semantic tokens (map to CSS variables) ===
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        subtle: 'var(--subtle)',
        surface: 'var(--surface)',

        // Keep primary as a variable too so components can reference both.
        primary: {
          DEFAULT: 'var(--primary, #FF8A00)',
          foreground: 'var(--primary-foreground, #ffffff)',
        },
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Clean modern typography
      },

      boxShadow: {
        glow: '0 0 25px rgba(255,138,0,0.3)',
        card: '0 10px 25px rgba(0,0,0,0.05)',
        soft: '0 4px 12px rgba(0,0,0,0.08)',
        elegant: '0 20px 50px -10px rgba(244,69,69,0.15)', // Elegant red tone
      },

      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },

      backgroundImage: {
        'gradient-glow': 'linear-gradient(135deg, #FF8A00, #FF5E8E)',
        'gradient-warm': 'linear-gradient(135deg, #FFEDD5, #FFE4E1)',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
};
