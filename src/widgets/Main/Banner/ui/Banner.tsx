import styles from "./Banner.module.scss";
import CarImage from "../../../../shared/assets/img/car.png";
import CarImage2 from "../../../../shared/assets/img/car2.png";
import CarImage3 from "../../../../shared/assets/img/car3.png";
import { Button } from "../../../../shared/ui/Button";
import { FC } from "react";

const Banner:FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>Rent a taxi car from verified fleets</h3>
          <p className={styles.text}>
            Rent a car quickly and effortlessly, and start earning today!
          </p>
          <div className={styles.wrapper}>
            <Button cls={styles.btn} theme="default">
              Choose a car
            </Button>
            <Button cls={styles.btn} theme="outlined">
              Rent out a car
            </Button>
          </div>
        </div>
        <div className={styles.container2}>
          <img className={styles.img2} src={CarImage2} />
        </div>
        <div className={styles.container2}>
          <img className={styles.img3} src={CarImage3} />
        </div>
      </div>
      <div className={styles.container}>
        <img className={styles.img} src={CarImage} />
      </div>
    </div>
  );
};

export default Banner;
