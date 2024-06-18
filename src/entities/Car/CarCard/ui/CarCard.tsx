import { FC, PropsWithChildren } from "react";
import styles from "./CarCard.module.scss";
import { MapIcon } from "../../../../shared/assets/icons";
import { Button } from "../../../../shared/ui/Button";
import FallbackImage from "../../../../shared/assets/img/noImageCar.png";
import CarCardInfo, { ICarCardInfoProps } from "./CarCardInfo";
import { classNames } from "../../../../shared/lib";
import Drawer from "../../../../shared/ui/Drawer/Drawer";
import CarReservation from "../../../../widgets/Car/CarReservation/ui/CarReservation";
import CarCardHeader from "./CarCardHeader";
import { useNavigate } from "react-router-dom";

export interface ICarCardProps extends ICarCardInfoProps {
  location: string;
  img: string;
  cls?: string;
}

const CarCard: FC<PropsWithChildren<ICarCardProps>> = (props) => {
  const {
    location,
    name,
    year,
    fuel,
    mileage,
    engineVolume,
    commisiom,
    deposit,
    fleetCommision,
    rent,
    img,
    type,
    cls = "",
    children
  } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className={classNames(styles.card, {}, [cls])}>
        <div className={styles.location}>
          <MapIcon className={styles.icon} />
          {location}
        </div>
        <div className={styles.imageContainer}>
          <img
            src={img}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = FallbackImage;
            }}
          />
        </div>
        <CarCardHeader
          engineVolume={engineVolume}
          fuel={fuel}
          mileage={mileage}
          name={name}
          year={year}
        />
        <CarCardInfo
          commisiom={commisiom}
          deposit={deposit}
          engineVolume={engineVolume}
          fleetCommision={fleetCommision}
          fuel={fuel}
          mileage={mileage}
          name={name}
          rent={rent}
          type={type}
          year={year}
        />
        <div className={styles.buttons}>
          <Button
            onClick={() => navigate("/car/1", { preventScrollReset: false })}
            cls={styles.btn}
            theme="primaryOutlined"
          >
            Learn more
          </Button>
          {children}
        </div>
      </div>
    </>
  );
};

export default CarCard;
