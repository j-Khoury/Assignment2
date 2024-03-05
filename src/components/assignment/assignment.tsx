import { FC } from 'react';
import '../../App.css'
import { TaskListContainer, TaskListUl, TaskListItem, TaskListButton} from '../../assets/style.jsx';

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
    <TaskListContainer >
      <h2 className='mb-3'>{title}</h2>

      {tasks.length === 0 ? (
        <p>{message}</p>
      ) : (
        <TaskListUl className='card p-2'>
          {tasks.map((task, index) => (
            <TaskListItem key={index}>
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
              <TaskListButton onClick={() => onTaskDeletion(index)}>Delete</TaskListButton>
            </TaskListItem>
          ))}
        </TaskListUl>
      )}
    </TaskListContainer>
  );
};

export default TaskList;