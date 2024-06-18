import { format } from "date-fns";
import { CaptionProps, useNavigation } from "react-day-picker";

import styles from "./ReservationCalendar.module.scss";
import { LeftIcon } from "../../../../shared/assets/icons";
import { classNames } from "../../../../shared/lib";

const CustomCaption = (props: CaptionProps) => {
  const { goToMonth, nextMonth, previousMonth, currentMonth } = useNavigation();
  const today = new Date();
  const isCurrentMonthAndYear =
    currentMonth.getMonth() === today.getMonth() &&
    currentMonth.getFullYear() === today.getFullYear();

  return (
    <div className={styles.caption}>
      <h4 className={styles.title}>{format(props.displayMonth, "MMM yyy")}</h4>
      {!isCurrentMonthAndYear && previousMonth && (
        <LeftIcon
          className={styles.icon}
          onClick={() => previousMonth && goToMonth(previousMonth)}
        />
      )}
      <LeftIcon
        onClick={() => nextMonth && goToMonth(nextMonth)}
        className={classNames(styles.icon, {}, [styles.iconRight])}
      />
    </div>
  );
};

export default CustomCaption;
