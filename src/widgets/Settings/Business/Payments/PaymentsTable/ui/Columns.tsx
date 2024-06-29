import { createColumnHelper } from "@tanstack/react-table";
import styles from "./PaymentsTable.module.scss";
import {
  TableSortIcon,
  PdfIcon,
  UploadIcon
} from "../../../../../../shared/assets/icons";
import { Badge, Button } from "../../../../../../shared/ui";

export type Plan = "Basic" | "Plus" | "Enterprise";

interface IPaymentsTableData {
  name: string;
  isPaid: boolean;
  plan: Plan;
  date: string;
  amount: number;
}
export const defaultData: IPaymentsTableData[] = [
  {
    name: "Invoice #1",
    isPaid: true,
    plan: "Basic",
    date: "May 1, 2024",
    amount: 15
  },
  {
    name: "Invoice #2",
    isPaid: true,
    plan: "Basic",
    date: "May 1, 2024",
    amount: 15
  },
  {
    name: "Invoice #2",
    isPaid: true,
    plan: "Basic",
    date: "May 1, 2024",
    amount: 15
  }
];

const columnHelper = createColumnHelper<IPaymentsTableData>();

export const columns = [
  columnHelper.accessor((row) => row.name, {
    id: "Invoice",
    header: ({ column, table }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Invoice</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.fileInfo}>
        <PdfIcon />
        <div className={styles.fileName}>
          {info.row.original.name}
          <Badge theme={info.row.original.isPaid ? "positive" : "negative"}>
            {info.row.original.isPaid ? "Paid" : "Unpaid"}
          </Badge>
        </div>
      </div>
    )
  }),

  columnHelper.accessor("plan", {
    id: "Plan",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Plan</span>
        </div>
      );
    },
    cell: (info) => <div className={styles.text}>{info.renderValue()} plan</div>
  }),
  columnHelper.accessor("date", {
    id: "Date",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Billing date</span>
        </div>
      );
    },
    cell: (info) => <div className={styles.text}>{info.renderValue()}</div>
  }),
  columnHelper.accessor("amount", {
    id: "Amount",
    header: ({ column }) => {
      return (
        <div
          className={styles.header}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className={styles.sortContainer}>
            <TableSortIcon className={styles.sortIcon} />
          </div>

          <span className={styles.title}>Amount</span>
        </div>
      );
    },
    cell: (info) => (
      <div className={styles.text}>USD ${info.renderValue()?.toFixed(2)}</div>
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
        <Button theme={"primary"} cls={styles.actions}>
          <UploadIcon />
        </Button>
      </div>
    )
  })
];
