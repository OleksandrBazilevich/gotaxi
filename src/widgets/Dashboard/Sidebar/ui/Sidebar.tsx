import { useLocation, useNavigate, useNavigation } from "react-router-dom";

import AvatarImage from "../../../../shared/assets/img/cardCar.png";
import { useState } from "react";
import {
  HomeIcon,
  PostsIcon,
  CalendarIcon,
  ReservationIcon,
  MessageIcon,
  LogoIcon,
  LogoShortIcon,
  SearchIcon,
  SettingsIcon,
  LeftIcon,
  ArrowLeftIcon
} from "../../../../shared/assets/icons";
import { classNames } from "../../../../shared/lib";
import AppLink from "../../../../shared/ui/AppLink/AppLink";
import Avatar from "../../../../shared/ui/Avatar/Avatar";
import Badge from "../../../../shared/ui/Badge/Badge";
import { Field } from "../../../../shared/ui/Field";

import styles from "./Sidebar.module.scss";
import { Button } from "../../../../shared/ui/Button";

interface IMenuItem {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  notificationNumber: number;
  link: string;
}

const MenuItemsBusiness: IMenuItem[] = [
  {
    Icon: HomeIcon,
    link: "/Warshaw_Taxi_Fleet/dashboard",
    name: "Dashboard",
    notificationNumber: 0
  },
  {
    Icon: PostsIcon,
    link: "/Warshaw_Taxi_Fleet/posts",
    name: "Posts",
    notificationNumber: 0
  },
  {
    Icon: CalendarIcon,
    link: "/Warshaw_Taxi_Fleet/calendar",
    name: "Calendar",
    notificationNumber: 0
  },
  {
    Icon: ReservationIcon,
    link: "/Warshaw_Taxi_Fleet/requests",
    name: "Requests",
    notificationNumber: 0
  },
  {
    Icon: MessageIcon,
    link: "/Warshaw_Taxi_Fleet/messages",
    name: "Messages",
    notificationNumber: 100
  }
];

const MenuItemsDriver: IMenuItem[] = [
  {
    Icon: HomeIcon,
    link: "/driver/Alexsandr_Kary/dashboard",
    name: "Dashboard",
    notificationNumber: 0
  },
  {
    Icon: PostsIcon,
    link: "/driver/Alexsandr_Karu/posts",
    name: "Posts",
    notificationNumber: 0
  }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isDriver = pathname.includes("driver");

  return (
    <div className={classNames(styles.sidebar, { [styles.closed]: !isOpen })}>
      <div>
        {isOpen ? (
          <LogoIcon onClick={() => navigate("/")} />
        ) : (
          <LogoShortIcon onClick={() => navigate("/")} />
        )}
        {isOpen ? (
          <Field
            cls={styles.search}
            value=""
            placeholder="Search"
            iconPosition="end"
            Icon={SearchIcon}
          />
        ) : (
          <Button
            onClick={() => setIsOpen(true)}
            theme="outlined"
            cls={styles.btn}
          >
            <SearchIcon />
          </Button>
        )}
        {isDriver
          ? MenuItemsDriver.map((item) => (
              <div className={styles.menu}>
                <div
                  onClick={() => navigate(item.link)}
                  className={classNames(styles.menuItem, {
                    [styles.active]: pathname.includes(item.link)
                  })}
                >
                  <div className={styles.itemContainer}>
                    <item.Icon className={styles.icon} /> {isOpen && item.name}
                  </div>
                  {isOpen && item.notificationNumber != 0 && (
                    <Badge theme="negative">
                      {item.notificationNumber > 99
                        ? "99+"
                        : item.notificationNumber}
                    </Badge>
                  )}
                </div>
              </div>
            ))
          : MenuItemsBusiness.map((item) => (
              <div className={styles.menu}>
                <div
                  onClick={() => navigate(item.link)}
                  className={classNames(styles.menuItem, {
                    [styles.active]: pathname.includes(item.link)
                  })}
                >
                  <div className={styles.itemContainer}>
                    <item.Icon className={styles.icon} /> {isOpen && item.name}
                  </div>
                  {isOpen && item.notificationNumber != 0 && (
                    <Badge theme="negative">
                      {item.notificationNumber > 99
                        ? "99+"
                        : item.notificationNumber}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
      </div>
      <div>
        <div
          onClick={() =>
            navigate(
              isDriver
                ? "/driver/Aleksandr_Karu/settings"
                : "/Warsaw_Taxi_Fleet/settings"
            )
          }
          className={classNames(styles.menuItem, {
            [styles.active]: pathname.includes("/settings")
          })}
        >
          <div className={styles.itemContainer}>
            <SettingsIcon className={styles.icon} /> {isOpen && "Settings"}
          </div>
        </div>
        {isOpen ? (
          <div className={styles.wrapper}>
            <Avatar img={AvatarImage} />
            <div className={styles.container}>
              <div className={styles.name}>
                Warsaw Car Fleet
                <LeftIcon className={styles.profileIcon} />
              </div>
              <AppLink to={"/"}>Log out</AppLink>
            </div>
          </div>
        ) : (
          <Avatar img={AvatarImage} />
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          cls={classNames(styles.btn, { [styles.closed]: !isOpen })}
          theme="default"
        >
          <ArrowLeftIcon />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
