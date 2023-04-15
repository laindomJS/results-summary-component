import { Box } from '@chakra-ui/react'
import { Result } from './components/Result'
import { Summary } from './components/Summary'

function App () {
  return (
    <Box
      as='main'
      minH='100vh'
      minW='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
    >
      <Result />
      <Summary />
    </Box>
  )
}

export default App
