import {
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel
} from "@tanstack/react-table";
import { useState } from "react";
import { Field } from "../../../../shared/ui/Field";
import Table from "../../../../shared/ui/Table/Table";
import { columns, defaultData } from "./Columns";
import styles from "./RequestsDataTable.module.scss";
import { FilterIcon, SearchIcon } from "../../../../shared/assets/icons";
import { Button } from "../../../../shared/ui/Button";
import FilterDropDown from "../../../../entities/Car/ui/FilterDropDown/FilterDropDown";

const RequestsDataTable = () => {
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
      <div className={styles.container}>
        <Field
          placeholder="Search"
          iconPosition="end"
          Icon={SearchIcon}
          cls={styles.search}
          value={(table.getColumn("Car")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("Car")?.setFilterValue(event.target.value);
          }}
        />
        <FilterDropDown />
      </div>
      <Table defaultData={defaultData} table={table} />
    </div>
  );
};

export default RequestsDataTable;
