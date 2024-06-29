import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../shared/ui/Breadcrumbs/Breadcrumbs";
import DashboardWrapper from "../../widgets/Dashboard/Wrapper/ui/DashboardWrapper";
import styles from "./DriverPostsPage.module.scss";
import { parseUrlForBreadcrumbs } from "../../shared/lib/parseUrlForBreadcrumbs";
import { Field } from "../../shared/ui/Field";
import { GalleryIcon, SearchIcon, TableIcon } from "../../shared/assets/icons";
import { Button } from "../../shared/ui/Button";
import { ChangeEvent, useState } from "react";
import DriverPostsGallery from "../../widgets/DriverDashboard/DriverPostsGallery/ui/DriverPostsGallery";
import { IDriverPostsGalleryItem } from "../../widgets/DriverDashboard/DriverPostsGallery/ui/DriverPostsGalleryItem/DriverPostsGalleryItem";
import { DriverPostsDataTable } from "../../widgets/DriverDashboard/DataTables";
import { FilterDropDown } from "../../entities/Car/FilterDropDown";

const CarsData: IDriverPostsGalleryItem[] = [
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Opel Astra",
    year: 2006,
    type: "economy",
    commision: 0,
    deposit: 0,
    engineVolume: 1.5,
    fleetCommision: 20,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 100000,
    rent: 10
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Hyundai Sonata",
    year: 2001,
    type: "economy",
    commision: 0,
    deposit: 150,
    engineVolume: 1.2,
    fleetCommision: 1,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 140000,
    rent: 200
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Kia Optima",
    year: 2018,
    type: "economy",
    commision: 10,
    deposit: 99,
    engineVolume: 2,
    fleetCommision: 16,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 120000,
    rent: 10
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Toyota Camry",
    year: 2016,
    type: "economy",
    commision: 17,
    deposit: 100,
    engineVolume: 0.8,
    fleetCommision: 9,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 200000,
    rent: 100
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Opel Astra",
    year: 2006,
    type: "economy",
    commision: 0,
    deposit: 0,
    engineVolume: 1.5,
    fleetCommision: 20,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 100000,
    rent: 10
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Toyota Camry",
    year: 2016,
    type: "comfort",
    commision: 17,
    deposit: 100,
    engineVolume: 0.8,
    fleetCommision: 9,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 200000,
    rent: 100
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Hyundai Sonata",
    year: 2001,
    type: "comfort",
    commision: 0,
    deposit: 150,
    engineVolume: 1.2,
    fleetCommision: 1,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 140000,
    rent: 200
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Kia Optima",
    year: 2018,
    type: "comfort",
    commision: 10,
    deposit: 99,
    engineVolume: 2,
    fleetCommision: 16,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 120000,
    rent: 10
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Toyota Camry",
    year: 2016,
    type: "comfort",
    commision: 17,
    deposit: 100,
    engineVolume: 0.8,
    fleetCommision: 9,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 200000,
    rent: 100
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Opel Astra",
    year: 2006,
    type: "comfort",
    commision: 0,
    deposit: 0,
    engineVolume: 1.5,
    fleetCommision: 20,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 100000,
    rent: 10
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Hyundai Sonata",
    year: 2001,
    type: "business",
    commision: 0,
    deposit: 150,
    engineVolume: 1.2,
    fleetCommision: 1,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 140000,
    rent: 200
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Kia Optima",
    year: 2018,
    type: "business",
    commision: 10,
    deposit: 99,
    engineVolume: 2,
    fleetCommision: 16,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 120000,
    rent: 10
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Toyota Camry",
    year: 2016,
    type: "business",
    commision: 17,
    deposit: 100,
    engineVolume: 0.8,
    fleetCommision: 9,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 200000,
    rent: 100
  },
  {
    avatar: "/",
    fleetName: "Warsaw Car Fleet",
    fleetRating: 5,
    name: "Opel Astra",
    year: 2006,
    type: "business",
    commision: 0,
    deposit: 0,
    engineVolume: 1.5,
    fleetCommision: 20,
    fuel: "Gasoline/Gas",
    img: "/",
    mileage: 100000,
    rent: 10
  }
];

const DriverPostsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { pathname } = useLocation();
  const BreadcrumbsItems = parseUrlForBreadcrumbs(pathname);
  const [mode, setMode] = useState<"table" | "gallery">("gallery");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCarsData = CarsData.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardWrapper>
      <Breadcrumbs items={BreadcrumbsItems} />
      <h3 className={styles.title}>Posts</h3>
      <div className={styles.container}>
        <Field
          placeholder="Search"
          iconPosition="end"
          Icon={SearchIcon}
          cls={styles.search}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className={styles.actions}>
          <div className={styles.buttonsContainer}>
            <Button
              cls={styles.btn}
              theme={mode === "gallery" ? "primary" : "default"}
              onClick={() => setMode("gallery")}
            >
              <GalleryIcon />
            </Button>
            <Button
              cls={styles.btn}
              theme={mode === "table" ? "primary" : "default"}
              onClick={() => setMode("table")}
            >
              <TableIcon />
            </Button>
          </div>
          <FilterDropDown />
        </div>
      </div>
      {mode === "gallery" ? (
        <DriverPostsGallery items={filteredCarsData} />
      ) : (
        <DriverPostsDataTable
          data={filteredCarsData.map((item) => ({
            avatar: item.avatar,
            commision: item.commision,
            deposit: item.deposit,
            engineVolume: item.engineVolume,
            fleetName: item.fleetName,
            fleetRating: item.fleetRating,
            fuel: item.fuel,
            img: item.img,
            mileage: item.mileage,
            name: item.name,
            year: item.year
          }))}
        />
      )}
    </DashboardWrapper>
  );
};

export default DriverPostsPage;
