import styles from './App.module.scss'
import TodoHeader from "./components/TodoHeader/TodoHeader.tsx";
import TodoInput from "./components/TodoInput/TodoInput.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
import useTodoStore from "./store/useTodoStore.ts";
import {useEffect} from "react";
function App() {

  const {theme} = useTodoStore();

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
        {/*  TODO FOOTER*/}
        <div className={styles.dndTip}>
          Drag and drop to reorder list
        </div>
      </main>
    </div>
  )
}

export default App
