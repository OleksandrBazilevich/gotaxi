import { ComfirmIcon, WrongIcon } from "../../../../../../shared/assets/icons";
import { classNames } from "../../../../../../shared/lib";
import { Field } from "../../../../../../shared/ui";
import styles from "./VATForm.module.scss";

const VATForm = () => {
  const comfirmed = true;
  return (
    <form className={styles.form}>
      <p className={styles.title}>Enter your NIP/VAT number</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Company name"
        value="Warshaw Car Fleet"
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
    </form>
  );
};

export default VATForm;
