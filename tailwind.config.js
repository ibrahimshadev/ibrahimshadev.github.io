/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#7a1f1a",
        "news-ink": "#1a1a1a",
        "news-paper": "#FAFAF8",
        "news-gray": "#e5e5e5",
        "news-line": "#d1d1d1",
      },
      fontFamily: {
        "display": ["Newsreader", "serif"],
        "masthead": ["Playfair Display", "serif"],
        "headline": ["Libre Baskerville", "serif"],
        "sans-serif": ["Cinzel", "serif"],
      },
      borderWidth: {
        'hairline': '0.5px',
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
