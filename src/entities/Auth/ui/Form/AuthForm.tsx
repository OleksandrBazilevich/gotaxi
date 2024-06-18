import { FC, FormHTMLAttributes, PropsWithChildren } from "react";
import styles from "./AuthForm.module.scss";

interface IAuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
}

const AuthForm: FC<PropsWithChildren<IAuthFormProps>> = ({
  children,
  title,
  ...props
}) => {
  return (
    <form {...props} className={styles.wrapper}>
      <div className={styles.form}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </form>
  );
};

export default AuthForm;
