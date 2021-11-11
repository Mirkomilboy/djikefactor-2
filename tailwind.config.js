module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          'green': '#1ECD9C',
          'dark': '#0B0D17',
          'gray': '#8F8F8F',
        }
      },
      fontSize: {
        '13': '13px',
        '15': '15px',
      },
      boxShadow: {
        custom: '0px 4px 35px rgba(0, 0, 0, 0.07)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
