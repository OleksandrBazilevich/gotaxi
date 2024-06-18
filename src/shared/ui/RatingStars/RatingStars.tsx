import { FC } from "react";
import ReactStars from "react-stars";
import styles from "./RatingStars.module.scss";

interface RatingStars {
  rating: number;
  size?: number | undefined;
  edit?: boolean | undefined;
  onChange?: ((new_rating: number) => void) | undefined;
}

const RatingStars: FC<RatingStars> = ({
  edit = false,
  onChange,
  size = 18,
  rating
}) => {
  return (
    <div className={styles.wrapper}>
      <ReactStars
        onChange={onChange}
        edit={edit}
        value={rating}
        half
        size={size}
        color1="#D9D9D9"
        color2="#FFD900"
      />
      <span className={styles.rating}>{rating?.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
