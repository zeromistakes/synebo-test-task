// src/store/useThemeStore.ts

import create from 'zustand';
import {ThemeType} from "../types/generalTypes.ts";

interface TodoStore {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  theme: 'LIGHT', // Default theme
  setTheme: (theme: ThemeType) => set({ theme }),
}));

export default useTodoStore;
