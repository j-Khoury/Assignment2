import styled from 'styled-components';

// Define the styled component for the task list
const TaskListContainer = styled.div`
  margin-bottom: 30px;
  padding: 30px;
`;

// Define the styled component for the list
const TaskListUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Define the styled component for list items
const TaskListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

// Define the styled component for the button
const TaskListButton = styled.button`
  padding: 5px 10px;
  background-color: #ff5757;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
  }
`;



// Export the styled components and the spin keyframes
export { TaskListContainer, TaskListUl, TaskListItem, TaskListButton};