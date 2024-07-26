// src/components/TodoFilters/TodoFilters.tsx
import React from 'react';
import styles from './todoFilters.module.scss';
import useTodoStore from "../../store/useTodoStore.ts";

const TodoFilters: React.FC = () => {
  const { filter, setFilter } = useTodoStore();

  return (
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
  );
};

export default TodoFilters;
