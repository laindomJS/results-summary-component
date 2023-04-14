import { Container } from '@chakra-ui/react'
import { Result } from './components/Result'

function App () {
  return (
    <Container minH='100vh' minW='100%' display='flex'>
      <Result />
    </Container>
  )
}

export default App
