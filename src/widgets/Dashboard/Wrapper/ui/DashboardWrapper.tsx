import { FC, PropsWithChildren } from "react";
import styles from "./DashboardWrapper.module.scss";

const DashboardWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default DashboardWrapper;
