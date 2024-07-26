import styles from './todoListItem.module.scss';
import { FC } from 'react';
import Checkbox from '../Checkbox/Checkbox.tsx';
import { CrossIcon } from '../../assets/icons/CrossIcon.tsx';
import useTodoStore from '../../store/useTodoStore.ts';

interface ListItemProps {
  id: number;
  completed: boolean;
  text: string;
}

const TodoListItem: FC<ListItemProps> = ({ id, completed, text = 'Default text' }) => {
  const { toggleTodo, deleteTodo } = useTodoStore();

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.listItemWrapper}>
      <div
        onClick={handleClick}
        onTouchStart={handleClick}
        onTouchMove={handleClick}
        onTouchEnd={handleClick}
      >
        <Checkbox isChecked={completed} onClick={() => toggleTodo(id)} />
      </div>
      <p
        style={{
          textDecoration: `${completed ? 'line-through' : 'none'}`,
          opacity: `${completed ? '0.5' : '1'}`,
        }}
        className={styles.itemText}
      >
        {text}
      </p>
      <div
        className={styles.deleteBtn}
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(id);
        }}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <CrossIcon />
      </div>
    </div>
  );
};

export default TodoListItem;
