const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.vue',
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    customForms: theme => ({
      default: {
        'input, textarea, select': {
          width: theme('width.full'),
          borderColor: theme('colors.gray.300'),
          '&:focus': {
            borderColor: theme('colors.purple.500'),
            boxShadow: `0 0 0 1px ${theme('colors.purple.500')}`,
          },
        },
        'checkbox, radio': {
          color: theme('colors.purple.500'),
          borderColor: theme('colors.gray.300'),
          '&:focus': {
            borderColor: theme('colors.purple.500'),
            boxShadow: `0 0 0 1px ${theme('colors.purple.500')}`,
          },
        },
      },
    }),
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Noto Sans TC', ...fontFamily.sans],
        mono: [...fontFamily.mono, 'Inter var', 'Noto Sans TC'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/custom-forms'),
  ],
}
