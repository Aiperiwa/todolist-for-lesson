import styled from "styled-components";

const Input = styled.input`
  margin-right: 20px;
`
const ListItem = styled.li`
  font-weight: 700;
  color: ${({ isActive }) => isActive ? 'red' : 'black'};
  &:hover {
    font-style: italic;
    cursor: pointer;
  }
`
const ListItemText = styled.span`
  text-decoration: ${({ isDone }) => isDone ? 'line-through' : 'none'};
  color: ${({ theme }) => theme.colors.text};

`

export const TodoItem = ({ id, text, isDone, onToggleTodo, isActive }) => {
  const handleToggleTodo = () => {
    onToggleTodo?.(id)
  }

  return (
    <ListItem isActive={isActive}>
      <Input
        type="checkbox"
        checked={isDone}
        onChange={handleToggleTodo}
      />
      <ListItemText isDone={isDone}>{text}</ListItemText>
    </ListItem>
  )
}
