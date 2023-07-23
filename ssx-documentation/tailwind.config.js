/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1/1': '100%',
        '9/10': '90%',
        '1/2': '50%',
        '1/3': '33.3%',
        '1/4': '25%',
        '1/5': '20%',
        '1/6': '16.6%',
        '1/7': '14.2%',
        '1/8': '12.5%',
        '1/10': '10%',
      }
    }
  },
  plugins: [],
}
