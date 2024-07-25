import styles from './todoHeader.module.scss'
import {FC} from "react";
import {MoonIcon} from "../../assets/icons/MoonIcon.tsx";
import {SunIcon} from "../../assets/icons/SunIcon.tsx";
import useTodoStore from "../../store/useTodoStore.ts";

const TodoHeader: FC = () => {

  const {theme, setTheme} = useTodoStore();
  const toggleTheme = () => {
    setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT');
    console.log(theme)
  };


  return (
    <header className={styles.header}>
      <h1 className={styles.headerTxt}>T O D O</h1>
      <div className={styles.themeIconContainer} onClick={toggleTheme}>
        {theme === 'LIGHT' ? <MoonIcon/> : <SunIcon/>}
      </div>
    </header>
  );
};

export default TodoHeader;