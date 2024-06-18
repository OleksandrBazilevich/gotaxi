import { createColumnHelper } from "@tanstack/react-table";
import styles from "./DriverDashboardDataTable.module.scss";

import Img from "../../../../shared/assets/img/galleryCar.png";
import Badge, { BadgeThemes } from "../../../../shared/ui/Badge/Badge";
import {
  TableSortIcon,
  ArrowLeftIcon,
  EditIcon,
  CancelIcon,
  UploadIcon,
  DetailsIcon
} from "../../../../shared/assets/icons";
import { classNames } from "../../../../shared/lib";
import { Button } from "../../../../shared/ui/Button";
import { addDays, differenceInDays, format } from "date-fns";

export interface ICar {
  name: string;
  img: string;
  numberPlate: string;
}

type IStatus = "active" | "ended" | "canceled";

const getBadgeThemeAndTitleByStatus = (status: IStatus) => {
  let theme: BadgeThemes;
  let title;

  switch (status) {
    case "active":
      theme = "positive";
      title = "Active";
      break;
    case "ended":
      theme = "negative";
      title = "Ended";
      break;
    case "canceled":
      theme = "default";
      title = "Canceled";
      break;
    default:
      theme = "default";
      title = "";
      break;
  }

  return {
    theme,
    title
  };
};

interface IDashboardTableData {
  car: ICar;
  status: IStatus;
  period: {
    start: Date;
    end: Date;
  };
  totalSpent: number;
}

export const defaultData: IDashboardTableData[] = [
  {
    car: { img: Img, name: "Toyota Camry", numberPlate: "P0665CS" },
    status: "active",
    period: {
      start: new Date(),
      end: addDays(new Date(), 2)
    },
    totalSpent: 18
  },
  {
    car: { img: Img, name: "Toyota Camry", numberPlate: "P0665CS" },
    status: "canceled",
    period: {
      start: new Date(),
      end: addDays(new Date(), 2)
    },
    totalSpent: 18
  },
  {
    car: { img: Img, name: "Toyota Camry", numberPlate: "P0665CS" },
    status: "ended",
    period: {
      start: new Date(),
      end: addDays(new Date(), 2)
    },
    totalSpent: 18
  }
];

const columnHelper = createColumnHelper<IDashboardTableData>();

export const columns = [
  columnHelper.display({
    id: "number",
    header: ({ column }) => {
      return (
        <div className={styles.header}>
          <span className={styles.title}>№</span>
        </div>
      );
    },
    cell: (props) => <div className={styles.text}>{props.row.index + 1}</div>
  }),
  columnHelper.accessor((row) => row.car.name, {
    id: "Car",
    header: ({ column, table }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Car</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.carInfo}>
        <img className={styles.img} src={info.row.original.car.img} />
        <div className={classNames(styles.carInfoContainer)}>
          <h4
            className={classNames("", {
              [styles.canceled]: info.row.original.status === "canceled"
            })}
          >
            {info.row.original.car.name}
          </h4>
          <p>{info.row.original.car.numberPlate}</p>
        </div>
      </div>
    )
  }),

  columnHelper.accessor("status", {
    id: "Status",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Status</span>
        </div>
      );
    },
    cell: (info) => (
      <Badge theme={getBadgeThemeAndTitleByStatus(info.getValue()).theme}>
        {getBadgeThemeAndTitleByStatus(info.getValue()).title}
      </Badge>
    )
  }),
  columnHelper.accessor("period", {
    id: "Period",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Period</span>
        </div>
      );
    },
    cell: (info) => (
      <div
        className={classNames(styles.text, {
          [styles.canceled]: info.row.original.status === "canceled"
        })}
      >
        {format(info.row.original.period.start, "dd MMMM")} -{" "}
        {format(info.row.original.period.end, "dd MMMM")}
      </div>
    ),
    sortingFn: (a, b) => {
      return (
        differenceInDays(a.original.period.start, a.original.period.end) -
        differenceInDays(b.original.period.start, b.original.period.end)
      );
    }
  }),

  columnHelper.accessor("totalSpent", {
    id: "totalSpent",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Total spent</span>
        </div>
      );
    },
    cell: (info) => (
      <span
        className={classNames(styles.price, {
          [styles.canceled]: info.row.original.status === "canceled"
        })}
      >
        ${info.getValue().toFixed(2)}
      </span>
    )
  }),

  columnHelper.display({
    id: "actions",
    cell: (props) => (
      <div className={styles.actionsContainer}>
        <Button theme={"default"} cls={styles.actions}>
          <DetailsIcon />
        </Button>
        <Button theme={"primary"} cls={styles.actions}>
          <UploadIcon />
        </Button>
      </div>
    )
  })
];
