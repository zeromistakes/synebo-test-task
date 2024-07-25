import styles from './todoList.module.scss'
import {FC} from "react";
import TodoListItem from "../TodoListItem/TodoListItem.tsx";
import TodoFooter from "../TodoFooter/TodoFooter.tsx";
import useTodoStore from "../../store/useTodoStore.ts";



const TodoList: FC = () => {


  const { todos, filter } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      case 'all':
      default:
        return true;
    }
  });
  return (
    <div className={styles.listWrapper}>
      {filteredTodos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
      <TodoFooter/>
    </div>
  );
};

export default TodoList;