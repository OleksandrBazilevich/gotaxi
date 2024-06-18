import { FC, useState } from "react";
import styles from "./RangeInput.module.scss";
import { Field } from "../Field";

interface IRangeInput {
  from: string;
  handleFromChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  to: string;
  handleToChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput: FC<IRangeInput> = ({
  from,
  to,
  handleFromChange,
  handleToChange
}) => {

  return (
    <div className={styles.container}>
      <Field
        value={from}
        onChange={handleFromChange}
        type="number"
        cls={styles.input}
      />
      <span className={styles.separator}>-</span>
      <Field
        type="number"
        value={to}
        onChange={handleToChange}
        cls={styles.input}
      />
    </div>
  );
};

export default RangeInput;
