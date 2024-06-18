import { createColumnHelper } from "@tanstack/react-table";
import styles from "./DashboardDataTable.module.scss";
import Avatar from "../../../shared/ui/Avatar/Avatar";
import Badge, { BadgeThemes } from "../../../shared/ui/Badge/Badge";
import {
  ArrowLeftIcon,
  CancelIcon,
  EditIcon,
  TableSortIcon
} from "../../../shared/assets/icons";
import { classNames } from "../../../shared/lib";
import { Button } from "../../../shared/ui/Button";
import Img from "../../../shared/assets/img/galleryCar.png";

export interface ICar {
  name: string;
  img: string;
  numberPlate: string;
}

type IStatus = "available" | "reserved" | "notAvaible";

const getBadgeThemeAndTitleByStatus = (status: IStatus) => {
  let theme: BadgeThemes;
  let title;

  switch (status) {
    case "available":
      theme = "positive";
      title = "Available for rent";
      break;
    case "notAvaible":
      theme = "negative";
      title = "Not available";
      break;
    case "reserved":
      theme = "neutral";
      title = "Reserved";
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
  viewsPerDay: {
    views: number;
    difference: number;
  };
  clicksPerDay: {
    clicks: number;
    difference: number;
  };
  pricePerDay: number;
}

export const defaultData: IDashboardTableData[] = [
  {
    car: { img: Img, name: "Toyota Camry", numberPlate: "P0665CS" },
    status: "available",
    viewsPerDay: {
      views: 10,
      difference: 2
    },
    clicksPerDay: {
      clicks: 10,
      difference: -2
    },
    pricePerDay: 18
  },
  {
    car: { img: Img, name: "Opel Astra", numberPlate: "P0665CS" },
    status: "notAvaible",
    viewsPerDay: {
      views: 19,
      difference: -2
    },
    clicksPerDay: {
      clicks: 2,
      difference: 2
    },
    pricePerDay: 18
  },
  {
    car: { img: Img, name: "Toyota Camry", numberPlate: "P0665CS" },
    status: "reserved",
    viewsPerDay: {
      views: 11,
      difference: 2
    },
    clicksPerDay: {
      clicks: 9,
      difference: -2
    },
    pricePerDay: 17
  }
];

const columnHelper = createColumnHelper<IDashboardTableData>();

export const columns = [
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
          <Badge
            theme={
              table.getState().sorting[0]?.id === column.id
                ? "primary"
                : "default"
            }
          >
            {table.getRowCount()}
          </Badge>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.carInfo}>
        <img className={styles.img} src={info.row.original.car.img} />
        <div className={styles.carInfoContainer}>
          <h4>{info.row.original.car.name}</h4>
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
  columnHelper.accessor((row) => row.viewsPerDay.views, {
    id: "viewsPerDay",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Views/day</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.total}>
        {info.row.original.viewsPerDay.views}
        <span
          className={classNames(styles.difference, {
            [styles.falling]: info.row.original.viewsPerDay.difference < 0
          })}
        >
          {info.row.original.viewsPerDay.difference && <ArrowLeftIcon />}
          {info.row.original.viewsPerDay.difference}
        </span>
      </div>
    )
  }),

  columnHelper.accessor((row) => row.clicksPerDay.clicks, {
    id: "clicksPerDay",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Clicks/day</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.total}>
        {info.row.original.clicksPerDay.clicks}
        <span
          className={classNames(styles.difference, {
            [styles.falling]: info.row.original.clicksPerDay.difference < 0
          })}
        >
          {info.row.original.clicksPerDay.difference && <ArrowLeftIcon />}
          {info.row.original.clicksPerDay.difference}
        </span>
      </div>
    )
  }),
  columnHelper.accessor("pricePerDay", {
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Price/day</span>
        </div>
      );
    },
    cell: (info) => (
      <span className={styles.price}>${info.getValue().toFixed(2)}</span>
    )
  }),
  columnHelper.display({
    id: "actions",
    cell: (props) => (
      <div className={styles.actionsContainer}>
        <Button cls={styles.actions}>
          <EditIcon />
        </Button>
        <Button theme={"warningOutlined"} cls={styles.actions}>
          <CancelIcon />
        </Button>
      </div>
    )
  })
];
