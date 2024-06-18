import { useState } from "react";
import AuthForm from "../../../entities/Auth/ui/Form/AuthForm";
import { useForm } from "../../../shared/lib/useForm";
import { AuthField } from "../../../features/Auth/ui/AuthField/AuthField";
import AppLink from "../../../shared/ui/AppLink/AppLink";
import { Button } from "../../../shared/ui/Button";
import Checkbox from "../../../shared/ui/Checkbox/Checkbox";
import styles from "./RegisterForm.module.scss";
import RegisterResult from "./RegisterResult";

interface FormData {
  name: string;
  address: string;
  companyPhoneNumber: string;
  supportPhoneNumber: string;
  companyEmail: string;
}

const FleetRegisterForm = () => {
  const {
    handleSubmit,
    register,
    hasErrors,
    formState: { errors }
  } = useForm<FormData>({
    name: "",
    address: "",
    companyPhoneNumber: "",
    supportPhoneNumber: "",
    companyEmail: ""
  });

  const [showResult, setShowResult] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setShowResult(true);
  };

  if (showResult) return <RegisterResult />;

  return (
    <div className={styles.authWrapper}>
      <AuthForm onSubmit={handleSubmit(onSubmit)} title="Fleet registration">
        <h3 className={styles.title}>Fleet public information</h3>
        <AuthField
          errors={errors}
          type="text"
          {...register("name", {
            required: true
          })}
          placeholder="* Fleet name"
        />
        <AuthField
          errors={errors}
          type="text"
          placeholder="* Fleet address"
          {...register("address", { required: true })}
        />
        <AuthField
          errors={errors}
          type="text"
          placeholder="* Company phone number"
          {...register("companyPhoneNumber", { required: true })}
        />
        <h3 className={styles.title}>Fleet public information</h3>
        <AuthField
          errors={errors}
          type="text"
          placeholder="* Support phone number"
          {...register("supportPhoneNumber", { required: true })}
        />
        <AuthField
          errors={errors}
          type="email"
          placeholder="* Company email"
          {...register("companyEmail", {
            required: true,
            regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
          })}
        />
        <Checkbox>
          Clicking "Continue" you accept Terms & Conditions of GoTaxi.
        </Checkbox>
        <Button fullWidth>Send</Button>
      </AuthForm>
      <div className={styles.link}>
        <span>
          Already have an account? <AppLink to={"/login"}>Log in</AppLink>
        </span>
      </div>
    </div>
  );
};

export default FleetRegisterForm;
