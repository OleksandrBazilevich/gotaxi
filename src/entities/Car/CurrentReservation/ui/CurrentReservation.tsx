import { FC } from "react";
import FallbackImage from "../../../../shared/assets/img/noImageCar.png";
import styles from "./CurrentReservation.module.scss";
import { differenceInDays, format, intervalToDuration } from "date-fns";
import { Button } from "../../../../shared/ui";
import { classNames } from "../../../../shared/lib";

interface ICurrentReservationProps {
  img?: string;
  onClick?: () => void;
  show: boolean;
  engineVolume: number;
  fuel: string;
  mileage: number;
  name: string;
  year: number;
  rent: number;
  period: {
    start: Date;
    end: Date;
  };
  cls?: string;
}

const CurrentReservation: FC<ICurrentReservationProps> = ({
  img,
  engineVolume,
  fuel,
  mileage,
  name,
  year,
  period,
  rent,
  cls = "",
  show
}) => {
  return (
    <>
      <div className={classNames(styles.card, { [styles.show]: show }, [cls])}>
        <div className={styles.head}>
          <div className={styles.header}>
            <div className={styles.dot} />
            Current reservation
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
        </div>
        <div className={styles.body}>
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
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div>Rent (weekly)</div>
              <span>
                $
                {rent.toLocaleString("pl", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                })}
              </span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div>Period</div>
            <span>{differenceInDays(period.end, period.start)} day</span>
          </div>
          <div className={styles.infoItem}>
            <div>Start date</div>
            <span>{format(period.start, "dd MMM y, kk.mm")}</span>
          </div>
          <div className={styles.infoItem}>
            <div>End date</div>
            <span>{format(period.end, "dd MMM y, kk.mm")}</span>
          </div>
          <Button cls={styles.btn} theme="primaryOutlined">
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
};

export default CurrentReservation;
