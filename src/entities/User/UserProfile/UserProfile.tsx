import { FC } from "react";
import Avatar from "../../../shared/ui/Avatar/Avatar";
import styles from "./UserProfile.module.scss";
import { replaceSurnameWithAsterisks } from "../../Comment/lib/ReplaceSurnameWithAsterisks";
import RatingStars from "../../../shared/ui/RatingStars/RatingStars";
import { classNames } from "../../../shared/lib";

interface IUserProfileProps {
  img: string | undefined;
  name: string;
  surname?: string;
  rating: number;
  showSurname?: boolean;
  avatarSize?: number;
  cls?: string;
}

const UserProfile: FC<IUserProfileProps> = ({
  img,
  name,
  rating,
  surname,
  showSurname = false,
  avatarSize,
  cls = ""
}) => {
  return (
    <div className={classNames(styles.wrapper, {}, [cls])}>
      <Avatar size={avatarSize} img={img} />
      <div className={styles.container}>
        <h3 className={styles.title}>
          {name}{" "}
          {showSurname && surname
            ? surname
            : replaceSurnameWithAsterisks(surname || "")}
        </h3>
        <RatingStars rating={rating} />
      </div>
    </div>
  );
};

export default UserProfile;
