import { useState } from 'react'
import { TodoList } from './components/todo-list'
import { startTodolist } from './data'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'




function App() {
  const [todos, setTodos] = useState(startTodolist)

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) => !todo.isDone && new Date(todo.deadline) < today)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) => !todo.isDone && new Date(todo.deadline) >= today)
  }

  const getComletedTodos = () => {
    return todos.filter((todo) => todo.isDone)
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)

   
  }

  const H1 = styled.h1`
  text-decoration: underline;
`
const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.bg};
    
  }
  h2 {
    background-color: #acf;
    margin: 0;
  }
`

const StyledTodolist = styled(TodoList)`
  & h2 {
    color: #ffc;
  }
  & ul {
    background-color: #9fc!important;
    }
`

const theme = {
  colors: {
    bg: '#444',
    text: 'blue'
  }
}  

  return (
    <ThemeProvider theme={theme} >
      <Global />
      <H1>Todo List</H1>
      <TodoList
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodolist
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
      />
      <TodoList
        title="Completed"
        items={getComletedTodos()}
        onToggleTodo={toggleTodo}
      />

    
    </ThemeProvider>
  )
}


export default App
