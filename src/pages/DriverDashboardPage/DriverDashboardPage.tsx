import { useLocation } from "react-router-dom";
import DashboardWrapper from "../../widgets/Dashboard/Wrapper/DashboardWrapper";
import styles from "./DriverDashboardPage.module.scss";
import { parseUrlForBreadcrumbs } from "../../shared/lib/parseUrlForBreadcrumbs";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs";
import DriverDashboardCard, {
  IDriverDashboardCardProps
} from "../../entities/Dashboard/DriverDashboardCard/DriverDashboardCard";
import DriverDashboardDataTable from "../../widgets/DriverDashboard/DataTables/DriverDashboardDataTable/DriverDashboardDataTable";
import CurrentReservation from "../../entities/Car/CurrentReservation/CurrentReservation";
import { addMonths } from "date-fns";
import { useState } from "react";

const DriverDashboardPage = () => {
  const [isShowing, setIsShowing] = useState(false);
  const DriverDashboardCardData: IDriverDashboardCardProps[] = [
    {
      name: "Current reservation",
      title: "Toyota Camry",
      description: "28 days (End: 18 June 2024)",
      icon: true
    },
    {
      name: "Upcoming payment",
      title: "$38.00",
      description: "Weekly (26 May 2024)"
    },
    {
      name: "Reserved cars",
      title: "7"
    },
    {
      name: "Total spent",
      title: "$892.00"
    }
  ];
  const { pathname } = useLocation();
  const BreadcrumbsItems = parseUrlForBreadcrumbs(pathname);
  console.log(isShowing);
  return (
    <DashboardWrapper>
      <Breadcrumbs items={BreadcrumbsItems} />
      <h3 className={styles.title}>Dashboard</h3>
      <div className={styles.cardContainer}>
        {DriverDashboardCardData.map((card) => (
          <DriverDashboardCard
            name={card.name}
            title={card.title}
            description={card.description}
            icon={card.icon}
            key={card.name}
            onClick={card.icon ? () => setIsShowing(true) : () => {}}
          />
        ))}
      </div>
      <div className={styles.container}>
        <CurrentReservation
          show={isShowing}
          engineVolume={1.2}
          fuel="Gasoline/Gas"
          mileage={140000}
          name="Kia Optima"
          img="/"
          period={{
            start: new Date(),
            end: addMonths(new Date(), 1)
          }}
          rent={92}
          year={2018}
        />
        <DriverDashboardDataTable />
      </div>
    </DashboardWrapper>
  );
};

export default DriverDashboardPage;
