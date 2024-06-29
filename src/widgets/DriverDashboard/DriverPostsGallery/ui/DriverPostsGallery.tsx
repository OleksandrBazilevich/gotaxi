import { FC } from "react";
import styles from "./DriverPostsGallery.module.scss";
import DriverPostsGalleryItem, {
  IDriverPostsGalleryItem
} from "./DriverPostsGalleryItem/DriverPostsGalleryItem";

interface IDriverPostsGalleryProps {
  items: IDriverPostsGalleryItem[];
}

const DriverPostsGallery: FC<IDriverPostsGalleryProps> = ({ items }) => {
  return (
    <div className={styles.gallery}>
      {items.map((item) => (
        <DriverPostsGalleryItem
          //key
          avatar={item.avatar}
          fleetName={item.fleetName}
          fleetRating={item.fleetRating}
          img={item.img}
          name={item.name}
          year={item.year}
          fuel={item.fuel}
          mileage={item.mileage}
          rent={item.rent}
          deposit={item.deposit}
          fleetCommision={item.fleetCommision}
          commision={item.commision}
          engineVolume={item.engineVolume}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default DriverPostsGallery;
