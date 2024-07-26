import React, { useState, useRef, useEffect } from 'react';
import styles from './todoList.module.scss';
import TodoListItem from '../TodoListItem/TodoListItem.tsx';
import TodoFooter from '../TodoFooter/TodoFooter.tsx';
import useTodoStore from '../../store/useTodoStore.ts';

const TodoList: React.FC = () => {
  const { todos, filter, reorderTodos } = useTodoStore();
  const [draggingItemIndex, setDraggingItemIndex] = useState<number | null>(null);
  const draggingItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (draggingItemIndex !== null) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [draggingItemIndex]);

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

  const handleDragStart = (index: number, event: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setDraggingItemIndex(index);
    if (event.type === 'touchstart' && event.target instanceof HTMLElement) {
      draggingItemRef.current = event.target.closest(`.${styles.dndWrapper}`);
    }
  };

  const handleDragOver = (index: number, event: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (draggingItemIndex === null || draggingItemIndex === index) return;

    const updatedTodos = [...filteredTodos];
    const [draggedItem] = updatedTodos.splice(draggingItemIndex, 1);
    updatedTodos.splice(index, 0, draggedItem);

    reorderTodos(draggingItemIndex, index);
    setDraggingItemIndex(index);
  };

  const handleDrop = () => {
    setDraggingItemIndex(null);
    draggingItemRef.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!draggingItemRef.current) return;

    const touch = event.touches[0];
    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    if (targetElement) {
      const targetItem = targetElement.closest(`.${styles.dndWrapper}`);
      if (targetItem && targetItem !== draggingItemRef.current) {
        const index = Array.from(targetItem.parentNode?.children || []).indexOf(targetItem);
        handleDragOver(index, event);
      }
    }
  };

  const getNoResultsMessage = () => {
    const hasTodos = todos.length > 0;

    switch (filter) {
      case 'active':
        return hasTodos ? 'You have nothing TO DO :)' : 'No todos, try to plan something';
      case 'completed':
        return hasTodos ? 'No completed todos, try TO DO something :)' : 'No todos, try to plan something';
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
            className={`${styles.dndWrapper} ${draggingItemIndex === index ? styles.dragging : ''}`}
            key={todo.id}
            draggable
            onDragStart={(e) => handleDragStart(index, e)}
            onDragOver={(e) => handleDragOver(index, e)}
            onDrop={handleDrop}
            onTouchStart={(e) => handleDragStart(index, e)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDrop}
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
