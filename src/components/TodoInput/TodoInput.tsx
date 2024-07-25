import styles from './todoInput.module.scss'
import {FC, useState} from "react";
import Checkbox from "../Checkbox/Checkbox.tsx";
import useTodoStore from "../../store/useTodoStore.ts";


const TodoInput: FC = () => {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false)

  const {todos,addTodo} = useTodoStore()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  const handleCheckboxToggle = () => {
    setChecked((checked) => !checked);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo({
        id: Date.now(),
        text,
        completed: checked,
      });
      setText('');
      setChecked(false);
      console.log(todos)
    }
  };

  return (
    <div className={styles.inputWrapper} onKeyDown={handleKeyPress}>
      <Checkbox isChecked={checked} onClick={handleCheckboxToggle}/>
      <input
        className={styles.input}
        placeholder='Create a new todo..'
        type="text"
        value={text}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TodoInput;