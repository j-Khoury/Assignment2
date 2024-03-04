import React, { FC } from 'react';
import  styles from '../../App.css'

interface TaskListProps {
  title: string;
  message: string;
  tasks: { name: string }[];
  onTaskCompletion?: (index: number) => void;
  onTaskReactivation?: (index: number) => void;
  onTaskDeletion: (index: number) => void;
}

const TaskList: FC<TaskListProps> = ({
  title,
  message,
  tasks,
  onTaskCompletion,
  onTaskReactivation,
  onTaskDeletion,
}) => {
  return (
    <div className={styles.taskList} >
      <h2 className='mb-3'>{title}</h2>

      {tasks.length === 0 ? (
        <p>{message}</p>
      ) : (
        <ul className='card p-2'>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className='d-flex flex-row'>
                <span className='d-flex align-items-center flex-row'>
                  <input
                    className='form-check-input mt-0'
                    type="checkbox"
                    checked={title === 'Completed Tasks'}
                    onChange={() =>
                      title === 'Active Tasks'
                        ? onTaskCompletion && onTaskCompletion(index)
                        : onTaskReactivation && onTaskReactivation(index)
                    }
                  />
                </span>
                <span>{task.name}</span>
              </span>
              <button onClick={() => onTaskDeletion(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;