import { useState } from 'react'
import { HStack, Input, useToast, Button, Tooltip } from "@chakra-ui/react";
import { nanoid } from 'nanoid';

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";


function AddTodo({ addTodo }) {
    const toast = useToast();
    const [content, setContent] = useState('');
    const [statusInput, setStatusInput] = useState(true);

    const handleSubmit = async (e) => {
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

        await addDoc(collection(db, "todos"), {
            ...todo
        })
            .then(() => {
                addTodo(todo);
                setContent('');
            })
            .catch((error) => {
                console.log(error)
            });
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

                <Tooltip label="Add new task" aria-label='Add new task'>
                    <Button
                        colorScheme='blue'
                        px='8'
                        pl='10'
                        pr='10'
                        h='46'
                        type='submit'>Add
                    </Button>
                </Tooltip>


            </HStack>
        </form>
    );
}

export default AddTodo;