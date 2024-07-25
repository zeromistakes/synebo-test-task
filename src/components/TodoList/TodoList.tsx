// src/components/TodoList.tsx
import React, { useState } from 'react';
import styles from './todoList.module.scss';
import TodoListItem from '../TodoListItem/TodoListItem.tsx';
import TodoFooter from '../TodoFooter/TodoFooter.tsx';
import useTodoStore from '../../store/useTodoStore.ts';

const TodoList: React.FC = () => {
  const { todos, filter, reorderTodos } = useTodoStore();
  const [draggingItemIndex, setDraggingItemIndex] = useState<number | null>(null);

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

  const handleDragStart = (index: number) => {
    setDraggingItemIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggingItemIndex === null) return;
    if (draggingItemIndex !== index) {
      const updatedTodos = [...filteredTodos];
      const [draggedItem] = updatedTodos.splice(draggingItemIndex, 1);
      updatedTodos.splice(index, 0, draggedItem);
      reorderTodos(draggingItemIndex, index);
      setDraggingItemIndex(index);
    }
  };

  const handleDrop = () => {
    setDraggingItemIndex(null);
  };

  const getNoResultsMessage = () => {
    switch (filter) {
      case 'active':
        return 'You have nothing TO DO :)';
      case 'completed':
        return 'No completed todos, try TO DO something :)';
      case 'all':
      default:
        return 'No todos, try to plan something';
    }
  };

  return (
    <div className={styles.listWrapper}>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <div
            className={styles.dndWrapper}
            key={todo.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={handleDrop}
          >
            <TodoListItem {...todo} />
          </div>
        ))
      ) : (
        <div className={styles.noResultsMessage}>
          {getNoResultsMessage()}
        </div>
      )}
      {!!todos.length && <TodoFooter />}
    </div>
  );
};

export default TodoList;
