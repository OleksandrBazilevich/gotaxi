import styles from "./FAQPage.module.scss";
import CarImg from "../../shared/assets/img/car2.png";
import FAQ from "../../widgets/Main/FAQ/ui/FAQ";
import { IAccordeonData } from "../../shared/ui/Accordeon/AccordeonItem";
import BusinessContactUs from "../../widgets/Business/BusinessContactUs";

const accordeonData: IAccordeonData[] = [
  {
    title: "How do I start the process to rent a taxi car?",
    content:
      "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
  },
  {
    title: "What are the requirements to rent a car from your fleet?",
    content:
      "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
  },
  {
    title: "Are there different types of cars available for rent?",
    content:
      "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
  },
  {
    title: "What is included in the rental fee?",
    content:
      "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
  },
  {
    title:
      "How is the rental duration calculated, and what are the terms for extending a rental?",
    content:
      "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
  }
];

const FAQPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>FAQs</h1>
          <p className={styles.description}>
            Have questions? Here you’ll find the answers most valued by our
            partners, along with access to step-by-step instructions and
            support.
          </p>
        </div>
        <img className={styles.img} src={CarImg} />
      </div>
      <FAQ cls={styles.faq} maxWidth={"none"} questions={accordeonData} />
      <BusinessContactUs />
    </div>
  );
};

export default FAQPage;
