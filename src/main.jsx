import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

import '@fontsource/hanken-grotesk/500.css'
import '@fontsource/hanken-grotesk/700.css'
import '@fontsource/hanken-grotesk/800.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
