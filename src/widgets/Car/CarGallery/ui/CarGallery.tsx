import { FC, useState } from "react";
import CarCard, {
  ICarCardProps
} from "../../../../entities/Car/CarCard/ui/CarCard";

import { CarIcon } from "../../../../shared/assets/icons";
import useWindowDimensions from "../../../../shared/lib/useWindowDimensions";
import { Button } from "../../../../shared/ui/Button";
import Tab from "../../../../shared/ui/Tabs/Tab";
import Tabs from "../../../../shared/ui/Tabs/Tabs";

import styles from "./CarGallery.module.scss";
import ReservationCard from "../../ReservationCard/ui/ReservationCard";
import { FilterDrawer } from "../../../../features/Car/FilterDrawer";
import { MapDrawer } from "../../../../features/Map/MapDrawer";

interface ICarGallery {
  cars: ICarCardProps[];
}

const CarGallery: FC<ICarGallery> = ({ cars }) => {
  const [limit, setLimit] = useState(6);
  const { width } = useWindowDimensions();

  const increaseLimit = () => {
    if (width <= 375) setLimit(limit + 6);
  };

  return (
    <div className={styles.carsGallery}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.text}>
            <h4>Explore cars of business class</h4>
            <p>
              More than 150+ cars in all fleets. Choose any of them and start
              making money.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <MapDrawer />
            <FilterDrawer />
          </div>
        </div>
        <Tabs>
          <Tab label="All classes">
            <div className={styles.gallery}>
              {cars.slice(0, limit).map((car) => {
                return (
                  <ReservationCard
                    type={car.type}
                    commisiom={car.commisiom}
                    deposit={car.deposit}
                    engineVolume={car.engineVolume}
                    fleetCommision={car.fleetCommision}
                    fuel={car.fuel}
                    img={car.img}
                    location={car.location}
                    mileage={car.mileage}
                    name={car.name}
                    rent={car.rent}
                    year={car.year}
                  />
                );
              })}
            </div>
            {limit <= cars.length && (
              <Button
                onClick={increaseLimit}
                cls={styles.loadMore}
                theme="primaryOutlined"
              >
                Load more
              </Button>
            )}
          </Tab>
          <Tab label="Economy" Icon={CarIcon}>
            <div className={styles.gallery}>
              {cars
                .filter((car) => car.type === "economy")
                .map((car) => {
                  return (
                    <ReservationCard
                      type={car.type}
                      commisiom={car.commisiom}
                      deposit={car.deposit}
                      engineVolume={car.engineVolume}
                      fleetCommision={car.fleetCommision}
                      fuel={car.fuel}
                      img={car.img}
                      location={car.location}
                      mileage={car.mileage}
                      name={car.name}
                      rent={car.rent}
                      year={car.year}
                    />
                  );
                })}
            </div>
            {limit <= cars.length && (
              <Button
                onClick={increaseLimit}
                cls={styles.loadMore}
                theme="primaryOutlined"
              >
                Load more
              </Button>
            )}
          </Tab>
          <Tab label="Comfort" Icon={CarIcon}>
            <div className={styles.gallery}>
              {cars
                .filter((car) => car.type === "comfort")
                .map((car) => {
                  return (
                    <ReservationCard
                      type={car.type}
                      commisiom={car.commisiom}
                      deposit={car.deposit}
                      engineVolume={car.engineVolume}
                      fleetCommision={car.fleetCommision}
                      fuel={car.fuel}
                      img={car.img}
                      location={car.location}
                      mileage={car.mileage}
                      name={car.name}
                      rent={car.rent}
                      year={car.year}
                    />
                  );
                })}
            </div>
            {limit <= cars.length && (
              <Button
                onClick={increaseLimit}
                cls={styles.loadMore}
                theme="primaryOutlined"
              >
                Load more
              </Button>
            )}
          </Tab>
          <Tab label="Business" Icon={CarIcon}>
            <div className={styles.gallery}>
              {cars
                .filter((car) => car.type === "business")
                .map((car) => {
                  return (
                    <ReservationCard
                      type={car.type}
                      commisiom={car.commisiom}
                      deposit={car.deposit}
                      engineVolume={car.engineVolume}
                      fleetCommision={car.fleetCommision}
                      fuel={car.fuel}
                      img={car.img}
                      location={car.location}
                      mileage={car.mileage}
                      name={car.name}
                      rent={car.rent}
                      year={car.year}
                    />
                  );
                })}
            </div>
            {limit <= cars.length && (
              <Button
                onClick={increaseLimit}
                cls={styles.loadMore}
                theme="primaryOutlined"
              >
                Load more
              </Button>
            )}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default CarGallery;
