import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'poppins': 'var(--font-poppins)',
        'noto-sans': 'var(--font-noto-sans)',
        'noto-sans-mono': 'var(--font-noto-sans-mono)',
        'space-grotesk': 'var(--font-space-grotesk)',
      }
    },
  },
  plugins: [],
} satisfies Config;
