import React from 'react'
import { Heading, HStack, Box, VStack, Text, StackDivider } from '@chakra-ui/react'


function TodoList({ todoList, checkTodo }) {

   
    if (!todoList.length) {
        return (
            <>
                <Box maxW='80%'>
                    <Heading
                        p='5'
                        as='p'
                        fontWeight='extrabold'
                        size='xl'
                        bgClip='text'
                        color='gray.500'
                        fontSize='md'
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

                {todoList.map((todo) => (
                    <HStack
                        key={todo.id}
                        opacity={todo.check == true ? '0.2' : '1'}
                    >
                        <Text
                            w='100%'
                            p='8px'
                            borderRadius='lg'
                            as={todo.check == true ? 's' : ''}
                            cursor='pointer'
                            onClick={() => checkTodo(todo)}>
                            {todo.body}
                        </Text>



                    </HStack>
                ))}
            </VStack>

                      
        </>
    );
}

export default TodoList;