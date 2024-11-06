import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        error: '#DC2626',
        info: '#2563EB',
        trace: '#16A34A',
        debug: '#CA8A04',
        fatal: '#991B1B',
        warn: '#D97706',
        unspecified: '#9CA3AF',
      }
    },
  },
  plugins: [],
};
export default config;
