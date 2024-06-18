import { FC } from "react";

import styles from "./AuthField.module.scss";
import Field, { IField } from "../../../../shared/ui/Field/Field";
import { classNames } from "../../../../shared/lib";
import { Errors } from "../../../../shared/lib/useForm";

interface IAuthField extends IField {
  name: string;
  errors: Errors;
}

export const AuthField: FC<IAuthField> = ({
  errors,
  name,
  placeholder,
  ...rest
}) => {
  const error = errors[name];
  return (
    <div className={classNames(styles.AuthField, {}, [])}>
      <Field
        name={name}
        placeholder={placeholder}
        className={styles.field}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
