import {
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel
} from "@tanstack/react-table";
import { useState } from "react";

import styles from "./PaymentsTable.module.scss";
import useWindowDimensions from "../../../../../shared/lib/useWindowDimensions";
import { columns, defaultData } from "./Columns";
import Table from "../../../../../shared/ui/Table/Table";

const PaymentsDataTable = () => {
  const { width } = useWindowDimensions();
  const [data, _setData] = useState(() => [...defaultData]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      sorting
    }
  });
  return (
    <div className={styles.wrapper}>
      <Table defaultData={defaultData} table={table} />
    </div>
  );
};

export default PaymentsDataTable;
