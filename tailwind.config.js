/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding:{
        DEFAULT: "15px"
      }
    },
    screens:{
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px"
    },
    extend: {
      colors:{
        primary: "#3f6e91",
        secondary: "#3e8ea9",
        accent:{
          DEFAULT: "#1cbccf",
          secondary:"#18abbc",
          tertiary: "#90c6cd"
        },
        grey: "#808285",
      },
      fontFamily:{
        primary: 'Poppins'
      },
      boxShadow:{
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage:{
        services: "url(../../assets/img/services/bg.svg)",
        testimonials: "url(../../assets/img/testimonials/bg.svg)",
        departments: "url(../../assets/img/departments/bg.svg)",
        quoteLeft: "url(../../assets/img/testimonials/quote-left.svg)",
        quoteRight: "url(../../assets/img/testimonials/quote-right.svg)",
      }
    },
  },
  plugins: [],
}