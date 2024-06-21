import { FC, PropsWithChildren } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./DashboardLayout.module.scss";
import useWindowDimensions from "../../../shared/lib/useWindowDimensions";
import {
  CalendarIcon,
  EarningsIcon,
  HistoryIcon,
  HomeIcon,
  LogoIcon,
  MessageIcon,
  PostsIcon,
  SettingsIcon
} from "../../../shared/assets/icons";
import Avatar from "../../../shared/ui/Avatar/Avatar";
import { classNames } from "../../../shared/lib";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();
  const isDriver = pathname.includes("driver");
  const navigate = useNavigate();

  return width < 550 ? (
    <div className={styles.mobileLayout}>
      <div className={styles.header}>
        <LogoIcon className={styles.logo} />
        <div className={styles.wrapper}>
          <div className={styles.message}>
            <MessageIcon />
          </div>
          <Avatar />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <div
          className={styles.navItem}
          onClick={() =>
            navigate(
              isDriver
                ? "/driver/Aleksandr_Karu/dashboard"
                : "/Warsaw_Taxi_Fleet/dashboard"
            )
          }
        >
          <HomeIcon
            className={classNames(styles.navIcon, {
              [styles.active]: pathname.includes("dashboard")
            })}
          />
          Dashboard
        </div>
        <div
          className={styles.navItem}
          onClick={() =>
            navigate(
              isDriver
                ? "/driver/Aleksandr_Karu/earnings"
                : "/Warsaw_Taxi_Fleet/earnings"
            )
          }
        >
          <EarningsIcon
            className={classNames(styles.navIcon, {
              [styles.active]: pathname.includes("earnings")
            })}
          />
          Earnings
        </div>
        <div
          className={styles.navItem}
          onClick={() =>
            navigate(
              isDriver
                ? "/driver/Aleksandr_Karu/history"
                : "/Warsaw_Taxi_Fleet/history"
            )
          }
        >
          <HistoryIcon
            className={classNames(styles.navIcon, {
              [styles.active]: pathname.includes("/history")
            })}
          />
          History
        </div>
        <div
          className={styles.navItem}
          onClick={() =>
            navigate(
              isDriver
                ? "/driver/Aleksandr_Karu/settings"
                : "/Warsaw_Taxi_Fleet/settings"
            )
          }
        >
          <SettingsIcon
            className={classNames(styles.navIcon, {
              [styles.active]: pathname.includes("settings")
            })}
          />
          Settings
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
