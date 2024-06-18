import styles from "./RequirementsPage.module.scss";
import CarImg from "../../shared/assets/img/car2.png";
import { Button } from "../../shared/ui/Button";
import { classNames } from "../../shared/lib";

const RequirementsPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>How to drive with GoTaxi in Poland</h1>
          <p className={styles.description}>
            GoTaxi is a great way to be your own boss and make money. Most
            people are eligible to drive with GoTaxi. Here’s what you need to
            know if you’re driving in Warsaw, Krakow, Gdansk, Wroclaw, Poznan,
            Lodz, Lublin, Bialystok, and Szczecin.
          </p>
          <Button cls={styles.btn}>Sign up</Button>
        </div>
        <img className={styles.img} src={CarImg} />
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepContent}>
            <h2>1. Sign up online</h2>
            <p>
              Got an email address and a smartphone? Great, now tell us a bit
              more about yourself and we’ll get you started.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepContent}>
            <h2>2. Upload your documents</h2>
            <p>
              Time for some paperwork. There are a few documents we need to see:
            </p>
            <ul>
              <li>
                Valid driver’s license (if you upload a screenshot from Diia
                please make sure your driving licence is in the gov database.
                Otherwise please upload a photo of the plastic card)
              </li>
              <li>Certificate of vehicle registration</li>
              <li>
                Mandatory civil liability insurance contract for motor vehicle
                owners
              </li>
              <li>A driver profile photo</li>
              <li>
                Must be a forward-facing, centered photo including the driver’s
                full face and top of shoulders, with no sunglasses
              </li>
              <li>
                Must be a photo only of the driver with no other subject in the
                frame, well-lit, and in focus. It cannot be a driver’s license
                photo or other printed photograph
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepContent}>
            <h2>3. Get a vehicle</h2>
            <p>
              Which car is right for you? Make sure it meets our standards in
              Poland, and remember that you’ll make more money if you keep your
              costs low.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepContent}>
            <h2>4. Activate your account</h2>
            <p>
              If you’ve completed all the above steps, congratulations! You’re
              ready to activate your account and start making money.
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <Button cls={classNames(styles.btn, {}, [styles.stepsButton])}>
            Sign up now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequirementsPage;
