/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        paleViolte : 'hsl(276, 100%, 81%)',
        moderateViolet : 'hsl(276, 55%, 52%)',
        desDarkViolet : 'hsl(271, 15%, 43%)',
        grayishBlue : 'hsl(206, 6%, 79%)',
        darkDesViolet : 'hsl(271, 36%, 24%)',
        darkGreyViolettwo : 'hsl(270, 7%, 64%)',
        lightMagenta : 'hsl(293, 100%, 63%)',
        lightViolte : 'hsl(264, 100%, 61%)',
        darkGreyViolet : 'hsl(270, 20%, 96%)',
      },
      fontFamily: {
        Rubik : 'Rubik, sans-serif', 
      },
      width:{
        more : '120%',
      },
      screens:{
        '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      },
      keyframes : {
        fadeRightMobile : {
          '0%': {
              opacity: '0',
              transform: 'translateX(-2rem)',
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(0rem)',
          },
      },
      fadeRight : {
        '0%': {
          opacity: '0',
          transform: 'translateX(-10rem)',
      },
      '100%': {
          opacity: '1',
          transform: 'translateX(-8rem)',
      },
     },
      
      fadeLeftDesktop : {
        '0%' :{
          opacity: '0',
          
        },
        '100%': {
          opacity: '1',
         
        }
      },
      fadeLeftMobile : {
        '0%' :{
          opacity: '0',
          transform: 'translateX(2rem)',
        },
        
      }
      },

      animation : {
        'fade-right' : 'fadeRight 2s ease-in-out both ',
        'fade-right-mobile' : 'fadeRightMobile 2s ease-in-out both ',
        'fade-left-desktop' : 'fadeLeftDesktop 2s ease-in-out both ',
        'fade-left-mobile' : 'fadeLeftMobile 2s ease-in-out both',
      
      },
      

    },
  },
  plugins: [],
}