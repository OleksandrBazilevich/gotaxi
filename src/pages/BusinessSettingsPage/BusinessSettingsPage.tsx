import { useLocation } from "react-router-dom";
import DashboardWrapper from "../../widgets/Dashboard/Wrapper/ui/DashboardWrapper";
import styles from "./BusinessSettingsPage.module.scss";
import { parseUrlForBreadcrumbs } from "../../shared/lib/parseUrlForBreadcrumbs";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs";
import Tabs from "../../shared/ui/Tabs/Tabs";
import Tab from "../../shared/ui/Tabs/Tab";

import PaymentsDataTable from "../../widgets/Settings/Business/Payments/PaymentsTable/ui/PaymentsTable";
import { AddressForm } from "../../widgets/Settings/Address";
import { BasicDetailsForm } from "../../widgets/Settings/Business/General/BasicDetails";
import { VATForm } from "../../widgets/Settings/Business/General/VAT";
import { CardDetailsForm } from "../../widgets/Settings/Business/Payments/CardDetailsForm";
import { ChangeContactForm } from "../../widgets/Settings/Security/ChangeContact";
import { ChangePasswordForm } from "../../widgets/Settings/Security/ChangePassword";

const BusinessSettingsPage = () => {
  const { pathname } = useLocation();
  const BreadcrumbsItems = parseUrlForBreadcrumbs(pathname);
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs items={BreadcrumbsItems} />
      <h3 className={styles.title}>Settings</h3>
      <Tabs cls={styles.tabs}>
        <Tab label="General">
          <div className={styles.container}>
            <div className={styles.leftside}>
              <h5>Basic details</h5>
            </div>
            <BasicDetailsForm />
          </div>
          <div className={styles.container}>
            <div className={styles.leftside}>
              <h5>Address</h5>
            </div>
            <AddressForm />
          </div>
          <div className={styles.container}>
            <div className={styles.leftside}>
              <h5>NIP/VAT</h5>
            </div>
            <VATForm />
          </div>
        </Tab>
        <Tab label="Billing & Payment">
          <div className={styles.container}>
            <div className={styles.leftside}>
              <h5>Card details</h5>
            </div>
            <CardDetailsForm />
          </div>
          <PaymentsDataTable />
        </Tab>
        <Tab label="Security">
          <div className={styles.container}>
            <div className={styles.leftside}>
              <h5>Password details</h5>
            </div>
            <ChangePasswordForm />
          </div>
          <div className={styles.container}>
            <div className={styles.leftside}>
              <h5>Contact details</h5>
            </div>
            <ChangeContactForm />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default BusinessSettingsPage;
