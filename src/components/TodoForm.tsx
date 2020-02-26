import React from 'react';

const TodoForm: React.FC = () => {
  return (
    <div className="input-field">
      <input id="new-todo" type="text" placeholder="New Todo" />
      <label htmlFor="new-todo">New Todo</label>
    </div>
  );
}

export default TodoForm;