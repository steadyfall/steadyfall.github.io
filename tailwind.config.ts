import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        typewriter: ['var(--font-spaceMono)'],
        'section': ['Starlight', 'sans-serif'],
      },
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
        'sushi': {
          '50': '#f4f9ec',
          '100': '#e5f1d6',
          '200': '#cee4b2',
          '300': '#acd284',
          '400': '#8ebe5d',
          '500': '#76ab42',
          '600': '#56812f',
          '700': '#446328',
          '800': '#385024',
          '900': '#314522',
          '950': '#17250e',
        },
        'blue-violet': {
          '50': '#eef2ff',
          '100': '#e1e6fe',
          '200': '#c8d1fd',
          '300': '#a7b3fa',
          '400': '#838bf6',
          '500': '#6766ee',
          '600': '#574ae2',
          '700': '#493bc7',
          '800': '#3c32a1',
          '900': '#35307f',
          '950': '#201c4a',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
