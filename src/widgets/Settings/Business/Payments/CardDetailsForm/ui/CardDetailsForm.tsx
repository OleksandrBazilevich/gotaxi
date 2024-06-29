import { useState } from "react";

import styles from "./CardDetailsForm.module.scss";
import { AppSelect, Button, Field } from "../../../../../../shared/ui";
import { Option } from "../../../../../../shared/ui/AppSelect/AppSelect";

const options: Option[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const CardDetailsForm = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  return (
    <form className={styles.form}>
      <p className={styles.title}>Name on the card</p>
      <Field placeholder="Name" value="Vladislav Haury" />
      <div className={styles.container}>
        <div className={styles.inputContainerBig}>
          <p className={styles.title}>Card number</p>
          <Field placeholder="Card number" value="1234 1234 1234 1234" />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.inputContainerSmall}>
            <p className={styles.title}>CVV</p>
            <Field placeholder="CVV" value="111" type="password" />
          </div>
          <div className={styles.inputContainerSmall}>
            <p className={styles.title}>Expiry</p>
            <Field placeholder="Date" value="06/24" />
          </div>
        </div>
      </div>
      <p className={styles.title}>Billing address</p>
      <Field placeholder="Address" value="100 Smith State" />
      <Field placeholder="City" value="Warsaw" />
      <p className={styles.title}>State / Province</p>
      <div className={styles.container}>
        <Field cls={styles.smallInput} placeholder="VIC" value="" />
        <Field cls={styles.bigInput} placeholder="VIC" value="" />
      </div>
      <div className={styles.selectContainer}>
        <p className={styles.title}>Country</p>
        <AppSelect fullwidth options={options} onChange={setSelectedOption} />
      </div>

      <Button theme="outlined" cls={styles.btn}>
        Change & Confirm
      </Button>
    </form>
  );
};

export default CardDetailsForm;
