import {
  Children,
  FC,
  PropsWithChildren,
  isValidElement,
  useState
} from "react";
import styles from "./Tabs.module.scss";
import { classNames } from "../../lib";
import { Button } from "../Button";

interface ITabsProps {
  cls?: string;
}

const Tabs: FC<PropsWithChildren<ITabsProps>> = ({ children, cls = "" }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className={classNames(styles.tabList, {}, [cls])}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return null;
          const { label, Icon } = child.props as any;
          return (
            <Button
              theme={index === activeTab ? "inverted" : "outlined"}
              cls={classNames(styles.tab, {}, [])}
              onClick={() => handleTabClick(index)}
            >
              {Icon && <Icon className={styles.tabIcon} />}
              {label}
            </Button>
          );
        })}
      </div>
      <div className={styles.tabContent}>
        {Children.toArray(children)[activeTab]}
      </div>
    </>
  );
};

export default Tabs;
