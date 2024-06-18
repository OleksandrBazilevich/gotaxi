import { useForm } from "../../../shared/lib/useForm";
import { AuthField } from "../../../features/Auth/ui/AuthField/AuthField";
import AppLink from "../../../shared/ui/AppLink/AppLink";
import { Button } from "../../../shared/ui/Button";

import AuthForm from "../../../entities/Auth/ui/Form/AuthForm";
import styles from "./RegisterForm.module.scss";
import Checkbox from "../../../shared/ui/Checkbox/Checkbox";
import { classNames } from "../../../shared/lib";
import { useState } from "react";
import OtpInput from "../../../shared/ui/OtpInputs/OptInputs";
import { UploadIcon } from "../../../shared/assets/icons/index";
import RegisterResult from "./RegisterResult";
import FileInput from "../../../shared/ui/FileInput/FileInput";

interface FormData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  phoneNumber: string;
}

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    hasErrors,
    formState: { errors }
  } = useForm<FormData>({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    phoneNumber: ""
  });

  const onSubmit = (data: FormData) => {
    const formData = { ...data, licensePhoto };
    console.log(formData);
    setCurrentStep(currentStep + 1);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLicensePhoto(event.target.files[0]);
    }
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [licensePhoto, setLicensePhoto] = useState<File | null>(null);

  if (currentStep === 3) return <RegisterResult />;

  return (
    <>
      <div className={styles.authWrapper}>
        <AuthForm onSubmit={handleSubmit(onSubmit)} title="Registration">
          <div className={styles.stepsWrapper}>
            <div
              className={classNames(styles.step, {
                [styles.passed]: currentStep >= 1
              })}
            >
              <span>Step 1</span>
            </div>
            <div
              className={classNames(styles.step, {
                [styles.passed]: currentStep >= 2
              })}
            >
              <span>Step 2</span>
            </div>
            <div
              className={classNames(styles.step, {
                [styles.passed]: currentStep >= 3
              })}
            >
              <span>Step 3</span>
            </div>
          </div>
          {currentStep === 1 && (
            <>
              <AuthField
                errors={errors}
                type="name"
                {...register("name", {
                  required: true
                })}
                placeholder="Name"
              />
              <AuthField
                errors={errors}
                type="email"
                {...register("email", {
                  required: true,
                  regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
                })}
                placeholder="Email"
              />
              <AuthField
                errors={errors}
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <AuthField
                errors={errors}
                type="password"
                placeholder="Repeat password"
                {...register("repeatPassword", {
                  required: true,
                  validate: (val: string) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  }
                })}
              />
              <Checkbox>
                Clicking "Continue" you accept Terms & Conditions of GoTaxi.
              </Checkbox>
            </>
          )}

          {currentStep === 2 && (
            <>
              <AuthField
                errors={errors}
                type="text"
                placeholder="Enter your phone number"
                {...register("phoneNumber", { required: true })}
              />
              <div>
                <h3 className={styles.title}>Code from SMS</h3>
                <OtpInput />
              </div>

              <FileInput file={licensePhoto} onChange={handleFileChange} />
            </>
          )}

          <Button
            onClick={() =>
              currentStep === 2
                ? handleSubmit(onSubmit)
                : setCurrentStep(currentStep + 1)
            }
            fullWidth
          >
            Continue
          </Button>
        </AuthForm>
        <div className={styles.link}>
          <span>
            Dont have an account? <AppLink to={"/login"}>Sign up</AppLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
