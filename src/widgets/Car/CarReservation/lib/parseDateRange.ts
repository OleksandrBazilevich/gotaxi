import { DateRange } from "react-day-picker";
import { getMonthIndex } from "../../../../features/Car/ReservationCalendar/lib/helpers";
import { isBefore, isSameDay, isWithinInterval, addDays } from "date-fns";

export const parseDateRange = (
  dateRangeString: string,
  month: Date,
  reserved: Date[],
  setSelected: (selected: DateRange | undefined) => void
) => {
  const [startDateString, endDateString] = dateRangeString.split(" - ");
  if (!startDateString || !endDateString) {
    setSelected(undefined);
    return;
  }

  const startDateParts = startDateString.split(" ");
  const endDateParts = endDateString.split(" ");

  if (startDateParts.length !== 3 || endDateParts.length !== 3) {
    setSelected(undefined);
    return;
  }

  const startDateDay = parseInt(startDateParts[0], 10);
  const startDateMonth = getMonthIndex(startDateParts[1]);
  const startDateYear = parseInt(startDateParts[2], 10);

  const endDateDay = parseInt(endDateParts[0], 10);
  const endDateMonth = getMonthIndex(endDateParts[1]);
  const endDateYear = parseInt(endDateParts[2], 10);

  if (startDateMonth < month.getMonth() || endDateMonth < month.getMonth()) {
    setSelected(undefined);
    return;
  }

  if (startDateDay >= 31 || endDateDay >= 31) {
    setSelected(undefined);
    return;
  }

  if (
    isNaN(startDateDay) ||
    isNaN(startDateMonth) ||
    isNaN(startDateYear) ||
    isNaN(endDateDay) ||
    isNaN(endDateMonth) ||
    isNaN(endDateYear)
  ) {
    setSelected(undefined);
    return;
  }

  if (endDateYear >= 2024 && startDateYear >= 2024) {
    const startDate = new Date(startDateYear, startDateMonth, startDateDay);
    const endDate = new Date(endDateYear, endDateMonth, endDateDay);

    if (!isBefore(startDate, endDate) && !isSameDay(startDate, endDate)) {
      setSelected(undefined);
      return;
    }

    if (
      reserved.some((date) =>
        isWithinInterval(date, {
          start: startDate,
          end: addDays(endDate, 1)
        })
      )
    ) {
      setSelected(undefined);
      return;
    } else {
      setSelected({ from: startDate, to: endDate });
    }
  }
};
