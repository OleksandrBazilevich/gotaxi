import React, { FC } from "react";
import styles from "./AppSelect.module.scss";
import Select, { ActionMeta } from "react-select";
import { classNames } from "../../lib";

export interface Option {
  label: string;
  value: string;
}

interface ISelectProps {
  options: Option[];
  onChange: (option: Option | null, actionMeta: ActionMeta<Option>) => void;
  placeholder?: string;
  cls?: string;
  fullwidth?: boolean;
}

const AppSelect: FC<ISelectProps> = ({
  options,
  onChange,
  placeholder,
  fullwidth = false,
  cls = ""
}) => {
  return (
    <Select
      components={{ IndicatorSeparator: null }}
      className={classNames(styles.select, { [styles.fullwidth]: fullwidth }, [
        cls
      ])}
      isSearchable={false}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
    />
  );
};

export default AppSelect;
