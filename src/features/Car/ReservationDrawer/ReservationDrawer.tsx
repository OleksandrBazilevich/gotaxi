import { FC, PropsWithChildren, useState } from "react";
import { Button } from "../../../shared/ui/Button";
import Drawer from "../../../shared/ui/Drawer/Drawer";
import CarReservation from "../../../widgets/Car/CarReservation/ui/CarReservation";
import styles from "./ReservationDrawer.module.scss";

interface IReservationDrawerProps {
  cls?: string;
}

const ReservationDrawer: FC<PropsWithChildren<IReservationDrawerProps>> = ({
  children,
  cls
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer
        isOpen={isOpen}
        title={"Car reservation"}
        description="All cars are placed on the map, so you can easily find any of them nearby you."
        anchor="bottom"
        onClose={() => setIsOpen(false)}
      >
        <CarReservation />
      </Drawer>
      <div className={cls} onClick={() => setIsOpen(true)}>
        {children}
      </div>
    </>
  );
};

export default ReservationDrawer;
