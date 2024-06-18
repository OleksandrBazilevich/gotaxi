import { FC, PropsWithChildren } from "react";
import AccordeonItem, { IAccordeonItemProps } from "./AccordeonItem";
import { classNames } from "../../lib";
import styles from "./Accordeon.module.scss";

interface IAccordeonProps {
  cls?: string;
}

const Accordeon: FC<PropsWithChildren<IAccordeonProps>> = ({
  children,
  cls = ""
}) => {
  return (
    <div className={classNames(styles.accoreon, {}, [cls])}>{children}</div>
  );
};

export default Accordeon;
