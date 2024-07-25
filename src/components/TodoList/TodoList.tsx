import styles from './todoList.module.scss'
import {FC} from "react";
import TodoListItem from "../TodoListItem/TodoListItem.tsx";
import TodoFooter from "../TodoFooter/TodoFooter.tsx";



const TodoList: FC = () => {


  return (
    <div className={styles.listWrapper}>
      {Array(5).fill('0').map((item, index) => <TodoListItem text={index.toString()}/>)}
      <TodoFooter/>
    </div>
  );
};

export default TodoList;