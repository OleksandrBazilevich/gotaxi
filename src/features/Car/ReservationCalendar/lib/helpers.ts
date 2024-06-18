import { intervalToDuration } from "date-fns";
import { DateRange } from "react-day-picker";

export const countSelectedDays = (selected: DateRange | undefined) => {
  if (selected === undefined) return 0;

  if (selected.to === undefined) return 1;
  if (selected.from === undefined) return 1;

  if (
    intervalToDuration({ start: selected.from, end: selected.to }).days ===
    undefined
  )
    return 1;
  return (
    intervalToDuration({ start: selected.from, end: selected.to }).days! + 1
  );
};

export const countReservedDaysInCurrentMonth = (
  disabled: Date[],
  month: Date
) => {
  return disabled.reduce((uniqueDays, date) => {
    if (date.getMonth() === month.getMonth()) {
      uniqueDays.add(date.getDate());
    }
    return uniqueDays;
  }, new Set<number>()).size;
};

export const getMonthIndex = (monthName: string) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return monthNames.indexOf(monthName);
};

