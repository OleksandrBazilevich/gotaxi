import { useLocation } from "react-router-dom";
import { parseUrlForBreadcrumbs } from "../../shared/lib/parseUrlForBreadcrumbs";
import DashboardWrapper from "../../widgets/Dashboard/Wrapper/DashboardWrapper";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs";
import styles from "./RequestsPage.module.scss";
import RequestsDataTable from "../../widgets/Dashboard/DataTable/Requests/RequestsDataTable";

const RequestsPage = () => {
  const { pathname } = useLocation();
  const BreadcrumbsItems = parseUrlForBreadcrumbs(pathname);

  return (
    <DashboardWrapper>
      <Breadcrumbs items={BreadcrumbsItems} />
      <h3 className={styles.title}>Requests</h3>
      <RequestsDataTable />
    </DashboardWrapper>
  );
};

export default RequestsPage;
