import { FC, PropsWithChildren } from "react";
import styles from "./Plan.module.scss";
import { CheckIcon } from "../../../shared/assets/icons";
import { classNames } from "../../../shared/lib";
import { Badge, Hr } from "../../../shared/ui";

interface IPlanDescriptionItem {
  text: string;
  active: boolean;
}

export interface IPlanItemProps {
  name: string;
  price: number | "custom";
  description: IPlanDescriptionItem[];
  isBestValue: boolean;
  button: React.ReactNode;
}

const PlanItem: FC<IPlanItemProps> = ({
  name,
  description,
  isBestValue,
  price,
  button
}) => {
  return (
    <div className={styles.card}>
      <p className={styles.name}>
        <span>{name}</span>
        {isBestValue && <Badge theme="positive">Best value</Badge>}
      </p>
      <p className={styles.price}>
        {price === "custom" ? (
          "Custom"
        ) : (
          <>
            ${price}
            <span className={styles.perMonth}>/month</span>
          </>
        )}
      </p>
      <Hr cls={styles.hr} />
      <div className={styles.descriptionContainer}>
        {description.map((item) => (
          <div className={styles.descriptionItem}>
            <CheckIcon
              className={classNames(
                styles.checkIcon,
                { [styles.active]: item.active },
                []
              )}
            />
            {item.text}
          </div>
        ))}
      </div>
      {button}
    </div>
  );
};

export default PlanItem;
