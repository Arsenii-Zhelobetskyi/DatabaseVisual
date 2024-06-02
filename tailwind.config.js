import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        border: '#CFCAC1',
        error: '#FE0B16',
        text: '#9DA4A9',
        inputBorder: '#D8CDF2',
        inputBackground: '#FBFAFE',
        Focus: '#C372E9',
        inputDisabledFocus: '#CFCAC1',
        DisabledBackground: '#DCDBE0'
      }
    }
  },

  plugins: [forms]
}
