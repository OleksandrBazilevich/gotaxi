import React, { ChangeEvent, useState } from "react";
import { MapIcon, SearchIcon } from "../../shared/assets/icons";
import { Button } from "../../shared/ui/Button";
import { Field } from "../../shared/ui/Field";
import DashboardWrapper from "../../widgets/Dashboard/Wrapper/ui/DashboardWrapper";
import styles from "./CalendarPage.module.scss";
import { Scheduler } from "../../widgets/Sсheduler";

export interface Event {
  car: {
    name: string;
    numberPlate: string;
  };
  id: string;
  title: string;
  time: string;
  startDate: string;
  endDate: string;
  color: string;
}

const events: Event[] = [
  {
    car: {
      name: "Toyota Camry",
      numberPlate: "P0665CS"
    },
    id: "1",
    title: "Alexander Karu",
    time: "16:30",
    startDate: "2024-06-02",
    endDate: "2024-06-21",
    color: "#E1B1CB"
  },
  {
    car: {
      name: "Toyota Camry",
      numberPlate: "P0665CS"
    },
    id: "2",
    title: "Alexander Karu",
    time: "16:30",
    startDate: "2024-06-01",
    endDate: "2024-06-12",
    color: "#B1E1BC"
  },
  {
    car: {
      name: "Kia Optima",
      numberPlate: "P0665CS"
    },
    id: "3",
    title: "Alexander Karu",
    time: "16:30",
    startDate: "2024-06-01",
    endDate: "2024-07-07",
    color: "#B1BCE1"
  },
  {
    car: {
      name: "Toyota Camry",
      numberPlate: "P0665CS"
    },
    id: "4",
    title: "Alexander Karu",
    time: "16:30",
    startDate: "2024-06-06",
    endDate: "2024-06-29",
    color: "#C4B1E1"
  }
];

const CalendarPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    const filtered = events.filter((event) =>
      event.car.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Calendar</h3>
      <div className={styles.container}>
        <div className={styles.side}>
          <Button cls={styles.btn} theme="primaryOutlined">
            <MapIcon className={styles.icon} /> Filter
          </Button>
          <Field
            cls={styles.search}
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            Icon={SearchIcon}
            iconPosition="end"
          />
          <div>
            {filteredEvents.map((event) => (
              <div key={event.id} className={styles.listItem}>
                {event.car.name}
                <span>{event.car.numberPlate}</span>
              </div>
            ))}
          </div>
        </div>

        <Scheduler minRowsNumber={8} events={filteredEvents} />
      </div>
    </div>
  );
};

export default CalendarPage;
