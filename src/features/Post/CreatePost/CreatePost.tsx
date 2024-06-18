import { useState } from "react";
import styles from "./CreatePost.module.scss";
import { Button } from "../../../shared/ui/Button";
import { MoreIcon } from "../../../shared/assets/icons";
import Modal from "../../../shared/ui/Modal/Modal";
import Select from "react-select";
import AppSelect, { Option } from "../../../shared/ui/AppSelect/AppSelect";
import FileInput from "../../../shared/ui/FileInput/FileInput";
import useWindowDimensions from "../../../shared/lib/useWindowDimensions";
import { classNames } from "../../../shared/lib";
import Plan from "../../../entities/Plan/Plan";

const CreatePost = () => {
  const options: Option[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFiles([...files, event.target.files[0]]);
    }
  };

  const { width } = useWindowDimensions();

  const [files, setFiles] = useState<File[] | []>([]);

  return (
    <>
      <Button
        cls={styles.addNew}
        onClick={() => setIsOpen(true)}
        theme="primary"
      >
        <MoreIcon /> Add new
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h4 className={styles.title}>Create post</h4>
        <p className={styles.description}>
          Create a post and drivers will see it immediately after moderation.
          Drivers who likes your proposition will leave a request for
          reservation.
        </p>

        <div className={styles.contentWrapper}>
          <Plan showPlan={showPlan} />
          {(width > 630 || (!showPlan && width < 630)) && (
            <>
              <div className={styles.wrapper}>
                <p className={styles.subtitle}>Car details</p>
                <div className={styles.container}>
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Car brand"
                  />
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Model"
                  />
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Year"
                  />
                </div>
                <div className={styles.container}>
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Business"
                  />
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Transmission"
                  />
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Fuel type"
                  />
                </div>
              </div>
              <p className={styles.subtitle}>Car details</p>
              <div className={styles.container}>
                <FileInput
                  cls={styles.fileInput}
                  file={files[0]}
                  onChange={handleFileChange}
                />
                <FileInput
                  cls={styles.fileInput}
                  file={files[1]}
                  onChange={handleFileChange}
                />
                <FileInput
                  cls={styles.fileInput}
                  file={files[2]}
                  onChange={handleFileChange}
                />
                <FileInput
                  cls={styles.fileInput}
                  file={files[3]}
                  onChange={handleFileChange}
                />
              </div>
              <div className={styles.wrapper}>
                <p className={styles.subtitle}>Taxifleet conditions</p>
                <div className={styles.container}>
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="5%"
                  />
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Deposit"
                  />
                  <div className={styles.selectContainer}>
                    <AppSelect
                      fullwidth
                      onChange={setSelectedOption}
                      options={options}
                      placeholder="No daily deposit"
                    />
                    <p className={styles.selectDescription}>
                      * If deposit is comulative, please, type in the amount of
                      daily payment.
                    </p>
                  </div>
                </div>
                <div className={styles.container}>
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Working days"
                  />
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Weekends"
                  />
                  <AppSelect
                    cls={styles.selectItem}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="$ per day"
                  />
                </div>
              </div>
              <Button
                onClick={() => setShowPlan(true)}
                cls={styles.btn}
                theme="primaryOutlined"
              >
                Create post and send to moderation
              </Button>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CreatePost;
