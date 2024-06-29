import { FC } from "react";
import AuthForm from "../../../../entities/Auth/ui/Form/AuthForm";
import AppLink from "../../../../shared/ui/AppLink/AppLink";
import { Button } from "../../../../shared/ui/Button";
import styles from "./RegisterForm.module.scss";

const RegisterResult: FC = () => {
  return (
    <div className={styles.authWrapper}>
      <AuthForm title="Your request was sent!">
        <p className={styles.text}>
          Thank you for your request. We will contact you as soon as possible
        </p>
        <Button fullWidth>Send</Button>
      </AuthForm>
      <div className={styles.link}>
        <span>
          Already have an account? <AppLink to={"/"}>Log in</AppLink>
        </span>
      </div>
    </div>
  );
};

export default RegisterResult;
