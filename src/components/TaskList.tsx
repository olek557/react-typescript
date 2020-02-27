import React from 'react';
import {ITask} from '../interfaces';

interface TaskListProps {
  tasks: ITask[],
  onDelete(id: string):void,
  onToggle(id: string):void,
}

const TaskList: React.FC<TaskListProps> = (props) => {
  const {onDelete, tasks, onToggle} = props;
  const taskDeleteHandler = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    onDelete(id);
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task ${task.completed && 'mod-completed'}`}>
          <label>
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)}/>
            <span>{task.name}</span>
            <button className="btn btn-floating" onClick={(event) => taskDeleteHandler(event, task.id)}>
              <i className="material-icons">delete</i>
            </button>
          </label>
        </li>
      ))}
    </ul>
  )

}

export default TaskList;