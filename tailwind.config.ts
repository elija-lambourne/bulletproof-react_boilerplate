/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,css,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'primary': 'var(--primary)', // Changed to a more standard blue
        'primary-hover': 'var(--primary-hover)', // Darker blue for hover
        'primary-greyed': 'var(--primary-greyed)', // Cool gray for disabled state
        'primary-greyed-hover': 'var(--primary-greyed-hover)', // Slightly darker gray for hover
        'text-primary': 'var(--text-primary)', // Light gray for primary text
        'btn-text-disable': 'var(--btn-text-disable)', // Muted gray for disabled button text
        'btn-bg-disable': 'var(--btn-bg-disable)', // Darker gray for disabled button background
      },

    },
  },
  plugins: [
  ],
}