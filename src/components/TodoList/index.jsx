import React from 'react'
import { Heading, HStack, Box, VStack, StackDivider, Checkbox , Button, Flex, Text} from '@chakra-ui/react'


function TodoList({ todoList, checkTodo, deleteCompleted }) {

   
    if (!todoList?.length) {
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
                        opacity={todo.check == true ? '0.5' : '1'}
                    >
                        
                        <Checkbox colorScheme='blue' onChange={() => checkTodo(todo)} isChecked={todo.check}  as={todo.check == true ? 's' : ''}>
                           {todo.body}
                        </Checkbox>
                    </HStack>
                ))}
            </VStack>
           
            {/* <Text>
               {`${remainingCounter} remaining`}
            </Text> */}
                
                   
            <Flex>
                <Button
                    colorScheme='gray'
                    px='8'
                    color='gray.500'
                    mt='8'
                    size='sm'
                    onClick={deleteCompleted}
                    >
                    Clear Completed
                </Button>

            </Flex>        
                      
        </>
    );
}

export default TodoList;