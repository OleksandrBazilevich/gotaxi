import { FC } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  MapIcon,
  TwitterIcon,
  YoutubeIcon
} from "../../../../../shared/assets/icons";
import AppLink from "../../../../../shared/ui/AppLink/AppLink";
import BurgerMenu from "../../../../../shared/ui/BurgerMenu/BurgerMenu";
import { Button } from "../../../../../shared/ui/Button";
import styles from "./Footer.module.scss";
import { classNames } from "../../../../../shared/lib";

interface IFooterProps {
  cls?: string;
}

const Footer: FC<IFooterProps> = ({ cls = "" }) => {
  return (
    <footer className={classNames(styles.footer, {}, [cls])}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <LogoIcon className={styles.logo} />
          <nav className={styles.nav}>
            <AppLink cls={styles.link} theme="gray" to={"/"}>
              For Drivers
            </AppLink>
            <AppLink cls={styles.link} theme="gray" to={"/"}>
              For Buseness
            </AppLink>
            <AppLink cls={styles.link} theme="gray" to={"/"}>
              Requirements
            </AppLink>
            <AppLink cls={styles.link} theme="gray" to={"/"}>
              Earnings
            </AppLink>
            <AppLink cls={styles.link} theme="gray" to={"/"}>
              Contacts
            </AppLink>
          </nav>
        </div>
        <div className={styles.wrapper}>
          <Button cls={styles.socialMedia} theme="outlined">
            <FacebookIcon />
          </Button>
          <Button cls={styles.socialMedia} theme="outlined">
            <InstagramIcon />
          </Button>
          <Button cls={styles.socialMedia} theme="outlined">
            <TwitterIcon />
          </Button>
          <Button cls={styles.socialMedia} theme="outlined">
            <YoutubeIcon />
          </Button>
        </div>
      </div>
      <div className={styles.rights}>© 2024 Gotaxi. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
