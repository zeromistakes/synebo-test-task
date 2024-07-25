import styles from './todoListItem.module.scss'
import {FC} from "react";
import Checkbox from "../Checkbox/Checkbox.tsx";
import {CrossIcon} from "../../assets/icons/CrossIcon.tsx";


interface ListItemProps {
  isChecked: boolean;
  text: string;
}

const TodoListItem: FC<ListItemProps> = ({
                                           isChecked = true,
                                           text = 'Default text'
                                         }) => {


  return (
    <div className={styles.listItemWrapper}>
      <Checkbox isChecked={isChecked}/>
      <p className={styles.itemText}>{text}</p>
      <div className={styles.deleteBtn}>
        <CrossIcon/>
      </div>
    </div>
  );
};

export default TodoListItem;