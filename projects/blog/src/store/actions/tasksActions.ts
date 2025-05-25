// Action Types
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';
export const RESET_TASKS = 'RESET_TASKS';
export const SET_FILTER = 'SET_FILTER';

// Action Creators
export const addTask = (title: string) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    title,
    completed: false,
  },
});

export const toggleTask = (id: number) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const deleteTask = (id: number) => ({
  type: DELETE_TASK,
  payload: id,
});

export const loadTasks = (tasks: any[]) => ({
  type: LOAD_TASKS,
  payload: tasks,
});

export const resetTasks = () => ({
  type: RESET_TASKS,
});

export const setFilter = (filter: 'all' | 'completed' | 'incomplete') => ({
  type: SET_FILTER,
  payload: filter,
});
