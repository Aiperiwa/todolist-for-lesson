import { TodoItem } from '../todo-item'
import styled from 'styled-components'

const Title = styled.h2`
  color: #5e5ee2;
  font-size: 30px;
`

const Ul = styled.ul`
  list-style: none;
  padding: 20px;
  border: 2px solid #f37979;
  margin: 0;
  background-color: #e2ed65;

`



export const TodoList = ({ title, items, onToggleTodo, className }) => {
  return (
    <div className={className}>
      <Title>{title}</Title>
      <Ul>
        {
          items.map((todo, index) => (
            <TodoItem 
              isActive={index === 1}
              key={todo.id}
              {...todo}
              onToggleTodo={onToggleTodo}
            />
          ))
        }
      </Ul>
    </div>
  )
}

