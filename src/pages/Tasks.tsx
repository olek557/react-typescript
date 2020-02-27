import React, {useState, useEffect} from 'react';
import TaskList from '../components/TaskList';
import TodoForm from '../components/TodoForm';
import {ITask} from '../interfaces';

const Tasks: React.FC = () => {
  const [tasks, changeTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('_tasks') || "[]") as ITask[];
    changeTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('_tasks', JSON.stringify(tasks))
  }, [tasks]);

  const addTaskHandler = (task: ITask) => {
    changeTasks(prev => [task, ...prev])
  };

  const toggleTaskHandler = (id: string) => {
    changeTasks(prev => prev.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    }));
  };

  const deleteTaskHandler = (id: string) => {
    changeTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <>
      <TodoForm onAddTask={addTaskHandler} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskHandler}
        onToggle={toggleTaskHandler}
      />
    </>
  )
}

export default Tasks;