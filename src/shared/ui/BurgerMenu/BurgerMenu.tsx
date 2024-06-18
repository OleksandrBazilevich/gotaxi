import React, { FC, useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { classNames } from "../../lib";

interface IBurgerMenuProps {
  cls?: string;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ cls = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames(styles.burgerMenu, { [styles.open]: isOpen }, [
        cls
      ])}
    >
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <nav className={styles.menu}></nav>
    </div>
  );
};

export default BurgerMenu;
