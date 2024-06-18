import { FC } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";

import styles from "./LinearChart.module.scss";
import { classNames } from "../../lib";

export interface ILinearChartDataItem {
  value: number;
}

interface ILinearChartProps {
  data: ILinearChartDataItem[];
  isGrow: boolean;
}

const LinearChart: FC<ILinearChartProps> = ({ data, isGrow }) => {
  return (
    <div className={styles.container}>
      {data.length !== 0 ? (
        <ResponsiveContainer className={styles.chart} width="100%" height={108}>
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              stroke={`${isGrow ? "#35AA47" : "#DD8534"}`}
              fill={`${isGrow ? "#35AA47" : "#DD8534"}`}
              fillOpacity={0.1}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <>
          <ResponsiveContainer
            className={styles.chart}
            width="100%"
            height={108}
          >
            <AreaChart
              data={[
                { value: 1 },
                { value: 5 },
                { value: 3 },
                { value: 6 },
                { value: 7 }
              ]}
            >
              <Area
                type="monotone"
                dataKey="value"
                stroke={"#35AA47"}
                fill={"#35AA47"}
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className={styles.overlay}>No data yet.</div>
        </>
      )}
    </div>
  );
};

export default LinearChart;
