import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import styles from "./Slider.module.scss";

interface ISlider extends InputHTMLAttributes<HTMLInputElement> {
  max: number;
  min: number;
  value: number;
}

const Slider: FC<ISlider> = ({ value, max, min, ...rest }) => {
  return (
    <input
      {...rest}
      type="range"
      value={value}
      min={min}
      max={max}
      className={styles.rangeSlider}
      style={
        {
          "--val": `${((value - min) / (max - min)) * 100}%`
        } as React.CSSProperties
      }
    />
  );
};

export default Slider;
