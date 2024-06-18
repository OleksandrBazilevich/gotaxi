import { useState } from "react";
import { Button } from "../../shared/ui/Button";
import styles from "./PrivacyPolicyPage.module.scss";
import { LeftIcon } from "../../shared/assets/icons";

const PrivacyPolicy = () => {
  const [mode, setMode] = useState<"drivers" | "business">("business");
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Privacy Policy</h3>
      <Button
        theme={mode === "drivers" ? "primary" : "default"}
        cls={styles.btn}
        onClick={() => setMode("drivers")}
      >
        Global Privacy Notice for Drivers
        <LeftIcon />
      </Button>
      <Button
        theme={mode === "business" ? "primary" : "default"}
        cls={styles.btn}
        onClick={() => setMode("business")}
      >
        Global Privacy Notice for Business <LeftIcon />
      </Button>

      {mode === "drivers" ? (
        <div>
          <h4 className={styles.contentTitle}>
            Global Privacy Notice for Drivers
          </h4>
          <p>
            GotRail Operations OÜ Company Registration Number 14552501 located
            at Vana-Lõuna tn 15, Tallinn 10134, Republic of Estonia, is the
            controller of personal data of drivers and has appointed a Data
            Protection Officer (privacy@gotrail.com).
          </p>
          <p>
            This privacy notice for drivers provides information about how
            GotRail Operations OÜ (hereinafter “GotRail”, “we”, “our”) processes
            driver’s personal data regarding transportation services via the
            GotRail platform and others. The privacy notice describes what data
            we may process, how we keep personal data safe, and what choices and
            options are available to the data subjects (hereinafter also “you”).
            You can read more information about our services on the GotRail
            website .
          </p>
          <p>
            If you use a driver app on the GotRail platform, please read its
            privacy notice as it contains important information about the
            processing of your personal data as well as information about our
            requirements and measures regarding the safety of our riders.
          </p>
          <p>
            Depending on your jurisdiction/location, certain additional clauses
            or a different privacy notice may apply. See the list at the end of
            this privacy notice for details.
          </p>
          <p>
            Please note, that our website and our apps may contain links to
            other third-party websites. If you follow a link to any of those
            third-party websites, note that these third-party websites have
            their own rules and that we do not accept any responsibility or
            liability for their policies or the processing of your personal
            data. Please check these policies before you submit any personal
            data to such third-party websites.
          </p>

          <p>
            1. Personal data we process <br /> We may process different
            categories of driver’s personal data. The data categories are as
            follows:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              General data: such as name, email, phone number, address of
              residence. Data provided by a driver in the registration
              application.
            </li>
            <li className={styles.listItem}>
              Geolocation data: such as geolocation of a driver and driving
              routes (data is gathered via GotRail system when the driver uses
              the service).
            </li>
            <li className={styles.listItem}>
              Information about devices and connection: such as IP address of
              the driver’s device, information about the usage of the services.
            </li>
            <li className={styles.listItem}>
              Driver data: such as driver’s engagement and interactions on the
              marketplace and driver ratings (including Driver Score).
            </li>
            <li className={styles.listItem}>
              Information about driver’s status: such as driver’s orders,
              earnings, and settlements.
            </li>
            <li className={styles.listItem}>
              Other information and data: data shared in questions and feedback,
              where permitted under applicable local laws and regulations.
            </li>
            <li className={styles.listItem}>
              Usage data: information about driver’s engagement with the service
              (usage rate and frequency).
            </li>
            <li className={styles.listItem}>
              Communication data: such as calls with our customer service
              agents, the date and time of the communication, and its content.
            </li>
            <li className={styles.listItem}>
              Information used for identification for transportation: such as
              your transport identification numbers, valid place of birth,
              translated/certified/international ID and/or Member State in which
              you are a resident.
            </li>
            <li className={styles.listItem}>
              Image and sound data: such as audio recordings generated during
              the trips (if you opt in for safety monitoring in-app),
              geolocation history, where such feature is available - for more
              information, please see https://gotrail.com/safety-features/. Any
              other content submitted like pictures, videos, or files in
              connection with customer support requests.
            </li>
          </ul>
          <p>
            In addition to the above-mentioned reasons, we may collect and
            resolve your data from other sources, which include:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Partner services.</li>
            <li className={styles.listItem}>
              Service providers who conduct vehicle and driver compliance
              checks, criminal and background checks.
            </li>
            <li className={styles.listItem}>
              Regulatory bodies and other public information and content in
              connection with the service (such as reviews and customer data).
            </li>
            <li className={styles.listItem}>
              Uses data from your in-app notifications in order to better handle
              in-app issues.
            </li>
          </ul>

          <p>
            2. Purpose of the processing
            <br /> We process driver’s personal data for different purposes. The
            main purposes are as follows:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              To provide, maintain, and enhance our services; process and verify
              the purposes of connecting passengers with drivers via the GotRail
              platform and the driver app.
            </li>
            <li className={styles.listItem}>
              For our service provision, geolocation, and driving data may be
              processed to analyze the geographical areas and create driving
              routes. This data allows us to plan fleet logistics better and
              optimize the services.
            </li>
            <li className={styles.listItem}>
              To enable driver engagement and ensure that we work together to
              provide a better customer and user experience for the passengers.
            </li>
            <li className={styles.listItem}>
              To carry out surveys, audits, inquiries, examinations, and
              controls aimed at improving the services.
            </li>
            <li className={styles.listItem}>
              To provide reliable feedback regarding the quality and suitability
              of a driver’s personal data for our services.
            </li>
            <li className={styles.listItem}>
              For our service provision, the GotRail app displays the driver's
              photo, name, and vehicle details for the passengers.
            </li>
            <li className={styles.listItem}>
              To enable the functionalities of the GotRail app, which includes
              connecting with third-party services.
            </li>
            <li className={styles.listItem}>
              To monitor and analyze usage and activity trends, which helps us
              to understand how people use the services and improve them
              accordingly.
            </li>
            <li className={styles.listItem}>
              For security and safety purposes, we may process driver data to
              analyze behavior and assess risks. For example, driver data can be
              used to verify a driver’s identity and conduct background checks.
            </li>
            <li className={styles.listItem}>
              To comply with our legal obligations and resolve any disputes we
              may have with any of our drivers and enforce our agreements.
            </li>
          </ul>

          <p>ADMINISTRATOR’S REQUISITES:</p>
          <p>
            LLC "GotRail Konsult" <br />
            M. K. Čiurlionio g. 79, Kaunas, 3198 <br />
            ZIP code 49435 <br />
            Bank: "NORDEA" <br />
            BIC: NDEAFIHH <br />
            Account number: 2400036700001456436845 <br />
            IBAN: FI32 5020 0400 2030 1250 03 <br />
            SWIFT code: NDEAFIHH <br />
            Tel: +372 5555 5555 <br />
            Email: gotrail@gotrail.com <br />
          </p>
          <p>Posted on May 19, 2024</p>
        </div>
      ) : (
        <div>
          <h4 className={styles.contentTitle}>
            Global Privacy Notice for Business
          </h4>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
