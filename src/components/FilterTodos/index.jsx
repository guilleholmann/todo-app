import React  from "react";

import { Link, Flex , Tooltip } from "@chakra-ui/react";


function filterTodos({ handleFilterChange, filterSelected }) {
   
    return (       
        <Flex>
             <Tooltip label="All Tasks" aria-label='Filter All Tasks'>
                <Link 
                    cursor="pointer" 
                    color={filterSelected ==='all' ? 'pink.400' : ''}
                    colorScheme='blue'
                    m='3' 
                    onClick={() => handleFilterChange('all')}>                
                    All
                </Link>
            </Tooltip>
            <Tooltip label="Filter Active Tasks" aria-label='Filter Active Tasks'>
                <Link 
                    cursor="pointer"
                    color={filterSelected ==='active' ? 'pink.400' : ''}
                    m='3'
                    onClick={() => handleFilterChange('active')}>
                        Active
                </Link>
            </Tooltip>
            <Tooltip label="Filter Completed Tasks" aria-label='Filter Completed Tasks'>
                <Link 
                    cursor="pointer"
                    color={filterSelected ==='completed' ? 'pink.400' : ''}
                    m='3'
                    onClick={() => handleFilterChange('completed')}>
                        Completed
                </Link>
            </Tooltip>
            
           
        </Flex>
    );
}

export default filterTodos;
