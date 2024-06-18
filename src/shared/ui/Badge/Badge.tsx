import { FC, PropsWithChildren } from "react";
import styles from "./Badge.module.scss";
import { classNames } from "../../lib";

export type BadgeThemes =
  | "positive"
  | "negative"
  | "neutral"
  | "default"
  | "primary";

interface IBadge {
  theme?: BadgeThemes;
}

const Badge: FC<PropsWithChildren<IBadge>> = ({
  children,
  theme = "default"
}) => {
  return (
    <div className={classNames(styles.badge, {}, [styles[theme]])}>
      {children}
    </div>
  );
};

export default Badge;
