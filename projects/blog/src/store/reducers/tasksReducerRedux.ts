import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  LOAD_TASKS,
  RESET_TASKS,
  SET_FILTER,
} from '../actions/tasksActionsRedux';

// Task Reducer
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskState = {
  tasks: Task[];
  filter: 'all' | 'completed' | 'incomplete';
};

export const initialState: TaskState = {
  tasks: [],
  filter: 'all',
};

export const taskReducer = (state: TaskState = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case RESET_TASKS:
      return {
        ...state,
        tasks: [],
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
