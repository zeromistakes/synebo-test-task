import styles from './App.module.scss'
import TodoHeader from "./components/TodoHeader/TodoHeader.tsx";
import TodoInput from "./components/TodoInput/TodoInput.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
function App() {
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
