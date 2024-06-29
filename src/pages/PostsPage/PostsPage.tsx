import { useLocation } from "react-router-dom";
import styles from "./PostsPage.module.scss";
import { parseUrlForBreadcrumbs } from "../../shared/lib/parseUrlForBreadcrumbs";
import DashboardWrapper from "../../widgets/Dashboard/Wrapper/ui/DashboardWrapper";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs";
import PostsDataTable from "../../widgets/Dashboard/DataTable/Posts/PostsDataTable";

const PostsPage = () => {
  const { pathname } = useLocation();
  const BreadcrumbsItems = parseUrlForBreadcrumbs(pathname);

  return (
    <DashboardWrapper>
      <Breadcrumbs items={BreadcrumbsItems} />
      <h3 className={styles.title}>Posts</h3>
      <PostsDataTable />
    </DashboardWrapper>
  );
};

export default PostsPage;
