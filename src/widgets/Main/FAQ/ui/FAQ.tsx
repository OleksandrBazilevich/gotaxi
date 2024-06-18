import { FC } from "react";
import Accordeon from "../../../../shared/ui/Accordeon/Accordeon";
import AccordeonItem, {
  IAccordeonData,
  IAccordeonItemProps
} from "../../../../shared/ui/Accordeon/AccordeonItem";
import styles from "./FAQ.module.scss";

interface IFaqProps {
  questions: IAccordeonData[];
  title?: string;
  description?: string;
  cls?: string;
  maxWidth?: number | 'none';
}

const FAQ: FC<IFaqProps> = ({
  questions,
  description,
  title,
  cls = "",
  maxWidth = 867
}) => {
  return (
    <div style={{ maxWidth }} className={styles.faq}>
      {title && (
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
      <Accordeon cls={cls}>
        {questions.map((question) => (
          <AccordeonItem title={question.title} key={question.title}>
            {question.content}
          </AccordeonItem>
        ))}
      </Accordeon>
    </div>
  );
};

export default FAQ;
