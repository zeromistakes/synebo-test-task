import styles from './App.module.scss'
import TodoHeader from "./components/TodoHeader/TodoHeader.tsx";
import TodoInput from "./components/TodoInput/TodoInput.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
import useTodoStore from "./store/useTodoStore.ts";
import React, {useEffect} from "react";
import TodoFooter from "./components/TodoFooter/TodoFooter.tsx";
import TodoFilters from "./components/TodoFilters/TodoFilters.tsx";

function App() {

  const {theme, todos} = useTodoStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.appWrapper}>
      <div className={styles.bgWrapper}/>
      <main className={styles.contentWrapper}>
        <TodoHeader/>
        <TodoInput/>
        <TodoList/>
        {todos.length > 0 && (
            <div className={styles.filtersWrapper}>
              <TodoFilters/>
            </div>
        )
        }
        {todos.length > 1 && (
            <div className={styles.dndTip}>
              Drag and drop to reorder list
            </div>
        )
        }
      </main>
    </div>
  )
}

export default App
