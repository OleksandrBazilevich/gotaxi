import { FC } from "react";
import { classNames } from "../../shared/lib";
import styles from "./Plan.module.scss";
import { Button } from "../../shared/ui/Button";
import PlanItem, { IPlanItemProps } from "./PlanItem";

interface IPlanProps {
  showPlan: boolean;
}

const plans: IPlanItemProps[] = [
  {
    name: "standart",
    description: [
      {
        text: "10 Posts",
        active: true
      },
      {
        text: "24/7 Support",
        active: true
      },
      {
        text: "Calendar statistics",
        active: true
      },
      {
        text: "Promotion",
        active: false
      }
    ],
    isBestValue: false,
    price: 15,
    button: (
      <Button cls={styles.btn} fullWidth theme="primaryOutlined">
        Continue
      </Button>
    )
  },
  {
    name: "Plus",
    description: [
      {
        text: "50 Posts",
        active: true
      },
      {
        text: "24/7 Support",
        active: true
      },
      {
        text: "Calendar statistics",
        active: true
      },
      {
        text: "Promotion",
        active: true
      }
    ],
    isBestValue: true,
    price: 25,
    button: (
      <Button cls={styles.btn} fullWidth theme="primary">
        Start Now
      </Button>
    )
  },
  {
    name: "Enterprise",
    description: [
      {
        text: "> 100 Posts",
        active: true
      },
      {
        text: "24/7 Support",
        active: true
      },
      {
        text: "Calendar statistics",
        active: true
      },
      {
        text: "Promotion",
        active: true
      }
    ],
    isBestValue: true,
    price: "custom",
    button: (
      <Button cls={styles.btn} fullWidth theme="outlined">
        Request a quote
      </Button>
    )
  }
];

const Plan: FC<IPlanProps> = ({ showPlan }) => {
  return (
    <div
      className={classNames(styles.plan, {
        [styles.showPlan]: showPlan
      })}
    >
      <div className={styles.planContent}>
        <h3 className={styles.planTitle}>Select a plan</h3>
        <p className={styles.planDescription}>
          Seems your plan has been deactivated or you have used all free posts
          to promote your car. Please, select a plan to continue creating a
          post.
        </p>
        <div className={styles.planContainer}>
          {plans.map((item) => (
            <PlanItem
              button={item.button}
              description={item.description}
              isBestValue={item.isBestValue}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plan;
