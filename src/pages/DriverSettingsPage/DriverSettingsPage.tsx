import { useLocation } from "react-router-dom";
import styles from "./DriverSettingsPage.module.scss";
import { parseUrlForBreadcrumbs } from "../../shared/lib/parseUrlForBreadcrumbs";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs";
import Tab from "../../shared/ui/Tabs/Tab";
import Tabs from "../../shared/ui/Tabs/Tabs";
import { AddressForm } from "../../widgets/Settings/Address";
import { BasicDetailsForm } from "../../widgets/Settings/Business/General/BasicDetails";
import { DriverLicenseForm } from "../../widgets/Settings/Driver/General/DriverLicense";
import { ChangeContactForm } from "../../widgets/Settings/Security/ChangeContact";
import { ChangePasswordForm } from "../../widgets/Settings/Security/ChangePassword";

const DriverSettingsPage = () => {
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
              <h5>Driver license</h5>
            </div>
            <DriverLicenseForm />
          </div>
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

export default DriverSettingsPage;
