import { FC, PropsWithChildren } from "react";

import styles from "./AuthLayout.module.scss";
import AuthHeader from "../../Header/ui/AuthHeader";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <AuthHeader />
      {children}
    </div>
  );
};

export default AuthLayout;
