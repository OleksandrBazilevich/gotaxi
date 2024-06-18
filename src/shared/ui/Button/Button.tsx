import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import styles from "./Button.module.scss";
import { classNames } from "../../lib";

export type ButtonTheme =
  | "default"
  | "outlined"
  | "inverted"
  | "warning"
  | "warningOutlined"
  | "primaryInverted"
  | "primaryInvertedOutlined"
  | "primary"
  | "primaryOutlined";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  cls?: string;
  theme?: ButtonTheme;
  fullWidth?: boolean;
}

const Button: FC<PropsWithChildren<IButton>> = ({
  cls = "",
  theme = "primary",
  fullWidth = false,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        styles.Button,
        {
          [styles.fullwidth]: fullWidth
        },
        [cls, styles[theme]]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
