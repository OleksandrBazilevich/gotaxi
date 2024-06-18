import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

import styles from "./AppLink.module.scss";
import { classNames } from "../../lib";

type AppLinkTheme = "default" | "gray";

interface IAppLinkProps extends LinkProps {
  cls?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<PropsWithChildren<IAppLinkProps>> = ({
  children,
  cls = "",
  theme = "default",
  ...props
}) => {
  return (
    <Link
      className={classNames(styles.link, {}, [cls, styles[theme]])}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AppLink;
