import { Button } from "../../../../shared/ui/Button";
import styles from "./ContactUs.module.scss";
import ContactUsCarImage from "../../../../shared/assets/img/contactUsCar.png";
import ContactUsCarImage2 from "../../../../shared/assets/img/contactUsCar2.png";
import ContactUsCarImage3 from "../../../../shared/assets/img/contactUsCar3.png";

import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.container}>
        <img className={styles.img} src={ContactUsCarImage} />
        <img className={styles.img2} src={ContactUsCarImage2} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Get Started Today</h3>
        <p className={styles.text}>
          Leave your name and phone number, and we'll call you to help choose
          the perfect car for your needs.
        </p>
        <ContactUsForm />
        <div className={styles.container2}>
          <img className={styles.img3} src={ContactUsCarImage3} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
