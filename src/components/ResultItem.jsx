import { Text, Flex } from '@chakra-ui/react'
export const ResultItem = (result) => {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      w='full'
      padding='1.2rem'
      bgColor={result.bgColor}
      border='none'
      borderRadius='8px'
      my='.6rem'
    >

      <Flex>
        <img src={result.icon} alt={result.category} />
        <Text mx='.5rem' color={result.textColor} fontFamily='headings' fontWeight='600'>
          {result.category}
        </Text>
      </Flex>

      <Text fontFamily='headings'>
        <span style={{ fontWeight: '600' }}>
          {result.score}
        </span> / 100
      </Text>
    </Flex>
  )
}
