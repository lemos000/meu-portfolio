/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        grande: '2em'
      },
      colors: {
        rosaLindo: '#772CC8',
        darkPurple: '#4B0070', // Exemplo de roxo escuro
    }}},
  plugins: [],
}

