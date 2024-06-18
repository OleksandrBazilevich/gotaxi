import { FC, PropsWithChildren } from "react";
import styles from "./Checkbox.module.scss";
import { classNames } from "../../lib";

interface ICheckboxProps {
  checked?: boolean;
  onChange?: () => void;
  cls?: string;
}

const Checkbox: FC<PropsWithChildren<ICheckboxProps>> = ({
  children,
  checked,
  onChange,
  cls = ""
}) => {
  return (
    <div className={classNames(styles.checkboxContainer, {}, [cls])}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxCustom}></span>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
