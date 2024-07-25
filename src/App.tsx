import styles from './App.module.scss'
import TodoHeader from "./components/TodoHeader/TodoHeader.tsx";
function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.bgWrapper}/>
      <main className={styles.contentWrapper}>
        <TodoHeader/>
        {/*  TODO INPUT*/}
        {/*  TODO LIST*/}
        {/*  TODO FOOTER*/}
        <div className={styles.dndTip}>
          Drag and drop to reorder list
        </div>
      </main>
    </div>
  )
}

export default App
