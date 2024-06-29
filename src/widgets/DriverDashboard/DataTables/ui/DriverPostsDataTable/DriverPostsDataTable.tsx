import {
  ColumnFiltersState,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from "@tanstack/react-table";
import { FC, useState } from "react";
import Table from "../../../../../shared/ui/Table/Table";

import styles from "./DriverPostsDataTable.module.scss";
import { columns, IPostsTableData } from "./Columns";

interface IDriverPostsDataTableProps {
  data: IPostsTableData[];
}

const DriverPostsDataTable: FC<IDriverPostsDataTableProps> = ({ data }) => {
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
      <Table defaultData={data} table={table} />
    </div>
  );
};

export default DriverPostsDataTable;
