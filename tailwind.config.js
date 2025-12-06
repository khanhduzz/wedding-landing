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
        // heading: ['"Playfair Display"', "serif"],
        // body: ['"Inter"', "system-ui", "sans-serif"],
        // script: ['"Great Vibes"', "cursive"],
        serif: ["var(--font-serif)"],
        script: ["var(--font-script)"],
      },
      width: {
        13: "3.25rem", // custom size (52px)
        15: "3.75rem", // custom size (60px)
        18: "4.5rem", // custom size (72px)
        25: "6.25rem", // custom size (100px)
      },
      height: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        25: "6.25rem",
      },
    },
  },
  plugins: [],
};
