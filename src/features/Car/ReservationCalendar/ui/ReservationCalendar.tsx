import {
  addDays,
  format,
  isBefore,
  isSameDay,
  isWithinInterval,
  intervalToDuration,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth
} from "date-fns";
import { useState, ChangeEvent, FC } from "react";
import { DateRange, DayPicker } from "react-day-picker";

import styles from "./ReservationCalendar.module.scss";
import { CalendarMode } from "../../../../widgets/Car/CarReservation/ui/CarReservation";
import CustomCaption from "./CustomCaption";
import { CustomDayContent } from "./CustomDayContent";

interface IReservationCalendarProps {
  calendarMode: CalendarMode;
  setDateInputValue: (value: string) => void;
  month: Date;
  setMonth: (month: Date) => void;
  selected: DateRange | undefined;
  setSelected: (selected: DateRange | undefined) => void;
  reserved: Date[];
}

const ReservationCalendar: FC<IReservationCalendarProps> = ({
  calendarMode,
  setDateInputValue,
  month,
  setMonth,
  reserved,
  selected,
  setSelected
}) => {
  const handleSelect = (range: DateRange | undefined) => {
    if (calendarMode !== "days") return;
    if (!range) {
      setDateInputValue("");
      setSelected(undefined);
      return;
    }

    const { from, to } = range;

    if (from!.getMonth() < month.getMonth()) {
      setDateInputValue("");
      setSelected(undefined);
      return;
    }

    if (!from || !to) {
      setSelected(range);
      return;
    }

    if (
      reserved.some((date) =>
        isWithinInterval(date, {
          start: from,
          end: addDays(to, 1)
        })
      )
    ) {
      setDateInputValue("");
      setSelected(undefined);
      return;
    } else {
      setSelected({ from, to });
      setDateInputValue(
        `${format(from, "dd MMM y")} - ${format(to, "dd MMM y")}`
      );
    }
  };

  return (
    <DayPicker
      disabled={reserved}
      month={month}
      mode={"range"}
      fromYear={2024}
      selected={selected}
      onSelect={handleSelect}
      classNames={{ row: styles.row }}
      onMonthChange={(month) => setMonth(month)}
      styles={{ day: { display: "flex", alignItems: "center" } }}
      onDayClick={(day, modifiers) => {
        if (calendarMode === "weeks") {
          if (modifiers.selected) {
            setSelected(undefined);
            setDateInputValue("");
            return;
          }
          if (
            !reserved.some((date) =>
              isWithinInterval(date, {
                start: startOfWeek(day),
                end: addDays(endOfWeek(day), 1)
              })
            )
          ) {
            setSelected({
              from: startOfWeek(day),
              to: endOfWeek(day)
            });
            setDateInputValue(
              `${format(startOfWeek(day), "dd MMM y")} - ${format(endOfWeek(day), "dd MMM y")}`
            );
            return;
          } else {
            setSelected(undefined);
            setDateInputValue("");
            return;
          }
        }

        if (calendarMode === "months") {
          if (modifiers.selected) {
            setSelected(undefined);
            setDateInputValue("");
            return;
          }
          if (
            !reserved.some((date) =>
              isWithinInterval(date, {
                start: startOfMonth(day),
                end: addDays(endOfMonth(day), 1)
              })
            )
          ) {
            setSelected({
              from: startOfMonth(day),
              to: endOfMonth(day)
            });
            setDateInputValue(
              `${format(startOfMonth(day), "dd MMM y")} - ${format(endOfMonth(day), "dd MMM y")}`
            );
            return;
          } else {
            setSelected(undefined);
            setDateInputValue("");
            return;
          }
        }
      }}
      components={{
        Caption: CustomCaption,
        DayContent: CustomDayContent
      }}
      hideHead
      showOutsideDays
    />
  );
};

export default ReservationCalendar;
