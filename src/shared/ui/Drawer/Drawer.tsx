import { FC, PropsWithChildren, useEffect } from "react";
import styles from "./Drawer.module.scss";
import { classNames } from "../../lib";
import { CloseIcon } from "../../assets/icons";

type DrawerAnchor = "right" | "bottom";

interface IDrawer {
  title: string;
  description?: string;
  isOpen: boolean;
  anchor?: DrawerAnchor;
  onClose: () => void;
}

const Drawer: FC<PropsWithChildren<IDrawer>> = ({
  children,
  title,
  anchor = "right",
  isOpen,
  description,
  onClose
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  return (
    <>
      <div
        className={classNames(styles.overlay, { [styles.open]: isOpen })}
        onClick={onClose}
      />
      <div
        className={classNames(styles.drawer, { [styles.open]: isOpen }, [
          styles[anchor]
        ])}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <CloseIcon onClick={onClose} className={styles.icon} />
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </>
  );
};

export default Drawer;
