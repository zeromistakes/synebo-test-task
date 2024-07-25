import styles from './todoFooter.module.scss'
import {FC} from "react";

const TodoFooter: FC = () => {


  return (
    <div className={styles.footer}>
      <div className={styles.itemsLeft}>99 items left</div>
      <div className={styles.filtersWrapper}>
        <div className={styles.filterBtn}>All</div>
        <div className={styles.filterBtn}>Active</div>
        <div className={styles.filterBtn}>Completed</div>
      </div>
      <div className={styles.clearBtn}>Clear Completed</div>

    </div>
  );
};

export default TodoFooter;