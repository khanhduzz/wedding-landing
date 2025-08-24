/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        ink: "var(--color-ink)",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      }
    },
  },
  plugins: [],
}
