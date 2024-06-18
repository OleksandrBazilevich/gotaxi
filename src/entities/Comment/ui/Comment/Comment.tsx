import { FC, useState } from "react";
import { classNames } from "../../../../shared/lib";
import styles from "./Comment.module.scss";
import Avatar from "../../../../shared/ui/Avatar/Avatar";
import { replaceSurnameWithAsterisks } from "../../lib/ReplaceSurnameWithAsterisks";
import ReactStars from "react-stars";
import RatingStars from "../../../../shared/ui/RatingStars/RatingStars";
import UserProfile from "../../../User/UserProfile/UserProfile";

export interface ICommentProps {
  rating: number;
  name: string;
  surname: string;
  avatarImg?: string;
  text: string;
}

const Comment: FC<ICommentProps> = ({
  avatarImg,
  name,
  surname,
  rating,
  text
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.accordeonItem}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <UserProfile
          img={avatarImg}
          name={name}
          rating={rating}
          surname={surname}
        />
      </div>
      <div
        className={classNames(styles.description, { [styles.show]: isOpen })}
      >
        {text}
      </div>
    </div>
  );
};

export default Comment;
