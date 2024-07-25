import styles from './checkbox.module.scss'
import {FC, InputHTMLAttributes} from "react";
import {CheckIcon} from "../../assets/icons/CheckIcon.tsx";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean
}
const Checkbox: FC<CheckboxProps> = ({isChecked = true}) => {
  return (
    <div className={styles.checkboxWrapper}>
      <div className={styles.iconWrapper}>
        <CheckIcon/>
      </div>
      {isChecked && <div className={styles.uncheckedWrapper}></div>}
    </div>
  );
};

export default Checkbox;