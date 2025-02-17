const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
      },
      colors: {
        neutral: colors.neutral,
        black: '#000C1A',
        primary: '#002B5B',
        white: '#FFFEFA',
        'primary-60': '#001A37'
      },
      backgroundImage: {
        gradient:
          'linear-gradient(96deg, #D4AF37 0%, #D4AF37 15%, #F5DB85 45%, #FCE495 50%, #F5DB86 55%, #D4AF37 85%, #D8B440 100%)' // Gradiente dorado
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        md: '768px',
        'md-down': { max: '767px' },
        'only-md': { min: '768px', max: '1023px' },
        lg: '1024px',
        'lg-down': { max: '1023px' },
        xl: '1280px',
        'xl-down': { max: '1279px' },
        desktop: '1441px',
        'desktop-down': { max: '1440px' }
      }
    }
  },
  daisyui: {
    themes: [
      {
        lofi: {
          ...require('daisyui/src/theming/themes')['lofi'],
          primary: '#2bdcd2',
          'primary-content': '#171717',
          secondary: '#016968',
          info: '#2bdcd2',
          'info-content': '#171717'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};
