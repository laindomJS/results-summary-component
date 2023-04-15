
import { Box, Heading, Button } from '@chakra-ui/react'
import { ResultsList } from './ResultsList'

export const Summary = () => {
  return (
    <Box
      as='article'
      w='310px'
      borderTopRightRadius='10px'
      borderBottomRightRadius='10px'
      borderTopLeftRadius='0px'
      borderBottomLeftRadius='0px'
      padding='1.5rem'
      bgColor='white'
      boxShadow='lg'
      h='420px'
    >
      <Heading fontFamily='headings' fontSize='25px'>Summary</Heading>
      <ResultsList />
      <Button mt='.4rem' w='full' borderRadius='20px' color='white' fontFamily='headings' bgColor='neutral.dark-gray-blue' padding='1.5rem'>
        Continue
      </Button>
    </Box>
  )
}
