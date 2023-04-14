import { Container } from '@chakra-ui/react'
import { Result } from './components/Result'
import { Summary } from './components/Sumary'

function App () {
  return (
    <Container minH='100vh' minW='100%' display='flex' flexDirection={{ base: 'column', md: 'row', lg: 'row' }}>
      <Result />
      <Summary />
    </Container>
  )
}

export default App
