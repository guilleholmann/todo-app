
import { Heading, IconButton, VStack, useColorMode, useDisclosure, useToast, Link, Flex } from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'

import './App.css'

function App() {


  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <VStack p={4} minH='100vh' pb={28}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='md'
        alignSelf='flex-start'
        onClick={toggleColorMode}
      />

      <Heading
        p='5'
        as='h1'
        fontWeight='extrabold'
        size='xl'
        bgGradient='linear(to-l, teal.300, blue.500)'
        bgClip='text' 
      >
        TODO
      </Heading>
    </VStack>

  )
}

export default App
