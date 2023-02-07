import React from "react";
import {
    
     ListItem,
    
     UnorderedList,
} from "@chakra-ui/react";


function filterTodos({ handleFilterChange }) {
    return (       
        <UnorderedList>
            <ListItem cursor="pointer" onClick={() => handleFilterChange('all')}>All</ListItem>
            <ListItem cursor="pointer" onClick={() => handleFilterChange('active')}>Active</ListItem>
            <ListItem cursor="pointer" onClick={() => handleFilterChange('completed')}>Completed</ListItem>
        </UnorderedList>
    );
}

export default filterTodos;
