import { FC } from "react";
import style from "./Hr.module.scss";
import { classNames } from "../../lib";

interface IHrProps {
  cls?: string;
}

const Hr: FC<IHrProps> = ({ cls = "" }) => {
  return <hr className={classNames(style.hr, {}, [cls])} />;
};

export default Hr;
