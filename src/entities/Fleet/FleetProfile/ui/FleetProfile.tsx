import { FC } from "react";
import Avatar from "../../../../shared/ui/Avatar/Avatar";
import ReactStars from "react-stars";
import styles from "./FleetProfile.module.scss";
import { LeftIcon } from "../../../../shared/assets/icons";
import RatingStars from "../../../../shared/ui/RatingStars/RatingStars";

interface IFleetProfileProps {
  name: string;
  rating: number;
  avatarImg?: string;
}

const FleetProfile: FC<IFleetProfileProps> = ({ rating, avatarImg, name }) => {
  return (
    <div className={styles.wrapper}>
      <Avatar img={avatarImg} />
      <div className={styles.container}>
        <div className={styles.name}>
          {name}
          <LeftIcon className={styles.icon} />
        </div>
        <RatingStars rating={4.5} />
      </div>
    </div>
  );
};

export default FleetProfile;
