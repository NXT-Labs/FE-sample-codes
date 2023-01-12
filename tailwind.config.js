/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#006EF5',
        placeholder: '#858585',
        primary:  '#091225',
        secondary: '#212529',
        'dark--blue': '#032A66',
        'light--blue': '#006EF5',
        white: '#fff',
        grey: '#343A40',
        'accent--green': '#3AC754',
        'accent--gold': '#AF8B28',
        'accent--orange': '#C17343',
        'accent--blue': '#233040',
        'accent-grey': '#2E2D2D',
        'accent--red': '#EB1341',
        'tabs--grey': '#474E55',
        gold: '#E4B923',
        orange: '#FF4800',
        light: '#969595',
        'gradient-bg': 'linear-gradient(180deg, #091225 0%, #092F5E 100%)',
        error: '#FF005C',
        success: '#3AC754',
        warning: '#FF4800'
      },
      fontSize: {
        small: '1.2rem',
        regular: '1.4rem',
        body: '1.6rem',
        medium: '1.8rem',
      },
      lineHeight: {
        15: '1.5rem',
        10: '1rem',
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2rem',
        24: '2.4rem',
        30: '3rem',
        32: '3.2rem',
        34: '3.4rem',
        40: '4rem',
        58: '5.8rem',
      },
      fontFamily: {
        poppins: 'Poppins'
      },
      padding: {
        book: '0.3rem',
        menu: '1.7rem',
        qr: '2.2rem',
        news: '3.5rem',
        footer: '3.8rem',
        'footer-mobile': '17.5rem',
        'mobile-nav': '4.5rem',
        'car-park': '5.5rem',
        h1: '7rem',
        'section-top': '9rem',
        'component-bottom': '11rem',
      },
      margin: {
        qr: '3.5rem',
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        70: '0.7',
      },
      zIndex: {
        60: 60,
        70: 70,
      },
      borderColor: {
        'online-selected': '#0093D0',
        'offline-selected': '#0055A5',
      },
      borderRadius: {
        rounded: '5px'
      },
      inset: {
        'booking-wrapper': '7.2rem',
      },
      
    },
  },
  plugins: [],
}
