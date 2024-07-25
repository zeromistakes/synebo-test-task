import {create} from 'zustand';
import {FilterType, ThemeType} from "../types/generalTypes.ts";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  reorderTodos: (startIndex: number, endIndex: number) => void;
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  theme: 'LIGHT',
  setTheme: (theme: ThemeType) => set({ theme }),
  todos: [],
  addTodo: (todo: Todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
  filter: 'all',
  setFilter: (filter: 'all' | 'active' | 'completed') =>
    set({ filter }),
  reorderTodos: (startIndex: number, endIndex: number) =>
    set((state) => {
      const result = Array.from(state.todos);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return { todos: result };
    }),
}));

export default useTodoStore;
