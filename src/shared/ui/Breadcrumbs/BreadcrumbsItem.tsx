import { FC } from "react";
import styles from "./Breadcrumbs.module.scss";
import { CaretIcon, FolderIcon } from "../../assets/icons";

interface BreadcrumbItemProps {
  text: string;
  href?: string;
  isLast: boolean;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ text, href, isLast }) => {
  return (
    <>
      <div className={styles.breadcrumbItem}>
        <FolderIcon />
        <a href={href}>{text}</a>
      </div>
      {!isLast && <CaretIcon className={styles.caretIcon} />}
    </>
  );
};

export default BreadcrumbItem;
