import React, {useState, useEffect} from 'react';
import TaskList from '../components/TaskList';
import TodoForm from '../components/TodoForm';
import {ITask} from '../interfaces';

const Tasks: React.FC = () => {
  const [tasks, changeTasks] = useState<ITask[]>([]);

  useEffect(() => {
    changeTasks(
      JSON.parse(localStorage.getItem('_tasks') || "[]")
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('_tasks', JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (task: ITask) => {
    changeTasks([...tasks, task])
  };
  const toggleTask = (id: string) => {
    changeTasks(tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    }));
  };
  const deleteTask = (id: string) => {
    changeTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <TodoForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  )
}

export default Tasks;