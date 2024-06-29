import { createColumnHelper } from "@tanstack/react-table";
import styles from "./RequestsDataTable.module.scss";
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
import {
  addDays,
  compareAsc,
  differenceInDays,
  format,
  isAfter
} from "date-fns";

import { ICar } from "../Main/Columns";
import { UserProfile } from "../../../../entities/User/UserProfile";
import { DriverInfo } from "../../../../features/Driver/DriverInfo";
import { ComfirmReservation } from "../../../../features/Fleet/ComfirmResevationModal";

interface IDriver {
  name: string;
  surname: string;
  img: string;
  rating: number;
}

interface IRequestsTableData {
  car: ICar;
  period: {
    start: Date;
    end: Date;
  };
  driver: IDriver;
}

export const defaultData: IRequestsTableData[] = [
  {
    car: { img: "/", name: "Toyota Camry", numberPlate: "P0665CS" },
    period: {
      start: new Date(),
      end: addDays(new Date(), 3)
    },
    driver: {
      name: "Aleksandr",
      surname: "Karu",
      img: "/",
      rating: 5
    }
  },
  {
    car: { img: "/", name: "Toyota Camry", numberPlate: "P0665CS" },
    period: {
      start: new Date(),
      end: addDays(new Date(), 8)
    },
    driver: {
      name: "Aleksandr",
      surname: "Karu",
      img: "/",
      rating: 5
    }
  },
  {
    car: { img: "/", name: "Toyota Camry", numberPlate: "P0665CS" },
    period: {
      start: new Date(),
      end: addDays(new Date(), 6)
    },
    driver: {
      name: "Aleksandr",
      surname: "Karu",
      img: "/",
      rating: 5
    }
  }
];

const columnHelper = createColumnHelper<IRequestsTableData>();

export const columns = [
  columnHelper.display({
    id: "number",
    header: ({ column }) => {
      return (
        <div className={styles.header}>
          <span className={styles.title}>#</span>
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
        <div className={styles.carInfoContainer}>
          <h4>{info.row.original.car.name}</h4>
          <p>{info.row.original.car.numberPlate}</p>
        </div>
      </div>
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
      <div className={styles.text}>
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
  columnHelper.accessor((row) => row.driver.name, {
    id: "Driver",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Driver</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.driverContainer}>
        <UserProfile
          img={info.row.original.driver.name}
          name={info.row.original.driver.name}
          rating={info.row.original.driver.rating}
          surname={info.row.original.driver.surname}
          showSurname
          cls={styles.driver}
        />
        <DriverInfo />
      </div>
    )
  }),

  columnHelper.display({
    id: "actions",
    header: ({ column }) => {
      return (
        <div className={styles.header}>
          <span className={styles.title}>Action</span>
        </div>
      );
    },
    cell: (props) => (
      <div className={styles.actionsContainer}>
        <Button theme={"warningOutlined"} cls={styles.actions}>
          <CancelIcon />
        </Button>
        <ComfirmReservation />
      </div>
    )
  })
];
