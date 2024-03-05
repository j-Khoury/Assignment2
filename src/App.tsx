import React, { useState } from 'react';
import TaskList from './components/assignment/assignment.tsx';
import styled, { keyframes } from 'styled-components';

interface Task {
  name: string
}

export default function TaskManager() {

  const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #ff5757;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState<string>('');


  // add new task to active tasks list process
  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const handleCreateTask = () => {
    if (newTaskName.trim() !== '') {
      setActiveTasks([...activeTasks, { name: newTaskName }]);
      setNewTaskName('');
    }
  };

  // change task status from active to complete
  const handleTaskCompletion = (index: number) => {
    const taskToComplete = activeTasks[index];
    setActiveTasks(activeTasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  // change task status from complete to active
  const handleTaskReactivation = (index: number) => {
    const taskToReactivate = completedTasks[index];
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
    setActiveTasks([...activeTasks, taskToReactivate]);
  };


  //delete task process
  const handleTaskDeletion = (index: number, listType: string) => {
    if (listType === 'active') {
      setActiveTasks(activeTasks.filter((_, i) => i !== index));
    } else {
      setCompletedTasks(completedTasks.filter((_, i) => i !== index));
    }
  };

  const [showSpinner, setShowSpinner] = useState(false);

  const loadingHandleClick = () => {
    // Show the spinner
    setShowSpinner(true);
    console.log("working")
    // Simulate a loading process
    setTimeout(() => {
      // Hide the spinner after a delay (simulating data fetching)
      setShowSpinner(false);
    }, 5000); // Change the delay as needed
  };


  return (
    <div className='d-flex justify-content-center' style={{width: '100%'}}>
      <div className="container-lg py-4 my-4" style={{ width: '600px' }}>
      
      {/* Conditionally render the spinner */}
      {showSpinner && <Spinner />}

      <div className="input-container px-4 input-group">
        <input
          type="text"
          placeholder="Enter task name"
          className="form-control"
          value={newTaskName}
          onChange={handleNewTaskChange}
        />
        <button
          onClick={handleCreateTask}
          className="btn btn-outline-secondary"
          disabled={!newTaskName.trim()}
        >
          Create
        </button>
      </div>
      <div className="tabs">
        <TaskList
          title="Active Tasks"
          message="no active tasks"
          tasks={activeTasks}
          onTaskCompletion={handleTaskCompletion}
          onTaskDeletion={(index) => handleTaskDeletion(index, 'active')}
        />
        <div style={{height: '50px'}} onClick={loadingHandleClick}></div>
        <TaskList
          title="Completed Tasks"
          message="no completed tasks"
          tasks={completedTasks}
          onTaskReactivation={handleTaskReactivation}
          onTaskDeletion={(index) => handleTaskDeletion(index, 'completed')}
        />
      </div>
    </div>  
    </div>
    
  );
}