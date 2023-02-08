import React  from "react";

import {
     Link,
     Flex
} from "@chakra-ui/react";


function filterTodos({ handleFilterChange, filterSelected }) {
   
    return (       
        <Flex>
            <Link cursor="pointer" color={filterSelected ==='all' ? 'purple' : ''} m='3' onClick={() => handleFilterChange('all')}>All</Link>
            <Link cursor="pointer" color={filterSelected ==='active' ? 'purple' : ''} m='3' onClick={() => handleFilterChange('active')}>Active</Link>
            <Link cursor="pointer" color={filterSelected ==='completed' ? 'purple' : ''} m='3' onClick={() => handleFilterChange('completed')}>Completed</Link>
        </Flex>
    );
}

export default filterTodos;
