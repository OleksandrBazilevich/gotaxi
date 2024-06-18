import { FC } from "react";
import styles from "./CarCard.module.scss";

interface ICarCardHeaderProps {
  name: string;
  year: number;
  fuel: string;
  mileage: number;
  engineVolume: number;
}

const CarCardHeader: FC<ICarCardHeaderProps> = ({
  engineVolume,
  fuel,
  mileage,
  name,
  year
}) => {
  return (
    <div>
      <div className={styles.name}>
        {name}
        <span className={styles.year}>{year}</span>
      </div>
      <div className={styles.description}>
        <span>{fuel},</span>
        <span>{engineVolume} L,</span>
        <span>{mileage.toLocaleString("pl")} km</span>
      </div>
    </div>
  );
};

export default CarCardHeader;
