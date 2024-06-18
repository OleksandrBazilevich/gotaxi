import { MouseEvent, useState } from "react";
import { ComfirmIcon, EditIcon } from "../../../shared/assets/icons";
import { Button } from "../../../shared/ui/Button";
import Modal from "../../../shared/ui/Modal/Modal";
import styles from "./ComfirmReservation.module.scss";

const ComfirmReservation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} cls={styles.action}>
        <ComfirmIcon />
      </Button>
      <Modal closeIcon={false} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={styles.container}>
          <h4 className={styles.title}>Confirm reservation</h4>
          <p className={styles.description}>
            After clicking confirm, the driver will be delivered the message
            that on<span className={styles.highlight}> 20 May 2024 </span>at
            <span className={styles.highlight}> 14.00 </span>he or she need to
            get to the taxi fleet according to the address
            <span className={styles.highlight}> Warsaw, ul. Lekarska 52 </span>
            and bring a reserved car.
          </p>
          <div className={styles.details}>
            <div className={styles.detailsItem}>
              <span>Period</span>
              <span className={styles.detailsData}>
                20 May 2024 - 20 June 2024
              </span>
            </div>
            <div className={styles.detailsItem}>
              <span>Meeting time</span>
              <span className={styles.detailsData}>
                20 May 2024, 14.00 <EditIcon className={styles.detailsEdit} />
              </span>
            </div>
            <div className={styles.detailsItem}>
              <span>Payment</span>
              <span className={styles.detailsData}>Weekly</span>
            </div>
            <div className={styles.detailsItem}>
              <span>First deposit</span>
              <span className={styles.detailsData}>No deposit</span>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              onClick={() => setIsOpen(false)}
              cls={styles.btn}
              theme="primaryOutlined"
            >
              No, contact driver first
            </Button>
            <Button onClick={() => setIsOpen(false)} cls={styles.btn}>
              Yes, confirm
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ComfirmReservation;
