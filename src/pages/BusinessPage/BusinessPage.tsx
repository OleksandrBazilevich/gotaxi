import { Button } from "../../shared/ui/Button";
import Wrapper from "../../shared/ui/Wrapper/Wrapper";
import styles from "./BusinessPage.module.scss";
import PersonImage from "../../shared/assets/img/person.png";
import ContactUsImage from "../../shared/assets/img/contactUsCar2.png";
import { CheckIcon } from "../../shared/assets/icons";
import Slider from "../../shared/ui/Slider/Slider";

import ProfitCarImage from "../../shared/assets/img/profitCar.png";
import { IAccordeonData } from "../../shared/ui/Accordeon/AccordeonItem";
import FAQ from "../../widgets/Main/FAQ/ui/FAQ";
import PhoneImage from "../../shared/assets/img/phone.png";
import BusinessContactUs from "../../widgets/Business/ui/BusinessContactUs";
import { CarProfitCalculator } from "../../widgets/Car";

const BusinessPage = () => {
  const accordeonData: IAccordeonData[] = [
    {
      title: "How long does it take for a car to pay for itself?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    },
    {
      title:
        "How does your insurance fund work and how is it different from an insurance company?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    },
    {
      title: "Do I have access to the tracker?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    },
    {
      title: "Who handles the insurance issues?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    },
    {
      title: "Who pays for the insurance?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    }
  ];
  return (
    <Wrapper cls={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>Turn Your Car into Income.</h2>
          <p className={styles.subtitle}>
            Join our fleet and start earning with your vehicle today.
          </p>
          <Button cls={styles.btn}>Rent out your car</Button>
        </div>
        <div className={styles.imgContainer}>
          <img src={PersonImage} />
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerItem}>
          <h3>150+</h3>
          <p>Investors & partners trust us</p>
        </div>
        <div className={styles.bannerItem}>
          <h3>80 000+</h3>
          <p>Orders every month</p>
        </div>
        <div className={styles.bannerItem}>
          <h3>700+</h3>
          <p>Cars in listing</p>
        </div>
        <div className={styles.bannerItem}>
          <h3>3M+</h3>
          <p>$ our partners earned</p>
        </div>
      </div>
      <div className={styles.why}>
        <div className={styles.whyWrapper}>
          <div className={styles.whyLeft}>
            <h2 className={styles.title}>
              Why <span>GoTaxi?</span>
            </h2>
            <div className={styles.whyItemsWrapper}>
              <div className={styles.whyItem}>
                <div className={styles.whyContainer}>
                  <div className={styles.whyIcon}>
                    <CheckIcon />
                  </div>
                  Technological and Reliable
                </div>
              </div>
              <div className={styles.whyItem}>
                <div className={styles.whyContainer}>
                  <div className={styles.whyIcon}>
                    <CheckIcon />
                  </div>
                  Over 140 partners and investors are already with us.
                </div>
              </div>
              <div className={styles.whyItem}>
                <div className={styles.whyContainer}>
                  <div className={styles.whyIcon}>
                    <CheckIcon />
                  </div>
                  Modern fleet, all vehicles from the year 2015 – additional
                  comfort for our clients.
                </div>
              </div>
              <div className={styles.whyItem}>
                <div className={styles.whyContainer}>
                  <div className={styles.whyIcon}>
                    <CheckIcon />
                  </div>
                  Regular payments to drivers, lessees, and investors.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.whyImg}>
            <img src={ContactUsImage} />
          </div>
        </div>
      </div>
      <div className={styles.profit}>
        <h3 className={styles.profitTitle}>
          Calculate the profitability of the car
          <span> when renting it out for taxi.</span>
        </h3>
        <div className={styles.profitWrapper}>
          <CarProfitCalculator />
          <div className={styles.profitBanner}>
            <h2>Start earning today!</h2>
            <p>Submit an application to learn the details of the agreement.</p>
            <Button cls={styles.profitBtn} theme="default">
              Start earning
            </Button>
            <img className={styles.profitImg} src={ProfitCarImage} />
          </div>
        </div>
      </div>
      <FAQ
        questions={accordeonData}
        title="FAQ"
        description="We’ve collected the answers for the most common and popular questions
          from our drivers."
      />
      <BusinessContactUs />
    </Wrapper>
  );
};

export default BusinessPage;
