import { FC, PropsWithChildren } from "react";
import { AuthHeader } from "../Header";

import styles from "./AuthLayout.module.scss";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <AuthHeader />
      {children}
    </div>
  );
};

export default AuthLayout;
