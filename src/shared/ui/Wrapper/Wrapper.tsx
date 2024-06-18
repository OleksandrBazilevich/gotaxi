import { FC, PropsWithChildren } from "react";
import styles from "./Wrapper.module.scss";
import { classNames } from "../../lib";

interface IWrapper {
  cls?: string;
}

const Wrapper: FC<PropsWithChildren<IWrapper>> = ({ children, cls = "" }) => {
  return (
    <div className={classNames(styles.wrapper, {}, [cls])}>{children}</div>
  );
};

export default Wrapper;
