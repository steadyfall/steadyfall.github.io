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
        'midnight-blue': {
          '50': '#ebfaff',
          '100': '#d3f3ff',
          '200': '#b0ebff',
          '300': '#7ae2ff',
          '400': '#3bcdff',
          '500': '#0eadff',
          '600': '#008aff',
          '700': '#0072ff',
          '800': '#005dd2',
          '900': '#0452a4',
          '950': '#0a3b76',
        },
        'mantis': {
          '50': '#f2fbf2',
          '100': '#e2f7e1',
          '200': '#c4eec4',
          '300': '#97df96',
          '400': '#55c455',
          '500': '#3aad3a',
          '600': '#2b8e2c',
          '700': '#257026',
          '800': '#225923',
          '900': '#1d4a1f',
          '950': '#0b280c',
        },
      },
    },
  },
  plugins: [],
};
export default config;
