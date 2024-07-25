import styles from './todoInput.module.scss'
import {FC} from "react";
import Checkbox from "../Checkbox/Checkbox.tsx";


const TodoInput: FC = () => {


  return (
    <div className={styles.inputWrapper}>
      <Checkbox/>
      <input
        className={styles.input}
        placeholder='Create a new todo..'
        type="text"
      />
    </div>
  );
};

export default TodoInput;