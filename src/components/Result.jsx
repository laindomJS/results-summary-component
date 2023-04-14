import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const Result = () => {
  return (
    <Flex
      w='310px'
      borderRadius='12px'
      padding='1.5rem'
      flexDirection='column'
      textAlign='center'
      bgColor='gradients.light-royal-blue'
      h='420px'
    >
      <Text color='neutral.light-lavender' fontSize='22px' fontFamily='headings' fontWeight='bold'>
        Your Result
      </Text>

      <Box mt='2rem' borderRadius='50%' bgGradient='linear(to-b, hsla(256, 72%, 46%,1), hsla(241, 72%, 46%, 0))' w='160px' padding='2rem' mx='auto'>
        <Heading fontSize='48px' color='white'>76</Heading>
        <Text fontWeight='semibold' color='neutral.light-lavender'>of 100</Text>
      </Box>

      <Box mt='2rem'>
        <Heading fontSize='28px' color='white' mb='.6rem'>Great</Heading>
        <Text fontFamily='headings' fontWeight='600' w='90%' mx='auto' color='neutral.light-lavender'>
          You scored higher than 65% of the people who have taken these tests.
        </Text>
      </Box>
    </Flex>
  )
}
