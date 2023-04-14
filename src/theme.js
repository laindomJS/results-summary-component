import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    // eslint-disable-next-line quotes
    headings: `'Hanken Grostesk', sans-serif`
  },
  colors: {
    primary: {
      'light-red': 'hsl(0, 100%, 67%)',
      'orangey-yellow': 'hsl(39, 100%, 56%)',
      'green-teal': 'hsl(166, 100%, 37%)',
      'cobalt-blue': 'hsl(243, 85%, 45%)'
    },
    gradients: {
      'light-slate-blue': 'hsl(252, 100%, 67%)',
      'light-royal-blue': 'hsl(241, 81%, 54%)'
    },
    neutral: {
      'pale-blue': 'hsl(221, 100%, 96%)',
      'light-lavender': 'hsl(241, 100%, 89%)',
      'dark-gray-blue': 'hsl(224, 30%, 27%)'
    }
  }
})
