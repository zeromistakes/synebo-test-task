// src/components/TodoFooter/TodoFooter.tsx
import React from 'react';
import styles from './todoFooter.module.scss';
import useTodoStore from "../../store/useTodoStore.ts";
import TodoFilters from '../TodoFilters/TodoFilters.tsx';

const TodoFooter: React.FC = () => {
  const { todos, clearCompleted } = useTodoStore();

  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <div className={styles.footer}>
      <div className={styles.itemsLeft}>{itemsLeft} items left</div>
      <div className={styles.filtersWrapper}>
        <TodoFilters />
      </div>
      <div className={styles.clearBtn} onClick={clearCompleted}>
        Clear Completed
      </div>
    </div>
  );
};

export default TodoFooter;
