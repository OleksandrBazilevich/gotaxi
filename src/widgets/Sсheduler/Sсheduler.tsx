import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  getDate,
  isSameMonth,
  parseISO,
  getDay,
  getDaysInMonth,
  isWeekend,
  eachWeekendOfMonth,
  isToday,
  addDays
} from "date-fns";
import styles from "./Sсheduler.module.scss";
import { classNames } from "../../shared/lib";
import { Event } from "../../pages/CalendarPage/CalendarPage";
import { LeftIcon } from "../../shared/assets/icons";

interface SchedulerProps {
  events: Event[];
  minRowsNumber: number;
}

const Scheduler: React.FC<SchedulerProps> = ({ events, minRowsNumber }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const groupEventsById = (events: Event[]) => {
    return events.reduce(
      (acc, event) => {
        (acc[event.id] = acc[event.id] || []).push(event);
        return acc;
      },
      {} as { [key: string]: Event[] }
    );
  };

  const renderCalendar = () => {
    const monthEnd = endOfMonth(currentDate);
    const daysInMonth = getDate(monthEnd);

    const groupedEvents = groupEventsById(events);
    const rows: JSX.Element[] = [];

    Object.values(groupedEvents).forEach((eventGroup) => {
      const row: JSX.Element[] = [];

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        );
        const dayEvents = eventGroup.filter(
          (event) =>
            (isSameMonth(parseISO(event.startDate), currentDate) ||
              isSameMonth(parseISO(event.endDate), currentDate)) &&
            parseISO(event.startDate).getDate() <= day &&
            parseISO(event.endDate).getDate() >= day
        );

        if (dayEvents.length > 0) {
          const event = dayEvents[0];
          const eventStartDate = parseISO(event.startDate);
          const eventEndDate = parseISO(event.endDate);

          const eventStartDay = isSameMonth(eventStartDate, currentDate)
            ? eventStartDate.getDate()
            : 1;
          const eventEndDay = isSameMonth(eventEndDate, currentDate)
            ? eventEndDate.getDate()
            : daysInMonth;

          const eventDuration = eventEndDay - eventStartDay + 1;

          row.push(
            <td key={day} colSpan={eventDuration} className={styles.day}>
              <div className={styles.events}>
                <div
                  key={event.id}
                  style={{ background: event.color }}
                  className={styles.event}
                >
                  <div className={styles.eventTitle}>{event.title}</div>
                  <div className={styles.eventTime}>{event.time}</div>
                </div>
              </div>
            </td>
          );

          day += eventDuration - 1;
        } else {
          row.push(<td key={day} className={styles.day}></td>);
        }
      }

      rows.push(<tr key={rows.length}>{row}</tr>);
    });

    while (rows.length < minRowsNumber) {
      const emptyRow: JSX.Element[] = [];
      for (let day = 1; day <= daysInMonth; day++) {
        emptyRow.push(<td key={day} className={styles.day}></td>);
      }
      rows.push(<tr key={rows.length}>{emptyRow}</tr>);
    }

    return rows;
  };

  const renderHeader = () => {
    const days: React.ReactNode[] = [];
    const weekends = eachWeekendOfMonth(currentDate).map((weekend) =>
      getDate(weekend)
    );

    for (let i = 0; i < getDaysInMonth(currentDate); i++) {
      const day = format(addDays(startOfMonth(currentDate), i), "eee");
      days.push(
        <th
          key={i}
          className={classNames(styles.headerCell, {
            [styles.weekend]: weekends.includes(i + 1),
            [styles.today]: i + 1 === getDate(currentDate)
          })}
        >
          <div className={styles.headerCellTitle}>{i + 1}</div>
          <div className={styles.headerCellText}>{day}</div>
        </th>
      );
    }

    return <tr>{days}</tr>;
  };

  const nextMonth = addMonths(currentDate, 1);

  const today = new Date();

  const isCurrentMonthAndYear =
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  return (
    <div className={styles.scheduler}>
      <div className={styles.header}>
        <div className={styles.caption}>
          <h4 className={styles.title}>{format(currentDate, "MMMM yyy")}</h4>
          {!isCurrentMonthAndYear && (
            <LeftIcon
              className={styles.icon}
              onClick={() => handlePreviousMonth()}
            />
          )}
          <LeftIcon
            onClick={() => handleNextMonth()}
            className={classNames(styles.icon, {}, [styles.iconRight])}
          />
        </div>
        <div className={styles.nextMonth}>
          <span>{format(nextMonth, "MMMM")}</span>
        </div>
      </div>
      <div className={styles.shedulerWrapper}>
        <table className={styles.schedulerTable}>
          <thead>{renderHeader()}</thead>
          <tbody>{renderCalendar()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Scheduler;
