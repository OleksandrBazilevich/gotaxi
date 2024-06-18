import { FC } from "react";
import CarCardInfo from "../../../../entities/Car/CarCard/ui/CarCardInfo";
import FleetProfile from "../../../../entities/Fleet/ui/FleetProfile/FleetProfile";
import {
  CanIcon,
  DoorIcon,
  GearBoxIcon,
  SnowIcon
} from "../../../../shared/assets/icons";
import { Button } from "../../../../shared/ui/Button";
import Hr from "../../../../shared/ui/Hr/Hr";
import styles from "./CarInfo.module.scss";
import useWindowDimensions from "../../../../shared/lib/useWindowDimensions";
import ReservationDrawer from "../../../../features/Car/ReservationDrawer/ReservationDrawer";
import CarCardHeader from "../../../../entities/Car/CarCard/ui/CarCardHeader";

type GearBoxType = "automate" | "mechanic";
type ConditioningType = "A/C";

interface ICarInfo {
  numberOfDoors: number;
  consumption: number;
  gearboxType: GearBoxType;
  conditioningType: ConditioningType;
}

const CarInfo: FC<ICarInfo> = (props) => {
  const { width } = useWindowDimensions();
  const { conditioningType, consumption, gearboxType, numberOfDoors } = props;
  return (
    <div className={styles.profile}>
      <FleetProfile name="Warsaw Car Fleet" rating={4} />
      {width > 375 && <Hr />}

      <CarCardHeader
        name="Kia Optima"
        engineVolume={1.2}
        fuel="Gasoline/Gas"
        mileage={140000}
        year={2018}
      />
      <CarCardInfo
        name="Kia Optima"
        commisiom={0}
        deposit={0}
        engineVolume={1.2}
        fleetCommision={0}
        fuel="Gasoline/Gas"
        mileage={140000}
        rent={18}
        type="business"
        year={2018}
      />
      <ReservationDrawer cls={styles.BtnContainer}>
        <Button cls={styles.btn} fullWidth>
          Reserve
        </Button>
      </ReservationDrawer>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <DoorIcon />
          <div>{numberOfDoors} Doors</div>
        </div>
        <div className={styles.wrapper}>
          <CanIcon />
          <div>{consumption} L / 100 km</div>
        </div>
        <div className={styles.wrapper}>
          <GearBoxIcon />
          <div>{gearboxType}</div>
        </div>
        <div className={styles.wrapper}>
          <SnowIcon />
          <div>{conditioningType}</div>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
