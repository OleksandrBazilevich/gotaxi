import styles from "./CarReservation.module.scss";
import CarImage from "../../../../shared/assets/img/galleryCar.png";
import { Field } from "../../../../shared/ui/Field";
import { CalendarIcon } from "../../../../shared/assets/icons";
import { ChangeEvent, useState } from "react";
import Hr from "../../../../shared/ui/Hr/Hr";
import { Button } from "../../../../shared/ui/Button";
import { DateRange, DayPicker } from "react-day-picker";
import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  getDaysInMonth,
  interval,
  intervalToDuration,
  isAfter,
  isBefore,
  isSameDay,
  isWithinInterval,
  startOfMonth,
  startOfWeek,
  subDays
} from "date-fns";
import "react-day-picker/dist/style.css";
import { classNames } from "../../../../shared/lib";
import {
  countReservedDaysInCurrentMonth,
  countSelectedDays,
  getMonthIndex
} from "../../../../features/Car/ReservationCalendar/lib/helpers";
import ReservationCalendar from "../../../../features/Car/ReservationCalendar/ui/ReservationCalendar";
import { parseDateRange } from "../lib/parseDateRange";
import CarCardHeader from "../../../../entities/Car/CarCard/ui/CarCardHeader";
import { useNavigate } from "react-router-dom";

export type CalendarMode = "days" | "weeks" | "months";

const CarReservation = () => {
  const initialRange: DateRange = {
    from: addDays(new Date(), 1),
    to: addDays(new Date(), 4)
  };
  const navigate = useNavigate();
  const [contactNumber, setContactNumber] = useState("");
  const [calendarMode, setCalendarMode] = useState<CalendarMode>("days");
  const [dateInputValue, setDateInputValue] = useState(
    `${format(initialRange.from!, "dd MMM y")} - ${format(initialRange.to!, "dd MMM y")}`
  );
  const [month, setMonth] = useState(new Date());
  const [selected, setSelected] = useState<DateRange | undefined>(initialRange);
  const [reserved, setReserved] = useState<Date[]>([
    addDays(new Date(), 5),
    addDays(new Date(), 7),
    addDays(new Date(), 9)
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateInputValue(e.target.value);
    parseDateRange(e.target.value, month, reserved, setSelected);
  };

  const handleClick = () => {
    setShowModal(false);
    navigate("/", { preventScrollReset: true });
  };

  return (
    <div className={styles.carReservation}>
      <div
        className={classNames(styles.modal, {
          [styles.showModal]: showModal
        })}
      >
        <div className={styles.modalContent}>
          <h3 className={styles.modalTitle}>Congratulations!</h3>
          <p className={styles.modalDescription}>
            Your reservation was created. As soon as car fleet confirm it, you
            will be notified in your account.
          </p>
          <Button onClick={handleClick} cls={styles.modalButton}>
            Check reservation status
          </Button>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.carInfo}>
          <img className={styles.img} src={CarImage} />
          <div className={styles.container}>
            <CarCardHeader
              engineVolume={1.2}
              fuel="Gasoline/Gas"
              mileage={140000}
              name="Kia Optima"
              year={2018}
            />
            <div className={styles.rent}>$18,00 / day</div>
          </div>
        </div>
        <div className={styles.reservationDetails}>
          <p className={styles.title}>Reservation details</p>
          <Field
            placeholder="19 May 2024 - 28 May 2024"
            value={dateInputValue}
            onChange={(e) => handleChange(e)}
            Icon={CalendarIcon}
            iconPosition="end"
          />
          <Field
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Contact phone"
          />
        </div>
        <div className={styles.finalDetails}>
          <p className={styles.title}>Final details</p>
          <div className={styles.detailsItem}>
            <div className={styles.name}>Days reserved</div>
            <div className={styles.value}>{countSelectedDays(selected)}</div>
          </div>
          <div className={styles.detailsItem}>
            <div className={styles.name}>Reservation price</div>
            <div className={styles.value}>$162</div>
          </div>
          <div className={styles.detailsItem}>
            <div className={styles.name}>Service comission (5%)</div>
            <div className={styles.value}>5%</div>
          </div>
          <div className={styles.detailsItem}>
            <div className={styles.name}>Your bonus</div>
            <div className={styles.value}>-10% first 2 days</div>
          </div>
          <div className={styles.detailsItem}>
            <div className={styles.name}>Deposit</div>
            <div className={styles.value}>-</div>
          </div>
          <Hr />
          <div className={styles.detailsItem}>
            <div className={styles.name}>Overall price</div>
            <div className={styles.value}>$170.01</div>
          </div>
        </div>
        <Button onClick={() => setShowModal(true)} fullWidth>
          Reserve
        </Button>
      </div>
      <div className={styles.calendarContainer}>
        <p className={styles.title}>Reservation calendar for Kia Optima</p>
        <div className={styles.calendarStats}>
          <div className={styles.calendarStatItem}>
            <h4>{countSelectedDays(selected)}</h4>
            <span>Your selected days</span>
          </div>
          <div className={styles.calendarStatItem}>
            <h4>
              {getDaysInMonth(month) -
                countReservedDaysInCurrentMonth(reserved, month)}
            </h4>
            <span>Days available this month</span>
          </div>
          <div className={styles.calendarStatItem}>
            <h4>$249</h4>
            <span>AVG Earnings per week</span>
          </div>
          <div className={styles.calendarStatItem}>
            <h4>290</h4>
            <span>Total reservations</span>
          </div>
        </div>
        <div className={styles.calendarWrapper}>
          <div className={styles.tabs}>
            <Button
              theme={calendarMode === "days" ? "inverted" : "outlined"}
              cls={classNames(styles.btn, {}, [])}
              onClick={() => setCalendarMode("days")}
            >
              Days
            </Button>
            <Button
              theme={calendarMode === "weeks" ? "inverted" : "outlined"}
              cls={classNames(styles.btn, {}, [])}
              onClick={() => setCalendarMode("weeks")}
            >
              Weeks
            </Button>
            <Button
              theme={calendarMode === "months" ? "inverted" : "outlined"}
              cls={classNames(styles.btn, {}, [])}
              onClick={() => setCalendarMode("months")}
            >
              Months
            </Button>
          </div>
          <ReservationCalendar
            calendarMode={calendarMode}
            month={month}
            reserved={reserved}
            selected={selected}
            setSelected={setSelected}
            setDateInputValue={setDateInputValue}
            setMonth={setMonth}
          />
        </div>
      </div>
    </div>
  );
};

export default CarReservation;
