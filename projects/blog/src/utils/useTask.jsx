import { useState } from 'react';

/**
 * Custom hook for managing task form state and submission
 *
 * @param {Function} onSubmit Callback function to handle form submission
 * @returns {Object} Form state and handlers
 */
export const useAddTaskForm = (onSubmit) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    onSubmit(newTask);
    setNewTask('');
  };

  const handleAddTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  return {
    newTask,
    handleAddTaskSubmit,
    handleAddTaskChange,
  };
};
