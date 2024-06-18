import Dropdown, {
  DropdownContent,
  DropdownTrigger
} from "../../../../shared/ui/Dropdown/Dropdown";
import { Button } from "../../../../shared/ui/Button";
import { FilterIcon } from "../../../../shared/assets/icons";
import styles from "./FilterDropDown.module.scss";
import Checkbox from "../../../../shared/ui/Checkbox/Checkbox";
import RangeInput from "../../../../shared/ui/RangeInput/RangeInput";
import { useState } from "react";

const FilterDropDown = () => {
  const [from, setFrom] = useState("0");
  const [to, setTo] = useState("1000");

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[0-9]$/)) {
      setFrom(e.target.value);
    }
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[0-9]$/)) {
      setTo(e.target.value);
    }
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button theme="inverted" cls={styles.filter}>
          <FilterIcon />
          Filter
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <h4 className={styles.title}>Filter</h4>
        <Checkbox cls={styles.checkbox}>Newest cars</Checkbox>
        <Checkbox cls={styles.checkbox}>Available cars</Checkbox>
        <Checkbox cls={styles.checkbox}>Not available cars</Checkbox>
        <Checkbox cls={styles.checkbox}>Reserved</Checkbox>
        <Checkbox cls={styles.checkbox}>Highest to lowest price</Checkbox>
        <p className={styles.subtitle}>Views range</p>
        <RangeInput
          from={from}
          to={to}
          handleFromChange={handleFromChange}
          handleToChange={handleToChange}
        />
        <p className={styles.subtitle}>Clicks range</p>
        <RangeInput
          from={from}
          to={to}
          handleFromChange={handleFromChange}
          handleToChange={handleToChange}
        />
      </DropdownContent>
    </Dropdown>
  );
};

export default FilterDropDown;
