import { Link, useLocation, useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";
import { LogoIcon, MapIcon } from "../../../../../shared/assets/icons";
import AppLink from "../../../../../shared/ui/AppLink/AppLink";
import BurgerMenu from "../../../../../shared/ui/BurgerMenu/BurgerMenu";
import { Button } from "../../../../../shared/ui/Button";
import { classNames } from "../../../../../shared/lib";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <LogoIcon onClick={() => navigate("/")} className={styles.logo} />
        <nav className={styles.nav}>
          <AppLink
            cls={classNames(styles.link, {
              [styles.active]: pathname.includes("/privacy_policy")
            })}
            theme="gray"
            to={"/privacy_policy"}
          >
            For Drivers
          </AppLink>
          <AppLink
            cls={classNames(styles.link, {
              [styles.active]: pathname.includes("/user_agreement")
            })}
            theme="gray"
            to={"/user_agreement"}
          >
            For Business
          </AppLink>
          <AppLink
            cls={classNames(styles.link, {
              [styles.active]: pathname.includes("/requirements")
            })}
            theme="gray"
            to={"/requirements"}
          >
            Requirements
          </AppLink>
          <AppLink
            cls={classNames(styles.link, {
              [styles.active]: pathname.includes("/faq")
            })}
            theme="gray"
            to={"/faq"}
          >
            FAQ
          </AppLink>
        </nav>
      </div>
      <BurgerMenu cls={styles.burgerMenu} />
      <div className={styles.wrapper}>
        <div className={styles.location}>
          <MapIcon className={styles.icon} /> Warsaw, Poland
        </div>
        <Button cls={styles.button} theme="primaryOutlined">
          Log in
        </Button>
        <Button>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
