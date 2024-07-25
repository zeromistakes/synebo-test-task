import React from 'react';
import styles from './todoFooter.module.scss';
import useTodoStore from "../../store/useTodoStore.ts";

const TodoFooter: React.FC = () => {
  const { todos, filter, setFilter, clearCompleted } = useTodoStore();

  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <div className={styles.footer}>
      <div className={styles.itemsLeft}>{itemsLeft} items left</div>
      <div className={styles.filtersWrapper}>
        <div
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </div>
        <div
          className={`${styles.filterBtn} ${filter === 'active' ? styles.active : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </div>
        <div
          className={`${styles.filterBtn} ${filter === 'completed' ? styles.active : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </div>
      </div>
      <div className={styles.clearBtn} onClick={clearCompleted}>
        Clear Completed
      </div>
    </div>
  );
};

export default TodoFooter;