
import { Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo';
import TodoList from "./components/TodoList";
import './App.css'

function App() {

  const [todoList, setTodoList] = useState([]);

  function checkTodo(id){
        
    const newTodosCheck = todoList.map((todo) => {
        if (todo.id === id){
           todo.check = !todo.check;
        }
        return todo;
    });

    setTodoList(newTodosCheck);
  }

  function addTodo(todo){
    setTodoList([...todoList, todo]);
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
       
        bgClip='text' 
        justifyContent="flex-start"
        color="green"
      >
        TODO
      </Heading>
      <AddTodo  addTodo={addTodo}/>
      <TodoList todoList={todoList}  checkTodo={checkTodo}/>

      
    </VStack>

  )
}

export default App
