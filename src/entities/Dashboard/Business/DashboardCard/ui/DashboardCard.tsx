import { FC } from "react";
import LinearChart, {
  ILinearChartDataItem
} from "../../../../../shared/ui/LinearChart/LinearChart";
import styles from "./DashboardCard.module.scss";
import { ArrowLeftIcon } from "../../../../../shared/assets/icons";
import { classNames } from "../../../../../shared/lib";

export interface IDashboardCardProps {
  isGrow: boolean;
  chartData: ILinearChartDataItem[];
  title: string;
  totalNumber: number;
  difference: string;
}

const DashboardCard: FC<IDashboardCardProps> = ({
  chartData,
  isGrow,
  difference,
  title,
  totalNumber
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div className={styles.total}>
          {totalNumber}
          <span
            className={classNames(styles.difference, {
              [styles.falling]: !isGrow
            })}
          >
            {difference && <ArrowLeftIcon />}
            {difference}
          </span>
        </div>
      </div>
      <LinearChart isGrow={isGrow} data={chartData} />
    </div>
  );
};

export default DashboardCard;
