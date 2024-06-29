import { useState } from "react";
import { MapIcon } from "../../../../shared/assets/icons";
import { Button } from "../../../../shared/ui/Button";
import Drawer from "../../../../shared/ui/Drawer/Drawer";
import styles from "./FilterDrawer.module.scss";
import RangeInput from "../../../../shared/ui/RangeInput/RangeInput";
import Accordeon from "../../../../shared/ui/Accordeon/Accordeon";
import AccordeonItem from "../../../../shared/ui/Accordeon/AccordeonItem";

const FilterDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [from, setFrom] = useState("2010");
  const [to, setTo] = useState("2024");

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^\d{0,4}$/)) {
      setFrom(e.target.value);
    }
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^\d{0,4}$/)) {
      setTo(e.target.value);
    }
  };
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        cls={styles.btn}
        theme="primaryOutlined"
      >
        <MapIcon className={styles.icon} /> Filter
      </Button>
      <Drawer
        title="Filter"
        description="Find a car specifically for your needs."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchor="right"
      >
        <Accordeon>
          <AccordeonItem cls={styles.accordeonItem} title="Brand">
            <div>1</div>
          </AccordeonItem>
          <AccordeonItem cls={styles.accordeonItem} title="Model">
            <div>1</div>
          </AccordeonItem>
        </Accordeon>
        <div className={styles.container}>
          <h3>Model Year</h3>
          <RangeInput
            to={to}
            from={from}
            handleFromChange={handleFromChange}
            handleToChange={handleToChange}
          />
        </div>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
