import { FC } from "react";
import Comment, { ICommentProps } from "../Comment/Comment";
import RatingStars from "../../../../shared/ui/RatingStars/RatingStars";
import styles from "./Comments.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { MoreIcon } from "../../../../shared/assets/icons";

interface ICommentsProps {
  comments: ICommentProps[];
  avgRating: number;
  totalComments: number;
  showAddComment?: boolean;
  titleSize?: number;
}

const Comments: FC<ICommentsProps> = ({
  avgRating,
  comments,
  totalComments,
  showAddComment = true,
  titleSize
}) => {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <h2 style={{ fontSize: titleSize }} className={styles.title}>
            Reviews
          </h2>
          <div className={styles.wrapper}>
            <RatingStars size={22} rating={avgRating} />
            <span className={styles.total}>({totalComments})</span>
          </div>
        </div>
        {showAddComment && (
          <Button theme="primaryOutlined" cls={styles.btn}>
            <MoreIcon className={styles.icon} /> Leave feedback
          </Button>
        )}
      </div>
      <div>
        {comments.map((comment) => (
          <Comment
            name={comment.name}
            rating={comment.rating}
            surname={comment.surname}
            text={comment.text}
            avatarImg={comment.avatarImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
