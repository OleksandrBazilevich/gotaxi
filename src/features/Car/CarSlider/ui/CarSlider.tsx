import { ChangeEvent, FC, useState } from "react";
import styles from "./CarSlider.module.scss";
import Slider from "../../../../shared/ui/Slider/Slider";
import { classNames } from "../../../../shared/lib";

interface ICarSliderProps {
  title: string;
  min: number;
  max: number;
  maxLabel?: string;
  minLabel?: string;
  cls?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const CarSlider: FC<ICarSliderProps> = ({
  title,
  min,
  max,
  maxLabel,
  minLabel,
  value,
  onChange,
  cls = ""
}) => {
  return (
    <div className={classNames(styles.container, {}, [cls])}>
      <h3 className={styles.title}>{title}</h3>
      <Slider step={1} min={min} max={max} value={value} onChange={onChange} />
      {value !== min && value !== max && (
        <span
          className={styles.valueLabel}
          style={{
            left: `calc(${((value - min) / (max - min)) * 100}% - ${((value - min) / (max - min) - 0.5) * 23}px)`
          }}
        >
          {value}
        </span>
      )}
      <div className={styles.values}>
        <span>{minLabel ? minLabel : min}</span>
        <span>{maxLabel ? maxLabel : max}</span>
      </div>
    </div>
  );
};

export default CarSlider;
