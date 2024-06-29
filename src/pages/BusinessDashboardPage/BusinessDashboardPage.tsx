import { useLocation } from "react-router-dom";
import DashboardCard, {
  IDashboardCardProps
} from "../../entities/Dashboard/Business/DashboardCard/ui/DashboardCard";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs";
import DashboardWrapper from "../../widgets/Dashboard/Wrapper/ui/DashboardWrapper";
import styles from "./BusinessDashboardPage.module.scss";
import { parseUrlForBreadcrumbs } from "../../shared/lib/parseUrlForBreadcrumbs";
import DashboardDataTable from "../../widgets/Dashboard/DataTable/Main/DashboardDataTable";
const BusinessDashboardPage = () => {
  const { pathname } = useLocation();
  const BreadcrumbsItems = parseUrlForBreadcrumbs(pathname);

  const DashboardCardData: IDashboardCardProps[] = [
    {
      chartData: [{ value: 2 }, { value: 5 }, { value: 3 }, { value: 7 }],
      difference: "20",
      isGrow: true,
      title: "Available cars",
      totalNumber: 82
    },
    {
      chartData: [{ value: 5 }, { value: 2 }, { value: 3 }, { value: 1 }],
      difference: "22%",
      isGrow: false,
      title: "Reserved cars",
      totalNumber: 22
    },
    {
      chartData: [{ value: 2 }, { value: 5 }, { value: 3 }, { value: 7 }],
      difference: "44%",
      isGrow: true,
      title: "Total views",
      totalNumber: 800
    },
    {
      chartData: [],
      difference: "",
      isGrow: false,
      title: "Total clicks",
      totalNumber: 0
    }
  ];
  return (
    <DashboardWrapper>
      <Breadcrumbs items={BreadcrumbsItems} />
      <h3 className={styles.title}>Dashboard</h3>
      <div className={styles.cardContainer}>
        {DashboardCardData.map((card) => (
          <DashboardCard
            chartData={card.chartData}
            difference={card.difference}
            isGrow={card.isGrow}
            title={card.title}
            totalNumber={card.totalNumber}
          />
        ))}
      </div>
      <DashboardDataTable />
    </DashboardWrapper>
  );
};

export default BusinessDashboardPage;
