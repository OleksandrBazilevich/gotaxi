import { ComfirmIcon, WrongIcon } from "../../../../../shared/assets/icons";
import { classNames } from "../../../../../shared/lib";
import { Button } from "../../../../../shared/ui/Button";
import { Field } from "../../../../../shared/ui/Field";
import OtpInputs from "../../../../../shared/ui/OtpInputs/OptInputs";
import styles from "./ChangeContactForm.module.scss";

const ChangeContactForm = () => {
  const comfirmed = false;

  return (
    <form className={styles.form}>
      <p className={styles.title}>Phone verification</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Phone number"
        value="+48 22 1234567"
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
      <Button theme="outlined" cls={styles.btn}>
        Change & Confirm
      </Button>
      <p className={styles.title}>Email verification</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Email"
        value="warsaw.car.fleet@gmail.com"
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
      <p className={styles.title}>Code from email</p>
      <OtpInputs />
      <Button theme="outlined" cls={styles.btn}>
        Send code
      </Button>
    </form>
  );
};

export default ChangeContactForm;
