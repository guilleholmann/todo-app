
import { Heading, IconButton, VStack, useColorMode, Spinner, Stack } from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodos from './components/FilterTodos'

import './App.css'
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false); //  to handle spinner hide show
  const [filteredTodos, setFilteredTodos] =  useState([]);
  const [filterSelected, setFilterSelected] = useState('all');

  useEffect(() => {

    setLoading(true);
    const q = query(collection(db, "todos"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });

      setTodoList(todosArray);
      setFilteredTodos(todosArray);


      setLoading(false);
    });
    return () => unsub();
  }, []);


  const checkTodo = async (todo) => {  
    await updateDoc(doc(db, "todos", todo.id), { check: !todo.check });
    setFilterSelected('all');
  }

  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
    setFilteredTodos([...todoList, todo]);
    setFilterSelected('all');
   
  }

  const handleFilterChange = (filter) => {
 
    let filteredItems = [];

    switch(filter) {
      case 'all': 
        filteredItems = [...todoList];
        break;
      case 'active': 
      filteredItems = [...todoList.filter(item => !item.check)];
        break;
      case 'completed': 
      filteredItems = [...todoList.filter(item => item.check)];
        break;
      default:
        filteredItems = [...todoList];
    }
    setFilterSelected(filter);
    setFilteredTodos(filteredItems) ; 
   
  }

  

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
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip='text'
        justifyContent="flex-start"
       fontSize="6xl"    
      >
        TODO
      </Heading>
      <AddTodo addTodo={addTodo} />

      {loading && (
        <Stack direction='row' spacing={4}>
          <Spinner size='xl' />
        </Stack>
      )}
     
      {!loading && (
        <>
          <FilterTodos handleFilterChange={handleFilterChange} filterSelected={filterSelected}/> 
          <TodoList todoList={filteredTodos} checkTodo={checkTodo} />
        </>
      )}



    </VStack>

  )
}

export default App
