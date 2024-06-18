import { FC } from "react";

import styles from "./DriverDashboardCard.module.scss";
import { LeftIcon } from "../../../shared/assets/icons";

export interface IDriverDashboardCardProps {
  name: string;
  title: string;
  description?: string;
  icon?: boolean;
  onClick?: () => void;
}

const DriverDashboardCard: FC<IDriverDashboardCardProps> = ({
  name,
  description,
  title,
  onClick,
  icon = false
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      {icon && <LeftIcon onClick={() => onClick?.()} className={styles.icon} />}
    </div>
  );
};

export default DriverDashboardCard;
