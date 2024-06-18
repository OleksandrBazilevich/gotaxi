import {
  ComfirmIcon,
  UploadIcon,
  WrongIcon
} from "../../../../../shared/assets/icons";
import { classNames } from "../../../../../shared/lib";
import Avatar from "../../../../../shared/ui/Avatar/Avatar";
import { Button } from "../../../../../shared/ui/Button";
import { Field } from "../../../../../shared/ui/Field";
import styles from "./DriverLicenseForm.module.scss";

const DriverLicenseForm = () => {
  const comfirmed = true;

  return (
    <form className={styles.form}>
      <p className={styles.title}>Upload your driver license image</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Uploaded & Verified"
        value=""
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
      <Button theme="outlined" cls={styles.btn}>
        Updade & Save
      </Button>
      <p className={styles.title}>Upload your driver license image</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Uploaded & Verified"
        value=""
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
      <p className={styles.title}>Release date</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Release date"
        value="14 May 2005"
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
      <p className={styles.title}>Valid until</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Valid until"
        value="28 August 2052"
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
      <p className={styles.title}>Release country</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Release country"
        value="Poland"
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
    </form>
  );
};

export default DriverLicenseForm;
