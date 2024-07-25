import styles from './todoListItem.module.scss'
import {FC} from "react";
import Checkbox from "../Checkbox/Checkbox.tsx";
import {CrossIcon} from "../../assets/icons/CrossIcon.tsx";
import useTodoStore from "../../store/useTodoStore.ts";


interface ListItemProps {
  id: number;
  completed: boolean;
  text: string;
}

const TodoListItem: FC<ListItemProps> = ({
                                           id,
                                           completed,
                                           text = 'Default text'
                                         }) => {

const {toggleTodo, deleteTodo} = useTodoStore()

  return (
    <div className={styles.listItemWrapper}>
      <Checkbox
        isChecked={completed}
        onClick={() => toggleTodo(id)}/>
      <p className={styles.itemText}>{text}</p>
      <div className={styles.deleteBtn} onClick={() => deleteTodo(id)}>
        <CrossIcon/>
      </div>
    </div>
  );
};

export default TodoListItem;