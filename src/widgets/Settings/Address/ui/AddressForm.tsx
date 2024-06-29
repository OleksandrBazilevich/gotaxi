import { useState } from "react";

import styles from "./AddressForm.module.scss";
import AppSelect, { Option } from "../../../../shared/ui/AppSelect/AppSelect";
import { Button, Field } from "../../../../shared/ui";
const options: Option[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const AddressForm = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <div className={styles.inputContainerBig}>
          <p className={styles.title}>Street</p>
          <Field placeholder="Vietchin Street" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputContainerSmall}>
            <p className={styles.title}>Building</p>
            <Field placeholder="1A" value="" />
          </div>
          <div className={styles.inputContainerSmall}>
            <p className={styles.title}>Appartment</p>
            <Field placeholder="24" value="" />
          </div>
        </div>
      </div>
      <div className={styles.selectContainer}>
        <p className={styles.title}>Region</p>
        <AppSelect fullwidth options={options} onChange={setSelectedOption} />
      </div>
      <div className={styles.selectContainer}>
        <p className={styles.title}>City</p>
        <AppSelect fullwidth options={options} onChange={setSelectedOption} />
      </div>
      <div className={styles.selectContainer}>
        <p className={styles.title}>Country</p>
        <AppSelect fullwidth options={options} onChange={setSelectedOption} />
      </div>
      <p className={styles.title}>ZIP Code</p>
      <Field placeholder="01001" value="" />

      <Button theme="outlined" cls={styles.btn}>
        Change & Confirm
      </Button>
    </form>
  );
};

export default AddressForm;
