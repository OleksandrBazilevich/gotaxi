import { FC, PropsWithChildren } from "react";

import styles from "./MainLayout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
