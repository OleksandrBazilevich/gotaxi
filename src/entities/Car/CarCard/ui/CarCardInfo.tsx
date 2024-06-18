import { FC } from "react";
import styles from "./CarCard.module.scss";
import CarCardHeader from "./CarCardHeader";

export type CarClass = "economy" | "comfort" | "business";

export interface ICarCardInfoProps {
  name: string;
  year: number;
  fuel: string;
  mileage: number;
  rent: number;
  deposit: number;
  fleetCommision: number;
  commisiom: number;
  engineVolume: number;
  type: CarClass;
}

const CarCardInfo: FC<ICarCardInfoProps> = (props) => {
  const {
    commisiom,
    deposit,
    engineVolume,
    fleetCommision,
    fuel,
    mileage,
    name,
    rent,
    type,
    year
  } = props;
  return (
    <div>
      <div className={styles.payments}>
        <div className={styles.payment}>
          <div>Rent (per day)</div>
          <span>
            $
            {rent.toLocaleString("pl", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}
          </span>
        </div>
        <div className={styles.payment}>
          <div>Deposit</div>
          <span>{deposit ? "$" + deposit : "No deposit"}</span>
        </div>
        <div className={styles.payment}>
          <div>Fleet commision</div>
          <span>{fleetCommision ? fleetCommision + "%" : "No commision"}</span>
        </div>
        <div className={styles.payment}>
          <div>Commision</div>
          <span>{commisiom ? commisiom + "%" : "No commision"}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCardInfo;
