import {
  ComfirmIcon,
  UploadIcon,
  WrongIcon
} from "../../../../../shared/assets/icons";
import { classNames } from "../../../../../shared/lib";
import Avatar from "../../../../../shared/ui/Avatar/Avatar";
import { Button } from "../../../../../shared/ui/Button";
import { Field } from "../../../../../shared/ui/Field";
import styles from "./BasicDetailsForm.module.scss";

const BasicDetailsForm = () => {
  const comfirmed = true;

  return (
    <form className={styles.form}>
      <div className={styles.wrapper}>
        <Avatar size={128} cls={styles.avatar} variant="square" />
        <div className={styles.container}>
          <p className={styles.title}>Profile image</p>
          <Button theme="primaryOutlined" cls={styles.btn}>
            <UploadIcon />
            Upload image
          </Button>
          <p className={styles.text}>
            * The image has to be 512x512 resolution and up to 5MB size.
          </p>
        </div>
      </div>
      <p className={styles.title}>Full name</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Name"
        value="Alexander"
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
      <Field placeholder="Last name" value="Karu" />
      <Field value="Valeriovich" />
      <Field placeholder="Password" value="" />
      <Button theme="outlined" cls={styles.btn}>
        Change & Confirm
      </Button>
      <p className={styles.text}>
        * To change the name of your company, in order to secure, you need to
        confirm it with your password.
      </p>
      <p className={styles.title}>Date of birth</p>
      <Field
        cls={classNames(styles.fieldWithIcon, {
          [styles.comfirmed]: comfirmed
        })}
        placeholder="Date"
        value="14/12/1992"
        Icon={comfirmed ? ComfirmIcon : WrongIcon}
        iconPosition="end"
      />
      <Button theme="outlined" cls={styles.btn}>
        Change & Confirm
      </Button>
      <p className={styles.text}>
        * To change the name of your company, in order to secure, you need to
        confirm it with your password.
      </p>
    </form>
  );
};

export default BasicDetailsForm;
