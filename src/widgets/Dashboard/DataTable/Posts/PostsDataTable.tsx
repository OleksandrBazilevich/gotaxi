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
import styles from "./PostsDataTable.module.scss";
import {
  FilterIcon,
  MoreIcon,
  SearchIcon
} from "../../../../shared/assets/icons";
import { Button } from "../../../../shared/ui/Button";
import FilterDropDown from "../../../../entities/Car/ui/FilterDropDown/FilterDropDown";
import CreatePost from "../../../../features/Post/CreatePost/CreatePost";
import useWindowDimensions from "../../../../shared/lib/useWindowDimensions";

const PostsDataTable = () => {
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
      <div className={styles.container}>
        <CreatePost />
        {width > 1024 && <FilterDropDown />}
      </div>
      <Table defaultData={defaultData} table={table} />
    </div>
  );
};

export default PostsDataTable;
