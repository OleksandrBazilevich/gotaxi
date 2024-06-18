import { useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import { FC } from "react";
import BreadcrumbItem from "./BreadcrumbsItem";

export interface Breadcrumb {
  text: string;
  href?: string;
}

interface IBreadcrumbsProps {
  items: Breadcrumb[];
}

const Breadcrumbs: FC<IBreadcrumbsProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <BreadcrumbItem
          key={index}
          text={item.text}
          href={item.href}
          isLast={index === items.length - 1}
        />
      ))}
    </nav>
  );
};

export default Breadcrumbs;
