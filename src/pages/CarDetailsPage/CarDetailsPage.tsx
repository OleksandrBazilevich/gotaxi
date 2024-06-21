import { CarIcon, LeftIcon } from "../../shared/assets/icons";
import AppLink from "../../shared/ui/AppLink/AppLink";
import ImageGallery from "../../shared/ui/ImageGallery/ImageGallery";
import Wrapper from "../../shared/ui/Wrapper/Wrapper";
import styles from "./CarDetailsPage.module.scss";

import CarImage from "../../shared/assets/img/galleryCar.png";
import Avatar from "../../shared/ui/Avatar/Avatar";
import FleetProfile from "../../entities/Fleet/ui/FleetProfile/FleetProfile";
import Hr from "../../shared/ui/Hr/Hr";
import CarCardInfo from "../../entities/Car/CarCard/ui/CarCardInfo";
import CarInfo from "../../widgets/Car/ui/CarInfo/CarInfo";
import Comment, {
  ICommentProps
} from "../../entities/Comment/ui/Comment/Comment";
import Comments from "../../entities/Comment/ui/Comments/Comments";
import CarList from "../../widgets/Car/ui/CarList/CarList";
import { ICarCardProps } from "../../entities/Car/CarCard/ui/CarCard";
import useWindowDimensions from "../../shared/lib/useWindowDimensions";

const CarDetailsPage = () => {
  const { width } = useWindowDimensions();
  const comments: ICommentProps[] = [
    {
      name: "Alexander",
      surname: "K**u",
      rating: 5,
      text: "I recently rented a 2018 Comfort class car through GoTaxi, and I was thoroughly impressed by the overall experience. The booking process was straightforward, and the staff at the fleet were very helpful in explaining all the details of the rental agreement."
    },
    {
      name: "Voitech",
      surname: "L**a",
      rating: 5,
      text: "I recently rented a 2018 Comfort class car through GoTaxi, and I was thoroughly impressed by the overall experience. The booking process was straightforward, and the staff at the fleet were very helpful in explaining all the details of the rental agreement."
    },
    {
      name: "Agniezhka",
      surname: "O**a",
      rating: 5,
      text: "I recently rented a 2018 Comfort class car through GoTaxi, and I was thoroughly impressed by the overall experience. The booking process was straightforward, and the staff at the fleet were very helpful in explaining all the details of the rental agreement."
    },
    {
      name: "Evelina",
      surname: "O**a",
      rating: 5,
      text: "I recently rented a 2018 Comfort class car through GoTaxi, and I was thoroughly impressed by the overall experience. The booking process was straightforward, and the staff at the fleet were very helpful in explaining all the details of the rental agreement."
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
  return (
    <div>
      <Wrapper cls={styles.wrapper}>
        {width > 870 && (
          <AppLink cls={styles.link} theme="gray" to={"/"}>
            <LeftIcon className={styles.icon} /> Back
          </AppLink>
        )}
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contentContainer}>
              <ImageGallery
                cls={styles.gallery}
                images={[CarImage, CarImage, CarImage, CarImage]}
              />
              <CarInfo
                conditioningType="A/C"
                consumption={14}
                gearboxType="automate"
                numberOfDoors={4}
              />
            </div>
            <div className={styles.additionalInfo}>
              <h2 className={styles.title}>
                Additional information from <span> Warsaw Car Fleet</span>
              </h2>
              <div className={styles.description}>
                Welcome to my vehicle's listing! I want to ensure you have all
                the information you need before deciding to rent this car. It's
                a 2018 model, well-maintained and perfect for both city and
                longer distance drives. <br />
                <br />
                Important Details: <br />
                &bull; The car was involved in a minor fender bender in 2019. It
                was professionally repaired, and there has been no impact on its
                performance or safety. <br />
                &bull; It comes equipped with winter tires during the colder
                months for extra safety. <br />
                &bull; Non-smoking vehicle to ensure a clean and fresh
                environment for all renters. <br />
                <br />
                I've regularly serviced this car at authorized dealers to
                maintain its excellent condition, ensuring a reliable and
                comfortable drive for you. If you have any specific questions or
                need further details, feel free to ask when you contact me.
                Happy driving!
              </div>
            </div>
            <Comments totalComments={18} comments={comments} avgRating={5} />
          </div>
        </div>
      </Wrapper>
      <div className={styles.ListContainer}>
        <h2 className={styles.ListTitle}>
          Other cars of <span>Warsaw Car Fleet</span>
        </h2>
        <CarList cars={CarsData} />
        <h2 className={styles.ListTitle}>Related cars from other fleets</h2>
        <CarList cars={CarsData} />
      </div>
    </div>
  );
};

export default CarDetailsPage;
