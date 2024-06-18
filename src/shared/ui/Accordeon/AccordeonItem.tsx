import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./Accordeon.module.scss";
import { LessIcon, MoreIcon } from "../../assets/icons";
import { classNames } from "../../lib";

export interface IAccordeonData {
  title: string;
  content: React.ReactNode;
}

export interface IAccordeonItemProps {
  title: string;
  cls?: string;
}

const AccordeonItem: FC<PropsWithChildren<IAccordeonItemProps>> = ({
  title,
  cls = "",
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className={classNames(styles.accordeonItem, {}, [cls])}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={styles.title}>{title}</h3>
        <div>
          {isOpen ? (
            <LessIcon className={styles.icon} />
          ) : (
            <MoreIcon className={styles.icon} />
          )}
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={classNames(styles.description, { [styles.show]: isOpen })}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordeonItem;
