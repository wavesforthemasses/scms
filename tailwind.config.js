module.exports = {
  theme: {
    fontFamily: {
      body: ['Lato'],
      head: ['Quattrocento']
    },
    extend: {
      opacity:{
        60: 0.6,
        66: 0.666,
      },
      fontSize:{
        'base': '0.98rem'
      },
      colors: {
        'primary': {
          default: '#333'
        },
        'secondary':{
          default: '#555'
        },
        black: '#222'
      },
      boxShadow: {
        carousel: 'inset 0rem 0rem 2rem 0.5rem rgba(0,0,0,0.6)'
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'}
      }
    }
  },
  variants: {},
  plugins: []
}
