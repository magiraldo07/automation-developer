/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        neurolynx: {
          navy: "#071222",       // Fondo oscuro principal
          cyan: "#10c8ef",       // Cyan para branding
          blue: "#153157",       // Azul oscuro
          gray: "#E2E8F0",       // Texto claro
          white: "#FFFFFF"       // Blanco puro
        },
      },
    },
  },
  plugins: [],
};
