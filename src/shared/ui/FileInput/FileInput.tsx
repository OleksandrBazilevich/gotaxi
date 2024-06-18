import { FC } from "react";
import { UploadIcon } from "../../assets/icons";
import styles from "./FileInput.module.scss";
import { classNames } from "../../lib";

interface IFileInputProps {
  file: File | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cls?: string;
}

const FileInput: FC<IFileInputProps> = ({ file, onChange, cls = "" }) => {
  return (
    <label className={classNames(styles.upload, {}, [cls])} htmlFor="fileInput">
      <input id="fileInput" onChange={onChange} type="file" />
      <UploadIcon className={styles.icon} />
      {file ? file.name : "Upload file"}
    </label>
  );
};

export default FileInput;
