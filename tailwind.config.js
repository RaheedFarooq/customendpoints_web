module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prefered: {
          white: '#EFF3E6',
          light: '#02D6F8',
          neon: '#41F9FB',
          shade1: '#3D8CC2',
          shade2: '#016CB6',
          shade3: '#014E83',
          dark: '#002036',
          black: '#112736'
        },
      },
      height: {
        '5p': '5%',
        '10p': '10%',
        '90p': '90%',
        '10v': '10vh',
        '80v': '80vh',
        '90v': '90vh',
      },
      gridTemplateRows: {
        // Simple 8 row grid
       '7': 'repeat(7, minmax(0, 1fr))',
       '8': 'repeat(8, minmax(0, 1fr))',
       '9': 'repeat(9, minmax(0, 1fr))',
       '10': 'repeat(10, minmax(0, 1fr))',

        // Complex site-specific row configuration
       'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
