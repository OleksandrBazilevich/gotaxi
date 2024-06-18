import { FC } from "react";
import styles from "./Bullet.module.scss";
import { MapIcon } from "../../assets/icons";
import { Button } from "../Button";

export interface IBulletProps {
  title: string;
  description: string;
}

const Bullet: FC<IBulletProps> = ({ title, description }) => {
  return (
    <div className={styles.bullet}>
      <div className={styles.iconContainer}>
        <MapIcon className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Bullet;
