import { FC } from "react";
import { LogoIcon } from "../../../../shared/assets/icons";
import { Button } from "../../../../shared/ui/Button";
import styles from "./AuthHeader.module.scss";

const AuthHeader:FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <div className={styles.container}>
        <span className={styles.text}>Dont have an account?</span>
        <Button cls={styles.btn}>Sign up</Button>
      </div>
    </header>
  );
};

export default AuthHeader;
