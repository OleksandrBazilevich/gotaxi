import { FC, PropsWithChildren, useEffect } from "react";
import styles from "./Modal.module.scss";
import { classNames } from "../../lib";
import { CloseIcon } from "../../assets/icons";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeIcon?: boolean;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  children,
  isOpen,
  onClose,
  closeIcon = true
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      onClick={handleOverlayClick}
      className={classNames(styles.overlay, { [styles.open]: isOpen })}
    >
      <div className={styles.content}>
        {closeIcon && <CloseIcon className={styles.close} onClick={onClose} />}
        {children}
      </div>
    </div>
  );
};

export default Modal;
