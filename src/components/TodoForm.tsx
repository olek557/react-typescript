import React, {useState} from 'react';
import {ITask} from '../interfaces';

interface TodoFormProps {
  addTask(task: ITask):void,
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [taskName, setTaskName] = useState('');
  const handleSubmit = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      props.addTask({
        id: '' + new Date().getTime(),
        name: taskName,
        completed: false,
      });
      setTaskName('');
    }
  }
  const handleInputChange = (event: React.ChangeEvent) => {
    const value: string = (event.target as HTMLInputElement).value;
    setTaskName(value);
  }

  return (
    <div className="input-field">
      <input id="new-todo" type="text" placeholder="New Todo" onKeyPress={handleSubmit} onChange={handleInputChange} value={taskName} />
      <label htmlFor="new-todo">New Todo</label>
    </div>
  );
}

export default TodoForm;