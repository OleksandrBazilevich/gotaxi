import { createColumnHelper } from "@tanstack/react-table";
import styles from "./PostsDataTable.module.scss";
import Avatar from "../../../../shared/ui/Avatar/Avatar";
import Badge, { BadgeThemes } from "../../../../shared/ui/Badge/Badge";
import {
  ArrowLeftIcon,
  CancelIcon,
  ComfirmIcon,
  EditIcon,
  ProfileIcon,
  TableSortIcon
} from "../../../../shared/assets/icons";
import { classNames } from "../../../../shared/lib";
import { Button } from "../../../../shared/ui/Button";
import { ICar } from "../Main/Columns";

type IStatus = "active" | "inactive";

interface IPostsTableData {
  car: ICar;
  status: IStatus;
  views: {
    views: number;
    difference: number;
  };
  clicks: {
    clicks: number;
    difference: number;
  };
  carsNumber: number;
}

const getBadgeThemeAndTitleByStatus = (status: IStatus) => {
  let theme: BadgeThemes;
  let title: string;

  switch (status) {
    case "active":
      theme = "positive";
      title = "Active";
      break;
    case "inactive":
      theme = "negative";
      title = "inactive";
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

export const defaultData: IPostsTableData[] = [
  {
    car: { img: "/", name: "Toyota Camry", numberPlate: "P0665CS" },
    status: "active",
    views: {
      views: 10,
      difference: 2
    },
    clicks: {
      clicks: 10,
      difference: -2
    },
    carsNumber: 18
  },
  {
    car: { img: "/", name: "Toyota Camry", numberPlate: "P0665CS" },
    status: "active",
    views: {
      views: 10,
      difference: 2
    },
    clicks: {
      clicks: 10,
      difference: -2
    },
    carsNumber: 18
  },
  {
    car: { img: "/", name: "Toyota Camry", numberPlate: "P0665CS" },
    status: "active",
    views: {
      views: 10,
      difference: 2
    },
    clicks: {
      clicks: 10,
      difference: -2
    },
    carsNumber: 18
  }
];

const columnHelper = createColumnHelper<IPostsTableData>();

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
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.carInfo}>
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
  columnHelper.accessor((row) => row.views.views, {
    id: "views",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Views</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.total}>
        {info.row.original.views.views}
        <span
          className={classNames(styles.difference, {
            [styles.falling]: info.row.original.views.difference < 0
          })}
        >
          {info.row.original.views.difference && <ArrowLeftIcon />}
          {info.row.original.views.difference}
        </span>
      </div>
    )
  }),

  columnHelper.accessor((row) => row.clicks.clicks, {
    id: "clicks",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Clicks</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.total}>
        {info.row.original.clicks.clicks}
        <span
          className={classNames(styles.difference, {
            [styles.falling]: info.row.original.clicks.difference < 0
          })}
        >
          {info.row.original.clicks.difference && <ArrowLeftIcon />}
          {info.row.original.clicks.difference}
        </span>
      </div>
    )
  }),
  columnHelper.accessor("carsNumber", {
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>
          <span className={styles.title}>Cars</span>
        </div>
      );
    },
    cell: (info) => <span className={styles.text}>{info.getValue()}</span>
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
