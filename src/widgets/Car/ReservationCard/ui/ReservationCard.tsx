import { FC } from "react";
import CarCard, {
  ICarCardProps
} from "../../../../entities/Car/CarCard/ui/CarCard";
import ReservationDrawer from "../../../../features/Car/ReservationDrawer/ReservationDrawer";
import { Button } from "../../../../shared/ui/Button";
import styles from "./ReservationCard.module.scss";

interface IReservationCardProos extends ICarCardProps {}

const ReservationCard: FC<IReservationCardProos> = (props) => {
  return (
    <CarCard {...props}>
      <ReservationDrawer cls={styles.container}>
        <Button cls={styles.btn}>Reserve</Button>
      </ReservationDrawer>
    </CarCard>
  );
};

export default ReservationCard;
