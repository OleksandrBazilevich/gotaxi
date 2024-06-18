import { DayContentProps } from "react-day-picker";
import styles from "./ReservationCalendar.module.scss";
import { classNames } from "../../../../shared/lib";

export function CustomDayContent(props: DayContentProps) {
  const { date, activeModifiers } = props;
  return (
    <div
      className={classNames(
        styles.day,
        {
          [styles.selected]: activeModifiers.selected || false,
          [styles.disabled]: activeModifiers.disabled || false,
          [styles.outside]: activeModifiers.outside || false
        },
        []
      )}
    >
      {date.getDate()}
    </div>
  );
}
