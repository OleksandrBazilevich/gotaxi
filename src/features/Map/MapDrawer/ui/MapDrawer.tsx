import { useState } from "react";
import { MapIcon } from "../../../../shared/assets/icons";
import { Button } from "../../../../shared/ui/Button";
import Drawer from "../../../../shared/ui/Drawer/Drawer";
import styles from "./MapDrawer.module.scss";
import "leaflet/dist/leaflet.css";

const MapDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        cls={styles.btn}
        theme="primaryOutlined"
      >
        <MapIcon className={styles.icon} /> Map
      </Button>
      <Drawer
        title="Find a car on the map"
        description="All cars are placed on the map, so you can easily find any of them nearby you."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchor="bottom"
      ></Drawer>
    </>
  );
};

export default MapDrawer;
