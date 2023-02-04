
import { useState } from 'react'
import {  HStack, Input,  } from "@chakra-ui/react";


function AddTask({ addTask }) {
  
    const [inputContent, setInputContent] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(inputContent);
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='4' mb='4'>
                <Input
                    value={inputContent}
                    h='46'
                    variant='filled'
                    placeholder='Create a new todo'
                    onChange={(e) => setInputContent(e.target.value)}
                />
            </HStack>
        </form>
    );
}

export default AddTask;