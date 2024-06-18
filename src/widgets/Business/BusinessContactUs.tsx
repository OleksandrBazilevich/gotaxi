import styles from "./BusinessContactUs.module.scss";
import PhoneImage from "../../shared/assets/img/phone.png";
import { Button } from "../../shared/ui/Button";

const BusinessContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <img src={PhoneImage} />
      <div className={styles.contactUsWrapper}>
        <h3>Still have questions?</h3>
        <p>
          Submit an application or call us, and we will contact you within 10
          minutes.
        </p>
        <div className={styles.contactUsBtnWrapper}>
          <Button cls={styles.contactUsBtn} theme="primary">
            Contact us
          </Button>
          <Button cls={styles.contactUsBtn} theme="primaryOutlined">
            +48 22 1234567
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessContactUs;
