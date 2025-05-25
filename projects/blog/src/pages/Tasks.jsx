import { useState } from 'react';
import Button from '../library/Button';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter((task) => task.completed).length;
  const totalIncompleteTasks = tasks.filter((task) => !task.completed).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask,
        completed: false,
      },
    ]);
    setNewTask('');
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const loadTasks = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const resetTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <div className="flex gap-2 float-right">
        <Button onClick={loadTasks} className="bg-orange-500">
          Load Tasks from REST API
        </Button>
        <Button onClick={resetTasks} className="bg-red-500">
          Reset
        </Button>
      </div>

      <h1 className="text-4xl font-bold py-4">Tasks</h1>

      <div className="flex gap-2 py-2 justify-between">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            placeholder="Enter task title"
            className="border border-gray-300 px-4 py-2 rounded"
          />
          <Button type="submit" className="bg-blue-500">
            Add Task
          </Button>
        </form>
      </div>

      <div className="flex gap-2 py-2 justify-between">
        <div className="flex gap-2">
          <p className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
            Total tasks: {totalTasks}
          </p>
          <p className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
            Total completed tasks: {totalCompletedTasks}
          </p>
          <p className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
            Total incomplete tasks: {totalIncompleteTasks}
          </p>
        </div>

        <div className="flex gap-2">
          <Button onClick={() => setFilter('all')} className="font-bold bg-gray-100 text-black">
            All
          </Button>
          <Button
            onClick={() => setFilter('completed')}
            className="font-bold bg-gray-100 text-black"
          >
            Completed
          </Button>
          <Button
            onClick={() => setFilter('incomplete')}
            className="font-bold bg-gray-100 text-black"
          >
            Incomplete
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`cursor-pointer p-4 rounded-md flex justify-between ${
              task.completed ? 'bg-green-500' : 'bg-yellow-500'
            }`}
            onClick={() => handleToggleTask(task.id)}
          >
            <h2>{task.title}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTask(task.id);
              }}
              className="bg-red-500 text-white px-4 py-2"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
