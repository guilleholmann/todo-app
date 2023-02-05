import React from 'react'
import { Heading, HStack, Box, VStack, Text, StackDivider } from '@chakra-ui/react'


function TodoList({ todoList, checkTodo }) {

    
    if (!todoList.length) {
        return (
            <>
                <Box maxW='80%'>
                    <Heading
                        p='5'
                        as='h6'
                        fontWeight='extrabold'
                        size='xl'
                        bgClip='text'
                    >
                        Your list is empty
                    </Heading>
                </Box>
            </>
        );
    }
    return (
        <>
            <VStack
                divider={<StackDivider />}
                borderColor='gray.100'
                borderWidth='2px'
                p='5'
                borderRadius='lg'
                w='100%'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
                alignItems='stretch'
            >

                {todoList.map((Todo) => (
                    <HStack
                        key={Todo.id}
                        opacity={Todo.check == true ? '0.2' : '1'}
                    >
                        <Text
                            w='100%'
                            p='8px'
                            borderRadius='lg'
                            as={Todo.check == true ? 's' : ''}
                            cursor='pointer'
                            onClick={() => checkTodo(Todo.id)}>
                            {Todo.body}
                        </Text>

                    </HStack>
                ))}
            </VStack>

           
        </>
    );
}

export default TodoList;