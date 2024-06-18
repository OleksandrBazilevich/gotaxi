import { FC } from "react";
import UserProfile from "../../../../entities/User/UserProfile/UserProfile";
import { classNames } from "../../../../shared/lib";
import styles from "./DriverPostsGalleryItem.module.scss";
import FallbackImage from "../../../../shared/assets/img/noImageCar.png";
import CarCardInfo, {
  CarClass
} from "../../../../entities/Car/CarCard/ui/CarCardInfo";
import { Button } from "../../../../shared/ui/Button";

export interface IDriverPostsGalleryItem {
  avatar: string;
  fleetName: string;
  fleetRating: number;
  img: string;
  name: string;
  year: number;
  fuel: string;
  mileage: number;
  rent: number;
  deposit: number;
  fleetCommision: number;
  commision: number;
  engineVolume: number;
  type: CarClass;
}

const DriverPostsGalleryItem: FC<IDriverPostsGalleryItem> = (props) => {
  const {
    avatar,
    fleetName,
    fleetRating,
    img,
    commision,
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
    <div className={classNames(styles.card, {}, [])}>
      <UserProfile img={avatar} name={fleetName} rating={fleetRating} />
      <div className={styles.imageContainer}>
        <img
          src={img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = FallbackImage;
          }}
        />
      </div>
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
            <span>
              {fleetCommision ? fleetCommision + "%" : "No commision"}
            </span>
          </div>
          <div className={styles.payment}>
            <div>Commision</div>
            <span>{commision ? commision + "%" : "No commision"}</span>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button cls={styles.btn} theme="primaryOutlined">
          Learn more
        </Button>
        <Button cls={styles.btn} theme="primary">
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default DriverPostsGalleryItem;
