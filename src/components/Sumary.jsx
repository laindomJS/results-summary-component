import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react'

export const Summary = () => {
  return (
    <Box
      w='310px'
      borderRadius='12px'
      padding='1.5rem'
      bgColor='white'
      boxShadow='lg'
      h='420px'
    >
      <Heading fontFamily='headings' fontSize='25px'>Summary</Heading>
      <Button w='full' borderRadius='20px' color='white' fontFamily='headings' bgColor='neutral.dark-gray-blue' padding='1.5rem'>
        Continue
      </Button>
    </Box>
  )
}
