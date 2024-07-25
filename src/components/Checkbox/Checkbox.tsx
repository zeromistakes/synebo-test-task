import styles from './checkbox.module.scss'
import {FC, InputHTMLAttributes} from "react";
import {CheckIcon} from "../../assets/icons/CheckIcon.tsx";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  onClick: () => void;
}
const Checkbox: FC<CheckboxProps> = ({isChecked, onClick}) => {
  return (
    <div className={styles.checkboxWrapper} onClick={onClick}>
      <div className={styles.iconWrapper}>
        <CheckIcon/>
      </div>
      {!isChecked && <div className={styles.uncheckedWrapper}></div>}
    </div>
  );
};

export default Checkbox;