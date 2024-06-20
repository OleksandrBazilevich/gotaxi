import CarCard, { ICarCardProps } from "../../entities/Car/CarCard/ui/CarCard";
import Bullet, { IBulletProps } from "../../shared/ui/Bullet/Bullet";
import Banner from "../../widgets/Main/Banner/ui/Banner";

import CarImg from "../../shared/assets/img/cardCar.png";

import styles from "./HomePage.module.scss";
import Tabs from "../../shared/ui/Tabs/Tabs";
import Tab from "../../shared/ui/Tabs/Tab";
import { CarIcon, MapIcon } from "../../shared/assets/icons";
import { Button } from "../../shared/ui/Button";
import CarGallery from "../../widgets/Car/ui/CarGallery/CarGallery";
import ContactUs from "../../widgets/Main/ContactUs/ui/ContactUs";
import FAQ from "../../widgets/Main/FAQ/ui/FAQ";
import {
  IAccordeonData,
  IAccordeonItemProps
} from "../../shared/ui/Accordeon/AccordeonItem";
import Accordeon from "../../shared/ui/Accordeon/Accordeon";
import Wrapper from "../../shared/ui/Wrapper/Wrapper";

const HomePage = () => {
  const bulletData: IBulletProps[] = [
    {
      title: "Select your car",
      description: "Choose a car on the website and leave your phone number."
    },
    {
      title: "Coordinate details",
      description: "When the fleet calls you, agree on everything."
    },
    {
      title: "Visit the fleet",
      description: "See the fleet location on the map and arrive there."
    },
    {
      title: "Sign the contract",
      description: "Sign the contract in writing or online."
    }
  ];

  const CarsData: ICarCardProps[] = [
    {
      name: "Opel Astra",
      year: 2006,
      type: "economy",
      commisiom: 0,
      deposit: 0,
      engineVolume: 1.5,
      fleetCommision: 20,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 100000,
      rent: 10
    },

    {
      name: "Hyundai Sonata",
      year: 2001,
      type: "economy",
      commisiom: 0,
      deposit: 150,
      engineVolume: 1.2,
      fleetCommision: 1,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 140000,
      rent: 200
    },
    {
      name: "Kia Optima",
      year: 2018,
      type: "economy",
      commisiom: 10,
      deposit: 99,
      engineVolume: 2,
      fleetCommision: 16,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 120000,
      rent: 10
    },
    {
      name: "Toyota Camry",
      year: 2016,
      type: "economy",
      commisiom: 17,
      deposit: 100,
      engineVolume: 0.8,
      fleetCommision: 9,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 200000,
      rent: 100
    },
    {
      name: "Opel Astra",
      year: 2006,
      type: "economy",
      commisiom: 0,
      deposit: 0,
      engineVolume: 1.5,
      fleetCommision: 20,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 100000,
      rent: 10
    },
    {
      name: "Toyota Camry",
      year: 2016,
      type: "comfort",
      commisiom: 17,
      deposit: 100,
      engineVolume: 0.8,
      fleetCommision: 9,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 200000,
      rent: 100
    },
    {
      name: "Hyundai Sonata",
      year: 2001,
      type: "comfort",
      commisiom: 0,
      deposit: 150,
      engineVolume: 1.2,
      fleetCommision: 1,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 140000,
      rent: 200
    },
    {
      name: "Kia Optima",
      year: 2018,
      type: "comfort",
      commisiom: 10,
      deposit: 99,
      engineVolume: 2,
      fleetCommision: 16,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 120000,
      rent: 10
    },
    {
      name: "Toyota Camry",
      year: 2016,
      type: "comfort",
      commisiom: 17,
      deposit: 100,
      engineVolume: 0.8,
      fleetCommision: 9,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 200000,
      rent: 100
    },
    {
      name: "Opel Astra",
      year: 2006,
      type: "comfort",
      commisiom: 0,
      deposit: 0,
      engineVolume: 1.5,
      fleetCommision: 20,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 100000,
      rent: 10
    },
    {
      name: "Hyundai Sonata",
      year: 2001,
      type: "business",
      commisiom: 0,
      deposit: 150,
      engineVolume: 1.2,
      fleetCommision: 1,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 140000,
      rent: 200
    },
    {
      name: "Kia Optima",
      year: 2018,
      type: "business",
      commisiom: 10,
      deposit: 99,
      engineVolume: 2,
      fleetCommision: 16,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 120000,
      rent: 10
    },
    {
      name: "Toyota Camry",
      year: 2016,
      type: "business",
      commisiom: 17,
      deposit: 100,
      engineVolume: 0.8,
      fleetCommision: 9,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 200000,
      rent: 100
    },
    {
      name: "Opel Astra",
      year: 2006,
      type: "business",
      commisiom: 0,
      deposit: 0,
      engineVolume: 1.5,
      fleetCommision: 20,
      fuel: "Gasoline/Gas",
      img: "/",
      location: "Warsaw, Poland",
      mileage: 100000,
      rent: 10
    }
  ];

  const accordeonData: IAccordeonData[] = [
    {
      title: "How do I start the process to rent a taxi car?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    },
    {
      title: "What are the requirements to rent a car from your fleet?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    },
    {
      title: "Are there different types of cars available for rent?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    },
    {
      title: "What is included in the rental fee?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    },
    {
      title:
        "How is the rental duration calculated, and what are the terms for extending a rental?",
      content:
        "To rent a car, you must have a valid driver's license, be at least 21 years old, and pass a background check. You'll also need to provide a valid ID and possibly a proof of address. No deposit is required to start renting."
    }
  ];

  return (
    <>
      <Banner />
      <Wrapper>
        <h2 className={styles.dark}>Get on the road</h2>
        <h2 className={styles.primary}>in 4 easy steps</h2>
        <p className={styles.subtitle}>
          Rent a car quickly and effortlessly, and start earning today!
        </p>
      </Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {bulletData.map(({ title, description }) => (
            <Bullet title={title} description={description} />
          ))}
        </div>
      </div>
      <CarGallery cars={CarsData} />
      <ContactUs />
      <div className={styles.wrapper}>
        <FAQ
          title="FAQ"
          description="We’ve collected the answers for the most common and popular questions
          from our drivers."
          questions={accordeonData}
        />
      </div>
    </>
  );
};

export default HomePage;
