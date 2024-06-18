import { FC } from "react";
import CarCard, {
  ICarCardProps
} from "../../../../entities/Car/CarCard/ui/CarCard";
import styles from "./CarList.module.scss";
import ReservationCard from "../../ReservationCard/ui/ReservationCard";

interface ICarListProps {
  cars: ICarCardProps[];
}

const CarList: FC<ICarListProps> = ({ cars }) => {
  return (
    <div className={styles.container}>
      {cars.map((car) => {
        return (
          <ReservationCard
            cls={styles.card}
            commisiom={car.commisiom}
            deposit={car.deposit}
            engineVolume={car.engineVolume}
            fleetCommision={car.fleetCommision}
            fuel={car.fuel}
            img={car.img}
            location={car.location}
            mileage={car.mileage}
            name={car.name}
            rent={car.rent}
            type={car.type}
            year={car.year}
          />
        );
      })}
    </div>
  );
};

export default CarList;
