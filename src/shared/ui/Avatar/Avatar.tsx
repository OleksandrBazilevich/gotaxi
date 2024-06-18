import { FC } from "react";
import styles from "./Avatar.module.scss";
import { classNames } from "../../lib";

interface IAvatarProps {
  size?: number;
  img?: string;
  variant?: "circle" | "square";
  cls?: string;
}

const Avatar: FC<IAvatarProps> = ({
  size = 42,
  img,
  variant = "circle",
  cls = ""
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={classNames(styles.avatar, {}, [styles[variant], cls])}
    >
      {img && <img src={img} />}
    </div>
  );
};

export default Avatar;
