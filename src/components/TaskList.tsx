import React from 'react';
import {ITask} from '../interfaces';

interface TaskListProps {
  tasks: ITask[],
  deleteTask(id: string):void,
  toggleTask(id: string):void,
}

const TaskList: React.FC<TaskListProps> = (props) => {
  const handleTaskDelete = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    props.deleteTask(id);
  }
  return (
    <ul className="task-list">
      {props.tasks.map(task => (
        <li key={task.id} className={`task ${task.completed && 'mod-completed'}`}>
          <label>
            <input type="checkbox" checked={task.completed} onChange={() => props.toggleTask(task.id)}/>
            <span>{task.name}</span>
            <button className="btn btn-floating" onClick={(event) => handleTaskDelete(event, task.id)}>
              <i className="material-icons">delete</i>
            </button>
          </label>
        </li>
      ))}
    </ul>
  )

}

export default TaskList;