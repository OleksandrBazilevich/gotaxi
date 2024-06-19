import { useState } from "react";
import { ProfileIcon } from "../../../shared/assets/icons";
import { Button } from "../../../shared/ui/Button";
import Drawer from "../../../shared/ui/Drawer/Drawer";
import styles from "./DriverInfo.module.scss";
import UserProfile from "../../../entities/User/UserProfile/UserProfile";
import Comments from "../../../entities/Comment/ui/Comments/Comments";
import { ICommentProps } from "../../../entities/Comment/ui/Comment/Comment";
import useWindowDimensions from "../../../shared/lib/useWindowDimensions";

const comments: ICommentProps[] = [
  {
    name: "Alexander",
    surname: "K**u",
    rating: 5,
    text: "I recently rented a 2018 Comfort class car through GoTaxi, and I was thoroughly impressed by the overall experience. The booking process was straightforward, and the staff at the fleet were very helpful in explaining all the details of the rental agreement."
  },
  {
    name: "Voitech",
    surname: "L**a",
    rating: 5,
    text: "I recently rented a 2018 Comfort class car through GoTaxi, and I was thoroughly impressed by the overall experience. The booking process was straightforward, and the staff at the fleet were very helpful in explaining all the details of the rental agreement."
  },
  {
    name: "Agniezhka",
    surname: "O**a",
    rating: 5,
    text: "I recently rented a 2018 Comfort class car through GoTaxi, and I was thoroughly impressed by the overall experience. The booking process was straightforward, and the staff at the fleet were very helpful in explaining all the details of the rental agreement."
  },
  {
    name: "Evelina",
    surname: "O**a",
    rating: 5,
    text: "I recently rented a 2018 Comfort class car through GoTaxi, and I was thoroughly impressed by the overall experience. The booking process was straightforward, and the staff at the fleet were very helpful in explaining all the details of the rental agreement."
  }
];

const DriverInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <>
      <Drawer
        title="Driver information"
        anchor="right"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className={styles.header}>
          <UserProfile
            img="/"
            name="Alexander"
            rating={5}
            avatarSize={width < 1024 ? 43 : 79}
            surname="Karu"
            showSurname={false}
            cls={styles.driver}
          />
          <Button cls={styles.viewLicense} theme="primaryOutlined">
            View driver license
          </Button>
        </div>
        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <p>Total reservation</p>
            <h5>72</h5>
          </div>
          <div className={styles.statsItem}>
            <p>Success score</p>
            <h5>9/10</h5>
          </div>
          <div className={styles.statsItem}>
            <p>Driving experience</p>
            <h5>8 years</h5>
          </div>
        </div>
        <div className={styles.aboutMe}>
          <h2 className={styles.title}>About me</h2>
          <div className={styles.description}>
            Welcome to my vehicle's listing! I want to ensure you have all the
            information you need before deciding to rent this car. It's a 2018
            model, well-maintained and perfect for both city and longer distance
            drives. <br />
            <br />
            Important Details: <br />
            &bull; The car was involved in a minor fender bender in 2019. It was
            professionally repaired, and there has been no impact on its
            performance or safety. <br />
            &bull; It comes equipped with winter tires during the colder months
            for extra safety. <br />
            &bull; Non-smoking vehicle to ensure a clean and fresh environment
            for all renters. <br />
            <br />
            I've regularly serviced this car at authorized dealers to maintain
            its excellent condition, ensuring a reliable and comfortable drive
            for you. If you have any specific questions or need further details,
            feel free to ask when you contact me. Happy driving!
          </div>
        </div>
        <Comments
          showAddComment={false}
          totalComments={18}
          comments={comments}
          avgRating={5}
          titleSize={18}
        />
      </Drawer>
      <Button onClick={() => setIsOpen(true)} cls={styles.action}>
        <ProfileIcon />
      </Button>
    </>
  );
};

export default DriverInfo;
