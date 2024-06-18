import React, { useState } from "react";
import CarSlider from "../../../../features/Car/ui/CarSlider/CarSlider";
import styles from "./CarProfitCalculator.module.scss";

const CarProfitCalculator: React.FC = () => {
  const [carClass, setCarClass] = useState<number>(0);
  const [fuelType, setFuelType] = useState<number>(0);
  const [fuelConsumption, setFuelConsumption] = useState<number>(2);
  const [ordersPerDay, setOrdersPerDay] = useState<number>(1);
  const [workingDaysPerWeek, setWorkingDaysPerWeek] = useState<number>(2);
  const [amountOfCars, setAmountOfCars] = useState<number>(3);

  const calculateProfit = (): number => {
    const revenuePerOrder = carClass === 0 ? 50 : 100;
    const fuelCostPer100km = fuelType === 0 ? 5 : 6;
    const distancePerOrder = 20;

    const totalRevenue =
      revenuePerOrder * ordersPerDay * workingDaysPerWeek * amountOfCars;
    const totalFuelCost =
      fuelCostPer100km *
      (fuelConsumption / 100) *
      distancePerOrder *
      ordersPerDay *
      workingDaysPerWeek *
      amountOfCars;

    return totalRevenue - totalFuelCost;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <CarSlider
          cls={styles.sliderShort}
          title="Car class"
          min={0}
          max={1}
          maxLabel="Business"
          minLabel="Comfort"
          value={carClass}
          onChange={(e) => setCarClass(Number(e.target.value))}
        />
        <CarSlider
          cls={styles.sliderShort}
          title="Fuel"
          min={0}
          max={1}
          maxLabel="Diesel"
          minLabel="Gas"
          value={fuelType}
          onChange={(e) => setFuelType(Number(e.target.value))}
        />
      </div>
      <CarSlider
        cls={styles.slider}
        title="Fuel consumption per 100 km."
        min={2}
        max={20}
        value={fuelConsumption}
        onChange={(e) => setFuelConsumption(Number(e.target.value))}
      />
      <CarSlider
        cls={styles.slider}
        title="Amount of orders per day"
        min={1}
        max={30}
        value={ordersPerDay}
        onChange={(e) => setOrdersPerDay(Number(e.target.value))}
      />
      <CarSlider
        cls={styles.slider}
        title="Working days per week"
        min={2}
        max={7}
        value={workingDaysPerWeek}
        onChange={(e) => setWorkingDaysPerWeek(Number(e.target.value))}
      />
      <CarSlider
        cls={styles.slider}
        title="Amount of cars"
        min={3}
        max={10}
        value={amountOfCars}
        onChange={(e) => setAmountOfCars(Number(e.target.value))}
      />

      <div className={styles.profit}>
        <h3>${calculateProfit().toLocaleString("uk-UA")}</h3>
        <p>Net profit taking into account CC commission and maintenance.</p>
      </div>
    </div>
  );
};

export default CarProfitCalculator;
