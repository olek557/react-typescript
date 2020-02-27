import React, {useState} from 'react';
import {ITask} from '../interfaces';

interface TodoFormProps {
  onAddTask(task: ITask):void,
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [taskName, setTaskName] = useState('');
  const {onAddTask} = props;

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      onAddTask({
        id: '' + new Date().getTime(),
        name: taskName,
        completed: false,
      });
      setTaskName('');
    }
  }

  const inputChangeHandler = (event: React.ChangeEvent) => {
    const value: string = (event.target as HTMLInputElement).value;
    setTaskName(value);
  }

  return (
    <div className="input-field">
      <input id="new-todo" type="text" placeholder="New Todo" onKeyPress={keyPressHandler} onChange={inputChangeHandler} value={taskName} />
      <label htmlFor="new-todo" className="active">New Todo</label>
    </div>
  );
}

export default TodoForm;