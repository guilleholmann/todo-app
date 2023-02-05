import { useState } from 'react'
import { HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from 'nanoid';

function AddTodo({ addTodo }) {
    const toast = useToast();
    const [content, setContent] = useState('');
    const [statusInput, setStatusInput] = useState(true);

    function handleSubmit(e){
        e.preventDefault();

        const todoText = content.trim();

        if (!todoText) {
            toast({
                title: 'Write your task',
                position: 'top',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
            setStatusInput(false);
            
            return setContent('');
        }

        const todo = {
            id: nanoid(),
            body: todoText,
            check: false
        };
        
        addTodo(todo);
        setContent('');
    }

    if (content && !statusInput) {
        setStatusInput(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='4' mb='4'>
                <Input
                    h='46'
                    borderColor={!statusInput ? 'red.300' : 'transparent'}
                    variant='filled'
                    placeholder='Create a new todo'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
               
            </HStack>
        </form>
    );
}

export default AddTodo;