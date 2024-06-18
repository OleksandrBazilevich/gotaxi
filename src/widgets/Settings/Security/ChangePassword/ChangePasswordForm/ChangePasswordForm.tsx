import { Button } from "../../../../../shared/ui/Button";
import { Field } from "../../../../../shared/ui/Field";
import styles from "./ChangePasswordForm.module.scss";

const ChangePasswordForm = () => {
  return (
    <form className={styles.form}>
      <p className={styles.title}>Current password</p>
      <Field placeholder="Enter your current password" value="" />
      <p className={styles.title}>New password</p>
      <Field placeholder="Create new password" value="" />
      <p className={styles.title}>Repeat new password</p>
      <Field placeholder="Repeat new password" value="" />
      <Button theme="outlined" cls={styles.btn}>
        Change & Confirm
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
