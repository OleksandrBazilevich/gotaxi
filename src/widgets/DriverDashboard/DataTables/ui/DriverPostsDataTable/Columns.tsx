import { createColumnHelper } from "@tanstack/react-table";
import styles from "./DriverPostsDataTable.module.scss";

import {
  TableSortIcon,
  DetailsIcon,
  ReservationIcon
} from "../../../../../shared/assets/icons";
import { Button } from "../../../../../shared/ui/Button";
import { UserProfile } from "../../../../../entities/User/UserProfile";

export interface IPostsTableData {
  avatar: string;
  year: number;
  fleetName: string;
  fleetRating: number;
  img: string;
  name: string;
  fuel: string;
  engineVolume: number;
  mileage: number;
  deposit: number;
  commision: number;
}

const columnHelper = createColumnHelper<IPostsTableData>();

export const columns = [
  columnHelper.accessor((row) => row.name, {
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
        <img className={styles.img} src={info.row.original.img} />
        <div>
          <div className={styles.name}>
            {info.row.original.name}
            <span className={styles.year}>{info.row.original.year}</span>
          </div>
          <div className={styles.description}>
            <span>{info.row.original.fuel},</span>
            <span>{info.row.original.engineVolume} L,</span>
            <span>{info.row.original.mileage.toLocaleString("pl")} km</span>
          </div>
        </div>
      </div>
    )
  }),

  columnHelper.accessor("deposit", {
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Deposit</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.text}>${info.row.original.deposit.toFixed(2)}</div>
    )
  }),
  columnHelper.accessor("commision", {
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Commision</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.text}>
        {info.row.original.commision === 0
          ? "-"
          : info.row.original.commision.toFixed() + "%"}
      </div>
    )
  }),

  columnHelper.accessor((row) => row.fleetName, {
    id: "fleet",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Fleet</span>
        </div>
      );
    },
    cell: (info) => (
      <UserProfile
        cls={styles.name}
        img={info.row.original.avatar}
        name={info.row.original.fleetName}
        rating={info.row.original.fleetRating}
      />
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
          <ReservationIcon />
        </Button>
      </div>
    )
  })
];
